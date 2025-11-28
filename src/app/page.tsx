"use client";

import Link from "next/link";
import React, { FormEvent, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

type Data = {
	username: string;
	email: string;
	password: string;
};

const page = () => {
	const [isLoginOpen, setIsLoginOpen] = useState<boolean>(true);
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const toggleLogin = () => {
		setIsLoginOpen((val) => !val);
		setUsername("");
		setEmail("");
		setPassword("");
	};

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setUsername(e.target.value);
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const data: Partial<Data> = { username, password };

		if (!isLoginOpen) {
			data.email = email;
			console.log("--- Register Form Submitted ---");
			console.log("Data:", data);
		} else {
			console.log("--- Login Form Submitted ---");
			console.log("Data:", data);
		}
	};

	return (
		<div className="h-screen flex justify-center items-center p-4">
			<div className="bg-white w-full max-w-6xl lg:flex shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden">
				{/* Left Side: Info/Hero Section */}
				<LeftSidebar toggleLogin={toggleLogin} isLoginOpen={isLoginOpen} />

				{/* Right Side: Form Section */}
				<div className="flex flex-col lg:w-1/2 p-6 md:p-10">
					<div className="flex justify-between items-center mb-10">
						<p className="font-extrabold text-2xl md:text-3xl text-gray-800">
							{isLoginOpen ? "Sign In" : "Register"}
						</p>
						<select
							name="language"
							id="language"
							defaultValue="EN"
							className="border font-medium cursor-pointer rounded-xl px-3 py-2 border-gray-300 focus:ring-red-500 focus:border-red-500 transition-colors"
						>
							<option value="EN">EN</option>
							<option value="FR">FR</option>
						</select>
					</div>

					<div className="mb-6">
						<h2 className="text-xl md:text-2xl font-bold text-gray-700">
							{isLoginOpen ? "Hi Designer" : "Welcome to UISOCIAL!"}
						</h2>
						<p className="text-gray-500 mt-1">
							{isLoginOpen
								? "Welcome back! Please enter your credentials."
								: "Create your account and start sharing your work."}
						</p>
					</div>

					{isLoginOpen ? (
						<LoginForm
							username={username}
							password={password}
							handleUsernameChange={handleUsernameChange}
							handlePasswordChange={handlePasswordChange}
							handleSubmit={handleSubmit}
						/>
					) : (
						<RegisterForm
							username={username}
							email={email}
							password={password}
							handleUsernameChange={handleUsernameChange}
							handleEmailChange={handleEmailChange}
							handlePasswordChange={handlePasswordChange}
							handleSubmit={handleSubmit}
						/>
					)}
					<div className="mt-auto pt-10 text-center text-sm text-gray-500">
						<p>
							By continuing, you agree to UISOCIAL&apos;s{" "}
							<Link href="#" className="text-red-500 hover:underline">
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link href="#" className="text-red-500 hover:underline">
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
