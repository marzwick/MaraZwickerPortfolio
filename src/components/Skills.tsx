import { Database, Code, Map, Brain, Server, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "R", "SQL", "Julia", "Swift"],
    color: "text-cyan-400",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "Scikit-learn", "Deep Learning", "Neural Networks"],
    color: "text-purple-400",
  },
  {
    title: "Data Analysis",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis", "ETL Pipelines"],
    color: "text-blue-400",
  },
  {
    title: "Geospatial",
    icon: Map,
    skills: ["ESRI ArcGIS Suite", "QGIS", "Google Earth Engine", "ENVI", "Remote Sensing"],
    color: "text-green-400",
  },
  {
    title: "Tools & Platforms",
    icon: Server,
    skills: ["Git", "VS Code", "Jupyter", "Web Scraping", "Streamlit"],
    color: "text-orange-400",
  },
  {
    title: "Interests",
    icon: Layers,
    skills: ["Finance & Markets", "Meteorology", "Climate Analytics", "Fintech"],
    color: "text-pink-400",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for geospatial analysis, data science, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className={category.color} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted/50 rounded-md text-sm font-mono text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
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
