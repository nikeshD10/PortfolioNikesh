import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveSectionContextProvider } from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikesh Portfolio",
  description: "Portfolio of Nikesh Dhakal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
