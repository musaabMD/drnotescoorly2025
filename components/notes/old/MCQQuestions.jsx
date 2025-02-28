// // "use client"
// // import React, { useState } from 'react';
// // import { Search, ThumbsUp, ThumbsDown, CheckCircle, XCircle, Info, Eye, EyeOff } from 'lucide-react';
// // import { Button } from "@/components/ui/button";

// // const MCQQuestions = ({ filteredQuestions }) => {
// //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// //   const [revealedAnswers, setRevealedAnswers] = useState({});
// //   const [reviews, setReviews] = useState({});
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [showFeedback, setShowFeedback] = useState({});

// //   // Custom color palette
// //   const colors = {
// //     primary: "#007832",
// //     background: "#F6EFE8",
// //     accent: "#E8D8CE",
// //     tabs: "#E5DFDA",
// //     text: "#000000",
// //     textLight: "#333333",
// //     // Thumbs colors
// //     thumbsUpBg: "#EFFDF4",
// //     thumbsUpIcon: "#17A34A",
// //     thumbsDownBg: "#FFF7ED",
// //     thumbsDownIcon: "#F97315"
// //   };

// //   const handleReview = (id, status, e) => {
// //     e.stopPropagation();
// //     setReviews(prev => ({
// //       ...prev,
// //       [id]: status
// //     }));
// //   };

// //   const handleSelectAnswer = (questionId, optionIndex) => {
// //     setSelectedAnswers(prev => ({
// //       ...prev, 
// //       [questionId]: optionIndex
// //     }));
// //     setShowFeedback(prev => ({
// //       ...prev,
// //       [questionId]: true
// //     }));
// //   };

// //   const toggleAnswer = (id, e) => {
// //     e.stopPropagation(); // Prevent event bubbling
// //     setRevealedAnswers(prev => ({
// //       ...prev,
// //       [id]: !prev[id]
// //     }));
// //   };

// //   const toggleAllAnswers = () => {
// //     const currentIds = filteredQuestions.map(q => q.id);
// //     const allRevealed = currentIds.every(id => revealedAnswers[id]);

// //     if (allRevealed) {
// //       // Hide all answers
// //       const newRevealedState = {...revealedAnswers};
// //       currentIds.forEach(id => {
// //         newRevealedState[id] = false;
// //       });
// //       setRevealedAnswers(newRevealedState);
// //     } else {
// //       // Show all answers
// //       const newRevealedState = {...revealedAnswers};
// //       currentIds.forEach(id => {
// //         newRevealedState[id] = true;
// //       });
// //       setRevealedAnswers(newRevealedState);
// //     }
// //   };

// //   const areAllAnswersRevealed = filteredQuestions.length > 0 && 
// //     filteredQuestions.every(q => revealedAnswers[q.id]);

// //   return (
// //     <div className="max-w-5xl mx-auto px-4 py-8">
// //       <div className="flex justify-between items-center mb-4">
// //         <h2 className="text-xl font-medium" style={{color: colors.text}}>
// //           {filteredQuestions.length} Questions
// //         </h2>
        
// //         {/* Show/Hide All Answers text button */}
// //         <button 
// //           onClick={toggleAllAnswers}
// //           className="text-sm hover:underline transition-colors"
// //           style={{color: colors.primary}}
// //         >
// //           {areAllAnswersRevealed ? 'Hide all answers' : 'Show all answers'}
// //         </button>
// //       </div>
      
// //       <div className="space-y-3">
// //         {filteredQuestions.map((question, index) => (
// //           <div key={question.id} className="relative">
// //             <div className="flex rounded-lg overflow-hidden bg-white">
// //               {/* Question Number */}
// //               <div 
// //                 style={{backgroundColor: colors.primary}} 
// //                 className="flex items-center justify-center w-16 text-white text-xl font-medium"
// //               >
// //                 <span>{index + 1}</span>
// //               </div>

