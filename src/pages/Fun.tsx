
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Fun = () => {
  const [joke, setJoke] = React.useState("Why do programmers prefer dark mode? Because light attracts bugs!");

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

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Fun Learning Zone</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Coding Mini-Games</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <CardTitle className="text-xl">CSS Grid Game</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Master CSS Grid by playing this interactive game where you need to position elements correctly.</p>
                <Button variant="outline" className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">Play Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <CardTitle className="text-xl">JavaScript Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">Test your JavaScript knowledge with this fun and challenging quiz covering core concepts.</p>
                <Button variant="outline" className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">Take Quiz</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-devverse-dark border-devverse-purple/50 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Code Refactor Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">How fast can you refactor this poorly written code? Beat the clock to earn a badge!</p>
                <Button variant="outline" className="w-full border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">Start Challenge</Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Challenge Wheel</h2>
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-devverse-purple to-devverse-blue flex items-center justify-center mb-6">
                <div className="w-56 h-56 rounded-full bg-devverse-dark flex items-center justify-center text-xl font-bold">
                  Spin The Wheel!
                </div>
              </div>
              <Button className="bg-gradient-to-r from-devverse-purple to-devverse-blue text-white">Spin for a Random Challenge</Button>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Developer Joke of the Day</h2>
          <Card className="bg-devverse-dark border-devverse-purple/50 text-white p-6">
            <CardContent className="text-center">
              <p className="text-xl italic mb-6">"{joke}"</p>
              <Button onClick={getRandomJoke} variant="outline" className="border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">
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
