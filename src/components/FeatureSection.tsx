import React from "react";
import { Mic, BookOpen, Smile } from "lucide-react";

const features = [
	{
		icon: <Mic className="w-8 h-8 text-white" />,
		title: "Say It Out Loud",
		description:
			"Listen to how words sound. Practice saying them until you sound like a local!",
		color: "bg-kid-red",
		shadow: "shadow-red-200",
		rotate: "-rotate-2",
	},
	{
		icon: <BookOpen className="w-8 h-8 text-white" />,
		title: "Learn New Words",
		description:
			"Build your vocabulary with fun examples and cool emojis for every word.",
		color: "bg-kid-blue",
		shadow: "shadow-blue-200",
		rotate: "rotate-2",
	},
	{
		icon: <Smile className="w-8 h-8 text-white" />,
		title: "Have Fun!",
		description:
			"Learning is a game! Discover fun facts about French and English culture.",
		color: "bg-kid-green",
		shadow: "shadow-emerald-200",
		rotate: "-rotate-1",
	},
];

export const FeatureSection: React.FC = () => {
	return (
		<section className="py-24 relative overflow-hidden bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900 mb-6">
						Learning is a{" "}
						<span className="text-kid-red underline decoration-wavy decoration-kid-yellow underline-offset-4">
							Super Power!
						</span>
					</h2>
					<p className="text-xl text-gray-600">
						KidLingo makes it easy to explore a new world of words.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 relative z-10">
					{features.map((feature, idx) => (
						<div
							key={idx}
							className={`bg-white rounded-[2.5rem] p-8 border-4 border-gray-50 hover:-translate-y-2 transition-transform duration-300 transform ${feature.rotate} hover:rotate-0 hover:shadow-xl`}
						>
							<div
								className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3`}
							>
								{feature.icon}
							</div>
							<h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
								{feature.title}
							</h3>
							<p className="text-gray-500 font-medium leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
