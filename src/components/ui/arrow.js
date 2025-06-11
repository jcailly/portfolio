import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Image from "next/image";

export default function Arrow({
    handlePrev,
    handleNext,
    getPrevTooltipText,
    getNextTooltipText,
    setTooltipText,
    tooltipText
  }) {
    return (
    <TooltipProvider>
      <div className="fixed inset-x-0 top-[110px] transform -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
      <Tooltip>
        <TooltipTrigger asChild>
        <button
          onClick={handlePrev}
          onMouseEnter={() => setTooltipText(getPrevTooltipText())}
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
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
        </Tooltip>
        <Tooltip>
        <TooltipTrigger asChild>
        <button
          onClick={handleNext}
          onMouseEnter={() => setTooltipText(getNextTooltipText())}
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
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
        </Tooltip>
      </div>
      </TooltipProvider>
    )
}