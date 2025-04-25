import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Gamepad, Code2, Zap } from "lucide-react";

const Fun = () => {
  const [wheelAngle, setWheelAngle] = useState(0);
  const [currentJoke, setCurrentJoke] = useState("Why do programmers prefer dark mode? Because light attracts bugs!");

  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "I would tell you a UDP joke, but you might not get it.",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why aren't GPU's good storytellers? They always skip to the next frame.",
    "What's a pirate's favorite programming language? R!"
  ];

  const challenges = [
    "Create a function that reverses a string without using built-in methods",
    "Build a simple calculator with HTML/CSS/JS",
    "Create a to-do list with local storage",
    "Build a timer with start/stop/reset",
    "Create a color picker tool",
    "Build a memory matching game",
    "Create a weather app using an API",
    "Build a typing speed test"
  ];

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
    toast.success("New joke loaded! 😄");
  };

  const spinWheel = () => {
    const newAngle = wheelAngle + (Math.floor(Math.random() * 5 + 5) * 360);
    setWheelAngle(newAngle);
    
    setTimeout(() => {
      const challenge = challenges[Math.floor(Math.random() * challenges.length)];
      toast.success("Challenge Selected! 🎯");
      toast("Your Challenge", {
        description: challenge,
        duration: 5000,
      });
    }, 3000);
  };

  const startGame = (game: string) => {
    toast.success(`Starting ${game}! 🎮`);
  };

  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Fun Learning Zone</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Gamepad className="w-6 h-6" />
            Coding Mini-Games
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <CardTitle className="text-xl">CSS Grid Game</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Master CSS Grid by placing items in the correct positions. Complete levels and earn badges!</p>
                <Button 
                  variant="outline" 
                  className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20"
                  onClick={() => startGame("CSS Grid Game")}
                >
                  Play Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Code Memory Match</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Match pairs of coding concepts, syntax, and programming terms. Train your memory while learning!</p>
                <Button 
                  variant="outline" 
                  className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20"
                  onClick={() => startGame("Memory Match")}
                >
                  Play Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Speed Typing Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Test your typing speed with real code snippets. Improve your coding speed and accuracy!</p>
                <Button 
                  variant="outline" 
                  className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20"
                  onClick={() => startGame("Speed Typing")}
                >
                  Start Challenge
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Challenge Wheel
          </h2>
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent className="flex flex-col items-center">
              <div 
                className="w-64 h-64 rounded-full bg-gradient-to-r from-devverse-purple to-devverse-blue flex items-center justify-center mb-6 transition-transform duration-3000"
                style={{ transform: `rotate(${wheelAngle}deg)` }}
              >
                <div className="w-56 h-56 rounded-full bg-devverse-dark flex items-center justify-center text-xl font-bold text-center p-4">
                  Click Spin for a Random Challenge!
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white"
                onClick={spinWheel}
              >
                Spin the Wheel
              </Button>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="w-6 h-6" />
            Developer Joke Generator
          </h2>
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent className="text-center">
              <p className="text-xl italic mb-6">"{currentJoke}"</p>
              <Button 
                onClick={getRandomJoke} 
                variant="outline" 
                className="border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20"
              >
                Get Another Joke
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fun;
