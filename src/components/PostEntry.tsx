interface PostEntryProps {
  title: string;
  excerpt: string;
  timestamp: string;
  type: 'thought' | 'case-study' | 'idea' | 'update';
}

const PostEntry = ({ title, excerpt, timestamp, type }: PostEntryProps) => {
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
      
      <h2 className="post-title text-lg font-medium text-foreground mb-2 transition-colors duration-200">
        {title}
      </h2>
      
      <p className="text-muted-foreground leading-relaxed text-sm">
        {excerpt}
      </p>
      
      <div className="mt-3 text-xs text-code-comment opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        → read more
      </div>
    </article>
  );
};

export default PostEntry;