
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LearningPathsPreview from "@/components/LearningPathsPreview";
import VideoSection from "@/components/VideoSection";
import AIToolsPreview from "@/components/AIToolsPreview";
import FunSection from "@/components/FunSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LearningPathsPreview />
        <VideoSection />
        <AIToolsPreview />
        <FunSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
