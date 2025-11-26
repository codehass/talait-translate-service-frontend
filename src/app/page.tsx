import GoogleIcon from "../components/ui/GoogleIcon";

export default function Home() {
	return (
		<div className="bg-red-300 flex justify-center items-center h-screen">
			<div className="bg-white w-9/12 rounded-4xl flex p-6">
				<div className="flex flex-col bg-gray-700 w-1/2 px-5 py-4 rounded-4xl">
					<div className="flex flex-col">
						<div className="flex justify-between items-center">
							<p className="font-bold text-white text-2xl">Select Works</p>
							<div className="flex gap-2">
								<button className="font-light px-3 py-2 text-white border-2 border-transparent rounded-2xl hover:cursor-pointer hover:border-white hover:bg-gray-200 active:bg-gray-800 transition-all duration-200">
									Sign Up
								</button>
								<button className="font-light px-3 py-2 text-white rounded-2xl hover:cursor-pointer hover:bg-gray-800 active:bg-gray-800 transition-all duration-200">
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col  w-1/2 px-5 py-4 rounded-4xl">
					<div>
						<div className="flex justify-between">
							<p className="font-extrabold text-3xl text-gray-700">
								Select Works
							</p>
							<select
								name="En"
								id="language"
								className="border-none active:border-none font-medium px-2 py-1 cursor-pointer"
							>
								<option value="EN">EN</option>
								<option value="FR">FR</option>
							</select>
						</div>
						<div>
							<h2>Hi Designer</h2>
							<p>Welcom to UISCOCIAL</p>

							<div className="flex flex-col gap-4">
								<input
									type="text"
									className="px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all duration-200 placeholder-gray-400"
									placeholder="Email"
								/>

								<input
									type="text"
									className="px-4 py-3 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all duration-200 placeholder-gray-400"
									placeholder="Password"
								/>
							</div>
							<div className="flex justify-end py-4 pr-1">
								<button className="text-red-500 font-semibold hover:cursor-pointer hover:text-red-600">
									Forget password?
								</button>
							</div>
							<div className="text-center">
								<p>--------OR--------</p>
							</div>
							<div className="flex flex-col gap-4">
								<button className="flex justify-center items-center gap-2 border-2 border-gray-300 px-4 py-3 text-lg rounded-xl w-full font-medium cursor-pointer hover:bg-gray-100 ">
									Login with Google
									<GoogleIcon />
								</button>
								<button className="flex justify-center items-center gap-2 border-2 border-gray-300 px-4 py-3 text-lg rounded-full w-full font-medium cursor-pointer hover:bg-red-700 bg-red-500 text-white">
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
