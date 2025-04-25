
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AIToolData {
  name: string;
  description: string;
  category: string;
  logo: string;
  url: string;
  features: string[];
}

const AITools = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredTools, setFilteredTools] = React.useState<AIToolData[]>([]);
  
  const aiTools: AIToolData[] = [
    {
      name: "Lovable",
      description: "AI editor that helps you create web applications through natural language conversations.",
      category: "Development",
      logo: "🚀",
      url: "https://lovable.dev",
      features: ["Web app creation", "Code generation", "UI/UX design", "Natural language interface"]
    },
    {
      name: "ChatGPT",
      description: "Conversational AI that can help with coding, learning concepts, and solving problems.",
      category: "Assistant",
      logo: "🤖",
      url: "https://chat.openai.com",
      features: ["Natural language processing", "Code assistance", "Content generation", "Learning support"]
    },
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with suggestions as you type.",
      category: "Development",
      logo: "👨‍💻",
      url: "https://github.com/features/copilot",
      features: ["Code completion", "Function suggestions", "Documentation generation", "IDE integration"]
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative with built-in SQL database, authentication, and storage.",
      category: "Backend",
      logo: "🔋",
      url: "https://supabase.com",
      features: ["Database management", "Authentication", "File storage", "API auto-generation"]
    },
    {
      name: "V0",
      description: "AI design tool that generates high-quality UI designs from text descriptions.",
      category: "Design",
      logo: "🎨",
      url: "https://v0.dev",
      features: ["UI generation", "Component design", "Responsive layouts", "Design export"]
    },
    {
      name: "Cursor",
      description: "AI-powered code editor designed for writing, editing and understanding code quickly.",
      category: "Development",
      logo: "⌨️",
      url: "https://cursor.sh",
      features: ["Code generation", "Code explanation", "Bug fixing", "Refactoring"]
    },
    {
      name: "Claude",
      description: "Advanced AI assistant that can help with writing, analysis, and creative tasks.",
      category: "Assistant",
      logo: "🧠",
      url: "https://claude.ai",
      features: ["Natural conversation", "Document analysis", "Content creation", "Problem solving"]
    },
    {
      name: "Replit",
      description: "Browser-based IDE with AI coding tools for collaborative development.",
      category: "Development",
      logo: "💻",
      url: "https://replit.com",
      features: ["Collaborative coding", "AI assistance", "Multi-language support", "Instant deployment"]
    },
    {
      name: "Netlify",
      description: "Web hosting platform with AI-powered features for automated deployment and optimization.",
      category: "Deployment",
      logo: "🌐",
      url: "https://netlify.com",
      features: ["Automated deployment", "Serverless functions", "Form handling", "Analytics"]
    },
    {
      name: "Vercel",
      description: "Platform for frontend frameworks with AI-enhanced development tools.",
      category: "Deployment",
      logo: "🚀",
      url: "https://vercel.com",
      features: ["Preview deployments", "Edge functions", "Analytics", "Content delivery"]
    },
    {
      name: "HuggingFace",
      description: "Platform that provides access to thousands of pre-trained AI models.",
      category: "AI Resources",
      logo: "🤗",
      url: "https://huggingface.co",
      features: ["Model hub", "Datasets", "Spaces for demos", "Inference API"]
    },
    {
      name: "RunwayML",
      description: "Creative toolkit that makes it easy to generate video, images, and 3D using AI.",
      category: "Creative",
      logo: "🎬",
      url: "https://runwayml.com",
      features: ["Video generation", "Image editing", "Motion tracking", "Text-to-video"]
    }
  ];

  React.useEffect(() => {
    setFilteredTools(aiTools);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = aiTools.filter(tool => 
      tool.name.toLowerCase().includes(query) || 
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    );
    
    setFilteredTools(filtered);
  };

  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">AI Tool Deck</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover powerful AI tools that can supercharge your development workflow.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search for tools..." 
              className="pl-10 bg-devverse-dark border-devverse-purple/50 text-white" 
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-devverse-dark/50 border border-devverse-purple/30">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="assistant">Assistant</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool, index) => (
            <Card key={index} className="bg-devverse-dark border-devverse-purple/50 text-white card-hover flex flex-col h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tool.logo}</span>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="border-devverse-purple/50">{tool.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-devverse-purple rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <div className="p-4 pt-0 mt-auto">
                <Button 
                  variant="outline" 
                  className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20"
                  onClick={() => window.open(tool.url, '_blank')}
                >
                  Visit Tool
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AITools;
