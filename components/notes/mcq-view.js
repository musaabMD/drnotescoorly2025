// // 'use client';

// // import React, { useState } from 'react';

// // const MCQView = ({ data, currentIndex, onNext, onPrev }) => {
// //   const [showAnswer, setShowAnswer] = useState(false);
// //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// //   const currentCard = data[currentIndex];

// //   if (!currentCard || !currentCard.mcq) return null;

// //   const handleAnswerClick = (id) => {
// //     setSelectedAnswer(id);
// //     setShowAnswer(true);
// //   };

// //   const handleNext = () => {
// //     setShowAnswer(false);
// //     setSelectedAnswer(null);
// //     onNext();
// //   };

// //   const handlePrev = () => {
// //     setShowAnswer(false);
// //     setSelectedAnswer(null);
// //     onPrev();
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto">
// //       <div className="bg-white border rounded-lg shadow-sm p-6 min-h-[400px]">
// //         <div className="mb-4 text-sm text-gray-500">
// //           {currentIndex + 1} / {data.length}
// //         </div>

// //         <div className="space-y-6">
// //           <h3 className="text-xl font-medium text-gray-900">
// //             {currentCard.mcq.question}
// //           </h3>

// //           <div className="space-y-2">
// //             {currentCard.mcq.choices.map((choice) => (
// //               <button
// //                 key={choice.id}
// //                 onClick={() => handleAnswerClick(choice.id)}
// //                 disabled={showAnswer}
// //                 className={`w-full p-3 rounded-lg border text-left transition-colors
// //                   ${selectedAnswer === choice.id && choice.isCorrect && showAnswer ? 'bg-green-100 border-green-500' : ''}
// //                   ${selectedAnswer === choice.id && !choice.isCorrect && showAnswer ? 'bg-red-100 border-red-500' : ''}
// //                   ${selectedAnswer !== choice.id && choice.isCorrect && showAnswer ? 'bg-green-50 border-green-500' : ''}
// //                   ${!showAnswer ? 'hover:bg-gray-50' : ''}
// //                 `}
// //               >
// //                 <div className="flex items-start">
// //                   <span className="min-w-[25px]">{choice.id}.</span>
// //                   <span>{choice.text}</span>
// //                 </div>
// //               </button>
// //             ))}
// //           </div>

// //           {showAnswer && (
// //             <div className="mt-6 space-y-4">
// //               <div>
// //                 <h4 className="font-medium text-gray-700 mb-2">Explanation:</h4>
// //                 <p className="text-gray-600">{currentCard.mcq.explanation}</p>
// //               </div>

// //               <div>
// //                 <h4 className="font-medium text-gray-700 mb-2">Key Points:</h4>
// //                 <ul className="list-disc pl-6 space-y-1 text-gray-600">
// //                   {currentCard.mcq.keyPoints.map((point, index) => (
// //                     <li key={index}>{point}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       <div className="flex justify-center mt-6 gap-4">
// //         <button
// //           onClick={handlePrev}
// //           className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
// //           disabled={currentIndex === 0}
// //         >
// //           Previous
// //         </button>
// //         {showAnswer && (
// //           <div className="flex gap-2">
// //             <button className="px-6 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
// //               Again <span className="text-sm">25m</span>
// //             </button>
// //             <button className="px-6 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
// //               Hard <span className="text-sm">12h</span>
// //             </button>
// //             <button className="px-6 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
// //               Good <span className="text-sm">1d</span>
// //             </button>
// //             <button className="px-6 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
// //               Easy <span className="text-sm">4d</span>
// //             </button>
// //           </div>
// //         )}
// //         <button
// //           onClick={handleNext}
// //           className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
// //           disabled={currentIndex === data.length - 1}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MCQView;
// import React, { useState } from 'react';
// import { ThumbsUp, ThumbsDown, Filter, Pin } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

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

//   const togglePin = (questionId) => {
//     setPinnedQuestions(prev => ({
//       ...prev,
//       [questionId]: !prev[questionId]
//     }));
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       {/* Filters */}
//       <div className="flex flex-col sm:flex-row gap-4 mb-8">
//         <Input
//           placeholder="Search questions..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1"
//         />
        
//         <Select value={selectedFilter} onValueChange={setSelectedFilter}>
//           <SelectTrigger className="w-[200px]">
//             <SelectValue>
//               {selectedFilter === 'all' && 'All Questions'}
//               {selectedFilter === 'correct' && 'Correct'}
//               {selectedFilter === 'incorrect' && 'Incorrect'}
//               {selectedFilter === 'unused' && 'Unused'}
//               {selectedFilter === 'pinned' && 'Pinned'}
//             </SelectValue>
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All Questions</SelectItem>
//             <SelectItem value="correct">Correct</SelectItem>
//             <SelectItem value="incorrect">Incorrect</SelectItem>
//             <SelectItem value="unused">Unused</SelectItem>
//             <SelectItem value="pinned">Pinned</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Questions List */}
//       <div className="space-y-6">
//         {getFilteredQuestions().map((question) => (
//           <div 
//             key={question.id} 
//             className="bg-white rounded-lg border shadow-sm overflow-hidden"
//           >
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-lg font-medium">{question.text}</h3>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => togglePin(question.id)}
//                   className={pinnedQuestions[question.id] ? 'text-blue-600' : ''}
//                 >
//                   <Pin className="h-4 w-4" />
//                 </Button>
//               </div>

