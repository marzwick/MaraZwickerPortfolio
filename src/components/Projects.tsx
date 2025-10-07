import { ExternalLink, Github, Map, BarChart3, Brain, Satellite, Waves, Activity, Microscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Climate-Conscious GPU Optimizer",
    description: "Built Streamlit application for multi-criteria optimization across 1000+ cloud GPU instances, balancing environmental impact, performance, and cost constraints. Deployed production application with caching optimization reducing computation time by 85%.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
    tags: ["Python", "Streamlit", "NetworkX", "Optimization"],
    icon: BarChart3,
    github: "https://github.com/marzwick/gpu_optimizer",
    demo: "",
    date: "June 2025"
  },
  {
    title: "Neural Network Bathymetric Reconstruction System",
    description: "Developed custom U-Net architecture for spatial interpolation of missing data in incomplete NOAA bathymetric datasets. Achieved 0.0294 MAE in out-of-sample terrain prediction using ensemble methodology with uncertainty quantification.",
    image: "/images/advanced_bathymetry_results.png",
    tags: ["Python", "TensorFlow", "Keras", "U-Net"],
    icon: Waves,
    github: "",
    demo: "",
    date: "March 2025"
  },
  {
    title: "Rancho Palos Verdes Landslide Susceptibility Analysis",
    description: "Performed time series analysis on 18-year terrain evolution data (2000-2018) to model dynamic risk exposure in coastal regions. Developed multi-factor risk model in R incorporating slope dynamics, geological proximity, and hydrological patterns.",
    image: "https://images.unsplash.com/photo-1643585816267-88f72ea031df?w=800&auto=format&fit=crop",
    tags: ["R", "ArcGIS", "QGIS", "Statistical Analysis"],
    icon: Map,
    github: "",
    demo: "",
    date: "February 2025"
  },
  {
    title: "Magnetic Nanoparticle-Virus Binding Analysis",
    description: "Developed automated quantitative analysis pipeline for microscopy images to measure particle clustering and binding efficiency. Implemented computer vision algorithms using OpenCV for feature extraction and statistical pattern recognition.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
    tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    icon: Microscope,
    github: "",
    demo: "",
    date: "May 2023 - Feb 2024"
  },
  {
    title: "San Francisco Earthquake Simulator",
    description: "Interactive earthquake simulation and damage assessment tool for San Francisco. Visualizes seismic impact across different magnitude scenarios with geographic analysis.",
    image: "/images/earthquake_gis_map_M7.0.png",
    tags: ["Python", "Geospatial", "Visualization"],
    icon: Activity,
    github: "https://github.com/marzwick/earthquakesimulator",
    demo: "",
    date: "2025"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of GIS and data science projects, from spatial analysis to machine learning applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="flex-1">{project.title}</CardTitle>
                    <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
