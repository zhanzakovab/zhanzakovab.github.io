import Layout from "@/components/Layout";
import PostEntry from "@/components/PostEntry";
import { Post } from "@/types/post";
import postsData from "@/data/posts.json";

// Load all posts from JSON data
const posts: Post[] = postsData as Post[];

const Projects = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium text-foreground">
            projects
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            
          </p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-sm uppercase tracking-wider text-code-keyword font-medium">
              all entries
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="space-y-4">
            {posts
              .sort((a, b) => {
                // Convert "2025.08.17" to "2025-08-17" for proper Date parsing
                const dateA = new Date(a.timestamp.replace(/\./g, '-'));
                const dateB = new Date(b.timestamp.replace(/\./g, '-'));
                return dateB.getTime() - dateA.getTime();
              })
              .map((post) => (
                <PostEntry
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  timestamp={post.timestamp}
                  type={post.type}
                  tags={post.tags}
                  links={post.links}
                />
              ))}
          </div>
        </section>

        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
            ©2025 Botakoz Zhanzakova
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Projects;