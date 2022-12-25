import NavbarUs from '../../components/landingpageComponents/NavbarUs';
import HeroSection from '../../components/landingpageComponents/HeroSection';
import SectionBMI from '../../components/landingpageComponents/SectionBMI';
import AboutUs from '../../components/landingpageComponents/AboutUs';
import OurTeams from '../../components/landingpageComponents/Ourteams';
import Contact from '../../components/landingpageComponents/Contact';
import Footer from '../../components/landingpageComponents/Footer';

function LandingPage() {
  return (
    <div>
      <NavbarUs />
      <HeroSection />
      <SectionBMI />
      <AboutUs />
      <OurTeams />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
