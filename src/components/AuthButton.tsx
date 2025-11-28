type AuthButtonProps = {
	text: React.ReactNode;
	onClick?: () => void;
	primary?: boolean;
	type?: "button" | "submit" | "reset";
};

const AuthButton = ({
	text,
	onClick,
	primary = false,
	type = "button",
}: AuthButtonProps) => (
	<button
		type={type}
		onClick={onClick}
		className={`
      flex justify-center items-center gap-2 border-2 px-4 py-3 text-lg rounded-xl w-full font-medium cursor-pointer transition-colors duration-200
      ${
				primary
					? "bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600 shadow-md hover:shadow-lg active:ring-2 active:ring-red-300"
					: "border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100"
			}
    `}
	>
		{text}
	</button>
);

export default AuthButton;
