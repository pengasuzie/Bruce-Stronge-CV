import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 shadow-medium border-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I'm a passionate entrepreneur and leader with <strong className="text-foreground">15 years of experience</strong> building 
                and scaling successful software companies. As the Founder & CEO of <strong className="text-foreground">Outfit.io</strong>, 
                I grew the company from inception to a team of 70 people before successfully selling to NYSE-listed Smartsheet in 2022.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Throughout my career, I've developed expertise in <strong className="text-foreground">enterprise software sales</strong>, 
                securing major clients including Commonwealth Bank of Australia, Bendigo Bank, Deakin University, and Monash University. 
                I raised approximately <strong className="text-foreground">A$20 million in venture capital</strong> from Australian and 
                US investors, and successfully expanded operations into the UK and US markets.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Born and raised in Zimbabwe with extensive international travel experience, I'm now focused on dedicating my career 
                to <strong className="text-foreground">international development and social impact</strong>. I believe in leveraging 
                technology and business acumen to help developing communities lift themselves out of poverty.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
