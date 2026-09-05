import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Services     from "@/components/Services";
import Portfolio    from "@/components/Portfolio";
import About        from "@/components/About";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ALDACODE",
    description: "Agencia de desarrollo web profesional en México",
    url: "https://aldacode.com",
    telephone: "+525573888094",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
    },
    founder: {
      "@type": "Person",
      name: "Omar Aldayr García Hernández",
    },
    sameAs: [
      "https://facebook.com/aldacode",
      "https://instagram.com/aldacode",
    ],
    priceRange: "$$",
    serviceType: [
      "Diseño Web",
      "Desarrollo Web",
      "E-Commerce",
      "SEO",
      "Mantenimiento Web",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ScrollReveal />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}