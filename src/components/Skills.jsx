import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: "98", category: "frontend" },
  { name: "JavaScript", level: "90", category: "frontend" },
  { name: "React", level: "100", category: "frontend" },
  { name: "TypeScript", level: "68", category: "frontend" },
  { name: "Tailwind CSS", level: "85", category: "frontend" },
  { name: "Next.js", level: "80", category: "frontend" },

  // Backend
  { name: "Node.js", level: "78", category: "backend" },
  { name: "Express", level: "90", category: "backend" },
  { name: "MongoDB", level: "80", category: "backend" },
  { name: "API Development & Integration", level: "80", category: "backend" },
  // added

  // Tools
  { name: "Git/GitHub", level: "90", category: "tools" },
  { name: "Docker", level: "65", category: "tools" },
  { name: "VS Code", level: "100", category: "tools" },
  { name: "Postman", level: "95", category: "tools" },
  { name: "Excel", level: "70", category: "tools" },
  { name: "Cloud Deployment", level: "86", category: "tools" },
  // added

  // Editing & Design
  { name: "Figma", level: "75", category: "editing" },
  { name: "Photoshop", level: "100", category: "editing" },
  { name: "Canva", level: "100", category: "editing" },
  { name: "DaVinci Resolve", level: "80", category: "editing" },
  { name: "Adobe Premiere Pro", level: "80", category: "editing" },
];

const categories = ["all", "frontend", "backend", "tools", "editing"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
    
  
  const filteredSkills =skills.filter((skill) =>
      activeCategory === "all" ? true : skill.category === activeCategory
    );


  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80 hover:text-white"
              )}
            >
              {" "}
              {category}{" "}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 cl>{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 rounded-full h-2 mb-4 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
