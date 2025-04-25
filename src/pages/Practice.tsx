
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Practice = () => {
  const [activeCode, setActiveCode] = React.useState<string | null>(null);

  const challengeCategories = [
    { id: "javascript", name: "JavaScript", icon: "📜" },
    { id: "python", name: "Python", icon: "🐍" },
    { id: "dsa", name: "Data Structures", icon: "🧠" },
    { id: "react", name: "React", icon: "⚛️" },
    { id: "htmlcss", name: "HTML & CSS", icon: "🎨" }
  ];

  const javascriptChallenges = [
    {
      id: "js1",
      title: "FizzBuzz Challenge",
      difficulty: "Easy",
      description: "Write a function that prints numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For numbers which are multiples of both 3 and 5, print 'FizzBuzz'.",
      template: `function fizzBuzz(n) {
  // Your code here
}

// Test your solution
console.log(fizzBuzz(15));`,
      solution: `function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}`
    },
    {
      id: "js2",
      title: "Array Flatten",
      difficulty: "Medium",
      description: "Write a function that flattens a nested array structure into a single-level array.",
      template: `function flatten(arr) {
  // Your code here
}

// Test your solution
console.log(flatten([1, [2, [3, 4], 5], 6]));`,
      solution: `function flatten(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}`
    },
    {
      id: "js3",
      title: "Detect Palindrome",
      difficulty: "Easy",
      description: "Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).",
      template: `function isPalindrome(str) {
  // Your code here
}

// Test your solution
console.log(isPalindrome("racecar"));  // Should return true
console.log(isPalindrome("hello"));    // Should return false`,
      solution: `function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Compare with reversed string
  return cleanStr === cleanStr.split('').reverse().join('');
}`
    }
  ];

  const pythonChallenges = [
    {
      id: "py1",
      title: "List Comprehension",
      difficulty: "Easy",
      description: "Create a list of squares for numbers from 1 to 10 using list comprehension.",
      template: `# Your code here

# Expected output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`,
      solution: `squares = [x**2 for x in range(1, 11)]
print(squares)`
    },
    {
      id: "py2",
      title: "Word Counter",
      difficulty: "Medium",
      description: "Write a function that counts the frequency of each word in a given string and returns a dictionary with word counts.",
      template: `def word_counter(text):
    # Your code here
    pass

# Test your solution
print(word_counter("the quick brown fox jumps over the lazy dog"))`,
      solution: `def word_counter(text):
    words = text.lower().split()
    word_count = {}
    
    for word in words:
        # Remove punctuation if needed
        word = word.strip('.,!?()[]{}":;')
        if word:
            word_count[word] = word_count.get(word, 0) + 1
            
    return word_count`
    }
  ];

  const [code, setCode] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [selectedChallenge, setSelectedChallenge] = React.useState<any>(null);

  const handleChallengeSelect = (challenge: any) => {
    setSelectedChallenge(challenge);
    setCode(challenge.template);
    setOutput("");
  };

  const handleRunCode = () => {
    // This is a simplified simulation of code execution
    // In a real app, you would use a secure execution environment
    setOutput("Code execution is simulated in this demo.\nCheck your browser console for any output.");
    console.log("Executing code:", code);
    try {
      // This is just for demo purposes - DON'T use eval in production!
      // eval(code);
      setOutput("Code executed successfully! Check the console for output.");
    } catch (error) {
      console.error("Code execution error:", error);
      setOutput(`Error: ${error}`);
    }
  };

  const handleViewSolution = () => {
    if (selectedChallenge) {
      setCode(selectedChallenge.solution);
    }
  };

  return (
    <div className="min-h-screen bg-devverse-dark text-white">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Practice Zone</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sharpen your coding skills with interactive challenges and exercises.
        </p>
        
        <Tabs defaultValue="javascript" className="mb-8">
          <TabsList className="bg-devverse-dark/50 border border-devverse-purple/30">
            {challengeCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="javascript" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold mb-4">JavaScript Challenges</h2>
                <div className="space-y-3">
                  {javascriptChallenges.map(challenge => (
                    <Card 
                      key={challenge.id} 
                      className={`bg-devverse-dark border-devverse-purple/50 text-white cursor-pointer transition-all ${selectedChallenge?.id === challenge.id ? 'border-devverse-purple' : 'border-devverse-purple/20'}`}
                      onClick={() => handleChallengeSelect(challenge)}
                    >
                      <CardHeader className="py-3 px-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{challenge.title}</CardTitle>
                          <Badge className={`
                            ${challenge.difficulty === 'Easy' ? 'bg-green-600' : ''}
                            ${challenge.difficulty === 'Medium' ? 'bg-yellow-600' : ''}
                            ${challenge.difficulty === 'Hard' ? 'bg-red-600' : ''}
                          `}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2">
                {selectedChallenge ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{selectedChallenge.title}</h3>
                      <p className="text-muted-foreground mt-1">{selectedChallenge.description}</p>
                    </div>
                    
                    <div className="border border-devverse-purple/30 rounded-md overflow-hidden">
                      <div className="bg-devverse-dark p-2 border-b border-devverse-purple/30">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Code Editor</div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs border-devverse-purple/30 hover:bg-devverse-purple/20" onClick={handleViewSolution}>
                              View Solution
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs border-devverse-purple/30 hover:bg-devverse-purple/20" onClick={handleRunCode}>
                              Run Code
                            </Button>
                          </div>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-[#1E1E2E] text-white font-mono p-4 outline-none h-64 resize-none"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                    
                    {output && (
                      <div className="border border-devverse-purple/30 rounded-md overflow-hidden">
                        <div className="bg-devverse-dark p-2 border-b border-devverse-purple/30">
                          <div className="text-sm font-medium">Output</div>
                        </div>
                        <pre className="bg-[#1E1E2E] text-white font-mono p-4 whitespace-pre-wrap h-32 overflow-auto">{output}</pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center border border-devverse-purple/30 rounded-md p-8">
                    <div className="text-center">
                      <p className="text-muted-foreground">Select a challenge to get started</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="python" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold mb-4">Python Challenges</h2>
                <div className="space-y-3">
                  {pythonChallenges.map(challenge => (
                    <Card 
                      key={challenge.id} 
                      className={`bg-devverse-dark border-devverse-purple/50 text-white cursor-pointer transition-all ${selectedChallenge?.id === challenge.id ? 'border-devverse-purple' : 'border-devverse-purple/20'}`}
                      onClick={() => handleChallengeSelect(challenge)}
                    >
                      <CardHeader className="py-3 px-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{challenge.title}</CardTitle>
                          <Badge className={`
                            ${challenge.difficulty === 'Easy' ? 'bg-green-600' : ''}
                            ${challenge.difficulty === 'Medium' ? 'bg-yellow-600' : ''}
                            ${challenge.difficulty === 'Hard' ? 'bg-red-600' : ''}
                          `}>
                            {challenge.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2">
                {selectedChallenge ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{selectedChallenge.title}</h3>
                      <p className="text-muted-foreground mt-1">{selectedChallenge.description}</p>
                    </div>
                    
                    <div className="border border-devverse-purple/30 rounded-md overflow-hidden">
                      <div className="bg-devverse-dark p-2 border-b border-devverse-purple/30">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Code Editor</div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-xs border-devverse-purple/30 hover:bg-devverse-purple/20" onClick={handleViewSolution}>
                              View Solution
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs border-devverse-purple/30 hover:bg-devverse-purple/20" onClick={handleRunCode}>
                              Run Code
                            </Button>
                          </div>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-[#1E1E2E] text-white font-mono p-4 outline-none h-64 resize-none"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                    
                    {output && (
                      <div className="border border-devverse-purple/30 rounded-md overflow-hidden">
                        <div className="bg-devverse-dark p-2 border-b border-devverse-purple/30">
                          <div className="text-sm font-medium">Output</div>
                        </div>
                        <pre className="bg-[#1E1E2E] text-white font-mono p-4 whitespace-pre-wrap h-32 overflow-auto">{output}</pre>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center border border-devverse-purple/30 rounded-md p-8">
                    <div className="text-center">
                      <p className="text-muted-foreground">Select a challenge to get started</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="dsa" className="mt-6">
            <div className="text-center py-12 border border-devverse-purple/30 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Data Structures & Algorithms Practice</h3>
              <p className="text-muted-foreground mb-4">Coming soon! This section will contain interactive DSA challenges.</p>
              <Button variant="outline" className="border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">
                Get Notified
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="react" className="mt-6">
            <div className="text-center py-12 border border-devverse-purple/30 rounded-md">
              <h3 className="text-xl font-semibold mb-2">React Challenges</h3>
              <p className="text-muted-foreground mb-4">Coming soon! This section will contain interactive React component building challenges.</p>
              <Button variant="outline" className="border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">
                Get Notified
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="htmlcss" className="mt-6">
            <div className="text-center py-12 border border-devverse-purple/30 rounded-md">
              <h3 className="text-xl font-semibold mb-2">HTML & CSS Challenges</h3>
              <p className="text-muted-foreground mb-4">Coming soon! This section will contain interactive HTML & CSS layout challenges.</p>
              <Button variant="outline" className="border-devverse-purple text-devverse-purple hover:bg-devverse-purple/20">
                Get Notified
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Practice;
