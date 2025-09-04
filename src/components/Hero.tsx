import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import avatarImage from '@/assets/avatar.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="gradient-text">Harsh Raj</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Software Development Engineer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Computer Science student at NIT Agartala with expertise in full-stack development, 
                competitive programming, and building scalable web applications. Passionate about 
                creating impactful solutions with modern technologies.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="glass-card">
                <Mail className="w-4 h-4 mr-2" />
                harshrajnita22@gmail.com
              </Button>
              <Button variant="outline" size="sm" className="glass-card">
                <Phone className="w-4 h-4 mr-2" />
                +91-9334805243
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="glow-effect">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/Harshthakur22" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/harsh-thakur-301544227/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full glass-card p-4 animate-float">
                <img 
                  src={avatarImage} 
                  alt="Harsh Raj - Software Developer" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;