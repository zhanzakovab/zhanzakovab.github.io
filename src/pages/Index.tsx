import Layout from "@/components/Layout";
import PostEntry from "@/components/PostEntry";

// Sample data - in a real app, this would come from a CMS or API
const posts = [
  {
    id: 1,
    slug: "thoughts-on-modern-web-development-patterns",
    title: "Thoughts on modern web development patterns",
    excerpt: "Exploring the shift from complex frameworks to simpler, more maintainable approaches. Sometimes the best solution is the one that doesn't exist yet.",
    timestamp: "2024.01.15",
    type: "thought" as const,
    links: {
      github: "https://github.com/user/modern-web-patterns",
      linkedin: "https://linkedin.com/posts/user/modern-web-dev"
    }
  },
  {
    id: 2,
    slug: "case-study-redesigning-fintech-dashboard",
    title: "Case Study: Redesigning a fintech dashboard",
    excerpt: "How we improved user task completion rates by 40% through careful information architecture and progressive disclosure techniques.",
    timestamp: "2024.01.12",
    type: "case-study" as const,
    links: {
      linkedin: "https://linkedin.com/posts/user/fintech-dashboard",
      internalCaseStudy: true
    }
  },
  {
    id: 3,
    slug: "building-with-constraints",
    title: "Building with constraints",
    excerpt: "Why limitations often lead to more creative solutions. A reflection on working within technical and design boundaries.",
    timestamp: "2024.01.08",
    type: "idea" as const,
    links: {
      github: "https://github.com/user/constraint-examples"
    }
  },
  {
    id: 4,
    slug: "site-update-new-project-archive",
    title: "Site update: new project archive",
    excerpt: "Added a proper archive system for past work. Still keeping things minimal, but now with better discoverability.",
    timestamp: "2024.01.05",
    type: "update" as const,
    links: {}
  },
  {
    id: 5,
    slug: "on-digital-minimalism-in-design",
    title: "On digital minimalism in design",
    excerpt: "Less interface, more substance. Notes on creating digital experiences that respect attention and prioritize content.",
    timestamp: "2024.01.02",
    type: "thought" as const,
    links: {
      linkedin: "https://linkedin.com/posts/user/digital-minimalism",
      demo: ""
    }
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header section */}
        <header className="space-y-4">
          <h1 className="text-2xl font-medium text-foreground">
            digital journal
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            A collection of thoughts, case studies, and ideas. Everything I share across platforms 
            lives here first — consider this the source of truth for my work and thinking.
          </p>
        </header>

        {/* Recent posts */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-sm uppercase tracking-wider text-code-keyword font-medium">
              recent entries
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="space-y-4">
            {posts.map((post) => (
              <PostEntry
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                timestamp={post.timestamp}
                type={post.type}
                links={post.links}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
            Built with focus on speed, simplicity, and honest design.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;