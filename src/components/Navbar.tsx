import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="logo-box">
            B
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/about" className="nav-link lowercase tracking-wide">
              about
            </Link>
            <Link to="/projects" className="nav-link lowercase tracking-wide">
              projects
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link lowercase tracking-wide flex items-center gap-1"
            >
              <Github size={16} />
              github
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link lowercase tracking-wide flex items-center gap-1"
            >
              <Linkedin size={16} />
              linkedin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;