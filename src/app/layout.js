import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { geistSans, geistMono } from '@/app/ui/fonts';
import Footer from "../components/ui/footer";
import DeferredLink from "@/components/defered_link";



export const metadata = {
  title: "Développeur Full-Stack à Rouen | Portfolio Jeremy Cailly",
  description: "Jérémy Cailly — Développeur Full-Stack (React, Next.js, Tailwind CSS) basé à Rouen (76). Découvrez mes réalisations web performantes et contactez-moi pour vos projets numériques !",
  verification: {
    google: "XfxhjXwX3NfoTn0Lc08McZm-ohPKustbYg3Eq67YB8Q",
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
              "image": "https://portfolio-jeremy-caillys-projects.vercel.app/PP.jpg",
              "email": "mailto:jeremy.cailly@hotmail.fr",
              "description": "Développeur Full-Stack basé à Rouen (76), spécialisé en React, Next.js et Tailwind CSS. Je conçois des applications web performantes, accessibles et évolutives.",
              "jobTitle": "Développeur Full Stack",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rouen",
                "postalCode": "76000",
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
