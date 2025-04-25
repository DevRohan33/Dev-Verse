
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AIToolCardProps {
  name: string;
  description: string;
  category: string;
  logo: string;
}

const AIToolCard: React.FC<AIToolCardProps> = ({
  name,
  description,
  category,
  logo,
}) => {
  return (
    <Card className="card-hover flex flex-col h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{logo}</span>
            <CardTitle className="text-lg">{name}</CardTitle>
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const AIToolsPreview: React.FC = () => {
  const tools = [
    {
      name: "Lovable",
      description: "AI editor that helps you create web applications through natural language conversations.",
      category: "Development",
      logo: "🚀",
    },
    {
      name: "ChatGPT",
      description: "Conversational AI that can help with coding, learning concepts, and solving problems.",
      category: "Assistant",
      logo: "🤖",
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with suggestions as you type.",
      category: "Development",
      logo: "👨‍💻",
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative with built-in SQL database, authentication, and storage.",
      category: "Backend",
      logo: "🔋",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Vibe Coding - AI Tool Deck
          </h2>
          <p className="text-muted-foreground">
            Discover powerful AI tools that can supercharge your development workflow.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <AIToolCard key={index} {...tool} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white" asChild>
            <Link to="/ai-tools">Explore All AI Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsPreview;
