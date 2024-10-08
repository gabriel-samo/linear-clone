"use client";

import classNames from "classnames";
import { Container } from "@/components/container";
import { useInView } from "react-intersection-observer";

type FeatureProps = {
  children: React.ReactNode;
  color: string;
  colorDark: string;
};

export const Features = ({ children, color, colorDark }: FeatureProps) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  return (
    <section
      ref={ref}
      className={classNames(
        "relative flex flex-col items-center overflow-x-hidden py-[12.8rem]",
        "before:feature-top-before before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:transition-[transform,opacity] before:duration-1000 before:ease-in",
        "after:bg-feature-gradient after:pointer-events-none after:absolute after:inset-0",
        inView
          ? "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]"
          : "before:rotate-180 before:opacity-40",
        // inView && "is-visible before:opacity-100",
        // !inView && "before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        } as React.CSSProperties
      }
    >
      <div className="my-[25.2rem]">{children}</div>
    </section>
  );
};

type MainFeatureProps = {
  image: string;
  text: string;
  title: React.ReactNode;
  imageSize?: "small" | "large";
};

const MainFeatures = ({
  image,
  text,
  title,
  imageSize = "small",
}: MainFeatureProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <Container
          className={classNames(
            "max-w-[90%] text-center",
            imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]",
          )}
        >
          <h2 className="text-gradient mb-11 translate-y-[40%] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:text-8xl [.is-visible_&]:translate-y-0">
            {title}
          </h2>
          <div
            className={classNames(
              "relative z-10 rounded-[14px] backdrop-blur-[6px]",
              "before:feature-before before:pointer-events-none before:absolute before:inset-0",
              "after:feature-after after:pointer-events-none after:absolute after:inset-0",
            )}
          >
            <img src={image} className="h-auto w-full" />
          </div>
        </Container>
      </div>
      <Container className="w-[78rem] max-w-[90%] text-center">
        <p className="mx-auto my-16 w-full text-xl leading-tight text-white md:w-[80%] md:text-4xl">
          {text}
        </p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </Container>
    </>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className="mb-[14rem] grid w-full grid-cols-2 place-items-center gap-x-4 gap-y-9 text-sm text-primary-text md:grid-cols-3 md:gap-x-0 md:text-md">
        {features.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mb-[2px] md:[&_svg]:mr-[6px] md:[&_svg]:inline"
          >
            <Icon />
            <span className="block text-white md:inline">{title}</span> {text}
          </div>
        ))}
      </div>
    </Container>
  );
};

type FeatureCardProps = {
  features: {
    image: string;
    imageClassName: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardProps) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {features.map(({ title, text, image, imageClassName }) => (
          <div
            key={title}
            className="bg-feature-card-gradient relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-transparent-white px-8 py-6 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14"
          >
            <h3 className="mb-2 text-2xl text-white">{title}</h3>
            <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
            <img
              src={image}
              alt={title}
              className={classNames("absolute max-w-none", imageClassName)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

Features.Main = MainFeatures;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
