import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";

const PostDetail = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-4">
          <a href="/" className="nav-link text-sm">
            ← back to journal
          </a>
          <h1 className="text-2xl font-medium text-foreground">
            {slug?.replace(/-/g, ' ')}
          </h1>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              This is where the full markdown content would live. In a real implementation, 
              you'd fetch the content based on the slug and render it here.
            </p>
            
            <div className="bg-code-background border border-border rounded-md p-4">
              <h3 className="text-code-keyword font-medium mb-2">Implementation Notes</h3>
              <p className="text-code-comment text-sm">
                Connect to a CMS like Sanity, Contentful, or a markdown-based system 
                to populate these pages with actual content.
              </p>
            </div>
          </div>
        </article>

        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
            Post slug: <span className="text-purple-soft">{slug}</span>
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default PostDetail;