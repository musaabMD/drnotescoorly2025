// // // 'use client';

// // // import React, { useState } from 'react';

// // // const MCQView = ({ data, currentIndex, onNext, onPrev }) => {
// // //   const [showAnswer, setShowAnswer] = useState(false);
// // //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// // //   const currentCard = data[currentIndex];

// // //   if (!currentCard || !currentCard.mcq) return null;

// // //   const handleAnswerClick = (id) => {
// // //     setSelectedAnswer(id);
// // //     setShowAnswer(true);
// // //   };

// // //   const handleNext = () => {
// // //     setShowAnswer(false);
// // //     setSelectedAnswer(null);
// // //     onNext();
// // //   };

// // //   const handlePrev = () => {
// // //     setShowAnswer(false);
// // //     setSelectedAnswer(null);
// // //     onPrev();
// // //   };

// // //   return (
// // //     <div className="max-w-3xl mx-auto">
// // //       <div className="bg-white border rounded-lg shadow-sm p-6 min-h-[400px]">
// // //         <div className="mb-4 text-sm text-gray-500">
// // //           {currentIndex + 1} / {data.length}
// // //         </div>

// // //         <div className="space-y-6">
// // //           <h3 className="text-xl font-medium text-gray-900">
// // //             {currentCard.mcq.question}
// // //           </h3>

// // //           <div className="space-y-2">
// // //             {currentCard.mcq.choices.map((choice) => (
// // //               <button
// // //                 key={choice.id}
// // //                 onClick={() => handleAnswerClick(choice.id)}
// // //                 disabled={showAnswer}
// // //                 className={`w-full p-3 rounded-lg border text-left transition-colors
// // //                   ${selectedAnswer === choice.id && choice.isCorrect && showAnswer ? 'bg-green-100 border-green-500' : ''}
// // //                   ${selectedAnswer === choice.id && !choice.isCorrect && showAnswer ? 'bg-red-100 border-red-500' : ''}
// // //                   ${selectedAnswer !== choice.id && choice.isCorrect && showAnswer ? 'bg-green-50 border-green-500' : ''}
// // //                   ${!showAnswer ? 'hover:bg-gray-50' : ''}
// // //                 `}
// // //               >
// // //                 <div className="flex items-start">
// // //                   <span className="min-w-[25px]">{choice.id}.</span>
// // //                   <span>{choice.text}</span>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {showAnswer && (
// // //             <div className="mt-6 space-y-4">
// // //               <div>
// // //                 <h4 className="font-medium text-gray-700 mb-2">Explanation:</h4>
// // //                 <p className="text-gray-600">{currentCard.mcq.explanation}</p>
// // //               </div>

// // //               <div>
// // //                 <h4 className="font-medium text-gray-700 mb-2">Key Points:</h4>
// // //                 <ul className="list-disc pl-6 space-y-1 text-gray-600">
// // //                   {currentCard.mcq.keyPoints.map((point, index) => (
// // //                     <li key={index}>{point}</li>
// // //                   ))}
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div className="flex justify-center mt-6 gap-4">
// // //         <button
// // //           onClick={handlePrev}
// // //           className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
// // //           disabled={currentIndex === 0}
// // //         >
// // //           Previous
// // //         </button>
// // //         {showAnswer && (
// // //           <div className="flex gap-2">
// // //             <button className="px-6 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
// // //               Again <span className="text-sm">25m</span>
// // //             </button>
// // //             <button className="px-6 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
// // //               Hard <span className="text-sm">12h</span>
// // //             </button>
// // //             <button className="px-6 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
// // //               Good <span className="text-sm">1d</span>
// // //             </button>
// // //             <button className="px-6 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
// // //               Easy <span className="text-sm">4d</span>
// // //             </button>
// // //           </div>
// // //         )}
// // //         <button
// // //           onClick={handleNext}
// // //           className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
// // //           disabled={currentIndex === data.length - 1}
// // //         >
// // //           Next
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MCQView;
// // import React, { useState } from 'react';
// // import { ThumbsUp, ThumbsDown, Filter, Pin } from 'lucide-react';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";

// // const MCQView = ({ questions = [] }) => {
// //   const [selectedFilter, setSelectedFilter] = useState('all');
// //   const [search, setSearch] = useState('');
// //   const [pinnedQuestions, setPinnedQuestions] = useState({});
// //   const [answers, setAnswers] = useState({});

