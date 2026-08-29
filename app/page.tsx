import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { Certificates } from "@/components/sections/Certificates";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Impact } from "@/components/sections/Impact";
import { Work } from "@/components/sections/Work";
import { Videos } from "@/components/sections/Videos";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Certificates />
        <Process />
        <Testimonials />
        <WhyUs />
        <Impact />
        <Work />
        <Videos />
        <Faq />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
