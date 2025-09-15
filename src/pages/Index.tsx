import Layout from "@/components/Layout";
import PostEntry from "@/components/PostEntry";
import { Post } from "@/types/post";
import postsData from "@/data/posts.json";

// Load posts from JSON data
const posts: Post[] = postsData as Post[];

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