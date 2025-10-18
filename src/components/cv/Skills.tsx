import { Card } from "@/components/ui/card";
import { Users, Briefcase, DollarSign, Target, Code, Globe } from "lucide-react";

const skills = [
  {
    icon: Users,
    title: "Management & Leadership",
    description: "Building and leading high-performing teams of up to 70 people across multiple departments"
  },
  {
    icon: Briefcase,
    title: "Stakeholder Engagement",
    description: "Managing relationships with boards, investors, enterprise clients, and government partners"
  },
  {
    icon: Target,
    title: "Enterprise Sales",
    description: "Selling software and services to Fortune 500 companies, universities, and banks"
  },
  {
    icon: DollarSign,
    title: "Capital Raising",
    description: "Successfully raised ~A$20M in venture capital from Australian and US investors"
  },
  {
    icon: Code,
    title: "Product Development",
    description: "Building and scaling SaaS platforms serving enterprise organizations globally"
  },
  {
    icon: Globe,
    title: "International Expansion",
    description: "Expanding operations into UK and US markets, navigating complex legal structures"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              15 years of expertise across technology, business, and leadership
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-medium transition-smooth border-border/50 group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
