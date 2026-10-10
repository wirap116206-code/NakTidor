import AboutSection from "@/components/homepage/AboutSection";
import ContactSection from "@/components/homepage/ContactSection";
import FaqSection from "@/components/homepage/FaqSection";
import Footer from "@/components/homepage/Footer";
import HeroSection from "@/components/homepage/HeroSection";
import Navbar from "@/components/homepage/Navbar";

export default function Home() {
  return <>
  <Navbar  />
  <HeroSection/>
  <AboutSection/>
  <FaqSection/>
  <ContactSection/>
  <Footer/>
  </>
}
