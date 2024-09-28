"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { CSSProperties, useEffect, useRef, useState } from "react";

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

interface Line {
  id: string;
  direction: "to right" | "to bottom";
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            duration: generateRandomNumber(1300, 3500),
            size: generateRandomNumber(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);

        renderLine(generateRandomNumber(800, 2500));
      }, timeout);
    };

    renderLine(generateRandomNumber(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [inView, setLines]);

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
        <div className="absolute left-0 top-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "bg-glow-lines absolute top-0 block",
                line.direction === "to right" &&
                  `animate-glow-line-horizontal left-0 h-[1px] w-[calc(var(--size)*1rem)]`,
                line.direction === "to bottom" &&
                  `animate-glow-line-vertical right-0 h-[calc(var(--size)*1rem)] w-[1px]`,
              )}
            />
          ))}
        </div>

        <svg
          className={classNames(
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1] [&_path]:[strokeOpacity:0.2]",
            inView && "[&_path]:animate-sketch-lines",
          )}
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <img
          className={classNames(
            "relative z-10 transition-opacity delay-[680ms]",
            inView ? "opacity-100" : "opacity-0",
          )}
          src="/img/hero.webp"
          alt="Hero image"
        />
      </div>
    </div>
  );
};