// //               {/* Content */}
// //               <div className="flex-1 flex flex-col md:flex-row">
// //                 <div className="flex-1 p-4 flex flex-col">
// //                   {/* Subject and Date */}
// //                   <div className="flex items-center justify-between mb-1">
// //                     <div style={{color: colors.primary}} className="text-sm">
// //                       {question.subject}
// //                     </div>
// //                     <div className="text-xs text-gray-500">
// //                       {question.date}
// //                     </div>
// //                   </div>
                  
// //                   {/* Question */}
// //                   <div className="flex items-center">
// //                     <h3 style={{color: colors.text}} className="text-lg font-medium">
// //                       {question.shortQuestion}
// //                     </h3>
// //                   </div>
                  
// //                   {/* Align with answer section */}
// //                   <div className="flex-grow"></div>
                  
// //                   {/* Detail Link */}
// //                   <button 
// //                     className="mt-3 text-sm self-start"
// //                     style={{color: colors.primary}}
// //                     onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
// //                   >
// //                     Click to see details
// //                   </button>
// //                 </div>

// //                 {/* Answer Section */}
// //                 <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-100 flex items-center">
// //                   <div className="flex-grow flex items-center h-full">
// //                     {revealedAnswers[question.id] ? (
// //                       <div className="w-full flex items-center">
// //                         <span style={{color: colors.textLight}} className="flex-grow">
// //                           {question.shortAnswer}
// //                         </span>
// //                         <button
// //                           className="ml-2 text-gray-400 hover:text-gray-600 flex items-center"
// //                           onClick={(e) => toggleAnswer(question.id, e)}
// //                         >
// //                           <EyeOff className="h-4 w-4 mr-1" />
// //                           <span className="text-sm">Hide</span>
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <button
// //                         className="text-gray-400 hover:text-gray-600 flex items-center"
// //                         onClick={(e) => toggleAnswer(question.id, e)}
// //                       >
// //                         <Eye className="h-4 w-4 mr-1" />
// //                         <span>Reveal answer</span>
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
                
// //                 {/* Review Buttons */}
// //                 <div className="flex md:flex-col items-center border-t md:border-t-0 md:border-l border-gray-100">
// //                   <button 
// //                     onClick={(e) => handleReview(question.id, 'got-it', e)}
// //                     style={{
// //                       backgroundColor: reviews[question.id] === 'got-it' ? colors.thumbsUpBg : 'transparent',
// //                       color: reviews[question.id] === 'got-it' ? colors.thumbsUpIcon : '#9ca3af'
// //                     }}
// //                     className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 transition-colors"
// //                   >
// //                     <ThumbsUp 
// //                       className="h-6 w-6" 
// //                       fill={reviews[question.id] === 'got-it' ? colors.thumbsUpIcon : 'none'} 
// //                     />
// //                     <span className="text-xs mt-1">Got it</span>
// //                   </button>
// //                   <button 
// //                     onClick={(e) => handleReview(question.id, 'review', e)}
// //                     style={{
// //                       backgroundColor: reviews[question.id] === 'review' ? colors.thumbsDownBg : 'transparent',
// //                       color: reviews[question.id] === 'review' ? colors.thumbsDownIcon : '#9ca3af'
// //                     }}
// //                     className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 border-l md:border-l-0 md:border-t border-gray-100 transition-colors"
// //                   >
// //                     <ThumbsDown 
// //                       className="h-6 w-6" 
// //                       fill={reviews[question.id] === 'review' ? colors.thumbsDownIcon : 'none'} 
// //                     />
// //                     <span className="text-xs mt-1">Review</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Expanded Details */}
// //             {expandedQuestion === question.id && (
// //               <div className="bg-white mt-1 rounded-lg p-6 shadow-sm space-y-4">
// //                 <p style={{color: colors.text}} className="font-medium text-lg mb-4">{question.fullQuestion}</p>
                
// //                 {/* MCQ Options */}
// //                 <div className="space-y-3">
// //                   {question.options.map((option, index) => {
// //                     const isSelected = selectedAnswers[question.id] === index;
// //                     const showCorrectness = showFeedback[question.id];
// //                     const isCorrectAnswer = index === question.correctAnswer;
                    
