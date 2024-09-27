interface HeroProps {
  children: React.ReactNode;
}

interface HeroTitleProps {
  children: React.ReactNode;
}

interface HeroSubtitleProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroTitleProps) => {
  return <h1 className="my-6 text-5xl">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeroSubtitleProps) => {
  return <p className="mb-12 text-lg">{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
