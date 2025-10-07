import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently looking for new opportunities in data science, machine learning, and geospatial analysis. Let's connect!
            </p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle>Let's Build Something Together</CardTitle>
              <CardDescription>
                Available for full-time opportunities, internships, and collaborative projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Mail className="text-blue-400" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-mono text-sm">marahzwicker@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="text-cyan-400" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-mono text-sm">Berkeley, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:marahzwicker@gmail.com'}
                >
                  <Mail size={16} className="mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/mhzwicker', '_blank')}
                >
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://github.com/marzwick', '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </Button>
              </div>

              {/* Grid pattern decoration */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-center text-sm text-muted-foreground">
                  Passionate about applying machine learning to environmental and geospatial challenges
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
