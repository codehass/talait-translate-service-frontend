"use client";

import { Globe } from "lucide-react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth"; // adjust path
// import Cookies from "js-cookie";

export const Navbar = () => {
	const router = useRouter();
	const { isAuthenticated, setIsAuthenticated } = useAuth();

	const handleLogout = async () => {
		try {
			await fetch(`/api/auth/logout`, {
				method: "POST",
				credentials: "include",
			});

			setIsAuthenticated(false);
			router.push("/");
		} catch (err) {
			console.error("Logout failed:", err);
		}
	};

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

					{isAuthenticated ? (
						<Button
							onClick={handleLogout}
							size="sm"
							className="hover:bg-red-400 text-white border-b-4 border-red-600 active:border-b-0 active:translate-y-1 bg-red-500"
						>
							Logout
						</Button>
					) : (
						<Button
							onClick={() => router.push("/register")}
							size="sm"
							className="hover:bg-emerald-400 text-white border-b-4 border-emerald-600 active:border-b-0 active:translate-y-1 bg-emerald-500"
						>
							Login
						</Button>
					)}
				</div>
			</div>
		</nav>
	);
};
