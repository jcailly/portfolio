import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Jeremy CAILLY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-y-scroll scrollbar-hide`}
      suppressHydrationWarning
      >
      <body className="bg-[##FDFDFE] dark:bg-[#141726] font-[family-name:var(--font-geist-mono)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