// //                     let optionClass = "p-4 rounded-lg border transition-colors cursor-pointer flex items-center";
// //                     let bgColor = "#ffffff";
// //                     let textColor = colors.text;
// //                     let borderColor = "#e5e7eb";
                    
// //                     if (showCorrectness) {
// //                       if (isCorrectAnswer) {
// //                         bgColor = "#f0fdf4";
// //                         borderColor = "#86efac";
// //                         textColor = "#166534";
// //                       } else if (isSelected) {
// //                         bgColor = "#fef2f2";
// //                         borderColor = "#fca5a5";
// //                         textColor = "#991b1b";
// //                       } else {
// //                         bgColor = "#f9fafb";
// //                         borderColor = "#e5e7eb";
// //                         textColor = "#6b7280";
// //                       }
// //                     } else {
// //                       if (isSelected) {
// //                         bgColor = "#f0f7ff";
// //                         borderColor = "#bfdbfe";
// //                         textColor = colors.primary;
// //                       } else {
// //                         bgColor = "#f9fafb";
// //                         borderColor = "#e5e7eb";
// //                         textColor = colors.text;
// //                       }
// //                     }
                    
// //                     return (
// //                       <div 
// //                         key={index}
// //                         className={optionClass}
// //                         style={{
// //                           backgroundColor: bgColor,
// //                           borderColor: borderColor,
// //                           color: textColor
// //                         }}
// //                         onClick={() => handleSelectAnswer(question.id, index)}
// //                       >
// //                         <div className="mr-3 font-medium w-6">{index + 1})</div>
// //                         <div className="flex-1">{option}</div>
// //                         {showCorrectness && isCorrectAnswer && (
// //                           <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
// //                         )}
// //                         {showCorrectness && isSelected && !isCorrectAnswer && (
// //                           <XCircle className="h-5 w-5 text-red-600 ml-2" />
// //                         )}
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
                
// //                 {/* Explanation section */}
// //                 {showFeedback[question.id] && (
// //                   <div 
// //                     style={{borderColor: colors.accent}} 
// //                     className="mt-6 border-t pt-4"
// //                   >
// //                     <div style={{color: colors.primary}} className="flex items-center gap-2 mb-2">
// //                       <Info className="h-5 w-5" />
// //                       <h3 className="font-medium">Explanation</h3>
// //                     </div>
// //                     <p style={{color: colors.textLight}}>{question.explanation}</p>
// //                   </div>
// //                 )}
                
// //                 {/* Try Again Button */}
// //                 {showFeedback[question.id] && (
// //                   <div className="flex justify-center mt-4">
// //                     <Button
// //                       variant="outline"
// //                       style={{
// //                         borderColor: colors.accent,
// //                         color: colors.primary,
// //                       }}
// //                       onClick={() => {
// //                         setSelectedAnswers(prev => ({ ...prev, [question.id]: undefined }));
// //                         setShowFeedback(prev => ({ ...prev, [question.id]: false }));
// //                       }}
// //                     >
// //                       Try Again
// //                     </Button>
// //                   </div>
// //                 )}
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //         {/* No results message */}
// //         {filteredQuestions.length === 0 && (
// //           <div className="bg-white rounded-lg p-8 text-center">
// //             <div className="text-gray-500 mb-2">
// //               <Search className="h-8 w-8 mx-auto opacity-50" />
// //             </div>
// //             <h3 className="text-lg font-medium mb-2" style={{color: colors.text}}>No questions found</h3>
// //             <p className="text-gray-500">Try adjusting your filters or search terms</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MCQQuestions;
// "use client"
// import React, { useState } from 'react';
// import { Search, ThumbsUp, ThumbsDown, CheckCircle, XCircle, Info, Eye, EyeOff } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// const MCQQuestions = ({ 
//   filteredQuestions,
//   expandedQuestion,
//   setExpandedQuestion,
//   revealedAnswers,
//   setRevealedAnswers,
//   reviews,
//   setReviews,
//   selectedAnswers,
//   setSelectedAnswers,
//   showFeedback,
//   setShowFeedback,
//   colors 
// }) => {
//   // Default colors if not provided
//   const defaultColors = {
//     primary: "#007832",
//     background: "#F6EFE8",
//     accent: "#E8D8CE",
//     tabs: "#E5DFDA",
//     text: "#000000",
//     textLight: "#333333",
//     thumbsUpBg: "#EFFDF4",
//     thumbsUpIcon: "#17A34A",
//     thumbsDownBg: "#FFF7ED",
//     thumbsDownIcon: "#F97315"
//   };

