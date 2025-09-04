import { ExternalLink, Github, Rocket, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "CareerSync-NITA",
      description: "High-impact web application connecting students with internships, jobs, and hackathons",
      icon: <Rocket className="w-6 h-6" />,
      highlights: [
        "Boost in job match accuracy and increase in daily active users",
        "Secure email-based OTP authentication",
        "Enhanced search and filtering UI for improved usability"
      ],
      tech: ["React.js", "JavaScript", "MongoDB", "Express.js", "JWT", "Cloudinary", "bcrypt", "Nodemailer"],
      github: "https://github.com/Harshthakur22/CareerSync-NITA",
      demo: ""
    },
    {
      title: "HomeHunt",
      description: "Location-aware real estate platform built with MERN stack",
      icon: <Home className="w-6 h-6" />,
      highlights: [
        "Responsive UI with Tailwind CSS and Redux state management",
        "Real-time chat between users via Socket.io",
        "Secure image uploads using Multer"
      ],
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux", "Socket.io", "Node.js", "Express.js", "MongoDB", "Prisma"],
      github: "https://github.com/Harshthakur22/HomeHunt",
      demo: ""
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Building scalable solutions with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card card-hover h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        {project.icon}
                      </div>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;