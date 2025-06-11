import Image from "next/image";
import Link from "next/link.js";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button.jsx";
import { ScrollArea } from "@/components/ui/scroll-area"
import StackLogos from "@/components/ui/stack";
import { Card } from "@/components/ui/card";

export default function Profil() {
    return (
    <section className="items-center justify-center
        snap-start pt-[60px]
        flex-none flex-auto
        w-screen h-screen
        overflow-auto scrollbar-hide">
            <div className="flex justify-center p-4">
                <div className="max-w-[800px] w-full flex flex-col gap-[32px] row-start-2 items-center justify-center">
                    <Image 
                        className="rounded-full shadow-sm dark:shadow-[#304384]"
                            src="/PP.jpg"
                            alt="profil photo"
                            width={180}
                            height={180}
                    />
                <h1 className="text-2xl text-center font-black">Jérémy Cailly<br />Développeur Full-Stack</h1>

                <Card>
                    <h2 className="text-xl flex mb-2 font-bold">A propos de moi:</h2>
                    <div className="text-sm text-justify text-center text-center font-extralight">
                        <p>Développeur Full-stack en reconversion après une carrière de 10 ans dans le secteur
                            automobile premium à Rouen, je mets aujourd’hui mon sens du service, ma rigueur et ma
                            capacité d’adaptation au service de projets numériques. Actuellement en formation à Zone01
                            Normandie, j’apprends à concevoir et développer des applications web robustes, évolutives
                            et centrées utilisateur, en suivant une pédagogie par projets et en autonomie.</p>
                            {/* <div className="flex justify-center m-4 p-4"> */}
                            <a href="/Jeremy_CAILLY_CV.pdf" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                                <Button variant="personal" >
                                    Téléchargez mon CV
                                </Button>
                            </a>
                            {/* </div> */}
                    </div>
                </Card>

                <StackLogos />

                <Card>
                    <h2 className="text-xl flex mb-2 font-bold">Certifications:</h2>
                    <ScrollArea className="h-[250px] rounded-md border-[1px] border-[#ABBDF9] dark:border-[#3A4F97]">
                        <h3 className="p-4 border-b-[1px] border-b-[#ABBDF9] dark:border-b-[#3A4F97] bg-[#EDF2FE] hover:bg-[#E6E7FF] dark:bg-[#182449] dark:hover:bg-[#1D2E62]">Titre RNCP Concepteur Développeur d'Applications (Obtention Nov 2025)</h3>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=react-foundations&user=64283&certId=react-foundations-64283-1748901888572"
                            target="_blank">
                            <h3 className="p-4 border-b-[1px] border-b-[#ABBDF9] dark:border-b-[#3A4F97] bg-[#EDF2FE] hover:bg-[#E6E7FF] dark:bg-[#182449] dark:hover:bg-[#1D2E62]">React Foundation for Next.js</h3>
                        </Link>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=pages-router&user=64283&certId=pages-router-64283-1748902404888"
                            target="_blank">
                            <h3 className="p-4 border-b-[1px] border-b-[#ABBDF9] dark:border-b-[#3A4F97] bg-[#EDF2FE] hover:bg-[#E6E7FF] dark:bg-[#182449] dark:hover:bg-[#1D2E62]"> Next.js Pages Router Fundamentals</h3>
                        </Link>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=seo&user=64283&certId=seo-64283-1748902445803"
                            target="_blank">
                            <h3 className="p-4 border-b-[1px] border-b-[#ABBDF9] dark:border-b-[#3A4F97] bg-[#EDF2FE] hover:bg-[#E6E7FF] dark:bg-[#182449] dark:hover:bg-[#1D2E62]">Next.js SEO Fundamentals</h3>
                        </Link>
                        <Link
                            href="https://nextjs.org/learn/certificate?course=dashboard-app&user=64283&certId=dashboard-app-64283-1748902472803"
                            target="_blank">
                            <h3 className="p-4 bg-[#EDF2FE] hover:bg-[#E6E7FF] dark:bg-[#182449] dark:hover:bg-[#1D2E62]">Next.js App Router Fundamentals</h3>
                        </Link>
                    </ScrollArea>
                </Card>
            </div>
        </div>
    </section>
    )
}