import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl space-y-8">
        <header className="space-y-4">
          <h1 className="text-2xl font-medium text-foreground">
            about
          </h1>
        </header>

        <div className="prose prose-invert space-y-6 text-muted-foreground leading-relaxed">
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

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-code-comment">
              Always interested in connecting with people working on meaningful problems. 
              Feel free to reach out through any of the channels in the navigation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;