
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Gamepad, Code2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Fun = () => {
  const [wheelAngle, setWheelAngle] = useState(0);
  const [currentJoke, setCurrentJoke] = useState("Why do programmers prefer dark mode? Because light attracts bugs!");
  const [activeGame, setActiveGame] = useState<string | null>(null);

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
    setActiveGame(game);
    toast.success(`Starting ${game}! 🎮`);
  };

  // Simple CSS Grid Game component
  const CSSGridGame = () => {
    return (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">CSS Grid Game</h3>
        <p className="mb-4">Arrange the colored blocks to match the target layout.</p>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`h-16 rounded cursor-move ${
                ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"][
                  Math.floor(Math.random() * 5)
                ]
              }`}
            ></div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setActiveGame(null)}>
            Back to Games
          </Button>
          <Button onClick={() => toast.success("Level completed! 🎉")}>
            Check Solution
          </Button>
        </div>
      </div>
    );
  };

  // Memory Match Game component
  const MemoryMatchGame = () => {
    const [flipped, setFlipped] = useState<number[]>([]);
    
    const cards = [
      "HTML", "CSS", "JS", "React", "Node", "Git", "HTML", "CSS", "JS", "React", "Node", "Git"
    ].sort(() => Math.random() - 0.5);
    
    const flipCard = (index: number) => {
      if (flipped.length === 2) return;
      
      setFlipped([...flipped, index]);
      
      if (flipped.length === 1) {
        if (cards[flipped[0]] === cards[index] && flipped[0] !== index) {
          toast.success("Match found! 🎉");
        } else {
          setTimeout(() => setFlipped([]), 1000);
        }
      }
    };
    
    return (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Memory Match Game</h3>
        <p className="mb-4">Find matching pairs of programming concepts.</p>
        
        <div className="grid grid-cols-4 gap-2 mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`h-20 flex items-center justify-center rounded cursor-pointer transition-all ${
                flipped.includes(index) 
                  ? "bg-devverse-purple text-white" 
                  : "bg-gray-700"
              }`}
              onClick={() => flipCard(index)}
            >
              {flipped.includes(index) ? card : ""}
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full" onClick={() => setActiveGame(null)}>
          Back to Games
        </Button>
      </div>
    );
  };

  // Speed Typing Game component
  const SpeedTypingGame = () => {
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [userInput, setUserInput] = useState("");
    
    const codeSnippet = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`;
    
    const startTyping = () => {
      setStarted(true);
      setTimeout(() => {
        if (userInput.length > 0) {
          setCompleted(true);
          toast.success("Time's up! Great job! 👏");
        }
      }, 30000);
    };
    
    return (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Speed Typing Challenge</h3>
        <p className="mb-4">Type the code snippet as fast as you can!</p>
        
        <div className="bg-gray-900 p-3 rounded mb-4">
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{codeSnippet}</pre>
        </div>
        
        {!started ? (
          <Button onClick={startTyping} className="w-full mb-4">
            Start Typing Test (30 seconds)
          </Button>
        ) : completed ? (
          <div className="text-center mb-4">
            <p className="text-xl font-bold text-devverse-purple">Completed!</p>
            <p>Accuracy: {Math.floor(Math.random() * 30) + 70}%</p>
            <p>Speed: {Math.floor(Math.random() * 40) + 20} WPM</p>
          </div>
        ) : (
          <textarea
            className="w-full h-32 bg-gray-800 text-white p-3 rounded mb-4 font-mono"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Start typing here..."
          />
        )}
        
        <Button variant="outline" className="w-full" onClick={() => setActiveGame(null)}>
          Back to Games
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Fun Learning Zone</h1>
        
        {activeGame === null ? (
          <>
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
          </>
        ) : activeGame === "CSS Grid Game" ? (
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent>
              <CSSGridGame />
            </CardContent>
          </Card>
        ) : activeGame === "Memory Match" ? (
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent>
              <MemoryMatchGame />
            </CardContent>
          </Card>
        ) : activeGame === "Speed Typing" ? (
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent>
              <SpeedTypingGame />
            </CardContent>
          </Card>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default Fun;
