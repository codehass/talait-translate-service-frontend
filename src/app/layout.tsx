import { ReactNode } from "react";
import Script from "next/script";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["400", "700", "900"],
	variable: "--font-sans",
});

const fredoka = Fredoka({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-display",
});

export const metadata = {
	title: "KidLingo - French & English Fun!",
};

export default function RootLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<html lang="en" className={`${nunito.variable} ${fredoka.variable}`}>
			<body style={{ backgroundColor: "#FFFBEB" }} className={nunito.className}>
				<Script
					src="https://cdn.tailwindcss.com"
					strategy="beforeInteractive"
				/>
				{children}
			</body>
		</html>
	);
}
