type FeatureProps = {
  children: React.ReactNode;
};

export const Features = ({ children }: FeatureProps) => {
  return (
    <section className="flex flex-col items-center py-[12.8rem]">
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
      <div className="">
        <img src={image} className="h-auto w-full" />
      </div>
      <p className="mx-auto mt-16 w-[80%] text-center text-4xl leading-tight text-white">
        {text}
      </p>
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
  return <div className="">Feature grid</div>;
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
  return <div className="">Feature card</div>;
};

Features.Main = MainFeatures;
Features.Title = FeatureTitle;
Features.Grid = FeatureGrid;
Features.Card = FeatureCards;
