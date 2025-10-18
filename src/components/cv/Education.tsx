import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Commerce",
    field: "Business Finance & Economics",
    institution: "University of Natal, South Africa",
    period: "1996 - 1998",
    icon: GraduationCap
  },
  {
    degree: "MCSE",
    field: "Microsoft Certified Systems Engineer",
    institution: "Microsoft Certification",
    icon: Award
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-8 shadow-medium border-0 hover:shadow-strong transition-smooth animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {edu.field}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    {edu.period && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.period}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
