import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:6xl lg:text-7xl">
          GIA<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelieveable enormous
        </span>{" "}
        and accept all risk of becoming the local{" "}
        <span className="text-blue-400 font-medium">mass monstrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors
      </p>
      <button className="px-8 py-4 rounded-medium border-[2px] bg-slate-950 border-blue-400 border-solid blue-shadow">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
