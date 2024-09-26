import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <div className="">
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linears is the better way
              <br /> to buid products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development.
              <br /> Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <img src="/img/hero.webp" alt="Hero image" />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
  );
}
