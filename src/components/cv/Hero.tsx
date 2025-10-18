import { Mail, Phone, Linkedin, MapPin, Award, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Main content */}
            <div className="text-left animate-in fade-in slide-in-from-left-8 duration-1000">
              <Badge className="mb-6 bg-white/10 hover:bg-white/20 text-white border-white/20 px-4 py-2 text-sm font-medium">
                Available for New Opportunities
              </Badge>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
                Bruce Stronge
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-16 bg-white/80 rounded-full"></div>
                <p className="text-2xl md:text-3xl text-white/90 font-light">
                  Tech Founder & CEO
                </p>
              </div>

              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                Built and scaled Outfit.io to 70+ people, raising A$20M+ in venture capital 
                before successful acquisition by NYSE-listed Smartsheet. Now focused on international 
                development and social impact.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8 text-white/70">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Brisbane, Australia</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-strong font-semibold px-8 group"
                  asChild
                >
                  <a href="mailto:bstronge@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8"
                  asChild
                >
                  <a href="https://linkedin.com/in/bruces" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Right column - Key achievements */}
            <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-smooth hover:scale-105">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">A$20M+</div>
                <div className="text-sm text-white/70">Venture Capital Raised</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-smooth hover:scale-105 mt-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">70+</div>
                <div className="text-sm text-white/70">Team Members Led</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-smooth hover:scale-105 -mt-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">10 Years</div>
                <div className="text-sm text-white/70">CEO at Outfit.io</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-smooth hover:scale-105 mt-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white mb-1">Acquired</div>
                <div className="text-sm text-white/70">by Smartsheet (NYSE)</div>
              </div>
            </div>
          </div>

          {/* Contact info bar */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm animate-in fade-in duration-1000 delay-500">
            <a href="mailto:bstronge@gmail.com" className="hover:text-white transition-smooth flex items-center gap-2 group">
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              bstronge@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+61404493409" className="hover:text-white transition-smooth flex items-center gap-2 group">
              <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              +61 404 493 409
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://linkedin.com/in/bruces" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth flex items-center gap-2 group">
              <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
              linkedin.com/in/bruces
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-white/50 text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
