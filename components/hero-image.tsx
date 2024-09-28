"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  return (
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={classNames(
          "bg-hero-gradient relative rounded-lg border border-transparent-white bg-white bg-opacity-[0.01]",
          inView
            ? "animate-image-rotate before:animate-image-glow"
            : "[transform:rotateX(25deg)]",
          "before:bg-hero-glow before:absolute before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(120px)]",
        )}
      >
        <img className="relative z-10" src="/img/hero.webp" alt="Hero image" />
      </div>
    </div>
  );
};
