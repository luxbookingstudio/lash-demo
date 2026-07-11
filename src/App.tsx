import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Addons from "./components/Addons";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import Reviews from "./components/Reviews";
import Policies from "./components/Policies";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
