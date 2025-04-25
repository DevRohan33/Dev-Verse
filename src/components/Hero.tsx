
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-devverse-purple/20 to-devverse-blue/10 rounded-b-[50%] -z-10" />
      
      {/* Content */}
      <div className="container max-w-6xl px-4 mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Learn. Build. Launch.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Master development skills with structured paths, project-based learning, 
            and real-world practice all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white" asChild>
              <Link to="/signup">Start Learning for Free</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/learning-paths">Explore Paths</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-1 gradient-text">7+</h3>
              <p className="text-muted-foreground">Learning Paths</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-1 gradient-text">100+</h3>
              <p className="text-muted-foreground">Curated Videos</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-1 gradient-text">15+</h3>
              <p className="text-muted-foreground">AI Tools</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-1 gradient-text">50+</h3>
              <p className="text-muted-foreground">Practice Problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
