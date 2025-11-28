type leftSidebarProps = {
	toggleLogin: () => void;
	isLoginOpen: boolean;
};

const LeftSidebar = ({ toggleLogin, isLoginOpen }: leftSidebarProps) => (
	<div className="flex flex-col bg-gray-800 text-white lg:w-1/2 p-6 md:p-10 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none min-h-[300px] lg:min-h-full">
		<div className="flex flex-col">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
				<p className="font-extrabold text-3xl mb-4 sm:mb-0">Select Works</p>
				<div className="flex gap-2 text-sm">
					<button
						className={`font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
							isLoginOpen ? "hover:bg-gray-700" : "bg-red-500 hover:bg-red-600"
						}`}
						onClick={toggleLogin}
					>
						Register
					</button>
					<button
						className={`font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
							isLoginOpen ? "bg-red-500 hover:bg-red-600" : "hover:bg-gray-700"
						}`}
						onClick={toggleLogin}
					>
						Sign In
					</button>
				</div>
			</div>
			<div className="mt-10 lg:mt-20">
				<h3 className="text-xl md:text-2xl font-semibold mb-3">
					{isLoginOpen ? "Welcome Back!" : "Start Your Journey Today!"}
				</h3>
				<p className="text-gray-300 text-sm leading-relaxed">
					{isLoginOpen
						? "Log in to access your portfolio, discover new projects, and connect with the global design community."
						: "Join UISOCIAL, the platform for designers and creatives to showcase their work and find inspiration."}
				</p>
			</div>
			<div className="mt-auto pt-10 text-xs text-gray-400 hidden md:block">
				<p>© 2025 UISOCIAL. All rights reserved.</p>
			</div>
		</div>
	</div>
);

export default LeftSidebar;
