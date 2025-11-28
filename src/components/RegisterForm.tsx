import AuthButton from "./AuthButton";
import GoogleIcon from "./ui/GoogleIcon";

type RegisterFormProps = {
	username: string;
	email: string;
	password: string;
	handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent) => void;
};

const RegisterForm = ({
	username,
	email,
	password,
	handleUsernameChange,
	handlePasswordChange,
	handleEmailChange,
	handleSubmit,
}: RegisterFormProps) => (
	<form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-8">
		<div className="flex flex-col gap-4">
			<div className="flex flex-col sm:flex-row gap-4">
				<input
					type="text"
					className="w-1/2 px-4 py-3 text-base md:text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-200 placeholder-gray-400"
					placeholder="Username"
					value={username}
					onChange={handleUsernameChange}
					required
				/>
				<input
					type="email"
					className="w-1/2 px-4 py-3 text-base md:text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-200 placeholder-gray-400"
					placeholder="Email"
					value={email}
					onChange={handleEmailChange}
					required
				/>
			</div>
			<input
				type="password"
				className="px-4 py-3 text-base md:text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-200 placeholder-gray-400"
				placeholder="Password"
				onChange={handlePasswordChange}
				value={password}
				required
			/>
		</div>

		<div className="flex items-center justify-center space-x-2">
			<hr className="grow border-t border-gray-300" />
			<span className="text-gray-500 text-sm font-medium">OR</span>
			<hr className="grow border-t border-gray-300" />
		</div>

		<div className="flex flex-col gap-4">
			<AuthButton
				text={
					<>
						Register with Google
						<GoogleIcon />
					</>
				}
			/>
			<AuthButton text="Register" primary={true} type="submit" />
		</div>
	</form>
);

export default RegisterForm;
