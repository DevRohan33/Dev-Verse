
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
  onRun: () => void;
  onViewSolution: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  setCode,
  language,
  onRun,
  onViewSolution,
}) => {
  return (
    <div className="border border-devverse-purple/30 rounded-md overflow-hidden">
      <div className="bg-devverse-dark p-2 border-b border-devverse-purple/30">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium">{language} Editor</div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs border-devverse-purple/30 hover:bg-devverse-purple/20"
              onClick={onViewSolution}
            >
              View Solution
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs border-devverse-purple/30 hover:bg-devverse-purple/20"
              onClick={onRun}
            >
              Run Code
            </Button>
          </div>
        </div>
      </div>
      <Textarea
        className="w-full bg-[#1E1E2E] text-white font-mono p-4 outline-none h-64 resize-none"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder={`Write your ${language} code here...`}
      />
    </div>
  );
};

export default CodeEditor;
