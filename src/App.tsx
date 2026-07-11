import "./styles.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Addons from "./Addons";
import Gallery from "./Gallery";
import WhyUs from "./WhyUs";
import Reviews from "./Reviews";
import Policies from "./Policies";
import Booking from "./Booking";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <main className="site">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Addons />
      <Gallery />
      <WhyUs />
      <Reviews />
      <Policies />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
