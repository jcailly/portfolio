import Image from "next/image";
import dynamic from 'next/dynamic';

// import Header from "../components/ui/header.js";
// import Slider from '@/components/slider.js';
// import ScrollControls from '@/components/Scroll_controller.js';
import Profil from "../components/profil.js";

const Header = dynamic(() => import("../components/ui/header.js"))
const Slider = dynamic(() => import('../components/slider.js'))
const ScrollControls = dynamic(() => import('../components/Scroll_controller.js'))
// const Profil = dynamic(() => import("../components/profil.js"))
const Projet_1 = dynamic(() => import("../components/projet_1.js"))
const Projet_2 = dynamic(() => import("../components/projet_2.js"))

export default function Home() {
  const SCROLL_ID = "main-slider";
  return (
    <div className="flex flex-col h-full">
    <Header scrollTargetId={SCROLL_ID} />
    <Image
        src="/artistic-blurry-colorful-wallpaper-background.jpg"
        className="pointer-events-none h-screen w-screen absolute inset-0 z-0 object-cover opacity-5 dark:opacity-15"
        width={192}
        height={108}
        alt="stylized background"
        aria-hidden="true"
    />
    <Slider id={SCROLL_ID}>
      <Profil />
      <Projet_1 />
      <Projet_2 />
    </Slider>
    <ScrollControls targetId={SCROLL_ID}/>
    </div>
  );
}
