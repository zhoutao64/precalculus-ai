import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { MainLayout } from "@/components/layout/MainLayout";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Precalculus AI Study App",
  description: "AI-powered Precalculus study tool for American high school students",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <LanguageProvider>
          <MainLayout>{children}</MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
