import { Hero } from "@/components/hero";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <div className="">
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero
            title="Linears is the better way to buid products"
            subtitle="Meet the new standard for modern software development. Streamline issues, sprints, and product roadmaps."
          />
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </div>
  );
}
