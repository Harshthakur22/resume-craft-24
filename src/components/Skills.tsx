import { Code, Database, Globe, GitBranch, Settings, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["C", "C++", "JavaScript", "SQL"],
      color: "text-primary"
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="w-5 h-5" />,
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
      color: "text-accent"
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "PostgreSQL"],
      color: "text-primary"
    },
    {
      title: "Security & Auth",
      icon: <Shield className="w-5 h-5" />,
      skills: ["JWT Security", "Authentication & Authorization", "HTTPS/SSL/TLS", "Cryptography"],
      color: "text-accent"
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="w-5 h-5" />,
      skills: ["Git", "GitHub", "Docker", "VS Code", "Figma"],
      color: "text-primary"
    },
    {
      title: "Computer Science",
      icon: <Settings className="w-5 h-5" />,
      skills: ["DSA", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card card-hover">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className={`${category.color}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;