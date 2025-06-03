import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Projet_1() {
    return (
    <section className="items-center justify-center
        snap-start pt-[100px] pb-[60px]
        flex-none flex-auto
        w-screen h-screen
        overflow-auto scrollbar-hide">
      <div className="flex justify-center p-4">
        <div className="max-w-[800px] w-full flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <h2 className="text-2xl text-center">Multiplayer-fps</h2>
      <Card>

      </Card>
      <Card>

      </Card>
      <div className="w-full max-w-3xl mx-auto my-8">
      <video
        controls
        className="w-full rounded-2xl shadow-lg"
        // If your file is public/example.mp4, point to "/example.mp4"
        src="/Multiplayer_fps_present.mp4"
      >
        {/* Fallback text for browsers that don't support <video> */}
        Your browser doesn’t support the video tag.
      </video>
    </div>
          <Card>

      </Card>
    </div>
    </div>
 
    </section>
    )
}