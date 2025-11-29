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

		// ✅ LOGIC FOR CONSOLE LOGGING INSTEAD OF API CALL
		console.log("--- Translation Request ---");
		console.log(`Source Language: ${sourceLang}`);
		console.log(`Target Language: ${targetLang}`);
		console.log(`Input Text: "${input}"`);
		console.log("---------------------------");

		// --- Simulate API Response (Local Data) ---
		const simulatedResponse: TranslationResult = {
			original: input,
			translation: sourceLang === Language.ENGLISH ? "Bonjour" : "Hello",
			emoji: sourceLang === Language.ENGLISH ? "👋" : "👋",
			funFact:
				sourceLang === Language.ENGLISH
					? "French is spoken in 29 countries!"
					: "English is the most widely spoken language worldwide!",
			pronunciation: sourceLang === Language.ENGLISH ? "bohn-zhoor" : "hello",
		};
		// ------------------------------------------

		// Simulate Network Latency
		setTimeout(() => {
			setResult(simulatedResponse);
			setLoading(false);
		}, 1000); // 1 second delay for demonstration
	};

	const toggleLanguage = () => {
		setSourceLang((prev) =>
			prev === Language.ENGLISH ? Language.FRENCH : Language.ENGLISH
		);
		setInput("");
		setResult(null);
	};

	const playAudio = useCallback((text: string, lang: Language) => {
		// Check if the SpeechSynthesis API is available
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
		<div className="bg-white rounded-[4rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border-8 border-kid-blue/10 w-full max-w-3xl mx-auto relative overflow-hidden ring-8 ring-kid-yellow/20">
			{/* Decorative Blobs... (styles kept as is) */}
			<div className="absolute -top-20 -right-20 w-80 h-80 bg-kid-yellow/30 rounded-full blur-3xl pointer-events-none animate-wobble" />
			<div className="absolute bottom-0 left-0 w-60 h-60 bg-kid-red/10 rounded-full blur-2xl pointer-events-none" />

			<div className="relative z-10 flex flex-col gap-8">
				{/* Language Toggle... (JSX kept as is) */}
				<div className="flex items-center justify-between bg-kid-cream p-3 rounded-full border-4 border-orange-200 max-w-md mx-auto w-full shadow-inner">
					<div
						className={`flex-1 text-center py-4 px-4 rounded-full font-bold transition-all duration-300 cursor-default ${
							sourceLang === Language.ENGLISH
								? "bg-kid-blue text-white shadow-xl ring-4 ring-white transform scale-105"
								: "text-gray-500 hover:text-gray-700"
						}`}
					>
						🇬🇧 English
					</div>
					<button
						onClick={toggleLanguage}
						className="mx-2 p-4 bg-white rounded-full hover:bg-kid-cream text-kid-blue border-4 border-kid-yellow/30 transition-all hover:rotate-[360deg] shadow-lg"
					>
						<ArrowRightLeft size={24} />
					</button>
					<div
						className={`flex-1 text-center py-4 px-4 rounded-full font-bold transition-all duration-300 cursor-default ${
							sourceLang === Language.FRENCH
								? "bg-kid-red text-white shadow-xl ring-4 ring-white transform scale-105"
								: "text-gray-500 hover:text-gray-700"
						}`}
					>
						🇫🇷 French
					</div>
				</div>

				{/* Input Area */}
				<div className="relative group">
					<textarea
						// ✅ Make it a controlled component
						value={input}
						onChange={(e) => setInput(e.target.value)}
						// ... (rest of props)
						placeholder={
							sourceLang === Language.ENGLISH
								? "Type a word here... (e.g., Cat, Hello)"
								: "Écrivez un mot ici... (ex. Chat, Bonjour)"
						}
						className="w-full h-48 p-10 rounded-[3rem] bg-gray-50 border-4 border-gray-100 focus:border-kid-green focus:bg-white transition-all resize-none text-3xl font-bold text-gray-800 outline-none placeholder:text-gray-400 placeholder:font-medium shadow-[0_5px_15px_rgba(0,0,0,0.05)_inset]"
					/>
					<div className="absolute bottom-8 right-8 text-gray-400 animate-pulse text-3xl">
						✏️
					</div>
				</div>

				{/* Action Button */}
				<Button
					onClick={handleTranslate}
					disabled={loading || !input.trim()} // Use input.trim() for disabling
					size="lg"
					className="w-full text-2xl py-6 shadow-2xl border-b-8 border-kid-blue/70 active:translate-y-[6px] active:shadow-none bg-kid-blue hover:bg-[#608DFF]"
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

				{/* Result Card... (JSX kept as is) */}
				{result && (
					<div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
						<div className="mt-4 bg-gradient-to-br from-kid-yellow to-kid-red/20 rounded-[3rem] p-10 border-8 border-kid-yellow/50 relative shadow-[0_15px_30px_rgba(255,192,0,0.3)]">
							<div className="flex flex-col gap-6">
								{/* Main Translation */}
								<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-center md:text-left">
									<div className="flex-1">
										<span className="text-lg font-black text-kid-red uppercase tracking-widest mb-2 block animate-pulse">
											Ta-da! Your new word!
										</span>
										<h3 className="text-7xl md:text-8xl font-display font-bold text-gray-800 break-words leading-tight">
											{result.translation}{" "}
											<span className="inline-block hover:animate-bounce cursor-default text-7xl">
												{result.emoji}
											</span>
										</h3>
										<p className="text-gray-600 font-sans mt-2 text-2xl font-medium">
											/{result.pronunciation}/
										</p>
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
											className="p-5 bg-kid-blue rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-white/50"
											title="Listen"
										>
											<Volume2 size={36} />
										</button>
										<button
											onClick={() => copyToClipboard(result.translation)}
											className="p-5 bg-kid-green rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all border-4 border-white/50"
											title="Copy"
										>
											{copied ? <Check size={36} /> : <Copy size={36} />}
										</button>
									</div>
								</div>

								<div className="h-1 w-full bg-kid-red/30 rounded-full" />

								{/* Fun Fact */}
								<div className="bg-white rounded-[2rem] p-6 border-4 border-kid-green/30 shadow-lg">
									<div className="flex items-center gap-2 mb-2">
										<span className="bg-kid-purple text-white text-sm font-black px-4 py-1.5 rounded-full tracking-wider uppercase shadow-md">
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
