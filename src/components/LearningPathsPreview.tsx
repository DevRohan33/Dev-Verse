
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PathCardProps {
  title: string;
  icon: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  modules: number;
}

const PathCard: React.FC<PathCardProps> = ({
  title,
  icon,
  duration,
  level,
  description,
  modules,
}) => {
  const getLevelColor = () => {
    switch (level) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-blue-500";
      case "Advanced":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="card-hover">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span className="text-3xl mr-3">{icon}</span>
            <CardTitle>{title}</CardTitle>
          </div>
          <Badge className={getLevelColor()}>{level}</Badge>
        </div>
        <div className="flex gap-2 text-sm text-muted-foreground">
          <span>{duration}</span>
          <span>•</span>
          <span>{modules} modules</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link to="/learning-paths">View Path</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const LearningPathsPreview: React.FC = () => {
  const paths = [
    {
      title: "HTML & CSS Fundamentals",
      icon: "🌐",
      duration: "7 Days",
      level: "Beginner" as const,
      description: "Learn the building blocks of the web with HTML and CSS. Create responsive layouts and style your websites.",
      modules: 12,
    },
    {
      title: "JavaScript Essentials",
      icon: "📜",
      duration: "14 Days",
      level: "Beginner" as const,
      description: "Master the basics of JavaScript to add interactivity and logic to your websites.",
      modules: 18,
    },
    {
      title: "React Development",
      icon: "⚛️",
      duration: "21 Days",
      level: "Intermediate" as const,
      description: "Build modern, component-based user interfaces with React, the popular JavaScript library.",
      modules: 24,
    },
    {
      title: "Python Programming",
      icon: "🐍",
      duration: "14 Days",
      level: "Beginner" as const,
      description: "Learn Python fundamentals for backend development, data science, and automation.",
      modules: 16,
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Popular Learning Paths
          </h2>
          <p className="text-muted-foreground">
            Follow structured learning paths designed to take you from beginner to professional. Each path includes videos, resources, and practice exercises.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => (
            <PathCard key={index} {...path} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white" asChild>
            <Link to="/learning-paths">View All Learning Paths</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsPreview;
