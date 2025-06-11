import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/app/ui/fonts';
import Footer from "../components/ui/footer";
import DeferredLink from "@/components/defered_link";



export const metadata = {
  title: "Jeremy Cailly | Développeur Full-Stack | Rouen, Normandie",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jérémy Cailly",
              "jobTitle": "Développeur Full Stack",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rouen",
                "addressRegion": "Normandie",
                "addressCountry": "France"
              },
              "url": "https://portfolio-jeremy-caillys-projects.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-cailly-605792155/",
                "https://github.com/jcailly"
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#FDFDFE] dark:bg-[#141726] font-[family-name:var(--font-geist-mono)]">
          <DeferredLink href="/defered_styles.css" />
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} className="flex-grow">
            {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
