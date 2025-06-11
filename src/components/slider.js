import Arrow from "./ui/arrow";

export default function Slider({ id, children }) {
    return (
        <div id={id} className="flex flex-row relative z-10 overflow-x-auto snap-x snap-mandatory scroll-smooth h-screen scrollbar-hide items-center">
            { children }
        </div> 
    )
}