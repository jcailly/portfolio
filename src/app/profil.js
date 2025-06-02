import Image from "next/image";
import Link from "next/link.js";
import { Button } from "@/components/ui/button.jsx";
import StackLogos from "@/components/ui/stack";

export default function Profil() {
    return (
    <section className="items-center justify-center
    snap-start pt-[100px] pb-[60px]
    flex-none flex-auto
    w-screen h-screen
    overflow-auto scrollbar-hide">
        <div className="w-full flex justify-center">
        <div className="max-w-[800px] flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <Image 
            className="rounded-full"
            src="/profil.jpg"
            alt="profil photo"
            width={180}
            height={38}
        />
        <h1 className="text-2xl text-center">Jérémy CAILLY</h1>
        <div className="bg-[#F7F9FF] dark:bg-[#11131F] shadow-md p-4 ml-8 mr-8 rounded-[8px]">
        <h2 className="text-xl flex mb-2">A propos de moi:</h2>
        <p className="text-sm text-justify text-center text-center">
            Développeur d'applications en reconversion après une carrière de 10 ans dans le secteur automobile premium, je mets aujourd’hui mon sens du service, ma rigueur et ma capacité d’adaptation au service de projets numériques. Actuellement en formation à Zone01 Normandie, j’apprends à concevoir et développer des applications web robustes, évolutives et centrées utilisateur, en suivant une pédagogie par projets et en autonomie.
        </p>
        </div>
        <StackLogos />
        <Button variant="personal">Téléchargez mon CV</Button>
        <p className="text-sm text-justify text-center ml-8 mr-8 text-center">
            PARCOURS PROFESSIONNEL
        </p>
        <p className="text-sm text-justify text-center ml-8 mr-8 text-center">
            TEST
        </p>
        </div>
        </div>
    </section>
    )
}