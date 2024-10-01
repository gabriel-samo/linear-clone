import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroTitleProps) => {
  return (
    <h1
      className={classNames(
        "text-gradient my-6 text-6xl md:text-[7rem] md:leading-[1.1] lg:text-8xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroSubtitleProps) => {
  return (
    <p
      className={classNames(
        "mb-12 text-lg text-primary-text md:text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
