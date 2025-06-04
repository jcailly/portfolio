'use client';
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

import Image from "next/image";
import Link from "next/link.js";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button.jsx"




export default function Header({ goToProfile }) {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

    return (
        <header className="p-2
        fixed
        shadow-md
        bg-[#F7F9FF] dark:bg-[#11131F]
        items-center justify-between
        w-screen flex
        z-50"
          > <div className="flex items-center">
            <Button variant="personal" onClick={goToProfile}>Profil</Button>
            <div className="flex items-center space-x-2">
              {theme === "dark" ? (
                <MoonIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              )}

              <Switch
               checked={theme === "dark"}
                onCheckedChange={handleToggle}
                aria-label="Toggle Dark Mode"
                className="bg-gray-200 dark:bg-gray-600"
              />
            </div>

            </div>
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