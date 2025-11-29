import { Footer } from "../components/Footer";
import { LandingPage } from "../components/LandingPage";

export type PageView = "landing" | "translator";

const App: React.FC = () => {
	return (
		<div className="min-h-screen font-sans overflow-x-hidden selection:bg-[#FBBF24] selection:text-amber-900 bg-[#FFFBEB] flex flex-col">
			<div className="grow">
				<LandingPage />
			</div>
			<Footer />
		</div>
	);
};

export default App;
