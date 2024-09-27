import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linears is the better way
          <br className="hidden md:block" /> to buid products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <img src="/img/hero.webp" alt="Hero image" />
      </Hero>
    </Container>
  );
}
