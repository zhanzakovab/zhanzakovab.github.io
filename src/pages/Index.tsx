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
              I build digital products with a focus on thoughtful design and clean code. 
              Currently working on projects that sit at the intersection of technology and human experience.
            </p>

            <p>
              My approach centers on understanding problems deeply before jumping to solutions. 
              I believe the best interfaces are often invisible — they get out of the way and let people 
              focus on what matters to them.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">currently</h3>
              <ul className="space-y-2 text-sm">
                <li>• Building tools for better remote collaboration</li>
                <li>• Exploring ways to make complex data more accessible</li>
                <li>• Reading about systems thinking and design philosophy</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">previously</h3>
              <ul className="space-y-2 text-sm">
                <li>• Led design systems at a fintech startup</li>
                <li>• Consulted on UX for healthcare applications</li>
                <li>• Built developer tools at a Y Combinator company</li>
              </ul>
            </div>

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