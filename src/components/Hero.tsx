import { ArrowDown, MapPin, Code2 } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5" />
      </div>

      {/* Coordinate lines */}
      <div className="absolute top-20 left-0 right-0 flex justify-between px-8 opacity-20">
        <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
          <MapPin size={12} />
          <span>LAT: 37.8716° N</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
          <MapPin size={12} />
          <span>LONG: 122.2727° W</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-sm text-blue-400 font-mono">BS Geographic Information Systems • Data Science & Geospatial Data Science Certificate</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Mara Zwicker
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Data Intern @ Tiny Earth | University of Wisconsin-Madison
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            Division 1 Student-Athlete • FinTech@UW Technology Committee
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              View Projects
              <ArrowDown size={16} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground font-mono">
            <span className="px-3 py-1 bg-muted/50 rounded-md">Python</span>
            <span className="px-3 py-1 bg-muted/50 rounded-md">TensorFlow</span>
            <span className="px-3 py-1 bg-muted/50 rounded-md">R</span>
            <span className="px-3 py-1 bg-muted/50 rounded-md">ArcGIS</span>
            <span className="px-3 py-1 bg-muted/50 rounded-md">QGIS</span>
            <span className="px-3 py-1 bg-muted/50 rounded-md">SQL</span>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
}
