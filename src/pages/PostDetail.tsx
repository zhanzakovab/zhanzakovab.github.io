import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Post } from "@/types/post";
import postsData from "@/data/posts.json";

const PostDetail = () => {
  const { slug } = useParams();
  const posts: Post[] = postsData as Post[];
  
  // Find the post by slug
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="space-y-8">
          <header className="space-y-4">
            <Link to="/" className="nav-link text-sm">
              ← back to journal
            </Link>
            <h1 className="text-2xl font-medium text-foreground">
              Post Not Found
            </h1>
          </header>
          <p className="text-muted-foreground">
            The post you're looking for doesn't exist.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <header className="space-y-4">
          <Link to="/" className="nav-link text-sm">
            ← back to journal
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <span className="code-text text-xs uppercase tracking-wider text-purple-soft mb-2 block">
                {post.type.replace('-', ' ')}
              </span>
              <h1 className="text-2xl font-medium text-foreground">
                {post.title}
              </h1>
            </div>
            <time className="timestamp">
              {post.timestamp}
            </time>
          </div>
        </header>

        <article className="prose prose-invert max-w-none">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {post.excerpt}
            </p>
            
            <div className="border-t border-border pt-6">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br>') 
                }}
              />
            </div>
          </div>
        </article>

        {post.links && Object.keys(post.links).length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
            {post.links.github && (
              <a
                href={post.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
              >
                [→ GitHub]
              </a>
            )}
            {post.links.linkedin && (
              <a
                href={post.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
              >
                [→ LinkedIn]
              </a>
            )}
            {post.links.internalCaseStudy && (
              <Link
                to={`/projects/${post.slug}`}
                className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
              >
                [→ Internal Case Study]
              </Link>
            )}
            {post.links.demo && post.links.demo.trim() && (
              <a
                href={post.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
              >
                [→ Demo]
              </a>
            )}
          </div>
        )}

        <footer className="pt-8 border-t border-border">
          <p className="text-xs text-code-comment">
            Published on <span className="text-purple-soft">{post.timestamp}</span>
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default PostDetail;