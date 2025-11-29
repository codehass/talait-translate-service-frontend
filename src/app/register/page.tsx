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

	const primaryColor = view === "login" ? "kid-blue" : "kid-yellow";
	const buttonColor = view === "login" ? "kid-blue" : "kid-yellow";
	const secondaryColor = view === "login" ? "kid-yellow" : "kid-blue";

	let buttonText = "";
	if (isLoading) {
		buttonText = "Loading Magic...";
	} else if (view === "login") {
		buttonText = "Let's Go!";
	} else {
		buttonText = "Create Account";
	}

	return (
		<div className="w-full max-w-md mx-auto">
			<div className="flex mb-6 bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
				<button
					onClick={() => handleTabSwitch("login")}
					className={`flex-1 py-2 font-bold rounded-xl transition-all ${
						view === "login"
							? `bg-${buttonColor} text-white shadow-md`
							: "text-gray-400 hover:text-gray-700"
					}`}
				>
					Login
				</button>
				<button
					onClick={() => handleTabSwitch("register")}
					className={`flex-1 py-2 font-bold rounded-xl transition-all ${
						view === "register"
							? `bg-${buttonColor} text-gray-800 shadow-md`
							: "text-gray-400 hover:text-gray-700"
					}`}
				>
					Sign Up
				</button>
			</div>

			<div
				className={`bg-white p-8 rounded-[2rem] shadow-xl border-b-4 border-${primaryColor}/70 relative overflow-hidden`}
			>
				<div
					className={`absolute -top-10 -right-10 w-32 h-32 bg-${secondaryColor}/30 rounded-full opacity-50 pointer-events-none`}
				></div>
				<div
					className={`absolute -bottom-10 -left-10 w-24 h-24 bg-${primaryColor}/30 rounded-full opacity-50 pointer-events-none`}
				></div>

				<h2
					className={`text-3xl text-${buttonColor} font-extrabold text-center mb-2 relative z-10`}
				>
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
							className={`bg-${buttonColor} hover:bg-${buttonColor}/80 text-white w-full`}
							disabled={isLoading}
						>
							{buttonText}
						</Button>
					</div>

					<div className="text-center mt-6">
						<button
							type="button"
							className="text-gray-400 font-bold text-sm hover:text-kid-green transition-colors"
						>
							← Back to Home
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
