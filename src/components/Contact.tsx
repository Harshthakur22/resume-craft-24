import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Open to opportunities and interesting conversations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:harshrajnita22@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      harshrajnita22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+919334805243"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-9334805243
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">NIT Agartala, Tripura, India</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/Harshthakur22" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/harsh-thakur-301544227/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Message */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Interested in collaboration, internship opportunities, or just want to chat about tech? 
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <Button className="w-full glow-effect" size="lg" asChild>
                  <a href="mailto:harshrajnita22@gmail.com?subject=Hello%20Harsh!">
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Usually responds within 24 hours
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  Currently pursuing B.Tech in Computer Science at NIT Agartala (2022-2026)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;