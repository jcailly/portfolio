export default function Button({ onClick, text }) {
    return (
        <button
            onClick={onClick}
            className="pointer-events-auto
              m-2 p-2
              bg-[#EDF2FE] hover:bg-[#E6E7FF]
              dark:bg-[#182449] dark:hover:bg-[#1D2E62]
              transition-colors
              cursor-pointer
              font-[family-name:var(--font-geist-mono)]
              rounded-[8px]
              border-[1px] border-[#ABBDF9] dark:border-[#3A4F97]
              hover:ring-1 ring-[#8DA4EF] dark:ring-[#435DB1]">{text}
        </button>
    )
}