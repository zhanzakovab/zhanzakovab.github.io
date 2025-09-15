import Layout from "@/components/Layout";

const projects = [
  {
    id: 1,
    slug: "fintech-dashboard-redesign",
    title: "fintech dashboard redesign",
    description: "Led the complete overhaul of a trading platform's interface, focusing on information density and user workflow optimization.",
    tech: ["React", "TypeScript", "D3.js", "Figma"],
    status: "completed",
    year: "2023",
    links: {
      github: "https://github.com/user/fintech-dashboard",
      linkedin: "https://linkedin.com/posts/user/fintech-case-study",
      internalCaseStudy: true,
      demo: "https://fintech-demo.vercel.app"
    }
  },
  {
    id: 2,
    slug: "healthcare-data-visualization",
    title: "healthcare data visualization",
    description: "Built interactive tools for medical professionals to analyze patient data patterns and treatment outcomes.",
    tech: ["Vue.js", "Python", "PostgreSQL", "Observable"],
    status: "completed",
    year: "2023",
    links: {
      github: "https://github.com/user/healthcare-viz",
      internalCaseStudy: true
    }
  },
  {
    id: 3,
    slug: "developer-collaboration-tools",
    title: "developer collaboration tools",
    description: "Creating better ways for remote teams to share context and make decisions asynchronously.",
    tech: ["Next.js", "WebRTC", "Redis", "WebSockets"],
    status: "in progress",
    year: "2024",
    links: {
      github: "https://github.com/user/collab-tools",
      demo: ""
    }
  },
  {
    id: 4,
    slug: "design-system-documentation",
    title: "design system documentation",
    description: "Comprehensive component library and guidelines for a growing product team.",
    tech: ["Storybook", "Sketch", "Tokens Studio", "Figma API"],
    status: "completed",
    year: "2023",
    links: {
      linkedin: "https://linkedin.com/posts/user/design-system",
      demo: "https://design-system.vercel.app"
    }
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
                  <a href={`/projects/${project.slug}`}>
                    <h2 className="post-title text-lg font-medium text-foreground transition-colors duration-200">
                      {project.title}
                    </h2>
                  </a>
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

              <a href={`/projects/${project.slug}`} className="block">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="text-xs text-code-comment opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-3">
                  → view details
                </div>
              </a>

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

              {project.links && Object.keys(project.links).length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/30">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
                    >
                      [→ GitHub]
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
                    >
                      [→ LinkedIn]
                    </a>
                  )}
                  {project.links.internalCaseStudy && (
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
                    >
                      [→ Internal Case Study]
                    </a>
                  )}
                  {project.links.demo && project.links.demo.trim() && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
                    >
                      [→ Demo]
                    </a>
                  )}
                </div>
              )}
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