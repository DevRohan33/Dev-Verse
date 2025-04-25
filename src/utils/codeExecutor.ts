
export const executeJavaScript = (code: string): string => {
  try {
    // Create a safe evaluation context
    const console = {
      log: function(...args: any[]) {
        output += args.join(" ") + "\n";
      },
      error: function(...args: any[]) {
        output += "Error: " + args.join(" ") + "\n";
      }
    };
    
    let output = "";
    
    // Execute the code with the custom console
    new Function("console", code)(console);
    
    return output || "Code executed successfully!";
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const executePython = (code: string): string => {
  // This is a mock function since we can't actually run Python in the browser
  return "Python execution is simulated in this demo.\nTo run real Python code, we would need a backend service.";
};

export const executeSQL = (code: string): string => {
  // This is a mock function since we can't actually run SQL in the browser
  return "SQL execution is simulated in this demo.\nTo run real SQL queries, we would need a database connection.";
};
