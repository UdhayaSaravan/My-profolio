import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "HTML", "CSS", "MySQL"],
      gradient: "from-primary to-tech-blue"
    },
    {
      title: "Data Analytics",
      icon: Database,
      skills: ["MySQL", "MS Excel", "Google Sheets"],
      gradient: "from-tech-blue to-tech-purple"
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Tableau"],
      gradient: "from-tech-purple to-primary"
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git & GitHub", "VS Code", "IntelliJ IDEA"],
      gradient: "from-primary to-tech-blue"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and analyzing data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Continuously learning and growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;