import Image from "next/image";
import Link from "next/link.js";
import { Button } from "@/components/ui/button.jsx";
import { ScrollArea } from "@/components/ui/scroll-area"
import StackLogos from "@/components/ui/stack";
import Footer from "./footer";

export default function Profil() {
    return (
    <section className="items-center justify-center
        snap-start pt-[100px] pb-[60px]
        flex-none flex-auto
        w-screen h-screen
        overflow-auto scrollbar-hide">
            <div className="flex justify-center p-4">
                <div className="max-w-[800px] w-full flex flex-col gap-[32px] row-start-2 items-center justify-center">
                    <Image 
                        className="rounded-full"
                            src="/profil.jpg"
                            alt="profil photo"
                            width={180}
                            height={38}
                    />
                <h1 className="text-2xl text-center">Jeremy Cailly<br />Développeur Full-Stack</h1>
                <div className="bg-[#F7F9FF] dark:bg-[#11131F] shadow-md w-full p-4 ml-8 mr-8 rounded-[8px]">
                    <h2 className="text-xl flex mb-2">A propos de moi:</h2>
                    <p className="text-sm text-justify text-center text-center">
                        Développeur d'applications en reconversion après une carrière de 10 ans dans le secteur automobile premium à Rouen, je mets aujourd’hui mon sens du service, ma rigueur et ma capacité d’adaptation au service de projets numériques. Actuellement en formation à Zone01 Normandie, j’apprends à concevoir et développer des applications web robustes, évolutives et centrées utilisateur, en suivant une pédagogie par projets et en autonomie.
                    </p>
                </div>
                <StackLogos />
                <div className="bg-[#F7F9FF] dark:bg-[#11131F] shadow-md w-full p-4 ml-8 mr-8 rounded-[8px]">
                    <h2 className="text-xl flex mb-2">Certifications:</h2>
                    <ScrollArea className="h-[200px] rounded-md border-[1px] border-white">
                        <h3 className="p-4 border-white border-[1px]">Titre RNCP Concepteur Développeur d'Applications (Obtention Nov 2025)</h3>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=react-foundations&user=64283&certId=react-foundations-64283-1748901888572"
                            target="_blank">
                            <h3 className="p-4 border-white border-[1px]">React Foundation for Next.js</h3>
                        </Link>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=pages-router&user=64283&certId=pages-router-64283-1748902404888"
                            target="_blank">
                            <h3 className="p-4 border-white border-[1px]"> Next.js Pages Router Fundamentals</h3>
                        </Link>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=seo&user=64283&certId=seo-64283-1748902445803"
                            target="_blank">
                            <h3 className="p-4 border-white border-[1px]">Next.js SEO Fundamentals</h3>
                        </Link>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=dashboard-app&user=64283&certId=dashboard-app-64283-1748902472803"
                            target="_blank">
                            <h3 className="p-4 border-white border-[1px]">Next.js App Router Fundamentals</h3>
                        </Link>
                    </ScrollArea>
                </div>
                <Button variant="personal">Téléchargez mon CV</Button>
            </div>
        </div>
    </section>
    )
}