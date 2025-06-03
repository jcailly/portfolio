import Image from "next/image";
import Link from "next/link";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function StackLogos() {
    return (
        <TooltipProvider>
        <div className="bg-[#F7F9FF] dark:bg-[#11131F] p-4 ml-8 mr-8 w-full shadow-md rounded-[8px]">
        <h2 className="text-xl flex mb-2">Stack:</h2>
        <div className="items-center justify-center gap-[10px] flex flex-wrap text-sm text-justify text-center text-center">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://go.dev/" target="_blank">
                        <Image src="/Golang_logo.png" width={75} height={75} alt="Golang logo" className="p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Golang</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://www.rust-lang.org/fr" target="_blank">
                        <Image src="/Rust_logo.png" width={75} height={75} alt="Rust logo" className="p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Rust</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://www.javascript.com/" target="_blank">
                        <Image src="/Javascript_colored_logo.png" width={75} height={75} alt="Javascript logo" className="p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Javascript</p>
                </TooltipContent>
            </Tooltip>
            
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://fr.react.dev/" target="_blank">
                        <Image src="/React_colored_logo.png" width={75} height={75} alt="React logo" className="logo-react p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>React</p>
                </TooltipContent>
            </Tooltip>

            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://nextjs.org/" target="_blank">
                        <Image src="/next.svg" width={75} height={75} alt="Next.js logo" className="dark:invert p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>NextJS</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://tailwindcss.com/" target="_blank">
                        <Image src="/Tailwind_colored_logo.png" width={75} height={75} alt="Tailwindcss logo" className="p-2 dark:invert"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>TailwindCSS</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://www.sqlite.org/" target="_blank">
                        <Image src="/SQLite_logo.png" width={100} height={100} alt="SQLite logo" className="p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>SQLite</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href="https://git-scm.com/" target="_blank">
                        <Image src="/Git_icon.svg.png" width={75} height={75} alt="Git logo" className="p-2"/>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Git</p>
                </TooltipContent>
            </Tooltip>
        </div>
        </div>
        </TooltipProvider>
    )
}