//               <div className="space-y-3">
//                 {question.choices?.map((choice, index) => {
//                   const isSelected = answers[question.id]?.selected === index;
//                   const showResult = answers[question.id] !== undefined;
//                   const isCorrect = index === question.correctAnswer;
                  
//                   let className = 'p-4 rounded-lg border transition-colors ';
//                   if (showResult) {
//                     if (isCorrect) {
//                       className += 'bg-green-50 border-green-200 text-green-700 ';
//                     } else if (isSelected) {
//                       className += 'bg-red-50 border-red-200 text-red-700 ';
//                     } else {
//                       className += 'bg-gray-50 border-gray-200 text-gray-500 ';
//                     }
//                   } else {
//                     className += 'hover:bg-gray-50 cursor-pointer ';
//                   }

//                   return (
//                     <div
//                       key={index}
//                       className={className}
//                       onClick={() => !showResult && handleAnswer(question.id, index)}
//                     >
//                       <div className="flex items-center">
//                         <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
//                         <span>{choice}</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {answers[question.id] && (
//               <div className="p-6 bg-gray-50">
//                 <p className="text-gray-700">{question.explanation}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MCQView;
'use client';

import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Filter, Pin, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MCQView = ({ questions = [] }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [pinnedQuestions, setPinnedQuestions] = useState({});
  const [answers, setAnswers] = useState({});

  const getFilteredQuestions = () => {
    return questions.filter(q => {
      const matchesSearch = q.text?.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = selectedFilter === 'all' ||
        (selectedFilter === 'correct' && answers[q.id]?.isCorrect) ||
        (selectedFilter === 'incorrect' && answers[q.id]?.isCorrect === false) ||
        (selectedFilter === 'unused' && !answers[q.id]) ||
        (selectedFilter === 'pinned' && pinnedQuestions[q.id]);
      
      return matchesSearch && matchesFilter;
    });
  };

  const handleAnswer = (questionId, selectedAnswerIndex) => {
    const question = questions.find(q => q.id === questionId);
    const isCorrect = selectedAnswerIndex === question.correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selected: selectedAnswerIndex,
        isCorrect
      }
    }));
  };

  const togglePin = (questionId, event) => {
    event.stopPropagation();
    setPinnedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const filteredQuestions = getFilteredQuestions();

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="text-2xl font-bold">{questions.length}</div>
            <div className="text-sm text-gray-600">Total Questions</div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {Object.values(answers).filter(a => a.isCorrect).length}
            </div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="text-2xl font-bold text-red-600">
              {Object.values(answers).filter(a => !a.isCorrect).length}
            </div>
            <div className="text-sm text-gray-600">Incorrect</div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="text-2xl font-bold text-blue-600">
              {Object.keys(pinnedQuestions).filter(k => pinnedQuestions[k]).length}
            </div>
            <div className="text-sm text-gray-600">Pinned</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue>
                {selectedFilter === 'all' && 'All Questions'}
                {selectedFilter === 'correct' && 'Correct'}
                {selectedFilter === 'incorrect' && 'Incorrect'}
                {selectedFilter === 'unused' && 'Unused'}
                {selectedFilter === 'pinned' && 'Pinned'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Questions ({questions.length})</SelectItem>
              <SelectItem value="correct">
                Correct ({Object.values(answers).filter(a => a.isCorrect).length})
              </SelectItem>
              <SelectItem value="incorrect">
                Incorrect ({Object.values(answers).filter(a => !a.isCorrect).length})
              </SelectItem>
              <SelectItem value="unused">
                Unused ({questions.length - Object.keys(answers).length})
              </SelectItem>
              <SelectItem value="pinned">
                Pinned ({Object.keys(pinnedQuestions).filter(k => pinnedQuestions[k]).length})
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Found</h3>
              <p className="text-gray-500">
                {search ? "Try adjusting your search terms" : "No questions match the selected filter"}
              </p>
            </div>
          ) : (
            filteredQuestions.map((question) => (
              <div 
                key={question.id} 
                className="bg-white rounded-lg border shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium mb-1">{question.text}</h3>
                      {answers[question.id] && (
                        <Badge variant={answers[question.id].isCorrect ? "success" : "destructive"}>
                          {answers[question.id].isCorrect ? "Correct" : "Incorrect"}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => togglePin(question.id, e)}
                      className={`${pinnedQuestions[question.id] ? 'text-blue-600' : ''} hover:bg-gray-100`}
                    >
                      <Pin className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {question.choices?.map((choice, index) => {
                      const isSelected = answers[question.id]?.selected === index;
                      const showResult = answers[question.id] !== undefined;
                      const isCorrect = index === question.correctAnswer;
                      
                      let className = 'p-4 rounded-lg border transition-colors ';
                      if (showResult) {
                        if (isCorrect) {
                          className += 'bg-green-50 border-green-200 text-green-700';
                        } else if (isSelected) {
                          className += 'bg-red-50 border-red-200 text-red-700';
                        } else {
                          className += 'bg-gray-50 border-gray-200 text-gray-500';
                        }
                      } else {
                        className += 'hover:bg-gray-50 cursor-pointer';
                      }

                      return (
                        <div
                          key={index}
                          className={className}
                          onClick={() => !showResult && handleAnswer(question.id, index)}
                        >
                          <div className="flex items-center">
                            <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                            <span>{choice}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {answers[question.id] && (
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-2">Explanation</h4>
                    <p className="text-gray-700">{question.explanation}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQView;