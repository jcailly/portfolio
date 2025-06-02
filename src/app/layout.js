import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/app/ui/fonts';

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
