import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="gradient-hero min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              Bruce Stronge
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Tech Founder & CEO
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-white/80 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Brisbane, Australia</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span>15 Years Experience</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-strong font-medium"
              asChild
            >
              <a href="mailto:bstronge@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                bstronge@gmail.com
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              asChild
            >
              <a href="tel:+61404493409" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +61 404 493 409
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              asChild
            >
              <a href="https://linkedin.com/in/bruces" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
