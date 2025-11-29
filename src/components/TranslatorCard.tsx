"use client";
import React, { useState, useCallback } from "react";
import {
	ArrowRightLeft,
	Volume2,
	Sparkles,
	Loader2,
	Copy,
	Check,
} from "lucide-react";
import { Button } from "./Button";

enum Language {
	ENGLISH = "en",
	FRENCH = "fr",
}

interface TranslationResult {
	original: string;
	translation: string;
	emoji: string;
	funFact: string;
	pronunciation: string;
}

export const TranslatorCard: React.FC = () => {
	const [input, setInput] = useState("");
	const [sourceLang, setSourceLang] = useState<Language>(Language.ENGLISH);
	const [result, setResult] = useState<TranslationResult | null>(null);
	const [loading, setLoading] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleTranslate = async () => {
		if (!input.trim()) return;
		setLoading(true);
		setResult(null);

		const targetLang =
			sourceLang === Language.ENGLISH ? Language.FRENCH : Language.ENGLISH;

		const data = {
			text: input,
			language: `${sourceLang}-${targetLang}`,
		};

		console.log("Data to be sent to API:", data);
		const res = await fetch("/api/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			credentials: "include",
		});

		const dataResponse = await res.json();
		const simulatedResponse: TranslationResult = {
			original: dataResponse?.original_text,
			translation: dataResponse?.translated_text,
			emoji: dataResponse?.source_language === "en" ? "🇫🇷" : "🇬🇧",
			funFact:
				dataResponse?.source_language === "en"
					? "French is spoken in 29 countries!"
					: "English is the most widely spoken language worldwide!",
			pronunciation: dataResponse?.source_language,
		};

		setTimeout(() => {
			setResult(simulatedResponse);
			setLoading(false);
		}, 1000);
	};

	const toggleLanguage = () => {
		setSourceLang((prev) =>
			prev === Language.ENGLISH ? Language.FRENCH : Language.ENGLISH
		);
		setInput("");
		setResult(null);
	};

	const playAudio = useCallback((text: string, lang: Language) => {
		if ("speechSynthesis" in window) {
			const utterance = new SpeechSynthesisUtterance(text);
			utterance.lang = lang === Language.FRENCH ? "fr-FR" : "en-US";
			utterance.rate = 0.9;
			window.speechSynthesis.speak(utterance);
		} else {
			console.log("Speech synthesis not supported in this browser.");
		}
	}, []);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="bg-white rounded-[4rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border-8 border-[#60A5FA]/10 w-full max-w-3xl mx-auto relative overflow-hidden ring-8 ring-[#FBBF24]/20">
			<div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FBBF24]/30 rounded-full blur-3xl pointer-events-none animate-wobble" />
			<div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F87171]/10 rounded-full blur-2xl pointer-events-none" />

			<div className="relative z-10 flex flex-col gap-8">
				<div className="flex items-center justify-between bg-[#FFFBEB] p-3 rounded-full border-4 border-orange-200 max-w-md mx-auto w-full shadow-inner">
					<div
						className={`flex-1 text-center py-4 px-4 rounded-full font-bold transition-all duration-300 cursor-default ${
							sourceLang === Language.ENGLISH
								? "bg-[#60A5FA] text-white shadow-xl ring-4 ring-white transform scale-105"
								: "text-gray-500 hover:text-gray-700"
						}`}
					>
						🇬🇧 English
					</div>
					<button
						onClick={toggleLanguage}
						className="mx-2 p-4 bg-white rounded-full hover:bg-[#FFFBEB] text-[#60A5FA] border-4 border-[#FBBF24]/30 transition-all hover:rotate-360 shadow-lg"
					>
						<ArrowRightLeft size={24} />
					</button>
					<div
						className={`flex-1 text-center py-4 px-4 rounded-full font-bold transition-all duration-300 cursor-default ${
							sourceLang === Language.FRENCH
								? "bg-[#F87171] text-white shadow-xl ring-4 ring-white transform scale-105"
								: "text-gray-500 hover:text-gray-700"
						}`}
					>
						🇫🇷 French
					</div>
				</div>
				<div className="relative group">
					<textarea
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder={
							sourceLang === Language.ENGLISH
								? "Type a word here... (e.g., Cat, Hello)"
								: "Écrivez un mot ici... (ex. Chat, Bonjour)"
						}
						className="w-full h-48 p-10 rounded-[3rem] bg-gray-50 border-4 border-gray-100 focus:border-[#34D399] focus:bg-white transition-all resize-none text-3xl font-bold text-gray-800 outline-none placeholder:text-gray-400 placeholder:font-medium shadow-[0_5px_15px_rgba(0,0,0,0.05)_inset]"
					/>
					<div className="absolute bottom-8 right-8 text-gray-400 animate-pulse text-3xl">
						✏️
					</div>
				</div>
				<Button
					onClick={handleTranslate}
					disabled={loading || !input.trim()}
					size="lg"
					className="w-full text-2xl py-6 shadow-2xl border-b-8 border-[#60A5FA]/70 active:translate-y-1.5 active:shadow-none bg-[#60A5FA] hover:bg-[#608DFF]"
				>
					{loading ? (
						<>
							<Loader2 className="animate-spin w-6 h-6" /> Thinking...
						</>
					) : (
						<>
							<Sparkles className="w-6 h-6" /> Translate Now!
						</>
					)}
				</Button>
				{result && (
					<div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
						<div className="mt-4 bg-linear-to-br from-[#FBBF24] to-[#F87171]/20 rounded-[3rem] p-10 border-8 border-[#FBBF24]/50 relative shadow-[0_15px_30px_rgba(255,192,0,0.3)]">
							<div className="flex flex-col gap-6">
								<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-center md:text-left">
									<div className="flex-1">
										<span className="text-lg font-black text-[#F87171] uppercase tracking-widest mb-2 block animate-pulse">
											Your new word!
										</span>
										<h3 className="text-7xl md:text-8xl font-display font-bold text-gray-800 wrap-break-word leading-tight">
											{result.translation}{" "}
											<span className="inline-block hover:animate-bounce cursor-default text-7xl">
												{result.emoji}
											</span>
										</h3>
									</div>

									<div className="flex items-center gap-4">
										<button
											onClick={() =>
												playAudio(
													result.translation,
													sourceLang === Language.ENGLISH
														? Language.FRENCH
														: Language.ENGLISH
												)
											}
											className="p-5 bg-[#60A5FA] rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-white/50"
											title="Listen"
										>
											<Volume2 size={36} />
										</button>
										<button
											onClick={() => copyToClipboard(result.translation)}
											className="p-5 bg-[#34D399] rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-white/50"
											title="Copy"
										>
											{copied ? <Check size={36} /> : <Copy size={36} />}
										</button>
									</div>
								</div>

								<div className="h-1 w-full bg-[#F87171]/30 rounded-full" />

								<div className="bg-white rounded-[2rem] p-6 border-4 border-[#34D399]/30 shadow-lg">
									<div className="flex items-center gap-2 mb-2">
										<span className="bg-kid-purple text-black text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase shadow-md">
											FUN FACT
										</span>
										<Sparkles className="text-kid-purple w-5 h-5" />
									</div>
									<p className="text-gray-700 font-medium text-xl leading-relaxed">
										{result.funFact}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
