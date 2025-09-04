import { Calendar, Building2, Code2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional journey and internships
          </p>
        </div>

        <div className="space-y-8">
          <Card className="glass-card card-hover">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-primary" />
                    National Informatics Centre (NIC)
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    Software Development Engineer Intern
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    May 2025 - July 2025
                  </div>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Enhanced modules for the <strong>Income Tax Portal</strong> using <strong>React.js (v16)</strong>, 
                  <strong> Spring Boot</strong>, <strong>PostgreSQL</strong>, and <strong>Tomcat</strong>, 
                  improving system scalability and reliability.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Optimized <strong>RESTful APIs</strong> and frontend state management to improve 
                  application responsiveness and ensure secure, efficient data handling.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Followed best practices in clean, unit-tested code using <strong>VS Code</strong>, 
                  contributing to production-ready deployment in a collaborative team environment.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;