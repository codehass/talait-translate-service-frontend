"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/src/components/Navbar";
import { TranslatorCard } from "@/src/components/TranslatorCard";

export default function TranslationPage() {
	const router = useRouter();

	const handleBackToHome = () => {
		router.push("/");
	};

	return (
		<div className="min-h-screen bg-kid-blue/5">
			<Navbar onStart={() => {}} hideCta />

			<main className="container mx-auto px-4 pt-28 pb-20">
				<button
					onClick={handleBackToHome}
					className="group flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-kid-blue transition-colors pl-4"
				>
					<div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
						<ArrowLeft size={20} />
					</div>
					Back to Home
				</button>

				<div className="grid lg:grid-cols-1 gap-8 justify-center">
					<div className="text-center mb-6">
						<h1 className="text-4xl font-display font-bold text-blue-900 mb-2">
							Magic Translator
						</h1>
						<p className="text-gray-600 text-lg">
							Type a word below and watch the magic happen!
						</p>
					</div>

					<TranslatorCard />
				</div>

				{/* Decor */}
				<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent -z-10 pointer-events-none" />
			</main>
		</div>
	);
}