// //   const getFilteredQuestions = () => {
// //     return questions.filter(q => {
// //       const matchesSearch = q.text?.toLowerCase().includes(search.toLowerCase());
// //       const matchesFilter = selectedFilter === 'all' ||
// //         (selectedFilter === 'correct' && answers[q.id]?.isCorrect) ||
// //         (selectedFilter === 'incorrect' && answers[q.id]?.isCorrect === false) ||
// //         (selectedFilter === 'unused' && !answers[q.id]) ||
// //         (selectedFilter === 'pinned' && pinnedQuestions[q.id]);
      
// //       return matchesSearch && matchesFilter;
// //     });
// //   };

// //   const handleAnswer = (questionId, selectedAnswerIndex) => {
// //     const question = questions.find(q => q.id === questionId);
// //     const isCorrect = selectedAnswerIndex === question.correctAnswer;
    
// //     setAnswers(prev => ({
// //       ...prev,
// //       [questionId]: {
// //         selected: selectedAnswerIndex,
// //         isCorrect
// //       }
// //     }));
// //   };

// //   const togglePin = (questionId) => {
// //     setPinnedQuestions(prev => ({
// //       ...prev,
// //       [questionId]: !prev[questionId]
// //     }));
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto px-4 py-8">
// //       {/* Filters */}
// //       <div className="flex flex-col sm:flex-row gap-4 mb-8">
// //         <Input
// //           placeholder="Search questions..."
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           className="flex-1"
// //         />
        
// //         <Select value={selectedFilter} onValueChange={setSelectedFilter}>
// //           <SelectTrigger className="w-[200px]">
// //             <SelectValue>
// //               {selectedFilter === 'all' && 'All Questions'}
// //               {selectedFilter === 'correct' && 'Correct'}
// //               {selectedFilter === 'incorrect' && 'Incorrect'}
// //               {selectedFilter === 'unused' && 'Unused'}
// //               {selectedFilter === 'pinned' && 'Pinned'}
// //             </SelectValue>
// //           </SelectTrigger>
// //           <SelectContent>
// //             <SelectItem value="all">All Questions</SelectItem>
// //             <SelectItem value="correct">Correct</SelectItem>
// //             <SelectItem value="incorrect">Incorrect</SelectItem>
// //             <SelectItem value="unused">Unused</SelectItem>
// //             <SelectItem value="pinned">Pinned</SelectItem>
// //           </SelectContent>
// //         </Select>
// //       </div>

// //       {/* Questions List */}
// //       <div className="space-y-6">
// //         {getFilteredQuestions().map((question) => (
// //           <div 
// //             key={question.id} 
// //             className="bg-white rounded-lg border shadow-sm overflow-hidden"
// //           >
// //             <div className="p-6 border-b">
// //               <div className="flex justify-between items-start mb-4">
// //                 <h3 className="text-lg font-medium">{question.text}</h3>
// //                 <Button
// //                   variant="ghost"
// //                   size="sm"
// //                   onClick={() => togglePin(question.id)}
// //                   className={pinnedQuestions[question.id] ? 'text-blue-600' : ''}
// //                 >
// //                   <Pin className="h-4 w-4" />
// //                 </Button>
// //               </div>

// //               <div className="space-y-3">
// //                 {question.choices?.map((choice, index) => {
// //                   const isSelected = answers[question.id]?.selected === index;
// //                   const showResult = answers[question.id] !== undefined;
// //                   const isCorrect = index === question.correctAnswer;
                  
// //                   let className = 'p-4 rounded-lg border transition-colors ';
// //                   if (showResult) {
// //                     if (isCorrect) {
// //                       className += 'bg-green-50 border-green-200 text-green-700 ';
// //                     } else if (isSelected) {
// //                       className += 'bg-red-50 border-red-200 text-red-700 ';
// //                     } else {
// //                       className += 'bg-gray-50 border-gray-200 text-gray-500 ';
// //                     }
// //                   } else {
// //                     className += 'hover:bg-gray-50 cursor-pointer ';
// //                   }

// //                   return (
// //                     <div
// //                       key={index}
// //                       className={className}
// //                       onClick={() => !showResult && handleAnswer(question.id, index)}
// //                     >
// //                       <div className="flex items-center">
// //                         <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
// //                         <span>{choice}</span>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {answers[question.id] && (
// //               <div className="p-6 bg-gray-50">
// //                 <p className="text-gray-700">{question.explanation}</p>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MCQView;
// 'use client';