//   const colorPalette = colors || defaultColors;

//   const handleReview = (id, status, e) => {
//     e.stopPropagation();
//     setReviews(prev => ({
//       ...prev,
//       [id]: status
//     }));
//   };

//   const handleSelectAnswer = (questionId, optionIndex) => {
//     setSelectedAnswers(prev => ({
//       ...prev, 
//       [questionId]: optionIndex
//     }));
//     setShowFeedback(prev => ({
//       ...prev,
//       [questionId]: true
//     }));
//   };

//   const toggleAnswer = (id, e) => {
//     e.stopPropagation(); // Prevent event bubbling
//     setRevealedAnswers(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const toggleAllAnswers = () => {
//     const currentIds = filteredQuestions.map(q => q.id);
//     const allRevealed = currentIds.every(id => revealedAnswers[id]);

//     if (allRevealed) {
//       // Hide all answers
//       const newRevealedState = {...revealedAnswers};
//       currentIds.forEach(id => {
//         newRevealedState[id] = false;
//       });
//       setRevealedAnswers(newRevealedState);
//     } else {
//       // Show all answers
//       const newRevealedState = {...revealedAnswers};
//       currentIds.forEach(id => {
//         newRevealedState[id] = true;
//       });
//       setRevealedAnswers(newRevealedState);
//     }
//   };

//   const areAllAnswersRevealed = filteredQuestions.length > 0 && 
//     filteredQuestions.every(q => revealedAnswers[q.id]);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-medium" style={{color: colorPalette.text}}>
//           {filteredQuestions.length} {filteredQuestions.length === 1 ? 'Question' : 'Questions'}
//         </h2>
        
//         {/* Show/Hide All Answers text button */}
//         {filteredQuestions.length > 0 && (
//           <button 
//             onClick={toggleAllAnswers}
//             className="text-sm hover:underline transition-colors"
//             style={{color: colorPalette.primary}}
//           >
//             {areAllAnswersRevealed ? 'Hide all answers' : 'Show all answers'}
//           </button>
//         )}
//       </div>
      
//       <div className="space-y-3">
//         {filteredQuestions.map((question, index) => (
//           <div key={question.id} className="relative">
//             <div className="flex rounded-lg overflow-hidden bg-white">
//               {/* Question Number */}
//               <div 
//                 style={{backgroundColor: colorPalette.primary}} 
//                 className="flex items-center justify-center w-16 text-white text-xl font-medium"
//               >
//                 <span>{index + 1}</span>
//               </div>

//               {/* Content */}
//               <div className="flex-1 flex flex-col md:flex-row">
//                 <div className="flex-1 p-4 flex flex-col">
//                   {/* Subject and Date */}
//                   <div className="flex items-center justify-between mb-1">
//                     <div style={{color: colorPalette.primary}} className="text-sm">
//                       {question.subject}
//                     </div>
//                     <div className="text-xs text-gray-500">
//                       {question.date}
//                     </div>
//                   </div>
                  
//                   {/* Question */}
//                   <div className="flex items-center">
//                     <h3 style={{color: colorPalette.text}} className="text-lg font-medium">
//                       {question.shortQuestion}
//                     </h3>
//                   </div>
                  
//                   {/* Align with answer section */}
//                   <div className="flex-grow"></div>
                  
//                   {/* Detail Link */}
//                   <button 
//                     className="mt-3 text-sm self-start"
//                     style={{color: colorPalette.primary}}
//                     onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
//                   >
//                     Click to see details
//                   </button>
//                 </div>

