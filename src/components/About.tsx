import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming complex ideas into intuitive digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final year B.Tech Information Technology student with a passion for creating 
              seamless digital experiences. As a Front-End Developer and Data Analyst, I enjoy 
              transforming complex ideas into intuitive and interactive solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity to understand how things work—and 
              quickly evolved into a drive to build applications and insights that create impact. 
              I focus on writing clean, maintainable code and constantly strive to learn new 
              tools and best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a problem solver, a team player, and someone who values clarity, creativity, 
              and continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-tech-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech Information Technology</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground">Clean, Maintainable Code</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-tech-purple to-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Teamwork</h3>
                <p className="text-sm text-muted-foreground">Collaborative Problem Solver</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-tech-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Creative Solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;