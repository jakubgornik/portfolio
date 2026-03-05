import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import I18nProvider from "./i18n/i18n-provider";
import ActiveSectionContextProvider from "./context/active-section-context";

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
        <I18nProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
