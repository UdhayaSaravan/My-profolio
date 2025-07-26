import { Button } from '@/components/ui/button';
import { Code, Database, BarChart3, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tech workspace" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-foreground">Hi, I'm </span>
                <span className="bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">
                  Udhaya Saravanan.G
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Front-End Developer & Data Analyst
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Final year B.Tech IT student passionate about creating seamless digital experiences 
                and transforming complex data into actionable insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Front-End Dev</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                <Database className="w-5 h-5 text-tech-blue" />
                <span className="text-sm font-medium">Data Analyst</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border">
                <BarChart3 className="w-5 h-5 text-tech-purple" />
                <span className="text-sm font-medium">Data Viz</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-primary to-tech-blue text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4">
              <a 
                href="mailto:udhaya.intern@gmail.com"
                className="p-3 bg-card/50 backdrop-blur-sm rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/UdhayaSaravan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/50 backdrop-blur-sm rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/udhaya-saravanan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/50 backdrop-blur-sm rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-primary to-tech-blue rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      US
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Udhaya Saravanan.G</h3>
                      <p className="text-muted-foreground">B.Tech IT Student</p>
                      <p className="text-sm text-muted-foreground">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;