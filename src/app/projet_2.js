import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import StackLogos from "@/components/ui/stack";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projet_2() {
  const stackForThisProject = ["JavaScript", "React", "NextJS", "TailwindCSS", "Golang", "SQLite", "Git", "Docker"]
    return (
    <section className="items-center justify-center
        snap-start pt-[100px] pb-[60px]
        flex-none flex-auto
        w-screen h-screen
        overflow-auto scrollbar-hide">
          <div className="flex justify-center p-4">
            <div className="max-w-[800px] w-full flex flex-col gap-[32px] row-start-2 items-center justify-center">
            <h2 className="text-2xl text-center">Social Network</h2>
          <Card>
            <h2 className="text-xl flex mb-2">Description:</h2>
            <div className="text-sm text-justify text-center text-center">
                Conception et implémentation d'un réseau social dans le cadre de ma formation Full-Stack, en
                utilisant :<br/><br />
                - Frontend avec Next.js (React) pour une interface responsive, gestion des routes, consommation
                d’API et affichage dynamique des contenus.<br /><br />
                - Backend avec Golang et SQLite pour modéliser les entités (utilisateurs, publications, groupes,
                événements, notifications, etc.).<br /><br />
                - Conteneurisation avec Docker : deux images (frontend et backend) orchestrées pour faciliter
                le déploiement.<br /><br />
                Fonctionnalités clés :<br /><br />
                - Authentification sécurisée (inscription, connexion, sessions et cookies).<br /><br />
                - Profils publics ou privés avec possibilité de suivre, inviter, gérer les autorisations.<br /><br />
                - Création de publications (texte, image, GIF) et commentaires, avec contrôle de confidentialité
                (public, privé ou personnalisé).<br /><br />
                - Groupes : création, invitations, demandes d’adhésion, mur de discussion, gestion d’événements
                (notifications pour « participe »/« ne participe pas »).<br /><br />
                - Messagerie en temps réel via WebSockets (chats privés et salons de groupe, emojis).<br /><br />
                - Système de notifications centralisé (suivis, invitations, événements, nouvelles interactions).<br /><br />
                Ce projet m’a permis de maîtriser l’architecture client-serveur, la gestion d’états complexes (followers, permissions, confidentialité) et d’expérimenter la conteneurisation pour un déploiement cohérent.
            </div>
          </Card>

          <StackLogos items={stackForThisProject}/>
          <Card>
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/SN_Login.png"
                    alt="Social Natwork Login Page"
                    width={1900}
                    height={900}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/SN_Register.png"
                    alt="Social Natwork Login Page"
                    width={1900}
                    height={900}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/SN_Profil.png"
                    alt="Social Natwork Login Page"
                    width={1900}
                    height={900}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/SN_Home1.png"
                    alt="Social Natwork Login Page"
                    width={1900}
                    height={900}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/SN_Home2.png"
                    alt="Social Natwork Login Page"
                    width={1900}
                    height={900}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/SN_Chat.png"
                    alt="Social Natwork Login Page"
                    width={1900}
                    height={900}
                  />
                </CarouselItem>
              </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </Card>
          <Card>
            <Link href="https://github.com/jcailly/social-network" target="_blank">
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