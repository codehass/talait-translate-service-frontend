"use client";

import { Globe } from "lucide-react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const Navbar = () => {
	const router = useRouter();
	return (
		<nav className="absolute top-0 left-0 right-0 z-50">
			<div className="container mx-auto px-4 py-6">
				<div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border-2 border-white px-6 py-3 flex items-center justify-between">
					<div className="flex items-center gap-3 cursor-pointer">
						<div className="bg-linear-to-br p-2.5 rounded-full shadow-md transform hover:rotate-12 transition-transform bg-blue-500">
							<Globe size={24} className="text-white" />
						</div>
						<span className="text-2xl font-display font-bold text-gray-800 tracking-tight">
							KidLingo
						</span>
					</div>
					<Button
						onClick={() => router.push("/register")}
						size="sm"
						className="bg-kid-green hover:bg-emerald-400 text-white border-b-4 border-emerald-600 active:border-b-0 active:translate-y-1"
					>
						Login
					</Button>
				</div>
			</div>
		</nav>
	);
};
