import Image from "next/image";
import Button from "../components/button.js"

export default function Profil() {
    return (
    <section className="snap-start pt-[80px] pb-[60px]
    flex-none flex-auto
    w-screen h-screen
    overflow-auto scrollbar-hide">
        <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image 
            className="rounded-full"
            src="/profil.jpg"
            alt="profil photo"
            width={180}
            height={38}
        />
        <h1 className="text-2xl text-center font-[family-name:var(--font-geist-mono)]">Jérémy CAILLY</h1>
        <div className="bg-[#F7F9FF] dark:bg-[#11131F] shadow-md text-sm text-justify text-center p-4 ml-8 mr-8 rounded-[8px] text-center font-[family-name:var(--font-geist-mono)]">
            Développeur d'applications en reconversion après une carrière de 10 ans dans le secteur automobile premium, je mets aujourd’hui mon sens du service, ma rigueur et ma capacité d’adaptation au service de projets numériques. Actuellement en formation à Zone01 Normandie, j’apprends à concevoir et développer des applications web robustes, évolutives et centrées utilisateur, en suivant une pédagogie par projets et en autonomie.
        </div>
        <Button text={"Téléchargez mon CV"} />
        <p className="text-sm text-justify text-center ml-8 mr-8 text-center font-[family-name:var(--font-geist-mono)]">
            TECHNOLOGIES UTILISEES
        </p>
        <p className="text-sm text-justify text-center ml-8 mr-8 text-center font-[family-name:var(--font-geist-mono)]">
            PARCOURS PROFESSIONNEL
        </p>
        <p className="text-sm text-justify text-center ml-8 mr-8 text-center font-[family-name:var(--font-geist-mono)]">
            TEST
        </p>
        </div>   
    </section>
    )
}