// import React, { useState } from 'react';
// import { ThumbsUp, ThumbsDown, Filter, Pin, Search } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// const MCQView = ({ questions = [] }) => {
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [search, setSearch] = useState('');
//   const [pinnedQuestions, setPinnedQuestions] = useState({});
//   const [answers, setAnswers] = useState({});

//   const getFilteredQuestions = () => {
//     return questions.filter(q => {
//       const matchesSearch = q.text?.toLowerCase().includes(search.toLowerCase());
//       const matchesFilter = selectedFilter === 'all' ||
//         (selectedFilter === 'correct' && answers[q.id]?.isCorrect) ||
//         (selectedFilter === 'incorrect' && answers[q.id]?.isCorrect === false) ||
//         (selectedFilter === 'unused' && !answers[q.id]) ||
//         (selectedFilter === 'pinned' && pinnedQuestions[q.id]);
      
//       return matchesSearch && matchesFilter;
//     });
//   };

//   const handleAnswer = (questionId, selectedAnswerIndex) => {
//     const question = questions.find(q => q.id === questionId);
//     const isCorrect = selectedAnswerIndex === question.correctAnswer;
    
//     setAnswers(prev => ({
//       ...prev,
//       [questionId]: {
//         selected: selectedAnswerIndex,
//         isCorrect
//       }
//     }));
//   };

//   const togglePin = (questionId, event) => {
//     event.stopPropagation();
//     setPinnedQuestions(prev => ({
//       ...prev,
//       [questionId]: !prev[questionId]
//     }));
//   };

//   const filteredQuestions = getFilteredQuestions();

//   return (
//     <div className="container mx-auto px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Stats Summary */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white p-4 rounded-lg border shadow-sm">
//             <div className="text-2xl font-bold">{questions.length}</div>
//             <div className="text-sm text-gray-600">Total Questions</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg border shadow-sm">
//             <div className="text-2xl font-bold text-green-600">
//               {Object.values(answers).filter(a => a.isCorrect).length}
//             </div>
//             <div className="text-sm text-gray-600">Correct</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg border shadow-sm">
//             <div className="text-2xl font-bold text-red-600">
//               {Object.values(answers).filter(a => !a.isCorrect).length}
//             </div>
//             <div className="text-sm text-gray-600">Incorrect</div>
//           </div>
//           <div className="bg-white p-4 rounded-lg border shadow-sm">
//             <div className="text-2xl font-bold text-blue-600">
//               {Object.keys(pinnedQuestions).filter(k => pinnedQuestions[k]).length}
//             </div>
//             <div className="text-sm text-gray-600">Pinned</div>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-8">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input
//               placeholder="Search questions..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="pl-10"
//             />
//           </div>
          
//           <Select value={selectedFilter} onValueChange={setSelectedFilter}>
//             <SelectTrigger className="w-[200px]">
//               <SelectValue>
//                 {selectedFilter === 'all' && 'All Questions'}
//                 {selectedFilter === 'correct' && 'Correct'}
//                 {selectedFilter === 'incorrect' && 'Incorrect'}
//                 {selectedFilter === 'unused' && 'Unused'}
//                 {selectedFilter === 'pinned' && 'Pinned'}
//               </SelectValue>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Questions ({questions.length})</SelectItem>
//               <SelectItem value="correct">
//                 Correct ({Object.values(answers).filter(a => a.isCorrect).length})
//               </SelectItem>
//               <SelectItem value="incorrect">
//                 Incorrect ({Object.values(answers).filter(a => !a.isCorrect).length})
//               </SelectItem>
//               <SelectItem value="unused">
//                 Unused ({questions.length - Object.keys(answers).length})
//               </SelectItem>
//               <SelectItem value="pinned">
//                 Pinned ({Object.keys(pinnedQuestions).filter(k => pinnedQuestions[k]).length})
//               </SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Questions List */}
//         <div className="space-y-6">
//           {filteredQuestions.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-lg border">
//               <div className="text-4xl mb-4">📚</div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Found</h3>
//               <p className="text-gray-500">
//                 {search ? "Try adjusting your search terms" : "No questions match the selected filter"}
//               </p>
//             </div>
//           ) : (
//             filteredQuestions.map((question) => (
//               <div 
//                 key={question.id} 
//                 className="bg-white rounded-lg border shadow-sm overflow-hidden"
//               >
//                 <div className="p-6 border-b">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-lg font-medium mb-1">{question.text}</h3>
//                       {answers[question.id] && (
//                         <Badge variant={answers[question.id].isCorrect ? "success" : "destructive"}>
//                           {answers[question.id].isCorrect ? "Correct" : "Incorrect"}
//                         </Badge>
//                       )}
//                     </div>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={(e) => togglePin(question.id, e)}
//                       className={`${pinnedQuestions[question.id] ? 'text-blue-600' : ''} hover:bg-gray-100`}
//                     >
//                       <Pin className="h-4 w-4" />
//                     </Button>
//                   </div>

