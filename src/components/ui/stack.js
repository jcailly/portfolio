import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "./card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LOGO_MAP = {
  Golang: {
    href: "https://go.dev/",
    src: "/Golang_logo.png",
    alt: "Golang logo",
    width: 75,
    height: 75,
    tooltip: "Golang",
    imgClass: "p-2",
  },
  Rust: {
    href: "https://www.rust-lang.org/fr",
    src: "/Rust_logo.png",
    alt: "Rust logo",
    width: 75,
    height: 75,
    tooltip: "Rust",
    imgClass: "p-2",
  },
  JavaScript: {
    href: "https://www.javascript.com/",
    src: "/Javascript_colored_logo.png",
    alt: "JavaScript logo",
    width: 75,
    height: 75,
    tooltip: "JavaScript",
    imgClass: "p-2",
  },
  React: {
    href: "https://fr.react.dev/",
    src: "/React_colored_logo.png",
    alt: "React logo",
    width: 75,
    height: 75,
    tooltip: "React",
    imgClass: "logo-react p-2",
  },
  NextJS: {
    href: "https://nextjs.org/",
    src: "/next.svg",
    alt: "Next.js logo",
    width: 75,
    height: 75,
    tooltip: "Next.js",
    imgClass: "dark:invert p-2",
  },
  TailwindCSS: {
    href: "https://tailwindcss.com/",
    src: "/Tailwind_colored_logo.png",
    alt: "TailwindCSS logo",
    width: 75,
    height: 75,
    tooltip: "TailwindCSS",
    imgClass: "p-2 dark:invert",
  },
  SQLite: {
    href: "https://www.sqlite.org/",
    src: "/SQLite_logo.png",
    alt: "SQLite logo",
    width: 75,
    height: 75,
    tooltip: "SQLite",
    imgClass: "p-2",
  },
  Git: {
    href: "https://git-scm.com/",
    src: "/Git_icon.svg.png",
    alt: "Git logo",
    width: 75,
    height: 75,
    tooltip: "Git",
    imgClass: "p-2",
  },
  Bevy: {
    href: "https://bevyengine.org/",
    src: "/Bevy_logo.png",
    alt: "Bevy logo",
    width: 75,
    height: 75,
    tooltip: "Bevy",
    imgClass: "p-2",
  },
  Docker: {
    href: "https://www.docker.com/",
    src: "/Docker_logo.png",
    alt: "Docker logo",
    width: 75,
    height: 75,
    tooltip: "Docker",
    imgClass: "p-2",
  }
};

export default function StackLogos({ items = Object.keys(LOGO_MAP) }) {
  return (
    <TooltipProvider>
      <Card>
        <h2 className="text-xl flex mb-2 font-bold">Stack:</h2>
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm">
          {items.map((key) => {
            const info = LOGO_MAP[key];
            if (!info) {
              return null;
            }
            return (
              <Tooltip key={key}>
                <TooltipTrigger asChild>
                  <Link href={info.href} target="_blank" rel="noopener" className="p-2 hover:shadow-md hover:ring-[1px] ring-[#304384] dark:hover:shadow-[#304384] rounded-full">
                    <Image
                      src={info.src}
                      width={info.width}
                      height={info.height}
                      alt={info.alt}
                      className={info.imgClass}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{info.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </Card>
    </TooltipProvider>
  );
}
