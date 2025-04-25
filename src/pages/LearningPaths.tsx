
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LearningPaths = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Learning Paths</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Coming soon! This page will contain all learning paths.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LearningPaths;
