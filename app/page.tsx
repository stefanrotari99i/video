import VideoComponent from "@/components/video-component";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { FaHeart } from "react-icons/fa6";

const getBlobs = async () => {
  const response = await fetch(process.env.URL + "/get-blobs", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default async function Home() {
  const blobs = await getBlobs();

  return (
    <div className="w-screen h-screen relative">
      <div className="bg-gradient-to-tr absolute left-0 bottom-0 from-neutral-950/50 to-transaprent w-screen h-screen z-20 pointer-events-none" />
      <div className="absolute inset-10 flex flex-col justify-end items-start z-30">
        <div className="w-full flex items-end justify-between">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-4xl font-bold text-center">
              Kung Fu Panda 4 Video Trailer
            </h1>
            <p className="text-md text-center font-medium text-muted-foreground">
              #kungfupanda #kungfupanda4 #kungfupandatrailer
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <Link
              href={blobs[0].downloadUrl}
              passHref
              prefetch={false}
              target="_blank"
            >
              <DownloadIcon size={32} color={"#fff"} />
            </Link>
            <div className="flex flex-col items-center justify-center gap-2">
              <button className="bg-transparent focus:outline-none border-none">
                <FaHeart size={32} color={"#fff"} className={"animate-pulse"} />
              </button>
              <p className="text-xs uppercase text-center text-foreground">
                100.2k
              </p>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <VideoComponent src={blobs[0].url} />
      </Suspense>
    </div>
  );
}
