import React from "react";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
	return (
		<footer className="bg-white py-12 border-t-4 border-[#60A5FA]/10">
			<div className="container mx-auto px-4 text-center">
				<div className="flex items-center justify-center gap-2 text-2xl font-display font-bold text-[#60A5FA] mb-4">
					🌍 KidLingo
				</div>
				<p className="flex items-center justify-center gap-2 text-gray-500 font-medium">
					Made with{" "}
					<Heart
						size={16}
						className="text-[#F87171] fill-current animate-pulse"
					/>{" "}
					for future explorers.
				</p>
				<div className="mt-8 flex justify-center gap-6 text-sm text-gray-400 font-bold">
					<a href="#" className="hover:text-[#60A5FA]">
						Parents Guide
					</a>
					<a href="#" className="hover:text-[#60A5FA]">
						Privacy
					</a>
					<a href="#" className="hover:text-[#60A5FA]">
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
};
