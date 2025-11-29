import { Footer } from "../components/Footer";
import { LandingPage } from "../components/LandingPage";

export type PageView = "landing" | "translator";

const App: React.FC = () => {
	return (
		<div className="min-h-screen font-sans overflow-x-hidden selection:bg-kid-yellow selection:text-amber-900 bg-kid-cream flex flex-col">
			<div className="grow">
				<LandingPage />
			</div>
			<Footer />
		</div>
	);
};

export default App;
