"use client";

import React from "react";
import { Button } from "./Button";
import { FeatureSection } from "./FeatureSection";
import { HowItWorks } from "./HowItWorks";
import { Navbar } from "./Navbar";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export const LandingPage = () => {
	const router = useRouter();
	return (
		<div className="bg-kid-cream">
			<Navbar />
			<section className="relative pt-32 pb-20 px-4 overflow-hidden">
				<div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
					{/* Text Content */}
					<div className="text-center lg:text-left space-y-6">
						<div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md border-2 border-kid-blue/20 animate-bounce duration-[2000ms]">
							<span className="text-2xl">🚀</span>
							<span className="font-bold text-kid-blue text-lg">
								Ready, Set, Translate!
							</span>
						</div>

						<h1 className="text-6xl lg:text-8xl font-display font-bold text-blue-950 leading-[1.1] drop-shadow-sm">
							Speak Like a <br />
							<span className="text-kid-red relative inline-block transform -rotate-2">
								Superstar!
								<svg
									className="absolute w-full h-4 -bottom-2 left-0 text-kid-yellow z-[-1]"
									viewBox="0 0 100 10"
									preserveAspectRatio="none"
								>
									<path
										d="M0 5 Q 50 15 100 5"
										stroke="currentColor"
										strokeWidth="12"
										fill="none"
									/>
								</svg>
							</span>
						</h1>

						<p className="text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
							The magical tool that helps you talk to new friends in French and
							English. It&apos;s fast, fun, and easy!
						</p>

						<div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
							<Button
								onClick={() => router.push("translate")}
								size="lg"
								className="text-2xl px-10 py-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-kid-yellow text-amber-900 border-b-8 border-amber-500 active:border-b-0 active:translate-y-2"
							>
								Start Adventure <ArrowRight className="inline ml-2 w-8 h-8" />
							</Button>
						</div>
					</div>

					{/* Visual Content */}
					<div className="relative h-[500px] w-full flex items-center justify-center">
						{/* Main Circle */}
						<div className="absolute w-[400px] h-[400px] bg-white rounded-full border-[12px] border-kid-blue/20 flex items-center justify-center animate-spin-slow shadow-2xl overflow-hidden">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#FDE68A,transparent)]" />
						</div>

						{/* Floating Elements */}
						<div className="absolute top-10 right-10 lg:right-20 bg-white p-6 rounded-3xl shadow-xl border-b-8 border-kid-green rotate-12 hover:rotate-6 transition-transform cursor-default z-20">
							<span className="text-6xl">🐶</span>
							<div className="text-center font-bold text-gray-500 mt-2">
								Dog
							</div>
						</div>

						<div className="absolute bottom-20 left-10 lg:left-0 bg-white p-6 rounded-3xl shadow-xl border-b-8 border-kid-red -rotate-12 hover:-rotate-6 transition-transform cursor-default z-20">
							<span className="text-6xl">🐱</span>
							<div className="text-center font-bold text-gray-500 mt-2">
								Chat
							</div>
						</div>

						{/* Speech Bubble */}
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-kid-blue text-white p-8 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl shadow-xl z-30 max-w-[280px] text-center">
							<Sparkles
								className="absolute -top-6 -right-6 text-kid-yellow w-12 h-12 animate-pulse"
								fill="currentColor"
							/>
							<p className="font-display font-bold text-3xl">Bonjour! 👋</p>
							<p className="font-sans text-lg opacity-90">That means Hello!</p>
							<div className="absolute -bottom-4 right-0 w-8 h-8 bg-kid-blue transform rotate-45"></div>
						</div>
					</div>
				</div>

				{/* Background blobs */}
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kid-yellow/10 rounded-full blur-[100px] -z-10" />
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-kid-blue/10 rounded-full blur-[100px] -z-10" />
			</section>

			<HowItWorks />

			<div className="relative">
				{/* Wavy divider */}
				<svg
					className="absolute top-0 left-0 w-full h-16 -mt-15 text-white z-10"
					preserveAspectRatio="none"
					viewBox="0 0 1440 54"
				>
					<path
						fill="#FFFFFF"
						d="M0 22L120 16.7C240 11.3 480 0.7 720 0.7C960 0.7 1200 11.3 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
					></path>
				</svg>
				<div className="bg-white">
					<FeatureSection />
				</div>
			</div>

			{/* Fun Call to Action Bottom */}
			<section className="py-20 bg-kid-cream relative overflow-hidden text-center">
				<div className="container mx-auto px-4 relative z-10">
					<h2 className="text-4xl md:text-5xl font-display font-bold text-kid-blue mb-8">
						Ready to try it yourself?
					</h2>
					<Button
						onClick={() => router.push("/translate")}
						size="lg"
						variant="accent"
						className="text-2xl px-12 py-6 shadow-xl hover:shadow-2xl hover:scale-105 border-b-8 border-amber-600 active:border-b-0 active:translate-y-2"
					>
						Open Translator 📖
					</Button>
				</div>
				<div className="absolute left-10 top-10 text-6xl opacity-20 rotate-12">
					🍎
				</div>
				<div className="absolute right-10 bottom-10 text-6xl opacity-20 -rotate-12">
					🚲
				</div>
			</section>
		</div>
	);
};
