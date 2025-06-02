// import { useRef } from 'react';
import Image from "next/image";
import Button from "../components/button.js"
import Link from "next/link.js";


export default function Header({ goToProfile }) {


    return (
        <header className="p-2
        fixed
        shadow-md
        bg-[#F7F9FF] dark:bg-[#11131F]
        items-center justify-between
        w-screen flex"
          >
            <Button onClick={goToProfile} text={"Profil"} />
            <div className="m-1 flex gap-[10px]">
              <Link href="https://github.com/jcailly?tab=repositories" target="_blank">
                <Image
                  className="dark:invert m-2"
                  src="/github_black.png"
                  alt="Github logo"
                  width={22}
                  height={5}
                  priority
                />
              </Link>
              <Link href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-cailly-605792155/" target="_blank">
                <Image
                  className="dark:invert m-2"
                  src="/linkedin-black.png"
                  alt="LinkedIn logo"
                  width={90}
                  height={19}
                  priority
                />
              </Link>
          </div>
        </header>
    )
}