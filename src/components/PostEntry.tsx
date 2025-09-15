import { Link } from "react-router-dom";

interface PostEntryProps {
  slug: string;
  title: string;
  excerpt: string;
  timestamp: string;
  type: 'thought' | 'case-study' | 'idea' | 'update';
  links?: {
    github?: string;
    linkedin?: string;
    internalCaseStudy?: boolean;
    demo?: string;
  };
}

const PostEntry = ({ slug, title, excerpt, timestamp, type, links }: PostEntryProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'case-study':
        return 'text-purple-bright';
      case 'thought':
        return 'text-purple-soft';
      case 'idea':
        return 'text-purple-muted';
      default:
        return 'text-code-keyword';
    }
  };

  return (
    <article className="post-entry group">
      <div className="flex items-start justify-between mb-2">
        <span className={`code-text ${getTypeColor(type)} text-xs uppercase tracking-wider`}>
          {type.replace('-', ' ')}
        </span>
        <time className="timestamp">
          {timestamp}
        </time>
      </div>
      
      <Link to={`/posts/${slug}`} className="block">
        <h2 className="post-title text-lg font-medium text-foreground mb-2 transition-colors duration-200">
          {title}
        </h2>
        
        <p className="text-muted-foreground leading-relaxed text-sm">
          {excerpt}
        </p>
        
        <div className="mt-3 text-xs text-code-comment opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          → read more
        </div>
      </Link>

      {links && Object.keys(links).length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/30">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
            >
              [→ GitHub]
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
            >
              [→ LinkedIn]
            </a>
          )}
          {links.internalCaseStudy && (
            <Link
              to={`/projects/${slug}`}
              className="text-xs text-code-comment hover:text-purple-soft transition-colors duration-200 font-mono"
            >
              [→ Internal Case Study]
            </Link>
          )}
          {links.demo && links.demo.trim() && (
            <a
              href={links.demo}
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
  );
};

export default PostEntry;