//                 {/* Answer Section */}
//                 <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-100 flex items-center">
//                   <div className="flex-grow flex items-center h-full">
//                     {revealedAnswers[question.id] ? (
//                       <div className="w-full flex items-center">
//                         <span style={{color: colorPalette.textLight}} className="flex-grow">
//                           {question.shortAnswer}
//                         </span>
//                         <button
//                           className="ml-2 text-gray-400 hover:text-gray-600 flex items-center"
//                           onClick={(e) => toggleAnswer(question.id, e)}
//                         >
//                           <EyeOff className="h-4 w-4 mr-1" />
//                           <span className="text-sm">Hide</span>
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         className="text-gray-400 hover:text-gray-600 flex items-center"
//                         onClick={(e) => toggleAnswer(question.id, e)}
//                       >
//                         <Eye className="h-4 w-4 mr-1" />
//                         <span>Reveal answer</span>
//                       </button>
//                     )}
//                   </div>
//                 </div>
                
//                 {/* Review Buttons */}
//                 <div className="flex md:flex-col items-center border-t md:border-t-0 md:border-l border-gray-100">
//                   <button 
//                     onClick={(e) => handleReview(question.id, 'got-it', e)}
//                     style={{
//                       backgroundColor: reviews[question.id] === 'got-it' ? colorPalette.thumbsUpBg : 'transparent',
//                       color: reviews[question.id] === 'got-it' ? colorPalette.thumbsUpIcon : '#9ca3af'
//                     }}
//                     className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 transition-colors"
//                   >
//                     <ThumbsUp 
//                       className="h-6 w-6" 
//                       fill={reviews[question.id] === 'got-it' ? colorPalette.thumbsUpIcon : 'none'} 
//                     />
//                     <span className="text-xs mt-1">Got it</span>
//                   </button>
//                   <button 
//                     onClick={(e) => handleReview(question.id, 'review', e)}
//                     style={{
//                       backgroundColor: reviews[question.id] === 'review' ? colorPalette.thumbsDownBg : 'transparent',
//                       color: reviews[question.id] === 'review' ? colorPalette.thumbsDownIcon : '#9ca3af'
//                     }}
//                     className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 border-l md:border-l-0 md:border-t border-gray-100 transition-colors"
//                   >
//                     <ThumbsDown 
//                       className="h-6 w-6" 
//                       fill={reviews[question.id] === 'review' ? colorPalette.thumbsDownIcon : 'none'} 
//                     />
//                     <span className="text-xs mt-1">Review</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Expanded Details */}
//             {expandedQuestion === question.id && (
//               <div className="bg-white mt-1 rounded-lg p-6 shadow-sm space-y-4">
//                 <p style={{color: colorPalette.text}} className="font-medium text-lg mb-4">{question.fullQuestion}</p>
                
//                 {/* MCQ Options */}
//                 <div className="space-y-3">
//                   {question.options.map((option, index) => {
//                     const isSelected = selectedAnswers[question.id] === index;
//                     const showCorrectness = showFeedback[question.id];
//                     const isCorrectAnswer = index === question.correctAnswer;
                    
//                     let optionClass = "p-4 rounded-lg border transition-colors cursor-pointer flex items-center";
//                     let bgColor = "#ffffff";
//                     let textColor = colorPalette.text;
//                     let borderColor = "#e5e7eb";
                    
//                     if (showCorrectness) {
//                       if (isCorrectAnswer) {
//                         bgColor = "#f0fdf4";
//                         borderColor = "#86efac";
//                         textColor = "#166534";
//                       } else if (isSelected) {
//                         bgColor = "#fef2f2";
//                         borderColor = "#fca5a5";
//                         textColor = "#991b1b";
//                       } else {
//                         bgColor = "#f9fafb";
//                         borderColor = "#e5e7eb";
//                         textColor = "#6b7280";
//                       }
//                     } else {
//                       if (isSelected) {
//                         bgColor = "#f0f7ff";
//                         borderColor = "#bfdbfe";
//                         textColor = colorPalette.primary;
//                       } else {
//                         bgColor = "#f9fafb";
//                         borderColor = "#e5e7eb";
//                         textColor = colorPalette.text;
//                       }
//                     }
                    
