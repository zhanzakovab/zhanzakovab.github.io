import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";

const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-4">
          <a href="/projects" className="nav-link text-sm">
            ← back to projects
          </a>
          <h1 className="text-2xl font-medium text-foreground">
            {slug?.replace(/-/g, ' ')}
          </h1>
        </header>

        <article className="space-y-8">
          {/* Header Image Placeholder */}
          <div className="bg-code-background border border-border rounded-md p-8 text-center">
            <p className="text-code-comment">Header image / screenshot would go here</p>
          </div>

          {/* Process Write-up */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-code-keyword">Process</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This is where the detailed process write-up would live. In a real implementation, 
                you'd fetch the project content based on the slug and render it here.
              </p>
              
              <div className="bg-code-background border border-border rounded-md p-4 mt-4">
                <h4 className="text-code-keyword font-medium mb-2">Key Insights</h4>
                <ul className="text-code-comment text-sm space-y-1">
                  <li>• Challenge identification and research</li>
                  <li>• Solution ideation and prototyping</li>
                  <li>• Implementation and iteration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Learnings & Reflection */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-code-keyword">Learnings & Reflection</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Reflection on what worked, what didn't, and key takeaways from this project.
              </p>
            </div>
          </section>

          {/* Extras */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-code-keyword">Extras</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-code-background border border-border rounded-md p-4">
                <p className="text-code-comment text-sm">Additional resources, links, or media</p>
              </div>
              <div className="bg-code-background border border-border rounded-md p-4">
                <p className="text-code-comment text-sm">Related projects or follow-ups</p>
              </div>
            </div>
          </section>
        </article>

        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
            Project slug: <span className="text-purple-soft">{slug}</span>
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default ProjectDetail;