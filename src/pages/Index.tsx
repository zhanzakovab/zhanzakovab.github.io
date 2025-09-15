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
      

        {/* About section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-sm uppercase tracking-wider text-code-keyword font-medium">
              about
            </h2>
            <div className="flex-1 h-px bg-border"></div>
          </div>
          
          <div className="prose prose-invert space-y-6 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              
            </p>

            <p>
              
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">currently</h3>
              <ul className="space-y-2 text-sm">
                <li>• </li>
                <li>• </li>
                <li>• </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">previously</h3>
              <ul className="space-y-2 text-sm">
                <li>• </li>
                <li>• </li>
                <li>• </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
             ©2025 Botakoz Zhanzakova
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;