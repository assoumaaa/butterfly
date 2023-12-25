import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

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
      <body className={cn("min-h-screen font-sans", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
