import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how I can contribute to your organization
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <a 
              href="mailto:bstronge@gmail.com"
              className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-medium transition-smooth group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-medium">bstronge@gmail.com</div>
              </div>
            </a>

            <a 
              href="tel:+61404493409"
              className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-medium transition-smooth group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-muted-foreground mb-1">Phone</div>
                <div className="text-foreground font-medium">+61 404 493 409</div>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/bruces"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-medium transition-smooth group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</div>
                <div className="text-foreground font-medium">linkedin.com/in/bruces</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                <div className="text-foreground font-medium">Brisbane, Australia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Bruce Stronge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
