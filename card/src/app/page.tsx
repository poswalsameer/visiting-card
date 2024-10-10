"use client";

import { Tilt } from "react-tilt";

export default function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets
    scale: 1.0, // No scaling, keep the scale at 1
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit
    axis: null, // What axis should be disabled. Can be X or Y
    reset: true, // Reset the tilt on exit
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900">
      <Tilt
        options={defaultOptions}
        className="flex justify-center items-center h-[80%] w-[80%]"
      >
        <div className="h-[80%] w-[80%] bg-black border-2 border-gray-500 rounded-2xl shadow-2xl flex justify-center items-center">
          {/* Content inside Tilt */}
        </div>
      </Tilt>
    </div>
  );
}
