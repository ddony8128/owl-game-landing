import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Seasons from "@/components/Seasons";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Highlights />
      <Seasons />
      <Reservation />
      <Footer />
    </main>
  );
}
