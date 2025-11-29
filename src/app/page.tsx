"use client";

import React, { useState } from "react";

import { TranslationPage } from "../components/TranslationPage";
import { Footer } from "../components/Footer";
import { LandingPage } from "../components/LandingPage";

export type PageView = "landing" | "translator";

const App: React.FC = () => {
	const [currentView, setCurrentView] = useState<PageView>("landing");

	const navigateToTranslator = () => {
		setCurrentView("translator");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const navigateToHome = () => {
		setCurrentView("landing");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen font-sans overflow-x-hidden selection:bg-kid-yellow selection:text-amber-900 bg-kid-cream flex flex-col">
			<div className="flex-grow">
				{currentView === "landing" ? (
					<LandingPage onStart={navigateToTranslator} />
				) : (
					<TranslationPage onBack={navigateToHome} />
				)}
			</div>
			<Footer />
		</div>
	);
};

export default App;
