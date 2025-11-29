import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
	label,
	icon,
	className = "",
	...props
}) => {
	return (
		<div className="mb-4">
			<label className="block text-brand-dark font-bold mb-2 ml-1 text-sm uppercase tracking-wide">
				{label}
			</label>
			<div className="relative">
				<input
					className={`w-full bg-white border-2 border-gray-100 text-brand-dark font-semibold rounded-2xl py-3 px-4 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/50 transition-all placeholder-gray-300 ${
						icon ? "pl-11" : ""
					} ${className}`}
					{...props}
				/>
				{icon && (
					<div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
						{icon}
					</div>
				)}
			</div>
		</div>
	);
};
