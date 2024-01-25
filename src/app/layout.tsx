import "./globals.css";

import ConvexClientProvider from "@/context/convex-client-provider";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Butterfly",
	description: "Butterfly V1",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={fontSans.className}>
				<ConvexClientProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<Navbar />
						{children}
						<Toaster />
					</ThemeProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
