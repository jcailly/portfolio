"use client";

import { useRef, useState } from 'react'

import Image from "next/image";
import Header from "./header.js";
import Footer from './footer.js';
import Profil from "./profil.js";
import Projet_1 from "./projet_1.js";
import Projet_2 from "./projet_2.js";
import Arrow from '@/components/ui/arrow.js';

export default function Home() {
  let [tooltipText, setTooltipText] = useState("")

  const containerRef = useRef(null)

  const slideWidth = () => containerRef.current.clientWidth
  const maxScroll = () => containerRef.current.scrollWidth - slideWidth()+1

  const handlePrev = () => {
    const { scrollLeft } = containerRef.current
    let target = scrollLeft - slideWidth()
    if (target < -1) target = maxScroll()    // wrap to last
    containerRef.current.scrollTo({ left: target, behavior: 'smooth' })
  }

  const getPrevTooltipText = () => {
    const { scrollLeft } = containerRef.current
    let targetPrev = scrollLeft - slideWidth()
    return (targetPrev < slideWidth()-1 && targetPrev > -1) ? "Profil" : "Voir mes projets"
  }

  const handleNext = () => {
    const { scrollLeft } = containerRef.current
    let target = scrollLeft + slideWidth()
    if (target > maxScroll()) target = 0      // wrap to first
    containerRef.current.scrollTo({ left: target, behavior: 'smooth' })
  }

  const getNextTooltipText = () => {
    const { scrollLeft } = containerRef.current
    let targetNext = scrollLeft + slideWidth()
    return (targetNext > maxScroll()) ? "Profil" : "Voir mes projets"
  }

  const goToProfile = () => {
    containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col h-full">
    <Header goToProfile={() => goToProfile()} />
    <Image
        src="/artistic-blurry-colorful-wallpaper-background.jpg"
        className="pointer-events-none h-screen w-screen absolute inset-0 z-0 object-cover opacity-5 dark:opacity-15"
        width={192}
        height={108}
        alt="stylized background"
        aria-hidden="true"
    />
    <div ref={containerRef} className="flex flex-row relative z-10 overflow-x-auto snap-x snap-mandatory scroll-smooth h-screen scrollbar-hide items-center">
      <Profil />
      <Projet_1 />
      <Projet_2 />
    </div>  
    <Arrow
      handlePrev={() => handlePrev()}
      handleNext={() => handleNext()}
      getPrevTooltipText={() => getPrevTooltipText()}
      getNextTooltipText={() => getNextTooltipText()}
      setTooltipText={setTooltipText}
      tooltipText={tooltipText}
    />
    </div>
  );
}
