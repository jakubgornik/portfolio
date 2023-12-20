import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import ActiveSectionContextProvider from "./context/ActiveContextSection";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Jakub Górnik",
  description: "Frontend developer portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={barlow.className}>
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
