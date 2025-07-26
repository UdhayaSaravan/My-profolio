import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BarChart3, ShoppingCart, CheckSquare } from 'lucide-react';
import dashboardImage from '@/assets/dashboard-project.jpg';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import taskManagementImage from '@/assets/task-management-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Blinkit Sales Dashboard",
      description: "Interactive Power BI dashboard visualizing sales performance and key KPIs with comprehensive data analysis and trend insights.",
      image: dashboardImage,
      icon: BarChart3,
      technologies: ["Power BI", "Data Analysis", "Data Visualization"],
      type: "Data Analytics",
      gradient: "from-primary to-tech-blue"
    },
    {
      title: "Amazon Sales Dashboard", 
      description: "Comprehensive dashboard providing insights and trends on e-commerce sales data with advanced analytics and reporting features.",
      image: dashboardImage,
      icon: BarChart3,
      technologies: ["Power BI", "Data Analysis", "E-commerce Analytics"],
      type: "Data Analytics",
      gradient: "from-tech-blue to-tech-purple"
    },
    {
      title: "Task Management Website",
      description: "A modern front-end interface for task tracking and productivity with intuitive user experience and responsive design.",
      image: taskManagementImage,
      icon: CheckSquare,
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      type: "Web Development",
      gradient: "from-tech-purple to-primary"
    },
    {
      title: "E-commerce Website",
      description: "Responsive and visually appealing online shopping experience with modern design principles and user-friendly interface.",
      image: ecommerceImage,
      icon: ShoppingCart,
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      type: "Web Development",
      gradient: "from-primary to-tech-blue"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-tech-blue bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects showcasing my technical skills and problem-solving approach
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-background/80 text-foreground">
                    {project.type}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-primary to-tech-blue text-primary-foreground hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;