import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import ServicesSection from "./components/sections/ServicesSection";
import About from "./components/sections/About";
import WhyChoose from "./components/sections/WhyChoose";
import TrustPartners from "./components/sections/TrustPartners";
import Statistics from "./components/sections/Statistics";
import Team from "./components/sections/Team";
import CaseStudies from "./components/sections/CaseStudies";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/layout/Footer";
import Locations from "./components/sections/Locations";

function App() {
  return (
    <>
      {/* Skip-to-content for keyboard / screen-reader users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <ServicesSection />
        <About />
        <WhyChoose />
        <TrustPartners />
        <Statistics />
        <Team />
        <FAQ />
        <CaseStudies />
        
      </main>
      <Footer />
      <Locations />
    </>
  );
}

export default App;