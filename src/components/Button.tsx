import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "accent";
	size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	className = "",
	...props
}) => {
	const baseStyles =
		"font-display font-bold rounded-full transition-all duration-200 transform active:scale-95 flex items-center justify-center gap-2 shadow-[0_4px_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[4px]";

	const variants = {
		primary: "bg-[#60A5FA] hover:bg-blue-400 text-white",
		secondary:
			"bg-white hover:bg-gray-50 text-[#60A5FA] border-2 border-[#60A5FA]",
		accent: "bg-[#FBBF24] hover:bg-amber-400 text-amber-900",
	};

	const sizes = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-lg",
		lg: "px-8 py-4 text-xl",
	};

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
