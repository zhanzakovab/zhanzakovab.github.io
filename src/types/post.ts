export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  timestamp: string;
  type: 'in-process' | 'completed';
  links?: {
    github?: string;
    linkedin?: string;
    internalCaseStudy?: boolean;
    demo?: string;
  };
}

export interface PostLinks {
  github?: string;
  linkedin?: string;
  internalCaseStudy?: boolean;
  demo?: string;
}