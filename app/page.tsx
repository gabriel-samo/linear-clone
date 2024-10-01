import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { HeroImage } from "@/components/hero-image";
import { ChevronIcon } from "@/components/icons/chevron";
import { Button, IconWrapper } from "@/components/button";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { StarsIllustration } from "@/components/icons/stars";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
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
            <HeroTitle className="translate-y-[-1rem] animate-fade-in tracking-tighter opacity-0 [--animation-delay:200ms]">
              Linears is the better way
              <br className="hidden md:block" /> to buid products
            </HeroTitle>
            <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubtitle>
            <Button
              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
              varient="primary"
              size="large"
              href="/"
            >
              Get Started{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded relative my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:-left-1/2 after:top-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
        )}
      >
        <StarsIllustration />
      </div>
    </>
  );
}
