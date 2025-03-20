import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-cream">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
