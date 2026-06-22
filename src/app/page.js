import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TechStackGrid from '@/components/TechStackGrid';
import EducationSection from '@/components/EducationSection';
import ContactForm from '@/components/ContactForm';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <TechStackGrid />
        <EducationSection />
        <ContactForm />
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}
