import React from "react";
import { Globe } from "lucide-react";
import { Button } from "./Button";

interface NavbarProps {
	onStart: () => void;
	hideCta?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onStart, hideCta = false }) => {
	return (
		<nav className="absolute top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4 py-6">
				<div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border-2 border-white px-6 py-3 flex items-center justify-between">
					<div
						className="flex items-center gap-3 cursor-pointer"
						onClick={onStart}
					>
						<div className="bg-linear-to-br from-kid-blue to-blue-400 p-2.5 rounded-full text-white shadow-md transform hover:rotate-12 transition-transform">
							<Globe size={24} />
						</div>
						<span className="text-2xl font-display font-bold text-gray-800 tracking-tight">
							KidLingo
						</span>
					</div>

					{!hideCta && (
						<Button
							onClick={onStart}
							size="sm"
							className="bg-kid-green hover:bg-emerald-400 text-white border-b-4 border-emerald-600 active:border-b-0 active:translate-y-1"
						>
							Start Learning
						</Button>
					)}
				</div>
			</div>
		</nav>
	);
};
