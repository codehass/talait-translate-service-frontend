"use client";

import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import React, { useState } from "react";

export default function AuthForms() {
	const [view, setView] = useState<"login" | "register">("login");
	const [isLoading, setIsLoading] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleTabSwitch = (newView: "login" | "register") => {
		setView(newView);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const dataToLog =
			view === "login"
				? { email: formData.email, password: formData.password }
				: formData;

		console.log("Form Data:", dataToLog);
		console.log("----------------------------------------");

		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	};

	return (
		<div className="w-full max-w-md mx-auto">
			<div className="flex mb-6 bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
				<button
					onClick={() => handleTabSwitch("login")}
					className={`flex-1 py-2 font-bold rounded-xl transition-all ${
						view === "login"
							? "bg-brand-blue text-white shadow-md"
							: "text-gray-400 hover:text-brand-dark"
					}`}
				>
					Login
				</button>
				<button
					onClick={() => handleTabSwitch("register")}
					className={`flex-1 py-2 font-bold rounded-xl transition-all ${
						view === "register"
							? "bg-brand-yellow text-brand-dark shadow-md"
							: "text-gray-400 hover:text-brand-dark"
					}`}
				>
					Sign Up
				</button>
			</div>

			{/* Card... (unchanged) */}
			<div className="bg-white p-8 rounded-[2rem] shadow-xl border-b-4 border-gray-100 relative overflow-hidden">
				<h2 className="text-3xl font-extrabold text-center mb-2 text-brand-dark relative z-10">
					{view === "login" ? "Welcome Back!" : "Join the Adventure!"}
				</h2>
				<p className="text-center text-gray-500 mb-8 font-medium relative z-10">
					{view === "login"
						? "Ready to learn some new words?"
						: "Create your explorer profile."}
				</p>

				<form onSubmit={handleSubmit} className="relative z-10 space-y-4">
					{view === "register" && (
						<Input
							label="Super Hero Name"
							placeholder="Captain Cool"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
							icon={
								<svg
								// ... (SVG path)
								></svg>
							}
						/>
					)}

					<Input
						label="Email Address"
						placeholder="kid@example.com"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						icon={
							<svg
							// ... (SVG path)
							></svg>
						}
					/>

					<Input
						label="Secret Password"
						placeholder="••••••••"
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						required
						icon={
							<svg
							// ... (SVG path)
							></svg>
						}
					/>

					<div className="pt-4">
						<Button
							type="submit"
							variant={view === "register" ? "primary" : "accent"}
							disabled={isLoading}
						>
							{isLoading
								? "Loading Magic..."
								: view === "login"
								? "Let's Go!"
								: "Create Account"}
						</Button>
					</div>

					<div className="text-center mt-6">
						<button
							type="button"
							className="text-gray-400 font-bold text-sm hover:text-brand-blue transition-colors"
						>
							← Back to Home
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