//                     return (
//                       <div 
//                         key={index}
//                         className={optionClass}
//                         style={{
//                           backgroundColor: bgColor,
//                           borderColor: borderColor,
//                           color: textColor
//                         }}
//                         onClick={() => handleSelectAnswer(question.id, index)}
//                       >
//                         <div className="mr-3 font-medium w-6">{index + 1})</div>
//                         <div className="flex-1">{option}</div>
//                         {showCorrectness && isCorrectAnswer && (
//                           <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
//                         )}
//                         {showCorrectness && isSelected && !isCorrectAnswer && (
//                           <XCircle className="h-5 w-5 text-red-600 ml-2" />
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
                
//                 {/* Explanation section */}
//                 {showFeedback[question.id] && (
//                   <div 
//                     style={{borderColor: colorPalette.accent}} 
//                     className="mt-6 border-t pt-4"
//                   >
//                     <div style={{color: colorPalette.primary}} className="flex items-center gap-2 mb-2">
//                       <Info className="h-5 w-5" />
//                       <h3 className="font-medium">Explanation</h3>
//                     </div>
//                     <p style={{color: colorPalette.textLight}}>{question.explanation}</p>
//                   </div>
//                 )}
                
//                 {/* Try Again Button */}
//                 {showFeedback[question.id] && (
//                   <div className="flex justify-center mt-4">
//                     <Button
//                       variant="outline"
//                       style={{
//                         borderColor: colorPalette.accent,
//                         color: colorPalette.primary,
//                       }}
//                       onClick={() => {
//                         setSelectedAnswers(prev => ({ ...prev, [question.id]: undefined }));
//                         setShowFeedback(prev => ({ ...prev, [question.id]: false }));
//                       }}
//                     >
//                       Try Again
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}

//         {/* No results message */}
//         {filteredQuestions.length === 0 && (
//           <div className="bg-white rounded-lg p-8 text-center">
//             <div className="text-gray-500 mb-2">
//               <Search className="h-8 w-8 mx-auto opacity-50" />
//             </div>
//             <h3 className="text-lg font-medium mb-2" style={{color: colorPalette.text}}>No questions found</h3>
//             <p className="text-gray-500">Try adjusting your filters or search terms</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MCQQuestions;
"use client";

