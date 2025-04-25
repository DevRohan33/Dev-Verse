
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Lightbulb, Trophy } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-devverse-purple to-devverse-blue rounded-md p-1">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              <span className="gradient-text">DevVerse</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/learning-paths" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <BookOpen className="h-4 w-4" />
            <span>Learning Paths</span>
          </Link>
          <Link to="/ai-tools" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Lightbulb className="h-4 w-4" />
            <span>AI Tools</span>
          </Link>
          <Link to="/practice" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Trophy className="h-4 w-4" />
            <span>Practice</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
