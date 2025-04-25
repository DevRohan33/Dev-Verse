
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LearningPaths = () => {
  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Learning Paths</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Follow structured learning paths designed to take you from beginner to professional. Each path includes videos, resources, and practice exercises.
        </p>
        
        <Tabs defaultValue="html" className="mb-12">
          <TabsList className="bg-devverse-dark/50 border border-devverse-purple/30">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="tailwind">TailwindCSS</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="git">Git</TabsTrigger>
            <TabsTrigger value="firebase">Firebase</TabsTrigger>
          </TabsList>
          
          <TabsContent value="html" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🌐</span>
                    <CardTitle>HTML Fundamentals</CardTitle>
                  </div>
                  <Badge className="bg-green-500">Beginner</Badge>
                </div>
                <p className="text-muted-foreground">7 Day Course • 12 Modules • 4 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    HTML Document Structure and Semantics
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Text Formatting and Lists
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Links, Images, and Media
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Tables and Forms
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    HTML5 New Features and APIs
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Modules</h3>
                <div className="space-y-3">
                  <div className="p-3 border border-devverse-purple/30 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">1. Introduction to HTML</h4>
                      <span className="text-xs bg-devverse-purple/20 px-2 py-1 rounded">15 min</span>
                    </div>
                  </div>
                  <div className="p-3 border border-devverse-purple/30 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">2. Document Structure</h4>
                      <span className="text-xs bg-devverse-purple/20 px-2 py-1 rounded">25 min</span>
                    </div>
                  </div>
                  <div className="p-3 border border-devverse-purple/30 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">3. Text Elements</h4>
                      <span className="text-xs bg-devverse-purple/20 px-2 py-1 rounded">30 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="tailwind" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">💨</span>
                    <CardTitle>TailwindCSS Mastery</CardTitle>
                  </div>
                  <Badge className="bg-blue-500">Intermediate</Badge>
                </div>
                <p className="text-muted-foreground">10 Day Course • 15 Modules • 5 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Tailwind Fundamentals and Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Responsive Design with Tailwind
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Custom Configuration and Theme
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Advanced Utilities and Animations
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Building Components and Design Systems
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Modules</h3>
                <div className="space-y-3">
                  <div className="p-3 border border-devverse-purple/30 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">1. Getting Started with Tailwind</h4>
                      <span className="text-xs bg-devverse-purple/20 px-2 py-1 rounded">20 min</span>
                    </div>
                  </div>
                  <div className="p-3 border border-devverse-purple/30 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">2. Styling with Utility Classes</h4>
                      <span className="text-xs bg-devverse-purple/20 px-2 py-1 rounded">35 min</span>
                    </div>
                  </div>
                  <div className="p-3 border border-devverse-purple/30 rounded-md">
                    <div className="flex justify-between">
                      <h4 className="font-medium">3. Responsive Design</h4>
                      <span className="text-xs bg-devverse-purple/20 px-2 py-1 rounded">40 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="javascript" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📜</span>
                    <CardTitle>JavaScript Essentials</CardTitle>
                  </div>
                  <Badge className="bg-blue-500">Intermediate</Badge>
                </div>
                <p className="text-muted-foreground">14 Day Course • 18 Modules • 6 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    JavaScript Syntax and Data Types
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Functions, Objects, and Arrays
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    DOM Manipulation
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Asynchronous JavaScript (Promises, Async/Await)
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Modern JavaScript Features (ES6+)
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="python" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🐍</span>
                    <CardTitle>Python Programming</CardTitle>
                  </div>
                  <Badge className="bg-green-500">Beginner</Badge>
                </div>
                <p className="text-muted-foreground">14 Day Course • 16 Modules • 5 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Python Syntax and Data Types
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Control Flow and Functions
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Data Structures (Lists, Dictionaries, Sets)
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    File I/O and Exception Handling
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Introduction to Libraries (NumPy, Pandas)
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="react" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">⚛️</span>
                    <CardTitle>React Development</CardTitle>
                  </div>
                  <Badge className="bg-purple-500">Advanced</Badge>
                </div>
                <p className="text-muted-foreground">21 Day Course • 24 Modules • 8 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    React Fundamentals and JSX
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Components, Props, and State
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Hooks (useState, useEffect, useContext)
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Routing with React Router
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    State Management (Context API, Redux)
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="git" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🔄</span>
                    <CardTitle>Git & GitHub</CardTitle>
                  </div>
                  <Badge className="bg-green-500">Beginner</Badge>
                </div>
                <p className="text-muted-foreground">7 Day Course • 10 Modules • 3 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Git Basics and Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Branching and Merging
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Collaboration with GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Pull Requests and Code Reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Git Workflows and Best Practices
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="firebase" className="mt-6">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🔥</span>
                    <CardTitle>Firebase Development</CardTitle>
                  </div>
                  <Badge className="bg-blue-500">Intermediate</Badge>
                </div>
                <p className="text-muted-foreground">10 Day Course • 12 Modules • 4 Projects</p>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Firebase Setup and Configuration
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Authentication and User Management
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Cloud Firestore Database
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Storage and Hosting
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge className="h-2 w-2 p-0 rounded-full bg-devverse-purple" />
                    Cloud Functions and Security Rules
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default LearningPaths;