import React from 'react';
import { Search, ThumbsUp, ThumbsDown, CheckCircle, XCircle, Info, Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MCQQuestions = ({
  filteredQuestions,
  expandedQuestion,
  setExpandedQuestion,
  revealedAnswers,
  setRevealedAnswers,
  reviews,
  setReviews,
  selectedAnswers,
  setSelectedAnswers,
  showFeedback,
  setShowFeedback,
  colors
}) => {
  // Default colors if not provided
  const defaultColors = {
    primary: "#007832",
    background: "#F6EFE8",
    accent: "#E8D8CE",
    tabs: "#E5DFDA",
    text: "#000000",
    textLight: "#333333",
    thumbsUpBg: "#EFFDF4",
    thumbsUpIcon: "#17A34A",
    thumbsDownBg: "#FFF7ED",
    thumbsDownIcon: "#F97315"
  };
  
  const colorPalette = colors || defaultColors;
  
  const handleReview = (id, status, e) => {
    e.stopPropagation();
    setReviews(prev => ({
      ...prev,
      [id]: status
    }));
  };
  
  const handleSelectAnswer = (questionId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowFeedback(prev => ({
      ...prev,
      [questionId]: true
    }));
  };
  
  const toggleAnswer = (id, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setRevealedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const toggleAllAnswers = () => {
    const currentIds = filteredQuestions.map(q => q.id);
    const allRevealed = currentIds.every(id => revealedAnswers[id]);
    if (allRevealed) {
      // Hide all answers
      const newRevealedState = {...revealedAnswers};
      currentIds.forEach(id => {
        newRevealedState[id] = false;
      });
      setRevealedAnswers(newRevealedState);
    } else {
      // Show all answers
      const newRevealedState = {...revealedAnswers};
      currentIds.forEach(id => {
        newRevealedState[id] = true;
      });
      setRevealedAnswers(newRevealedState);
    }
  };
  
  const areAllAnswersRevealed = filteredQuestions.length > 0 &&
    filteredQuestions.every(q => revealedAnswers[q.id]);
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium" style={{color: colorPalette.text}}>
          {filteredQuestions.length} {filteredQuestions.length === 1 ? 'Question' : 'Questions'}
        </h2>
        {/* Show/Hide All Answers text button */}
        {filteredQuestions.length > 0 && (
          <button
            onClick={toggleAllAnswers}
            className="text-sm hover:underline transition-colors"
            style={{color: colorPalette.primary}}
          >
            {areAllAnswersRevealed ? 'Hide all answers' : 'Show all answers'}
          </button>
        )}
      </div>
      <div className="space-y-3">
        {filteredQuestions.map((question, index) => (
          <div key={question.id} className="relative">
            <div className="flex rounded-lg overflow-hidden bg-white">
              {/* Question Number */}
              <div
                style={{backgroundColor: colorPalette.primary}}
                className="flex items-center justify-center w-16 text-white text-xl font-medium"
              >
                <span>{index + 1}</span>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row">
                <div className="flex-1 p-4 flex flex-col">
                  {/* Subject and Date */}
                  <div className="flex items-center justify-between mb-1">
                    <div style={{color: colorPalette.primary}} className="text-sm">
                      {question.subject}
                    </div>
                    <div className="text-xs text-gray-500">
                      {question.date}
                    </div>
                  </div>
                  {/* Question */}
                  <div className="flex items-center">
                    <h3 style={{color: colorPalette.text}} className="text-lg font-medium">
                      {question.shortQuestion}
                    </h3>
                  </div>
                  {/* Align with answer section */}
                  <div className="flex-grow"></div>
                  {/* Detail Link */}
                  <button
                    className="mt-3 text-sm self-start"
                    style={{color: colorPalette.primary}}
                    onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
                  >
                    Click to see details
                  </button>
                </div>
                {/* Answer Section */}
                <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-100 flex items-center">
                  <div className="flex-grow flex items-center h-full">
                    {revealedAnswers[question.id] ? (
                      <div className="w-full flex items-center">
                        <span style={{color: colorPalette.textLight}} className="flex-grow">
                          {question.shortAnswer}
                        </span>
                        <button
                          className="ml-2 text-gray-400 hover:text-gray-600 flex items-center"
                          onClick={(e) => toggleAnswer(question.id, e)}
                        >
                          <EyeOff className="h-4 w-4 mr-1" />
                          <span className="text-sm">Hide</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        className="text-gray-400 hover:text-gray-600 flex items-center"
                        onClick={(e) => toggleAnswer(question.id, e)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        <span>Reveal answer</span>
                      </button>
                    )}
                  </div>
                </div>
                {/* Review Buttons */}
                <div className="flex md:flex-col items-center border-t md:border-t-0 md:border-l border-gray-100">
                  <button
                    onClick={(e) => handleReview(question.id, 'got-it', e)}
                    style={{
                      backgroundColor: reviews[question.id] === 'got-it' ? colorPalette.thumbsUpBg : 'transparent',
                      color: reviews[question.id] === 'got-it' ? colorPalette.thumbsUpIcon : '#9ca3af'
                    }}
                    className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 transition-colors"
                  >
                    <ThumbsUp
                      className="h-6 w-6"
                      fill={reviews[question.id] === 'got-it' ? colorPalette.thumbsUpIcon : 'none'}
                    />
                    <span className="text-xs mt-1">Got it</span>
                  </button>
                  <button
                    onClick={(e) => handleReview(question.id, 'review', e)}
                    style={{
                      backgroundColor: reviews[question.id] === 'review' ? colorPalette.thumbsDownBg : 'transparent',
                      color: reviews[question.id] === 'review' ? colorPalette.thumbsDownIcon : '#9ca3af'
                    }}
                    className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 border-l md:border-l-0 md:border-t border-gray-100 transition-colors"
                  >
                    <ThumbsDown
                      className="h-6 w-6"
                      fill={reviews[question.id] === 'review' ? colorPalette.thumbsDownIcon : 'none'}
                    />
                    <span className="text-xs mt-1">Review</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Expanded Details */}
            {expandedQuestion === question.id && (
              <div className="bg-white mt-1 rounded-lg p-6 shadow-sm space-y-4">
                <p style={{color: colorPalette.text}} className="font-medium text-lg mb-4">{question.fullQuestion}</p>
                {/* MCQ Options */}
                <div className="space-y-3">
                  {question.options && question.options.map((option, index) => {
                    const isSelected = selectedAnswers[question.id] === index;
                    const showCorrectness = showFeedback[question.id];
                    const isCorrectAnswer = index === question.correctAnswer;
                    let optionClass = "p-4 rounded-lg border transition-colors cursor-pointer flex items-center";
                    let bgColor = "#ffffff";
                    let textColor = colorPalette.text;
                    let borderColor = "#e5e7eb";
                    if (showCorrectness) {
                      if (isCorrectAnswer) {
                        bgColor = "#f0fdf4";
                        borderColor = "#86efac";
                        textColor = "#166534";
                      } else if (isSelected) {
                        bgColor = "#fef2f2";
                        borderColor = "#fca5a5";
                        textColor = "#991b1b";
                      } else {
                        bgColor = "#f9fafb";
                        borderColor = "#e5e7eb";
                        textColor = "#6b7280";
                      }
                    } else {
                      if (isSelected) {
                        bgColor = "#f0f7ff";
                        borderColor = "#bfdbfe";
                        textColor = colorPalette.primary;
                      } else {
                        bgColor = "#f9fafb";
                        borderColor = "#e5e7eb";
                        textColor = colorPalette.text;
                      }
                    }
                    return (
                      <div
                        key={index}
                        className={optionClass}
                        style={{
                          backgroundColor: bgColor,
                          borderColor: borderColor,
                          color: textColor
                        }}
                        onClick={() => handleSelectAnswer(question.id, index)}
                      >
                        <div className="mr-3 font-medium w-6">{index + 1})</div>
                        <div className="flex-1">{option}</div>
                        {showCorrectness && isCorrectAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
                        )}
                        {showCorrectness && isSelected && !isCorrectAnswer && (
                          <XCircle className="h-5 w-5 text-red-600 ml-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Explanation section */}
                {showFeedback[question.id] && (
                  <div
                    style={{borderColor: colorPalette.accent}}
                    className="mt-6 border-t pt-4"
                  >
                    <div style={{color: colorPalette.primary}} className="flex items-center gap-2 mb-2">
                      <Info className="h-5 w-5" />
                      <h3 className="font-medium">Explanation</h3>
                    </div>
                    <p style={{color: colorPalette.textLight}}>{question.explanation}</p>
                  </div>
                )}
                {/* Try Again Button */}
                {showFeedback[question.id] && (
                  <div className="flex justify-center mt-4">
                    <Button
                      variant="outline"
                      style={{
                        borderColor: colorPalette.accent,
                        color: colorPalette.primary,
                      }}
                      onClick={() => {
                        setSelectedAnswers(prev => ({ ...prev, [question.id]: undefined }));
                        setShowFeedback(prev => ({ ...prev, [question.id]: false }));
                      }}
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        {/* No results message */}
        {filteredQuestions.length === 0 && (
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-2">
              <Search className="h-8 w-8 mx-auto opacity-50" />
            </div>
            <h3 className="text-lg font-medium mb-2" style={{color: colorPalette.text}}>No questions found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MCQQuestions;