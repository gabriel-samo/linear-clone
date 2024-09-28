import { Container } from "@/components/container";
import { ChevronIcon } from "@/components/icons/chevron";
import { Button, IconWrapper } from "@/components/button";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button
          className="animate-fade-in"
          varient="secondary"
          size="small"
          href="/"
        >
          Linear 2022 Release - Build for scale <IconWrapper>→</IconWrapper>
        </Button>
        <HeroTitle className="animate-fade-in translate-y-[-1rem] opacity-0 [--animation-delay:200ms]">
          Linears is the better way
          <br className="hidden md:block" /> to buid products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in opacity-0 [--animation-delay:200ms] [--animation-delay:400ms]">
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Button
          className="animate-fade-in opacity-0 [--animation-delay:200ms] [--animation-delay:600ms]"
          varient="primary"
          size="large"
          href="/"
        >
          Get Started{" "}
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
        <img className="mt-[12.8rem]" src="/img/hero.webp" alt="Hero image" />
      </Hero>
    </Container>
  );
}
