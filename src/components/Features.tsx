
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Lightbulb, Play, Star, Trophy } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card className="card-hover">
    <CardHeader>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-devverse-purple to-devverse-blue">
        {icon}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="text-sm text-muted-foreground">
      {description}
    </CardContent>
  </Card>
);

const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything You Need to Become a Developer
          </h2>
          <p className="text-muted-foreground">
            DevVerse brings together all the resources, tools, and practices you need to level up your development skills.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-white" />}
            title="Structured Learning Paths"
            description="Follow step-by-step learning paths for HTML, CSS, JavaScript, Python, React, Git, and more."
          />
          <FeatureCard
            icon={<Play className="h-6 w-6 text-white" />}
            title="Video Tutorials"
            description="Watch curated video tutorials embedded directly in the platform to learn concepts quickly."
          />
          <FeatureCard
            icon={<Lightbulb className="h-6 w-6 text-white" />}
            title="AI Tool Directory"
            description="Discover and learn how to use the best AI tools that can boost your development workflow."
          />
          <FeatureCard
            icon={<Code className="h-6 w-6 text-white" />}
            title="Project Ideas"
            description="Get inspired with project ideas for every skill level, complete with starter templates and guidance."
          />
          <FeatureCard
            icon={<Trophy className="h-6 w-6 text-white" />}
            title="Practice Zone"
            description="Sharpen your skills with coding challenges, algorithm problems, and timed exercises."
          />
          <FeatureCard
            icon={<Star className="h-6 w-6 text-white" />}
            title="Fun Learning"
            description="Enjoy coding mini-games, weekly quizzes, and earn badges as you progress through the platform."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
