import Image from "next/image";

export default function Projet_1() {
    return (
    <section className="snap-start flex-none pt-[80px] w-screen h-screen flex-auto overflow-auto scrollbar-hide">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image 
          className="rounded-full"
          src="/profil.jpg"
          alt="profil photo"
          width={180}
          height={38}
        />
        <h1 className="list-inside list-decimal text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">Projet 1</h1>
      </div>   
    </section>
    )
}