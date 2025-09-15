import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="text-center space-y-4 py-20">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium text-foreground">404</h1>
          <p className="text-muted-foreground">This page is as lost as my motivation after 2AM debugging.</p>
        </div>
        
        <div className="pt-4">
          <a 
            href="/" 
            className="nav-link text-sm"
          >
            ← return to journal
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;