import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, Lightbulb } from "lucide-react";

const impacts = [
  {
    icon: Heart,
    title: "Random Hacks of Kindness",
    role: "Founder & Organizer (Queensland)",
    period: "2013 - 2018",
    description: "Brought the largest hackathon in Queensland to Brisbane, connecting technologists with changemakers to solve real-world problems from crisis mapping in Nepal to developing mentor platforms for migrants to Australia."
  },
  {
    icon: Users,
    title: "RHoK Steering Committee",
    role: "Committee Member (Australian Region)",
    period: "2013 - 2018",
    description: "Set regional goals, agreed on humanitarian challenges to tackle, established community standards, and secured annual corporate sponsors including Atlassian."
  },
  {
    icon: Globe,
    title: "Kiva Microfinance",
    role: "Long-term Monthly Lender",
    description: "Active supporter of microfinance initiatives, contributing to poverty alleviation in developing communities through small business loans."
  },
  {
    icon: Lightbulb,
    title: "International Development Focus",
    role: "Career Transition",
    description: "Dedicated to building a career in international development, leveraging technology and business expertise to help developing communities lift themselves out of poverty."
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Social Impact & Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about leveraging technology and business expertise for positive social change
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <Card 
                key={index}
                className="p-8 shadow-medium border-0 hover:shadow-strong transition-smooth group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth mb-4">
                    <impact.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {impact.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    {impact.role}
                  </p>
                  {impact.period && (
                    <p className="text-xs text-muted-foreground mb-3">
                      {impact.period}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 md:p-10 bg-primary/5 border-primary/20 shadow-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "Born and raised in Zimbabwe with extensive travel experience, I've always been driven to dedicate my career 
                to helping developing world communities lift themselves out of poverty. I believe in doing the 'right thing' 
                and bringing empathy, drive, and expertise to make a meaningful difference."
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Impact;
