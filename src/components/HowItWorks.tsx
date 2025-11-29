import React from "react";
import { Keyboard, ArrowRightLeft, Ear } from "lucide-react";

const steps = [
	{
		icon: <Keyboard className="w-10 h-10 text-white" />,
		title: "Type a Word",
		desc: "Write any word you want to know.",
		color: "bg-[#60A5FA]",
		number: "1",
	},
	{
		icon: <ArrowRightLeft className="w-10 h-10 text-white" />,
		title: "Magic Swap",
		desc: "We change it to French or English.",
		color: "bg-[#F87171]",
		number: "2",
	},
	{
		icon: <Ear className="w-10 h-10 text-white" />,
		title: "Listen & Learn",
		desc: "Hear how it sounds and say it!",
		color: "bg-[#FBBF24]",
		number: "3",
	},
];

export const HowItWorks: React.FC = () => {
	return (
		<section className="py-20 relative bg-[#FFFBEB]">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<span className="inline-block py-2 px-4 rounded-full bg-orange-100 text-orange-600 font-bold text-sm mb-4 tracking-wider uppercase">
						Easy Peasy
					</span>
					<h2 className="text-4xl md:text-5xl font-display font-bold text-blue-900">
						How does it work?
					</h2>
				</div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{steps.map((step, idx) => (
						<div key={idx} className="relative group">
							{/* Connector Line */}
							{idx !== steps.length - 1 && (
								<div className="hidden md:block absolute top-12 left-2/3 w-full h-2 bg-gray-200 -z-10">
									<div
										className="w-full h-full bg-gray-200"
										style={{
											backgroundImage:
												"radial-gradient(circle, #cbd5e1 2px, transparent 2.5px)",
											backgroundSize: "10px 10px",
										}}
									></div>
								</div>
							)}

							<div className="flex flex-col items-center text-center">
								<div className="relative">
									<div
										className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center shadow-[0_8px_0_rgba(0,0,0,0.1)] mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
									>
										{step.icon}
									</div>
									<div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md">
										{step.number}
									</div>
								</div>

								<h3 className="text-2xl font-display font-bold text-gray-800 mb-2">
									{step.title}
								</h3>
								<p className="text-gray-500 font-medium px-4">{step.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
