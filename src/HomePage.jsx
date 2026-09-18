import About from "./components/About";
import DonateCTA from "./components/DonateCTA";
import FocusAreas from "./components/FocusAreas";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImpactStats from "./components/ImpactStats";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <FocusAreas />
        <About />
        <Testimonial />
        <DonateCTA />
      </main>
      <Footer />
    </div>
  );
}
