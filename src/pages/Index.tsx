import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";

import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
};

export default Index;
