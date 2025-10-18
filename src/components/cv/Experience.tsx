import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Founder & CEO",
    company: "Outfit.io",
    acquisition: "Acquired by Smartsheet",
    location: "Brisbane, Australia",
    period: "Jan 2014 - Jul 2023",
    duration: "9 years 7 months",
    highlights: [
      "Started and grew a software startup to 70 people and sold to a US public company (NYSE: SMAR) after 10 years of growth",
      "Built a SaaS platform to help large organizations manage their brands digitally",
      "Hired and developed high-performing teams in software development, sales, customer success, finance and operations",
      "Secured enterprise clients including Commonwealth Bank of Australia, Bendigo Bank, Deakin University and Monash University",
      "Delivered enterprise projects successfully to strict timelines and budgets, with clients spending up to A$500k per year",
      "Raised approximately A$20M in venture capital from Australian and US investors",
      "Expanded business into UK and US markets, navigating complex legal and corporate structures",
      "Successfully sold company to NYSE-listed Smartsheet in Seattle in 2022"
    ]
  },
  {
    title: "Founder & CEO",
    company: "NetEngine",
    location: "Brisbane, Australia",
    period: "Nov 2007 - Feb 2017",
    duration: "9 years 4 months",
    highlights: [
      "Founded and scaled a software development agency delivering tailored solutions to government, startups, and industry",
      "Managed recruitment, grant applications, leasing, procurement, and project budgets and timelines",
      "Grew the team to 20 people while maintaining profitability every month with satisfied clients",
      "Strong focus on culture and training, fostering team development and excellence",
      "Successfully sold the company to focus on launching Outfit, an enterprise brand automation product developed in-house"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Building and scaling successful technology companies
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 md:p-10 shadow-medium border-0 hover:shadow-strong transition-smooth animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <p className="text-lg font-semibold text-primary">
                            {exp.company}
                          </p>
                          {exp.acquisition && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
                                {exp.acquisition}
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <span className="text-xs">{exp.duration}</span>
                    <span className="text-xs mt-1">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
