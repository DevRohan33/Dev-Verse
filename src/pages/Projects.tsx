
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const beginnerProjects = [
    {
      id: "b1",
      title: "Personal Portfolio",
      description: "Create a simple but effective portfolio website to showcase your skills and projects.",
      difficulty: "Beginner", 
      technologies: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: "b2",
      title: "To-Do List App",
      description: "Build a task management application with the ability to add, edit, and delete tasks.",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: "b3",
      title: "Weather App",
      description: "Create an application that shows weather forecasts using a public weather API.",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    }
  ];

  const intermediateProjects = [
    {
      id: "i1",
      title: "E-commerce Product Page",
      description: "Design and build a responsive product page with a shopping cart functionality.",
      difficulty: "Intermediate",
      technologies: ["React", "TailwindCSS", "JavaScript"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: "i2",
      title: "Blog Platform",
      description: "Create a blog platform with user authentication and content management.",
      difficulty: "Intermediate",
      technologies: ["React", "Firebase", "TailwindCSS"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    }
  ];

  const advancedProjects = [
    {
      id: "a1",
      title: "Social Media Dashboard",
      description: "Build a comprehensive dashboard to track and analyze social media engagement across platforms.",
      difficulty: "Advanced",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    },
    {
      id: "a2",
      title: "Real-time Chat Application",
      description: "Develop a full-featured chat application with real-time messaging and user presence.",
      difficulty: "Advanced",
      technologies: ["React", "Firebase", "WebSockets", "TailwindCSS"],
      demoUrl: "#",
      tutorialUrl: "#",
      imageUrl: "https://via.placeholder.com/300x200"
    }
  ];

  const ProjectDetails = ({ project }: { project: any }) => {
    return (
      <div className="space-y-4">
        <div className="mb-6">
          <Button 
            variant="outline" 
            className="mb-4" 
            onClick={() => setActiveProject(null)}
          >
            ← Back to Projects
          </Button>
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <div className="flex gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
          <Badge className={`
            ${project.difficulty === 'Beginner' ? 'bg-green-600' : ''}
            ${project.difficulty === 'Intermediate' ? 'bg-yellow-600' : ''}
            ${project.difficulty === 'Advanced' ? 'bg-red-600' : ''}
          `}>
            {project.difficulty}
          </Badge>
        </div>
        
        <div className="mb-6">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full object-cover rounded-lg mb-4"
            style={{ maxHeight: '400px' }}
          />
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Project Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understanding of {project.technologies.join(', ')}</li>
                <li>Basic version control with Git</li>
                <li>Code editor of your choice</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Application structure and organization</li>
                <li>Working with {project.technologies[0]} and {project.technologies[1]}</li>
                <li>Best practices for web development</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Getting Started</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Fork the repository from GitHub</li>
                <li>Clone the project to your local machine</li>
                <li>Install dependencies with npm install</li>
                <li>Start the development server</li>
              </ol>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white">
                View Tutorial
              </Button>
              <Button variant="outline" className="border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProject = (project: any) => {
    return (
      <Card key={project.id} className="bg-devverse-dark border-devverse-purple/50 text-white overflow-hidden hover:border-devverse-purple transition-colors">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="h-40 w-full object-cover"
        />
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>{project.title}</CardTitle>
            <Badge className={`
              ${project.difficulty === 'Beginner' ? 'bg-green-600' : ''}
              ${project.difficulty === 'Intermediate' ? 'bg-yellow-600' : ''}
              ${project.difficulty === 'Advanced' ? 'bg-red-600' : ''}
            `}>
              {project.difficulty}
            </Badge>
          </div>
          <CardDescription className="text-gray-400">
            {project.technologies.join(' • ')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{project.description}</p>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20"
            onClick={() => setActiveProject(project.id)}
          >
            View Project
          </Button>
        </CardFooter>
      </Card>
    );
  };

  const getProjectById = (id: string) => {
    return [...beginnerProjects, ...intermediateProjects, ...advancedProjects]
      .find(project => project.id === id);
  };

  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Projects Gallery</h1>
        
        {activeProject ? (
          <ProjectDetails project={getProjectById(activeProject)} />
        ) : (
          <>
            <p className="text-lg text-muted-foreground mb-8">
              Browse our collection of hands-on projects to apply your skills and build your portfolio.
            </p>
            
            <Tabs defaultValue="beginner" className="mb-8">
              <TabsList className="bg-devverse-dark/50 border border-devverse-purple/30">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
              
              <TabsContent value="beginner" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {beginnerProjects.map(project => renderProject(project))}
                </div>
              </TabsContent>
              
              <TabsContent value="intermediate" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {intermediateProjects.map(project => renderProject(project))}
                </div>
              </TabsContent>
              
              <TabsContent value="advanced" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advancedProjects.map(project => renderProject(project))}
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
