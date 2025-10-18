import { Mail, Phone, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/components/cv/Hero";
import About from "@/components/cv/About";
import Skills from "@/components/cv/Skills";
import Experience from "@/components/cv/Experience";
import Education from "@/components/cv/Education";
import Impact from "@/components/cv/Impact";
import Contact from "@/components/cv/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Impact />
      <Contact />
    </div>
  );
};

export default Index;
