import Image from "next/image";
import Link from "next/link.js";
import { Button } from "@/components/ui/button.jsx";

export default function Profil() {
    return (
    <section className="items-center justify-center
    snap-start pt-[100px] pb-[60px]
    flex-none flex-auto
    w-screen h-screen
    overflow-auto scrollbar-hide">
        <div className="w-full flex justify-center">
        <div className="max-w-[850px] flex flex-col gap-[32px] row-start-2 items-center justify-center">
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
        <Button variant="personal">Téléchargez mon CV</Button>
        <div className="bg-[#F7F9FF] dark:bg-[#11131F] p-4 ml-8 mr-8 shadow-md rounded-[8px]">
        <h2 className="text-xl flex mb-2">Stack :</h2>
        <div className="items-center justify-center gap-[10px] flex flex-wrap text-sm text-justify text-center text-center">
            <Link href="https://go.dev/" target="_blank">
            <Image src="/Golang_logo.png" width={75} height={75} alt="Golang logo" className="p-2"/>
            </Link>
            <Link href="https://www.rust-lang.org/fr" target="_blank">
            <Image src="/Rust-logo.png" width={75} height={75} alt="Rust logo" className="p-2"/>
            </Link>
            <Link href="https://www.javascript.com/" target="_blank">
            <Image src="/Javascript_colored_logo.png" width={75} height={75} alt="Javascript logo" className="p-2"/>
            </Link>
            <Link href="https://fr.react.dev/" target="_blank">
            <Image src="/React_colored_logo.png" width={75} height={75} alt="React logo" className="logo-react p-2"/>
            </Link>
            <Link href="https://nextjs.org/" target="_blank">
            <Image src="/next.svg" width={75} height={75} alt="Next.js logo" className="dark:invert p-2"/>
            </Link>
            <Link href="https://tailwindcss.com/" target="_blank">
            <Image src="/Tailwind_colored_logo.png" width={75} height={75} alt="Tailwindcss logo" className="p-2 dark:invert"/>
            </Link>
            <Link href="https://www.sqlite.org/" target="_blank">
            <Image src="/SQLite_logo.png" width={150} height={150} alt="SQLite logo" className="p-2"/>
            </Link>
            <Link href="https://git-scm.com/" target="_blank">
            <Image src="/Git_icon.svg.png" width={75} height={75} alt="Git logo" className="p-2"/>
            </Link>
        </div>
        </div>
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