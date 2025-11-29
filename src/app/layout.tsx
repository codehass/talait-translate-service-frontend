import "./globals.css";

import { ReactNode } from "react";
import { Nunito, Fredoka } from "next/font/google";

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
		<html lang="en">
			<script src="https://cdn.tailwindcss.com"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Nunito', 'sans-serif'],
                    display: ['Fredoka', 'cursive'],
                  },
                  colors: {
                    'kid-blue': '#60A5FA',
                    'kid-yellow': '#FBBF24',
                    'kid-red': '#F87171',
                    'kid-green': '#34D399',
                    'kid-cream': '#FFFBEB',
                  }
                }
              }
            };
          `,
				}}
			/>
			<body style={{ backgroundColor: "#FFFBEB" }}>{children}</body>
		</html>
	);
}
{
	/* <html lang="en" className={`${nunito.variable} ${fredoka.variable}`}>
			
			<body className="bg-kid-cream">{children}</body>
		</html> */
}
