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
  return (
    <h1 className="text-gradient my-6 text-6xl md:text-8xl">{children}</h1>
  );
};

export const HeroSubtitle = ({ children }: HeroSubtitleProps) => {
  return (
    <p className="text-primary-text mb-12 text-lg md:text-xl">{children}</p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
