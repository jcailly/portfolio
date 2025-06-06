import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/app/ui/fonts';
import Footer from "../components/ui/footer";
import Head from "next/head";

export const metadata = {
  title: "Jeremy Cailly | Développeur Full-Stack | Rouen, France",
  description: "Jeremy Cailly est un développeur Full-Stack (React, Tailwind, Next.js) basé à Rouen. Découvrez mes projets, mon parcours et contactez-moi.",
  verification: {
    google: "ytLRCRiRszDUdQ807b6241iFKRSqGGvMmOspahx6-zo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      suppressHydrationWarning
      >
      <body className="bg-[#FDFDFE] dark:bg-[#141726] font-[family-name:var(--font-geist-mono)]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} className="flex-grow">
            {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
