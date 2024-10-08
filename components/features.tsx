import classNames from "classnames";
import { Container } from "./container";

type FeatureProps = {
  children: React.ReactNode;
  color: string;
};

export const Features = ({ children, color }: FeatureProps) => {
  return (
    <section
      className="flex flex-col items-center py-[12.8rem]"
      style={{ "--feature-color": color } as React.CSSProperties}
    >
      {children}
    </section>
  );
};

type FeatureTitleProps = {
  children: React.ReactNode;
};

const FeatureTitle = ({ children }: FeatureTitleProps) => {
  return (
    <h2 className="text-gradient mb-11 text-center text-6xl md:text-8xl">
      {children}
    </h2>
  );
};

type MainFeatureProps = {
  image: string;
  text: string;
};

const MainFeatures = ({ image, text }: MainFeatureProps) => {
  return (
    <div className="w-[78rem] max-w-[90%]">
      <Container>
        <div
          className={classNames(
            "relative z-10 rounded-[14px] backdrop-blur-[6px]",
            "before:feature-before before:pointer-events-none before:absolute before:inset-0",
            "after:feature-after after:pointer-events-none after:absolute after:inset-0",
          )}
        >
          <img src={image} className="h-auto w-full" />
        </div>
        <p className="mx-auto my-16 w-[80%] text-center text-4xl leading-tight text-white">
          {text}
        </p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </Container>
    </div>
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
    <div className="mb-[14rem] grid w-full grid-cols-3 gap-y-9 text-md text-primary-text">
      {features.map(({ title, text, icon: Icon }) => (
        <div
          key={title}
          className="max-w-[25.6rem] [&_svg]:mb-[2px] [&_svg]:mr-[6px] [&_svg]:inline [&_svg]:fill-white"
        >
          <Icon />
          <span className="text-white">{title}</span> {text}
        </div>
      ))}
    </div>
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
    <div className="grid w-full grid-cols-2 gap-6">
      {features.map(({ title, text, image, imageClassName }) => (
        <div
          key={title}
          className="bg-feature-gradient relative aspect-[1.1/1] overflow-hidden rounded-[4.8rem] border border-transparent-white p-14 before:absolute before:inset-0 before:bg-glass-gradient"
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
  );
};

Features.Main = MainFeatures;
Features.Title = FeatureTitle;
Features.Grid = FeatureGrid;
Features.Card = FeatureCards;
