import React from "react";
import mainImage from "../assets/illustration-working.svg";

function Main() {
  return (
    <div className="mb-32 flex flex-col-reverse lg:mt-20 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <h1 className="mt-8 text-center text-4xl font-bold tracking-tight text-neutral_very_dark_violet lg:mt-0 lg:text-left lg:text-[70px] lg:leading-[4.6rem]">
          More than just shorter links
        </h1>
        <h2 className="mt-3 text-center text-sm font-medium leading-relaxed text-neutral_grayish_violet lg:text-left lg:text-base">
          Build your brand’s recognition and get detailed
          <br className="hidden lg:block" /> insights on how your links are
          performing.
        </h2>
        <button
          type="button"
          className="mt-8 rounded-full bg-primary_cyan px-8 py-2 text-base font-bold text-white hover:bg-opacity-60"
        >
          Get Started
        </button>
      </div>
      <div>
        <img src={mainImage} alt="illustration" className="lg:w-[800px]" />
      </div>
    </div>
  );
}

export default Main;
