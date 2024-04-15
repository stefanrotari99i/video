"use client";

import { FaVolumeHigh } from "react-icons/fa6";

const MutedButton = ({ muted, setMuted }) => {
  return (
    <button
      className="bg-transparent focus:outline-none border-none"
      onClick={() => {}}
    >
      <FaVolumeHigh size={32} color={"#fff"} />
    </button>
  );
};

export default MutedButton;
