
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-to-r from-devverse-purple to-devverse-blue rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Developer Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of learners who are building their skills and launching their careers with DevVerse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-devverse-purple hover:bg-gray-100" asChild>
                <Link to="/signup">Sign Up for Free</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/learning-paths">Explore Learning Paths</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
