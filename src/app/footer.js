// import './globals.css'
import Image from "next/image";


export default function Footer() {
    return (
      <footer className="bg-[#F7F9FF] dark:bg-[#11131F]
      row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="font-[family-name:var(--font-geist-mono)]">Powered by:</div>
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a> */}
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
        {/* <div className="dark:invert"> */}
        <a href="https://www.javascript.com" target="_blank">
          <Image
            className="dark:invert-0 invert m-2"
            src="/javascript-logo.png"
            alt="Javascript logo"
            width={22}
            height={5}
            priority
          />
        </a>
        <a href="https://react.dev" target="_blank"
            >
          <Image
            className="dark:invert-0 invert logo-react m-2"
            src="/react-native.png"
            alt="React logo"
            width={22}
            height={5}
            priority
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank"
            >
          <Image
            className="dark:invert-0 invert m-2"
            src="/tailwind_css.png"
            alt="TailwindCSS logo"
            width={22}
            height={5}
            priority
          />
        </a>
        {/* </div> */}
      </footer>
    )
}