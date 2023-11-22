import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "KPP",
	description: "You gotta do your times tables to get your pizza",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`flex min-h-screen flex-col bg-[#0D743D]`}>
				<header>
					<div className={`flex flex-col items-center justify-center p-4`}>
						<div className="text-5xl font-light">Kenzie&apos;s Pizza Party</div>
					</div>
					<div className="bg-red-500 w-full h-10"></div>
				</header>
				<main className="p-4 h-full w-full">{children}</main>
			</body>
		</html>
	);
}
