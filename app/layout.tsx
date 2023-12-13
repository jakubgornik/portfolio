import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const inter = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
