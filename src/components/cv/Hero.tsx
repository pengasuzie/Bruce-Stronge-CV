import { Linkedin, MapPin } from "lucide-react";
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

          <div className="flex flex-col items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <a
              href="https://linkedin.com/in/bruces"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}bruce-profile.jpg`}
                  alt="Bruce Stronge - LinkedIn Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-strong transition-smooth group-hover:scale-105 group-hover:shadow-[0_20px_60px_-12px_rgba(255,255,255,0.4)]"
                />
                <div className="absolute bottom-2 right-2 bg-[#0A66C2] rounded-full p-2 border-2 border-white shadow-medium group-hover:scale-110 transition-smooth">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
