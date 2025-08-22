import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AdvancedSearch from "./components/AdvanceSearch";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import CTAWidget from "./components/CTAWidget";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <AdvancedSearch/>
        <Services/>
        <Team/>
        <Testimonials/>
        <Contact/>
        <CTAWidget/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
