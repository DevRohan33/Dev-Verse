
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        toast.success("Successfully logged in!");
        // Store mock user data in localStorage
        localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
        navigate('/');
      } else {
        toast.error("Please fill in all fields");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-devverse-dark">
      <Card className="w-full max-w-md bg-devverse-dark border-devverse-purple/50 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl gradient-text">Welcome back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-devverse-dark border-devverse-purple/50 text-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-devverse-purple underline-offset-4 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-devverse-dark border-devverse-purple/50 text-white"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button 
              className="w-full bg-gradient-to-r from-devverse-purple to-devverse-blue"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-devverse-purple hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
