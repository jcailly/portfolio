// import './globals.css'
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
      <div className="bg-[#F7F9FF] dark:bg-[#11131F]
      row-start-3 flex gap-[24px] flex-wrap items-center justify-center mb-0 z-50">
        <div className="">Powered by:</div>
        <Link href="https://www.javascript.com" target="_blank">
          <Image
            className="dark:invert-0 invert m-2"
            src="/javascript-logo.png"
            alt="Javascript logo"
            width={22}
            height={5}
            priority
          />
        </Link>
        <Link href="https://react.dev" target="_blank"
            >
          <Image
            className="dark:invert-0 invert logo-react m-2"
            src="/react-native.png"
            alt="React logo"
            width={22}
            height={5}
            priority
          />
        </Link>
        <Link href="https://tailwindcss.com/" target="_blank"
            >
          <Image
            className="dark:invert-0 invert m-2"
            src="/tailwind_css.png"
            alt="TailwindCSS logo"
            width={22}
            height={5}
            priority
          />
        </Link>
      </div>
    )
}