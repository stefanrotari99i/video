"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaVolumeHigh, FaVolumeOff } from "react-icons/fa6";

function VideoComponent({ src }: { src: string }) {
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "m") {
        setMuted((prev) => !prev);
      }
      if (e.key === " ") {
        if (isPlaying) {
          playerRef.current?.pause();
        } else {
          playerRef.current?.play();
        }
        setIsPlaying((prev) => !prev);
      }
    };
    return () => {
      document.onkeydown = null;
    };
  }, [isPlaying]);

  return (
    <div className="w-screen h-screen relative">
      <button
        className="bg-transparent focus:outline-none border-none absolute top-10 z-30 right-10"
        onClick={() => setMuted((prev) => !prev)}
      >
        {!muted ? (
          <FaVolumeHigh size={32} color={"#fff"} />
        ) : (
          <FaVolumeOff size={32} color={"#fff"} />
        )}
      </button>
      {!isPlaying && (
        <button
          className="bg-transparent focus:outline-none border-none absolute opacity-20  z-30 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => {
            playerRef.current?.play();
            setIsPlaying(true);
          }}
        >
          <FaPlay size={92} color={"#fff"} />
        </button>
      )}
      <video
        ref={playerRef}
        autoPlay
        loop
        playsInline
        muted={muted}
        aria-label={"Video PLayer"}
        className="w-screen h-screen object-cover"
      >
        <source type="video/mp4" src={src} />
      </video>
    </div>
  );
}

export default VideoComponent;
