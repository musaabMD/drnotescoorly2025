"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TestContent() {
  const [examData, setExamData] = useState({
    title: "Sample Exam",
    questions: [],
    flashcards: [],
    notes: []
  });
  
  // Create a simple sample data
  useEffect(() => {
    // This is placeholder data
    setExamData({
      title: "Sample Exam",
      questions: [
        { id: 1, text: "Sample question 1", answer: "Answer 1" },
        { id: 2, text: "Sample question 2", answer: "Answer 2" }
      ],
      flashcards: [
        { id: 1, front: "Front 1", back: "Back 1" },
        { id: 2, front: "Front 2", back: "Back 2" }
      ],
      notes: [
        { id: 1, title: "Note 1", content: "Content 1" },
        { id: 2, title: "Note 2", content: "Content 2" }
      ]
    });
  }, []);
  
  // Example of memoized data with proper dependencies
  const processedData = useMemo(() => {
    return {
      questionCount: examData.questions.length,
      flashcardCount: examData.flashcards.length,
      noteCount: examData.notes.length,
      total: examData.questions.length + examData.flashcards.length + examData.notes.length
    };
  }, [examData.questions, examData.flashcards, examData.notes]);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Test Page</h1>
        
        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">{examData.title}</h2>
            <p className="mb-4">This is a test page for development purposes.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-medium mb-2">Statistics</h3>
                <ul className="space-y-1">
                  <li>Questions: {processedData.questionCount}</li>
                  <li>Flashcards: {processedData.flashcardCount}</li>
                  <li>Notes: {processedData.noteCount}</li>
                  <li>Total Items: {processedData.total}</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-medium mb-2">Actions</h3>
                <div className="flex flex-col space-y-2">
                  <Button className="w-full">View Questions</Button>
                  <Button variant="outline" className="w-full">View Flashcards</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 text-yellow-800">
          <p className="font-medium">Note:</p>
          <p>This is a test page that demonstrates a proper client component with correct dependencies in hooks.</p>
        </div>
      </main>
    </div>
  );
}