"use client";

import { useRef } from 'react'

import Image from "next/image";
import Header from "./header.js";
import Footer from "./footer.js";
import Profil from "./profil.js";
import Projet_1 from "./projet_1.js";
import Projet_2 from "./projet_2.js";

export default function Home() {

  const containerRef = useRef(null)

  const slideWidth = () => containerRef.current.clientWidth
  const maxScroll = () => containerRef.current.scrollWidth - slideWidth()+1

  const handlePrev = () => {
    const { scrollLeft } = containerRef.current
    let target = scrollLeft - slideWidth()
    if (target < 0) target = maxScroll()    // wrap to last
    containerRef.current.scrollTo({ left: target, behavior: 'smooth' })
  }

  const handleNext = () => {
    const { scrollLeft } = containerRef.current
    let target = scrollLeft + slideWidth()
    if (target > maxScroll()) target = 0      // wrap to first
    containerRef.current.scrollTo({ left: target, behavior: 'smooth' })
  }

  const goToProfile = () => {
    containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col h-screen">
    <Header goToProfile={() => goToProfile()} />    
    <div ref={containerRef} className="flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth h-screen scrollbar-hide">
      <Profil />
      <Projet_1 />
      <Projet_2 />
    </div>
      {/* arrows fixed in middle */}
      <div className="fixed inset-x-0 top-1/4 transform -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-white/80 dark:bg-black/80 p-2 rounded-full shadow"
        >
          <Image
            className="dark:invert rotate-180"
            src="/arrow.png"
            alt="Go left"
            width={23}
            height={5}
            priority
          />
        </button>

        <button
          onClick={handleNext}
          className="pointer-events-auto bg-white/80 dark:bg-black/80 p-2 rounded-full shadow"
        >
          <Image
            className="dark:invert"
            src="/arrow.png"
            alt="Go right"
            width={23}
            height={5}
            priority
          />
        </button>
      </div>
    <Footer className="fixed"/>
    </div>
  );
}
