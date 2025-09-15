import Layout from "@/components/Layout";

const projects = [
  {
    id: 1,
    title: "fintech dashboard redesign",
    description: "Led the complete overhaul of a trading platform's interface, focusing on information density and user workflow optimization.",
    tech: ["React", "TypeScript", "D3.js", "Figma"],
    status: "completed",
    year: "2023"
  },
  {
    id: 2,
    title: "healthcare data visualization",
    description: "Built interactive tools for medical professionals to analyze patient data patterns and treatment outcomes.",
    tech: ["Vue.js", "Python", "PostgreSQL", "Observable"],
    status: "completed",
    year: "2023"
  },
  {
    id: 3,
    title: "developer collaboration tools",
    description: "Creating better ways for remote teams to share context and make decisions asynchronously.",
    tech: ["Next.js", "WebRTC", "Redis", "WebSockets"],
    status: "in progress",
    year: "2024"
  },
  {
    id: 4,
    title: "design system documentation",
    description: "Comprehensive component library and guidelines for a growing product team.",
    tech: ["Storybook", "Sketch", "Tokens Studio", "Figma API"],
    status: "completed",
    year: "2023"
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium text-foreground">
            projects
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Selected work from recent years. Focus on tools that help people work better, 
            understand complex information, and collaborate more effectively.
          </p>
        </header>

        <section className="space-y-6">
          {projects.map((project) => (
            <article key={project.id} className="post-entry group space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="post-title text-lg font-medium text-foreground transition-colors duration-200">
                    {project.title}
                  </h2>
                  <span className={`text-xs px-2 py-1 rounded-sm font-mono ${
                    project.status === 'completed' 
                      ? 'bg-purple-dark text-purple-soft' 
                      : 'bg-muted text-code-keyword'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <span className="timestamp">{project.year}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs text-code-comment bg-code-background px-2 py-1 rounded-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-xs text-code-comment opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                → view details
              </div>
            </article>
          ))}
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
            Interested in working together? Most of my current availability goes to projects 
            focused on developer experience, data visualization, or design systems.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Projects;