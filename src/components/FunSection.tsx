
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FunSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-devverse-purple/10 to-devverse-blue/5">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Learning Can Be Fun
          </h2>
          <p className="text-muted-foreground">
            Enjoy coding challenges, games, and quizzes to make your learning journey more enjoyable.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="card-hover text-center p-6">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4 animate-bounce-light">🎮</div>
              <h3 className="text-xl font-bold mb-2">Coding Mini-Games</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Take a break with fun coding-themed games designed to reinforce concepts you've learned.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/fun">Try Them Out</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover text-center p-6">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4 animate-bounce-light">🎯</div>
              <h3 className="text-xl font-bold mb-2">Challenge Wheel</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Spin the wheel to get a random coding challenge based on your skill level and interests.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/fun">Spin the Wheel</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover text-center p-6">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4 animate-bounce-light">🏆</div>
              <h3 className="text-xl font-bold mb-2">Weekly Quizzes</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Test your knowledge with fun weekly quizzes and earn badges for your profile.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/fun">Take a Quiz</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 bg-devverse-dark/5 p-6 rounded-lg">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">Developer Joke of the Day</h3>
            <p className="text-muted-foreground italic mb-3">
              "Why do programmers prefer dark mode? Because light attracts bugs!"
            </p>
            <Button variant="ghost" size="sm">
              Get Another Joke
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunSection;