//                   <div className="space-y-3">
//                     {question.choices?.map((choice, index) => {
//                       const isSelected = answers[question.id]?.selected === index;
//                       const showResult = answers[question.id] !== undefined;
//                       const isCorrect = index === question.correctAnswer;
                      
//                       let className = 'p-4 rounded-lg border transition-colors ';
//                       if (showResult) {
//                         if (isCorrect) {
//                           className += 'bg-green-50 border-green-200 text-green-700';
//                         } else if (isSelected) {
//                           className += 'bg-red-50 border-red-200 text-red-700';
//                         } else {
//                           className += 'bg-gray-50 border-gray-200 text-gray-500';
//                         }
//                       } else {
//                         className += 'hover:bg-gray-50 cursor-pointer';
//                       }

//                       return (
//                         <div
//                           key={index}
//                           className={className}
//                           onClick={() => !showResult && handleAnswer(question.id, index)}
//                         >
//                           <div className="flex items-center">
//                             <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
//                             <span>{choice}</span>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {answers[question.id] && (
//                   <div className="p-6 bg-gray-50">
//                     <h4 className="font-medium text-gray-900 mb-2">Explanation</h4>
//                     <p className="text-gray-700">{question.explanation}</p>
//                   </div>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MCQView;
"use client";

import { useState, useEffect } from "react";
import { Check, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Remove unused imports
// import { ThumbsUp, ThumbsDown, Filter } from "lucide-react";

export default function MCQView({ 
  questions, 
  searchQuery,
  selectedFilter = 'all',
  onStatsChange,
  onSearchChange,
  onFilterChange
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Filter questions based on search and selected filter
  useEffect(() => {
    let filtered = [...questions];
    
    // Apply search filter if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(q => 
        q.text.toLowerCase().includes(query) || 
        q.subject?.toLowerCase().includes(query) ||
        q.explanation?.toLowerCase().includes(query)
      );
    }
    
    // Apply status filter
    if (selectedFilter !== 'all') {
      filtered = filtered.filter(q => {
        const answer = userAnswers[q.id];
        if (selectedFilter === 'correct') {
          return answer && answer.isCorrect;
        }
        if (selectedFilter === 'incorrect') {
          return answer && !answer.isCorrect;
        }
        if (selectedFilter === 'unanswered') {
          return !answer;
        }
        return true;
      });
    }
    
    setFilteredQuestions(filtered);
    
    // Reset question index if it's out of bounds after filtering
    if (currentQuestionIndex >= filtered.length && filtered.length > 0) {
      setCurrentQuestionIndex(0);
    }
  }, [questions, searchQuery, selectedFilter, userAnswers, currentQuestionIndex]);
  
  // Update stats whenever userAnswers changes
  useEffect(() => {
    if (onStatsChange) {
      const correct = Object.values(userAnswers).filter(a => a.isCorrect).length;
      const incorrect = Object.values(userAnswers).filter(a => !a.isCorrect).length;
      onStatsChange({
        total: questions.length,
        correct,
        incorrect, 
        remaining: questions.length - correct - incorrect
      });
    }
  }, [questions.length, userAnswers, onStatsChange]);
  
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  
  const handleSelectAnswer = (questionId, selectedIndex) => {
    if (!currentQuestion) return;
    
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    setUserAnswers({
      ...userAnswers,
      [questionId]: {
        selectedIndex,
        isCorrect
      }
    });
    setShowExplanation(true);
  };
  
  const resetQuestion = () => {
    if (currentQuestion) {
      const updatedAnswers = { ...userAnswers };
      delete updatedAnswers[currentQuestion.id];
      setUserAnswers(updatedAnswers);
      setShowExplanation(false);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(!!userAnswers[filteredQuestions[currentQuestionIndex + 1]?.id]);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(!!userAnswers[filteredQuestions[currentQuestionIndex - 1]?.id]);
    }
  };
  
  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center p-8">
        <Card className="max-w-md w-full p-6 text-center">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">No Questions Available</h3>
            <p className="text-gray-600 mb-4">
              {filteredQuestions.length === 0 && questions.length > 0 
                ? "No questions match your current filter or search criteria."
                : "There are no questions available for this exam yet."}
            </p>
            {filteredQuestions.length === 0 && questions.length > 0 && (
              <Button
                variant="outline"
                onClick={() => {
                  if (searchQuery && typeof onSearchChange === 'function') {
                    onSearchChange('');
                  }
                  if (selectedFilter !== 'all' && typeof onFilterChange === 'function') {
                    onFilterChange('all');
                  }
                }}
              >
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const selectedAnswerData = userAnswers[currentQuestion.id];
  
  return (
    <div className="container mx-auto px-4 py-4">
      <Card className="mb-6">
        <CardContent className="pt-6">
          {/* Question */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="mb-2">
                {currentQuestion.subject || 'General'}
              </Badge>
              <Badge variant="outline">
                Question {currentQuestionIndex + 1} of {filteredQuestions.length}
              </Badge>
            </div>
            <h3 className="text-lg font-medium mb-5">{currentQuestion.text}</h3>
            
            <div className="space-y-3">
              {currentQuestion.choices.map((choice, index) => {
                // Determine styling based on selection and correctness
                let bgColor = "bg-white";
                let borderColor = "border-gray-200";
                let textColor = "text-gray-800";
                
                if (selectedAnswerData) {
                  if (index === currentQuestion.correctAnswer) {
                    bgColor = "bg-green-50";
                    borderColor = "border-green-200";
                    textColor = "text-green-800";
                  } else if (index === selectedAnswerData.selectedIndex) {
                    bgColor = "bg-red-50";
                    borderColor = "border-red-200";
                    textColor = "text-red-800";
                  } else {
                    bgColor = "bg-gray-50";
                    textColor = "text-gray-500";
                  }
                }
                
                return (
                  <button
                    key={index}
                    className={`w-full p-4 rounded-lg border ${borderColor} ${bgColor} ${textColor} flex items-center justify-between transition-colors ${!selectedAnswerData ? "hover:bg-gray-50" : ""}`}
                    onClick={() => handleSelectAnswer(currentQuestion.id, index)}
                    disabled={selectedAnswerData !== undefined}
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                      <span>{choice}</span>
                    </div>
                    
                    {selectedAnswerData && index === currentQuestion.correctAnswer && (
                      <Check className="h-5 w-5 text-green-600" />
                    )}
                    
                    {selectedAnswerData && index === selectedAnswerData.selectedIndex && index !== currentQuestion.correctAnswer && (
                      <X className="h-5 w-5 text-red-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Explanation */}
          {showExplanation && (
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-5 w-5 text-gray-700" />
                <h4 className="font-medium">Explanation</h4>
              </div>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Action buttons */}
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetQuestion}
            disabled={!selectedAnswerData}
          >
            Reset
          </Button>
        </div>
        
        <Button 
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === filteredQuestions.length - 1}
          className="bg-black hover:bg-zinc-800"
        >
          Next Question
        </Button>
      </div>
      
      {/* Question navigation dots */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {filteredQuestions.map((_, index) => {
            const question = filteredQuestions[index];
            const answer = userAnswers[question?.id];
            let bgColor = "bg-gray-200";
            
            if (answer) {
              bgColor = answer.isCorrect ? "bg-green-500" : "bg-red-500";
            }
            
            if (index === currentQuestionIndex) {
              bgColor = answer 
                ? (answer.isCorrect ? "bg-green-700" : "bg-red-700") 
                : "bg-black";
            }
            
            return (
              <button
                key={index}
                className={`w-8 h-8 rounded-full ${bgColor} text-white text-xs font-medium transition-colors`}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setShowExplanation(!!userAnswers[question?.id]);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}