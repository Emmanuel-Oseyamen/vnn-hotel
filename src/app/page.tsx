import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Amenities from "@/components/Amenities";
import BookingWidget from "@/components/BookingWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingWidget />
      <Rooms />
      <WhyChooseUs />
      <Amenities />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}