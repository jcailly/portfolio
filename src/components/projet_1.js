import Link from "next/link";
import { Card } from "@/components/ui/card";

import StackLogos from "@/components/ui/stack";

export default function Projet_1() {

  const stackForThisProject = ["Rust", "Bevy", "Git"];

    return (
    <section className="items-center justify-center
        snap-start pt-[60px]
        flex-none flex-auto
        w-screen h-screen
        overflow-auto scrollbar-hide">
      <div className="flex justify-center p-4">
        <div className="max-w-[800px] w-full flex flex-col gap-[32px] row-start-2 items-center justify-center">
      <div className="w-full">
        <h2 className="text-2xl text-center m-4 font-black">Projet<br />Multiplayer-fps</h2>   
      <video
        controls
        className="w-full rounded-2xl shadow-sm dark:shadow-[#304384]"
        src="/Multiplayer_fps_present.mp4"
      >
        <track
          kind="captions"
          src="/Multiplayer_fps_present.fr.vtt"
          srcLang="fr"
          label="French captions"
          default
        />
        Your browser doesn’t support the video tag.
      </video>
    </div>
      <Card>
        <h2 className="text-xl flex mb-2 font-bold">Description:</h2>
        <div className="text-sm text-justify text-center text-center font-extralight">
          <p>Développement d’un jeu inspiré de Maze Wars en Rust, intégrant :<br /><br />
          - Interface utilisateur : Création d'un joueur avec un équipement, une map, minimap montrant
          la position du joueur et l’ensemble du niveau, et affichage en temps réel du taux de rafraîchissement
          (FPS).<br /><br />
          - Architecture client‐serveur TCP : serveur central capable d’accueillir plusieurs connexions,
          exécution possible sur la même machine que le client ou depuis d’autres postes. Le client, écrit en
          Rust, demande l’adresse IP du serveur et un pseudonyme avant d’ouvrir l’interface graphique et de
          lancer la partie.<br /><br />
          - Performance garantissant 50 FPS minimum : optimisation du rendu et de la boucle de jeu pour maintenir
          un taux de rafraîchissement élevé, assurant une expérience fluide en réseau.<br /><br />
          Ce projet démontre la maîtrise de la programmation réseau (TCP), la conception d’interfaces graphiques
          en temps réel et l’optimisation des performances dans un contexte multijoueur.</p>
        </div>
      </Card>

      <StackLogos items={stackForThisProject}/>

    <Card>
      <Link href="https://github.com/jcailly/multiplayer-fps" target="_blank">
      <div className="text-sm text-justify text-center text-center">
        <p>Repo Github</p>
      </div>
      </Link>
    </Card>
    </div>
    </div>
    </section>
    )
}