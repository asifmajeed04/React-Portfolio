import { ArrowRight } from "lucide-react";

const projects = [
  // Add project objects here
  {
    id: 1,
    name: "Navanirmithi",
    description:
      "Construction company website showcasing services, projects, and modern responsive design.",
    imageUrl: "/projects/navanirmathi.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    projectUrl: "https://navanirmithi.co.in/",
  },
  {
    id: 2,
    name: "Network Intrusion Detection System (NIDS) - DSSTE",
    description:
      "Machine-learning NIDS using DSSTE for optimized feature selection and attack detection.",
    imageUrl: "/projects/net.png",
    tags: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "NSL-KDD",
      "Feature Selection",
      "DSSTE",
      "Random Forest",
      "XGBoost",
    ],
    projectUrl: "https://github.com/asifmajeed04/Intrusion-detection-System",
  },
  {
    id: 3,
    name: "Currency-Converter",
    description:
      "Convert currencies by selecting the source currency and the target currency, fetching real-time exchange rates from an external API.",
    imageUrl: "/projects/Converter.png",
    tags: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "NSL-KDD",
      "Feature Selection",
      "DSSTE",
      "Random Forest",
      "XGBoost",
    ],
    projectUrl: "https://asifmajeed04.github.io/Currency-Converter/",
  },
  {
    id: 4,
    name: "Food-Recipe-App",
    description:
      "A web application that allows users to search for food recipes by entering ingredients, fetching data from a recipe API.",
    imageUrl: "/projects/foodrecipe.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Edamam API"],
    projectUrl: "https://github.com/asifmajeed04/foodRecipe",
  },
  {
    id: 5,
    name: "The Hammer",
    description:
      "Online bidding platform for any items, enabling users to place bids and manage auctions.",
    imageUrl: "/projects/hammer.jpg",
    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    projectUrl: "https://github.com/asifmajeed04/Hammer",
  },
  {
    id: 6,
    name: "Nike-Clone",
    description:
      "A responsive e-commerce website clone of Nike, featuring product listings, shopping cart",
    imageUrl: "/projects/Nike-Clone.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    projectUrl: "https://asifmajeed04.github.io/Nike-Just-Do-It/",
  },
  {
    id: 7,
    name: "SaaS Landing Page",
    description: "A modern landing page app using React and Tailwind CSS.",
    imageUrl: "/projects/edge.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "Supabase"],
    projectUrl: "https://github.com/asifmajeed04/",
  },
  {
    id: 8,
    name: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imageUrl: "/projects/Portfolio.png",
    tags: ["Flutter", "Dart", "Firebase"],
    projectUrl: "https://asifmajeed04.github.io/editedhtml.github.io/",
  },
  {
    id: 9,
    name: "Tic-Tac-Toe Game",
    description:
      "A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
    imageUrl: "/projects/tictac.png",
    tags: ["HTML", "CSS", "JavaScript"],
    projectUrl: "https://asifmajeed04.github.io/Tic-Tac-Toe/",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured<span className="text-primary">Project</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each projects was carefully
          crafted with attention to detail,performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="block h-48 md:h-56 lg:h-64 overflow-hidden"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/asifmajeed04"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
