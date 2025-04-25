
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (firstName && lastName && email && password) {
        toast.success("Account created successfully!");
        // Store mock user data in localStorage
        localStorage.setItem('user', JSON.stringify({ email, name: `${firstName} ${lastName}` }));
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
          <CardTitle className="text-2xl gradient-text">Create an account</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name" className="text-white">First name</Label>
                  <Input 
                    id="first-name" 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-devverse-dark border-devverse-purple/50 text-white"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name" className="text-white">Last name</Label>
                  <Input 
                    id="last-name" 
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-devverse-dark border-devverse-purple/50 text-white"
                    required
                  />
                </div>
              </div>
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
                <Label htmlFor="password" className="text-white">Password</Label>
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
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-devverse-purple hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
