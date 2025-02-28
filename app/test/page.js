// // "use client"
// // import React, { useState } from 'react';
// // import { Search, ThumbsUp, ThumbsDown, CheckCircle, XCircle, Info, Menu, X, User, LogIn, Lock, Eye, EyeOff } from 'lucide-react';
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import Header from '@/components/Header';

// // const MCQApp = () => {
// //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// //   const [revealedAnswers, setRevealedAnswers] = useState({});
// //   const [reviews, setReviews] = useState({});
// //   const [search, setSearch] = useState('');
// //   const [subjectFilter, setSubjectFilter] = useState('all');
// //   const [reviewFilter, setReviewFilter] = useState('all');
// //   const [yearFilter, setYearFilter] = useState('all');
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

// //   // DrNote Logo SVG Component
// //   const DrNoteLogo = () => (
// //     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// //       <rect width="40" height="40" rx="8" fill="#007832" />
// //       <path d="M8 12C8 10.8954 8.89543 10 10 10H22C27.5228 10 32 14.4772 32 20C32 25.5228 27.5228 30 22 30H10C8.89543 30 8 29.1046 8 28V12Z" fill="white"/>
// //       <path d="M14 16V24M14 16H22C23.6569 16 25 17.3431 25 19V21C25 22.6569 23.6569 24 22 24H14V16Z" stroke="#007832" strokeWidth="2" strokeLinecap="round"/>
// //       <path d="M26 15L29 15M27.5 10V13.5" stroke="#E8D8CE" strokeWidth="2" strokeLinecap="round"/>
// //     </svg>
// //   );

// //   const questions = [
// //     {
// //       id: 1,
// //       shortQuestion: 'Mycobacterium tuberculosis',
// //       shortAnswer: 'Chronic cough, night sweats, weight loss',
// //       fullQuestion: 'What are the classic symptoms of pulmonary TB?',
// //       options: [
// //         'Acute onset fever and rash',
// //         'Chronic cough, night sweats, weight loss',
// //         'Sudden chest pain and dyspnea',
// //         'Recurrent sinusitis'
// //       ],
// //       correctAnswer: 1,
// //       explanation: 'Pulmonary tuberculosis typically presents with chronic cough (>2-3 weeks), night sweats, and weight loss. The cough may initially be dry but often becomes productive with blood-streaked sputum (hemoptysis). Other symptoms include fever, fatigue, and chest pain. These symptoms develop gradually over weeks to months, distinguishing it from acute respiratory infections.',
// //       subject: 'Respiratory',
// //       date: 'Feb25'
// //     },
// //     {
// //       id: 2,
// //       shortQuestion: 'Brucella spp.',
// //       shortAnswer: 'Undulant fever, night sweats, arthralgia',
// //       fullQuestion: 'Which presentation is most characteristic of brucellosis?',
// //       options: [
// //         'Acute high fever with maculopapular rash',
// //         'Undulant fever, night sweats, arthralgia',
// //         'Productive cough and hemoptysis',
// //         'Watery diarrhea and abdominal cramps'
// //       ],
// //       correctAnswer: 1,
// //       explanation: 'Brucellosis typically presents with undulant (wave-like) fever that rises and falls over the day, accompanied by profuse sweating (especially at night), joint and muscle pain, fatigue, and headache. The infection is zoonotic, commonly transmitted through unpasteurized dairy products or direct contact with infected animals.',
// //       subject: 'Infectious Disease',
// //       date: 'Jan25'
// //     },
// //     {
// //       id: 3,
// //       shortQuestion: 'Epstein-Barr Virus',
// //       shortAnswer: 'Fatigue, sore throat, lymphadenopathy',
// //       fullQuestion: 'What are the classic symptoms of infectious mononucleosis?',
// //       options: [
// //         'Watery diarrhea and abdominal pain',
// //         'Fatigue, sore throat, lymphadenopathy',
// //         'Maculopapular rash and arthralgia',
// //         'Headache and nuchal rigidity'
// //       ],
// //       correctAnswer: 1,
// //       explanation: 'Infectious mononucleosis, caused by Epstein-Barr virus (EBV), classically presents with the triad of fatigue, pharyngitis (sore throat), and lymphadenopathy (particularly posterior cervical). Other common features include fever, malaise, splenomegaly, and atypical lymphocytosis. A maculopapular rash may develop in patients treated with ampicillin or amoxicillin.',
// //       subject: 'Infectious Disease',
// //       date: 'Mar25'
// //     }
// //   ];

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

// //   const getSubjectCounts = () => {
// //     const counts = questions.reduce((acc, q) => {
// //       acc[q.subject] = (acc[q.subject] || 0) + 1;
// //       return acc;
// //     }, {});
// //     return counts;
// //   };

// //   const getReviewCounts = () => {
// //     const gotIt = Object.values(reviews).filter(status => status === 'got-it').length;
// //     const review = Object.values(reviews).filter(status => status === 'review').length;
// //     const notReviewed = questions.length - gotIt - review;
// //     return { gotIt, review, notReviewed };
// //   };

// //   const getYearCounts = () => {
// //     const years = {};
// //     questions.forEach(q => {
// //       const year = '20' + q.date.slice(-2);
// //       years[year] = (years[year] || 0) + 1;
// //     });
// //     return years;
// //   };

// //   const subjectCounts = getSubjectCounts();
// //   const reviewCounts = getReviewCounts();
// //   const yearCounts = getYearCounts();
// //   const subjects = Object.keys(subjectCounts);
// //   const years = Object.keys(yearCounts);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [showFeedback, setShowFeedback] = useState({});

// //   const filteredQuestions = questions.filter(q => {
// //     const matchesSearch = q.shortQuestion.toLowerCase().includes(search.toLowerCase()) ||
// //                           q.shortAnswer.toLowerCase().includes(search.toLowerCase());
// //     const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
// //     const matchesReview = reviewFilter === 'all' || 
// //                           (reviewFilter === 'got-it' && reviews[q.id] === 'got-it') ||
// //                           (reviewFilter === 'review' && reviews[q.id] === 'review') ||
// //                           (reviewFilter === 'not-reviewed' && !reviews[q.id]);
// //     const matchesYear = yearFilter === 'all' || ('20' + q.date.slice(-2)) === yearFilter;
// //     return matchesSearch && matchesSubject && matchesReview && matchesYear;
// //   });

// //   const areAllAnswersRevealed = filteredQuestions.length > 0 && 
// //     filteredQuestions.every(q => revealedAnswers[q.id]);

// //   return (
// //     <div style={{backgroundColor: colors.background}} className="min-h-screen">
// //       {/* Header */}
// //   <Header/>

// //       {/* Hero Section with Search and Filters */}
// //       <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// //         <div className="max-w-5xl mx-auto px-4">
// //           <div className="flex flex-col items-center">
// //             <h1 className="text-2xl md:text-3xl font-bold mb-6">Medical MCQ Bank</h1>
            
// //             <div className="flex gap-8 md:gap-12 mb-8">
// //               <div className="text-center">
// //                 <div className="text-2xl md:text-3xl font-semibold">{questions.length}</div>
// //                 <div className="text-sm opacity-80 mt-1">Total</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// //                 <div className="text-sm opacity-80 mt-1">Got It</div>
// //               </div>
// //               <div className="text-center">
// //                 <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// //                 <div className="text-sm opacity-80 mt-1">Review</div>
// //               </div>
// //             </div>

// //             {/* Search */}
// //             <div className="relative w-full max-w-2xl mb-6">
// //               <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// //               <Input
// //                 placeholder="Search questions..."
// //                 className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //               />
// //             </div>

// //             {/* Filters */}
// //             <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// //               <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// //                 <SelectTrigger 
// //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// //                   className="w-[240px] h-12 border-0"
// //                 >
// //                   <SelectValue placeholder="All Subjects" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="all">All Subjects ({questions.length})</SelectItem>
// //                   {subjects.map(subject => (
// //                     <SelectItem key={subject} value={subject}>
// //                       {subject} ({subjectCounts[subject]})
// //                     </SelectItem>
// //                   ))}
// //                 </SelectContent>
// //               </Select>

// //               {/* Year Filter */}
// //               <Select value={yearFilter} onValueChange={setYearFilter}>
// //                 <SelectTrigger 
// //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// //                   className="w-[180px] h-12 border-0"
// //                 >
// //                   <SelectValue placeholder="All Years" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectItem value="all">All Years ({questions.length})</SelectItem>
// //                   {years.map(year => (
// //                     <SelectItem key={year} value={year}>
// //                       {year} ({yearCounts[year]})
// //                     </SelectItem>
// //                   ))}
// //                 </SelectContent>
// //               </Select>

// //               <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// //                 <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// //                   <Button 
// //                     variant="ghost" 
// //                     style={{
// //                       backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// //                       color: reviewFilter === 'all' ? colors.primary : colors.text
// //                     }}
// //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// //                     onClick={() => setReviewFilter('all')}
// //                   >
// //                     All Reviews ({questions.length})
// //                   </Button>
// //                   <Button 
// //                     variant="ghost" 
// //                     style={{
// //                       backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// //                       color: reviewFilter === 'got-it' ? colors.primary : colors.text
// //                     }}
// //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// //                     onClick={() => setReviewFilter('got-it')}
// //                   >
// //                     Got It ({reviewCounts.gotIt})
// //                   </Button>
// //                   <Button 
// //                     variant="ghost" 
// //                     style={{
// //                       backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// //                       color: reviewFilter === 'review' ? colors.primary : colors.text
// //                     }}
// //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// //                     onClick={() => setReviewFilter('review')}
// //                   >
// //                     Need Review ({reviewCounts.review})
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Questions List */}
// //       <div className="max-w-5xl mx-auto px-4 py-8">
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-medium" style={{color: colors.text}}>
// //             {filteredQuestions.length} Questions
// //           </h2>
          
// //           {/* Show/Hide All Answers text button */}
// //           <button 
// //             onClick={toggleAllAnswers}
// //             className="text-sm hover:underline transition-colors"
// //             style={{color: colors.primary}}
// //           >
// //             {areAllAnswersRevealed ? 'Hide all answers' : 'Show all answers'}
// //           </button>
// //         </div>
        
// //         <div className="space-y-3">
// //           {filteredQuestions.map((question, index) => (
// //             <div key={question.id} className="relative">
// //               <div className="flex rounded-lg overflow-hidden bg-white">
// //                 {/* Question Number */}
// //                 <div 
// //                   style={{backgroundColor: colors.primary}} 
// //                   className="flex items-center justify-center w-16 text-white text-xl font-medium"
// //                 >
// //                   <span>{index + 1}</span>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="flex-1 flex flex-col md:flex-row">
// //                   <div className="flex-1 p-4 flex flex-col">
// //                     {/* Subject and Date */}
// //                     <div className="flex items-center justify-between mb-1">
// //                       <div style={{color: colors.primary}} className="text-sm">
// //                         {question.subject}
// //                       </div>
// //                       <div className="text-xs text-gray-500">
// //                         {question.date}
// //                       </div>
// //                     </div>
                    
// //                     {/* Question */}
// //                     <div className="flex items-center">
// //                       <h3 style={{color: colors.text}} className="text-lg font-medium">
// //                         {question.shortQuestion}
// //                       </h3>
// //                     </div>
                    
// //                     {/* Align with answer section */}
// //                     <div className="flex-grow"></div>
                    
// //                     {/* Detail Link */}
// //                     <button 
// //                       className="mt-3 text-sm self-start"
// //                       style={{color: colors.primary}}
// //                       onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
// //                     >
// //                       Click to see details
// //                     </button>
// //                   </div>

// //                   {/* Answer Section */}
// //                   <div className="flex-1 p-4 border-t md:border-t-0 md:border-l border-gray-100 flex items-center">
// //                     <div className="flex-grow flex items-center h-full">
// //                       {revealedAnswers[question.id] ? (
// //                         <div className="w-full flex items-center">
// //                           <span style={{color: colors.textLight}} className="flex-grow">
// //                             {question.shortAnswer}
// //                           </span>
// //                           <button
// //                             className="ml-2 text-gray-400 hover:text-gray-600 flex items-center"
// //                             onClick={(e) => toggleAnswer(question.id, e)}
// //                           >
// //                             <EyeOff className="h-4 w-4 mr-1" />
// //                             <span className="text-sm">Hide</span>
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         <button
// //                           className="text-gray-400 hover:text-gray-600 flex items-center"
// //                           onClick={(e) => toggleAnswer(question.id, e)}
// //                         >
// //                           <Eye className="h-4 w-4 mr-1" />
// //                           <span>Reveal answer</span>
// //                         </button>
// //                       )}
// //                     </div>
// //                   </div>
                  
// //                   {/* Review Buttons */}
// //                   <div className="flex md:flex-col items-center border-t md:border-t-0 md:border-l border-gray-100">
// //                     <button 
// //                       onClick={(e) => handleReview(question.id, 'got-it', e)}
// //                       style={{
// //                         backgroundColor: reviews[question.id] === 'got-it' ? colors.thumbsUpBg : 'transparent',
// //                         color: reviews[question.id] === 'got-it' ? colors.thumbsUpIcon : '#9ca3af'
// //                       }}
// //                       className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 transition-colors"
// //                     >
// //                       <ThumbsUp 
// //                         className="h-6 w-6" 
// //                         fill={reviews[question.id] === 'got-it' ? colors.thumbsUpIcon : 'none'} 
// //                       />
// //                       <span className="text-xs mt-1">Got it</span>
// //                     </button>
// //                     <button 
// //                       onClick={(e) => handleReview(question.id, 'review', e)}
// //                       style={{
// //                         backgroundColor: reviews[question.id] === 'review' ? colors.thumbsDownBg : 'transparent',
// //                         color: reviews[question.id] === 'review' ? colors.thumbsDownIcon : '#9ca3af'
// //                       }}
// //                       className="flex-1 md:w-full flex flex-col items-center justify-center py-4 px-6 border-l md:border-l-0 md:border-t border-gray-100 transition-colors"
// //                     >
// //                       <ThumbsDown 
// //                         className="h-6 w-6" 
// //                         fill={reviews[question.id] === 'review' ? colors.thumbsDownIcon : 'none'} 
// //                       />
// //                       <span className="text-xs mt-1">Review</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Expanded Details */}
// //               {expandedQuestion === question.id && (
// //                 <div className="bg-white mt-1 rounded-lg p-6 shadow-sm space-y-4">
// //                   <p style={{color: colors.text}} className="font-medium text-lg mb-4">{question.fullQuestion}</p>
                  
// //                   {/* MCQ Options */}
// //                   <div className="space-y-3">
// //                     {question.options.map((option, index) => {
// //                       const isSelected = selectedAnswers[question.id] === index;
// //                       const showCorrectness = showFeedback[question.id];
// //                       const isCorrectAnswer = index === question.correctAnswer;
                      
// //                       let optionClass = "p-4 rounded-lg border transition-colors cursor-pointer flex items-center";
// //                       let bgColor = "#ffffff";
// //                       let textColor = colors.text;
// //                       let borderColor = "#e5e7eb";
                      
// //                       if (showCorrectness) {
// //                         if (isCorrectAnswer) {
// //                           bgColor = "#f0fdf4";
// //                           borderColor = "#86efac";
// //                           textColor = "#166534";
// //                         } else if (isSelected) {
// //                           bgColor = "#fef2f2";
// //                           borderColor = "#fca5a5";
// //                           textColor = "#991b1b";
// //                         } else {
// //                           bgColor = "#f9fafb";
// //                           borderColor = "#e5e7eb";
// //                           textColor = "#6b7280";
// //                         }
// //                       } else {
// //                         if (isSelected) {
// //                           bgColor = "#f0f7ff";
// //                           borderColor = "#bfdbfe";
// //                           textColor = colors.primary;
// //                         } else {
// //                           bgColor = "#f9fafb";
// //                           borderColor = "#e5e7eb";
// //                           textColor = colors.text;
// //                         }
// //                       }
                      
// //                       return (
// //                         <div 
// //                           key={index}
// //                           className={optionClass}
// //                           style={{
// //                             backgroundColor: bgColor,
// //                             borderColor: borderColor,
// //                             color: textColor
// //                           }}
// //                           onClick={() => handleSelectAnswer(question.id, index)}
// //                         >
// //                           <div className="mr-3 font-medium w-6">{index + 1})</div>
// //                           <div className="flex-1">{option}</div>
// //                           {showCorrectness && isCorrectAnswer && (
// //                             <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
// //                           )}
// //                           {showCorrectness && isSelected && !isCorrectAnswer && (
// //                             <XCircle className="h-5 w-5 text-red-600 ml-2" />
// //                           )}
// //                         </div>
// //                       );
// //                     })}
// //                   </div>
                  
// //                   {/* Explanation section */}
// //                   {showFeedback[question.id] && (
// //                     <div 
// //                       style={{borderColor: colors.accent}} 
// //                       className="mt-6 border-t pt-4"
// //                     >
// //                       <div style={{color: colors.primary}} className="flex items-center gap-2 mb-2">
// //                         <Info className="h-5 w-5" />
// //                         <h3 className="font-medium">Explanation</h3>
// //                       </div>
// //                       <p style={{color: colors.textLight}}>{question.explanation}</p>
// //                     </div>
// //                   )}
                  
// //                   {/* Try Again Button */}
// //                   {showFeedback[question.id] && (
// //                     <div className="flex justify-center mt-4">
// //                       <Button
// //                         variant="outline"
// //                         style={{
// //                           borderColor: colors.accent,
// //                           color: colors.primary,
// //                         }}
// //                         onClick={() => {
// //                           setSelectedAnswers(prev => ({ ...prev, [question.id]: undefined }));
// //                           setShowFeedback(prev => ({ ...prev, [question.id]: false }));
// //                         }}
// //                       >
// //                         Try Again
// //                       </Button>
// //                     </div>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           ))}

// //           {/* No results message */}
// //           {filteredQuestions.length === 0 && (
// //             <div className="bg-white rounded-lg p-8 text-center">
// //               <div className="text-gray-500 mb-2">
// //                 <Search className="h-8 w-8 mx-auto opacity-50" />
// //               </div>
// //               <h3 className="text-lg font-medium mb-2" style={{color: colors.text}}>No questions found</h3>
// //               <p className="text-gray-500">Try adjusting your filters or search terms</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MCQApp;
// "use client"
// import React from 'react';
// import MCQApp from '@/components/notes/old/MCQApp';

// /**
//  * Test page that renders the MCQ application
//  * This page serves as an entry point for the MCQ feature
//  */
// export default function TestPage() {
//   return (
//     <main>
//       <MCQApp />
//     </main>
//   );
// // }
// "use client"
// import React, { useState, useMemo } from 'react';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { 
//   Sheet, 
//   SheetContent, 
//   SheetHeader, 
//   SheetTitle, 
//   SheetTrigger 
// } from "@/components/ui/sheet";
// import { Toggle } from "@/components/ui/toggle";
// import { Filter, BarChart } from 'lucide-react';
// import { Badge } from "@/components/ui/badge";

// export default function ExamHero() {
//   // State Management
//   const [activeTab, setActiveTab] = useState('questions');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     subject: '',
//     viewMode: 'page',
//     reviewStatus: []
//   });
//   const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
//   const [isStatsSheetOpen, setIsStatsSheetOpen] = useState(false);

//   // Sample Exam Data (similar to previous implementation)
//   const examData = {
//     name: 'Computer Science Fundamentals',
//     subtitle: 'Comprehensive Exam Preparation',
//     questions: [
//       {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       }, {
//         id: 1,
//         text: 'What is a closure in JavaScript?',
//         subject: 'JavaScript',
//         difficulty: 'hard',
//         status: 'unanswered',
//         tags: ['programming', 'javascript'],
//         isCorrect: false,
//         isPinned: false
//       },
//       {
//         id: 2,
//         text: 'Explain the difference between let and var',
//         subject: 'JavaScript',
//         difficulty: 'medium',
//         status: 'correct',
//         tags: ['programming', 'javascript'],
//         isCorrect: true,
//         isPinned: false
//       }
//       // Add more questions...
//     ],
//     flashcards: [
//       {
//         id: 1,
//         front: 'What is a closure?',
//         back: 'A closure is a function that has access to the parent scope...',
//         subject: 'JavaScript',
//         masteryLevel: 'new'
//       },
//       {
//         id: 2,
//         front: 'Explain prototype inheritance',
//         back: 'Prototype inheritance allows objects to inherit properties...',
//         subject: 'JavaScript',
//         masteryLevel: 'learning'
//       }
//       // Add more flashcards...
//     ],
//     notes: [
//       {
//         id: 1,
//         title: 'JavaScript Fundamentals',
//         content: 'Key concepts in JavaScript programming...',
//         subject: 'JavaScript',
//         tags: ['programming', 'theory']
//       }
//       // Add more notes...
//     ]
//   };

//   // Filtering Logic
//   const filteredData = useMemo(() => {
//     const filterItems = (items) => {
//       return items.filter(item => {
//         const matchesSearch = 
//           (item.text || item.title || item.front)
//           ?.toLowerCase().includes(searchTerm.toLowerCase());

//         const matchesSubject = !filters.subject || 
//           (item.subject === filters.subject);

//         const matchesReviewStatus = filters.reviewStatus.length === 0 || 
//           (activeTab === 'questions' 
//             ? filters.reviewStatus.some(status => 
//                 (status === 'correct' && item.isCorrect) ||
//                 (status === 'incorrect' && !item.isCorrect) ||
//                 (status === 'pinned' && item.isPinned)
//               )
//             : filters.reviewStatus.includes(item.masteryLevel)
//           );

//         return matchesSearch && matchesSubject && matchesReviewStatus;
//       });
//     };

//     return {
//       questions: filterItems(examData.questions),
//       flashcards: filterItems(examData.flashcards),
//       notes: filterItems(examData.notes)
//     };
//   }, [searchTerm, filters, activeTab]);

//   // Filters Component
//   const FiltersSheet = () => {
//     // Subjects for filtering
//     const subjects = [...new Set(
//       [...examData.questions, ...examData.flashcards, ...examData.notes]
//         .map(item => item.subject)
//     )];

//     // Review status options
//     const reviewStatusOptions = 
//       activeTab === 'questions' 
//         ? ['correct', 'incorrect', 'pinned']
//         : activeTab === 'flashcards'
//           ? ['mastered', 'learning', 'new', 'suspended']
//           : [];

//     return (
//       <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon" className="mr-2">
//             <Filter className="h-4 w-4" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right" className="w-[400px]">
//           <SheetHeader>
//             <SheetTitle>Filters</SheetTitle>
//           </SheetHeader>
//           <div className="space-y-6 py-4">
//             {/* Subject Filters */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Subjects</h3>
//               <div className="flex flex-wrap gap-2">
//                 {subjects.map(subject => (
//                   <Toggle
//                     key={subject}
//                     pressed={filters.subject === subject}
//                     onPressedChange={(pressed) => 
//                       setFilters(prev => ({
//                         ...prev, 
//                         subject: pressed ? subject : ''
//                       }))
//                     }
//                     variant="outline"
//                   >
//                     {subject}
//                   </Toggle>
//                 ))}
//               </div>
//             </div>

//             {/* View Mode */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2">View Mode</h3>
//               <div className="flex gap-2">
//                 <Toggle
//                   pressed={filters.viewMode === 'page'}
//                   onPressedChange={(pressed) => 
//                     setFilters(prev => ({
//                       ...prev, 
//                       viewMode: pressed ? 'page' : 'all'
//                     }))
//                   }
//                   variant="outline"
//                 >
//                   One per Page
//                 </Toggle>
//                 <Toggle
//                   pressed={filters.viewMode === 'all'}
//                   onPressedChange={(pressed) => 
//                     setFilters(prev => ({
//                       ...prev, 
//                       viewMode: pressed ? 'all' : 'page'
//                     }))
//                   }
//                   variant="outline"
//                 >
//                   Show All
//                 </Toggle>
//               </div>
//             </div>

//             {/* Review Status */}
//             {reviewStatusOptions.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Review Status</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {reviewStatusOptions.map(status => (
//                     <Toggle
//                       key={status}
//                       pressed={filters.reviewStatus.includes(status)}
//                       onPressedChange={(pressed) => 
//                         setFilters(prev => ({
//                           ...prev, 
//                           reviewStatus: pressed
//                             ? [...prev.reviewStatus, status]
//                             : prev.reviewStatus.filter(s => s !== status)
//                         }))
//                       }
//                       variant="outline"
//                     >
//                       {status}
//                     </Toggle>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </SheetContent>
//       </Sheet>
//     );
//   };

//   // Stats Component
//   const StatsSheet = () => {
//     const stats = 
//       activeTab === 'questions' 
//         ? (() => {
//             const questions = filteredData.questions;
//             const total = questions.length;
//             const correct = questions.filter(q => q.isCorrect).length;
//             const incorrect = total - correct;
//             const pinned = questions.filter(q => q.isPinned).length;
//             const score = total > 0 ? Math.round((correct / total) * 100) : 0;

//             return [
//               { label: 'Total Questions', value: total },
//               { label: 'Correct', value: `${correct} (${Math.round((correct/total)*100)}%)` },
//               { label: 'Incorrect', value: `${incorrect} (${Math.round((incorrect/total)*100)}%)` },
//               { label: 'Pinned', value: pinned },
//               { label: 'Score', value: `${score}%` }
//             ];
//           })()
//         : activeTab === 'flashcards'
//           ? (() => {
//               const flashcards = filteredData.flashcards;
//               const total = flashcards.length;
//               const masteryLevels = ['mastered', 'learning', 'new', 'suspended'];

//               return [
//                 { label: 'Total Flashcards', value: total },
//                 ...masteryLevels.map(level => ({
//                   label: level.charAt(0).toUpperCase() + level.slice(1),
//                   value: flashcards.filter(f => f.masteryLevel === level).length
//                 }))
//               ];
//             })()
//           : [];

//     return (
//       <Sheet open={isStatsSheetOpen} onOpenChange={setIsStatsSheetOpen}>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon">
//             <BarChart className="h-4 w-4" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right" className="w-[400px]">
//           <SheetHeader>
//             <SheetTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Stats</SheetTitle>
//           </SheetHeader>
//           <div className="space-y-4 py-4">
//             {stats.map((stat, index) => (
//               <div 
//                 key={stat.label} 
//                 className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg"
//               >
//                 <span className="font-medium">{stat.label}</span>
//                 <Badge variant="secondary">{stat.value}</Badge>
//               </div>
//             ))}
//           </div>
//         </SheetContent>
//       </Sheet>
//     );
//   };

//   // Render Content
//   const renderContent = () => {
//     const items = filteredData[activeTab];
//     return (
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {items.map(item => {
//           if (activeTab === 'questions') {
//             return (
//               <Card key={item.id} className="p-4">
//                 <div className="flex flex-col">
//                   <div className="text-sm mb-2">{item.text}</div>
//                   <div className="flex justify-between items-center">
//                     <div className="text-xs text-muted-foreground">
//                       {item.subject} | {item.difficulty}
//                     </div>
//                     <div className={`text-xs font-semibold ${item.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
//                       {item.isCorrect ? 'Correct' : 'Incorrect'}
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             );
//           }
//           if (activeTab === 'flashcards') {
//             return (
//               <Card key={item.id} className="p-4">
//                 <div className="text-sm mb-2">{item.front}</div>
//                 <div className="text-xs text-muted-foreground">
//                   {item.masteryLevel}
//                 </div>
//               </Card>
//             );
//           }
//           if (activeTab === 'notes') {
//             return (
//               <Card key={item.id} className="p-4">
//                 <div className="text-sm">{item.title}</div>
//                 <div className="text-xs text-muted-foreground mt-2">
//                   {item.tags.join(', ')}
//                 </div>
//               </Card>
//             );
//           }
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className="container mx-auto px-4 py-6 max-w-full">
//       {/* Header */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold">{examData.name}</h1>
//         <p className="text-xl text-muted-foreground">{examData.subtitle}</p>
//       </div>

//       {/* Search and Action Bar */}
//       <div className="flex items-center mb-6">
//         <div className="flex-grow mr-4">
//           <Input 
//             type="text" 
//             placeholder={`Search ${activeTab}...`}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <FiltersSheet />
//         <StatsSheet />
//       </div>

//       {/* Tabs */}
//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-3 mb-6">
//           <TabsTrigger value="questions">Questions</TabsTrigger>
//           <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
//           <TabsTrigger value="notes">Notes</TabsTrigger>
//         </TabsList>
//         <TabsContent value={activeTab}>
//           {renderContent()}
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
"use client"
import React, { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Toggle } from "@/components/ui/toggle";
import { Filter, BarChart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function ExamHero() {
  // State Management
  const [activeTab, setActiveTab] = useState('questions');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    viewMode: 'page',
    reviewStatus: []
  });
  const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
  const [isStatsSheetOpen, setIsStatsSheetOpen] = useState(false);

  // Sample Exam Data (similar to previous implementation)
  const examData = {
    name: 'Computer Science Fundamentals',
    subtitle: 'Comprehensive Exam Preparation',
    questions: [
      {
        id: 1,
        text: 'What is a closure in JavaScript?',
        subject: 'JavaScript',
        difficulty: 'hard',
        status: 'unanswered',
        tags: ['programming', 'javascript'],
        isCorrect: false,
        isPinned: false
      },
      {
        id: 2,
        text: 'Explain the difference between let and var',
        subject: 'JavaScript',
        difficulty: 'medium',
        status: 'correct',
        tags: ['programming', 'javascript'],
        isCorrect: true,
        isPinned: false
      }
      // Add more questions...
    ],
    flashcards: [
      {
        id: 1,
        front: 'What is a closure?',
        back: 'A closure is a function that has access to the parent scope...',
        subject: 'JavaScript',
        masteryLevel: 'new'
      },
      {
        id: 2,
        front: 'Explain prototype inheritance',
        back: 'Prototype inheritance allows objects to inherit properties...',
        subject: 'JavaScript',
        masteryLevel: 'learning' 
      }
      // Add more flashcards...
    ],
    notes: [
      {
        id: 1,
        title: 'JavaScript Fundamentals',
        content: 'Key concepts in JavaScript programming...',
        subject: 'JavaScript',
        tags: ['programming', 'theory']
      }
      // Add more notes...
    ]
  };

  // Filtering Logic
  const filteredData = useMemo(() => {
    const filterItems = (items) => {
      return items.filter(item => {
        const matchesSearch = 
          (item.text || item.title || item.front)
          ?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesSubject = !filters.subject || 
          (item.subject === filters.subject);

        const matchesReviewStatus = filters.reviewStatus.length === 0 || 
          (activeTab === 'questions' 
            ? filters.reviewStatus.some(status => 
                (status === 'correct' && item.isCorrect) ||
                (status === 'incorrect' && !item.isCorrect) ||
                (status === 'pinned' && item.isPinned)
              )
            : filters.reviewStatus.includes(item.masteryLevel)
          );

        return matchesSearch && matchesSubject && matchesReviewStatus;
      });
    };

    return {
      questions: filterItems(examData.questions),
      flashcards: filterItems(examData.flashcards),
      notes: filterItems(examData.notes)
    };
  }, [searchTerm, filters, activeTab]);

  // Filters Component
  const FiltersSheet = () => {
    // Subjects for filtering
    const subjects = [...new Set(
      [...examData.questions, ...examData.flashcards, ...examData.notes]
        .map(item => item.subject)
    )];

    // Review status options
    const reviewStatusOptions = 
      activeTab === 'questions' 
        ? ['correct', 'incorrect', 'pinned']
        : activeTab === 'flashcards'
          ? ['mastered', 'learning', 'new', 'suspended']
          : [];

    return (
      <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-2">
            <Filter className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px]">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="space-y-6 py-4">
            {/* Subject Filters */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {subjects.map(subject => (
                  <Toggle
                    key={subject}
                    pressed={filters.subject === subject}
                    onPressedChange={(pressed) => 
                      setFilters(prev => ({
                        ...prev, 
                        subject: pressed ? subject : ''
                      }))
                    }
                    variant="outline"
                  >
                    {subject}
                  </Toggle>
                ))}
              </div>
            </div>

            {/* View Mode */}
            <div>
              <h3 className="text-lg font-semibold mb-2">View Mode</h3>
              <div className="flex gap-2">
                <Toggle
                  pressed={filters.viewMode === 'page'}
                  onPressedChange={(pressed) => 
                    setFilters(prev => ({
                      ...prev, 
                      viewMode: pressed ? 'page' : 'all'
                    }))
                  }
                  variant="outline"
                >
                  One per Page
                </Toggle>
                <Toggle
                  pressed={filters.viewMode === 'all'}
                  onPressedChange={(pressed) => 
                    setFilters(prev => ({
                      ...prev, 
                      viewMode: pressed ? 'all' : 'page'
                    }))
                  }
                  variant="outline"
                >
                  Show All
                </Toggle>
              </div>
            </div>

            {/* Review Status */}
            {reviewStatusOptions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Review Status</h3>
                <div className="flex flex-wrap gap-2">
                  {reviewStatusOptions.map(status => (
                    <Toggle
                      key={status}
                      pressed={filters.reviewStatus.includes(status)}
                      onPressedChange={(pressed) => 
                        setFilters(prev => ({
                          ...prev, 
                          reviewStatus: pressed
                            ? [...prev.reviewStatus, status]
                            : prev.reviewStatus.filter(s => s !== status)
                        }))
                      }
                      variant="outline"
                    >
                      {status}
                    </Toggle>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  // Stats Component
  const StatsSheet = () => {
    const stats = 
      activeTab === 'questions' 
        ? (() => {
            const questions = filteredData.questions;
            const total = questions.length;
            const correct = questions.filter(q => q.isCorrect).length;
            const incorrect = total - correct;
            const pinned = questions.filter(q => q.isPinned).length;
            const score = total > 0 ? Math.round((correct / total) * 100) : 0;

            return [
              { label: 'Total Questions', value: total },
              { label: 'Correct', value: `${correct} (${Math.round((correct/total)*100)}%)` },
              { label: 'Incorrect', value: `${incorrect} (${Math.round((incorrect/total)*100)}%)` }, 
              { label: 'Pinned', value: pinned },
              { label: 'Score', value: `${score}%` }
            ];
          })()
        : activeTab === 'flashcards'
          ? (() => {
              const flashcards = filteredData.flashcards;
              const total = flashcards.length;
              const masteryLevels = ['mastered', 'learning', 'new', 'suspended'];

              return [
                { label: 'Total Flashcards', value: total },
                ...masteryLevels.map(level => ({
                  label: level.charAt(0).toUpperCase() + level.slice(1),
                  value: flashcards.filter(f => f.masteryLevel === level).length
                }))
              ];
            })()
          : [];

    return (
      <Sheet open={isStatsSheetOpen} onOpenChange={setIsStatsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <BarChart className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[400px]">
          <SheetHeader>
            <SheetTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Stats</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 py-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg"
              >
                <span className="font-medium">{stat.label}</span>
                <Badge variant="secondary">{stat.value}</Badge>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    );
  };

  // Render Content
  const renderContent = () => {
    const items = filteredData[activeTab];
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => {
          if (activeTab === 'questions') {
            return (
              <Card key={item.id} className="p-4">
                <div className="flex flex-col">
                  <div className="text-sm mb-2">{item.text}</div>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      {item.subject} | {item.difficulty}
                    </div>
                    <div className={`text-xs font-semibold ${item.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                      {item.isCorrect ? 'Correct' : 'Incorrect'}
                    </div>
                  </div>
                </div>
              </Card>
            );
          }
          if (activeTab === 'flashcards') {
            return (
              <Card key={item.id} className="p-4">
                <div className="text-sm mb-2">{item.front}</div>
                <div className="text-xs text-muted-foreground">
                  {item.masteryLevel}  
                </div>
              </Card>
            );
          }
          if (activeTab === 'notes') {
            return (
              <Card key={item.id} className="p-4">
                <div className="text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-2">
                  {item.tags.join(', ')}
                </div>
              </Card>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div>
      {/* Fixed Header */}
      <header className="sticky top-0 left-0 right-0 bg-background z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          {/* Header Content */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">{examData.name}</h1>
            <p className="text-xl text-muted-foreground">{examData.subtitle}</p>
          </div>

          {/* Search and Action Bar */}  
          <div className="flex items-center mb-6">
            <div className="flex-grow mr-4">
              <Input 
                type="text" 
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <FiltersSheet />
            <StatsSheet />
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>  
            </TabsList>
          </Tabs>
        </div>
      </header>

      {/* Content */}  
      <div className="container mx-auto px-4 py-6">
        <TabsContent value={activeTab}>
          {renderContent()}
        </TabsContent>
      </div>
    </div>
  );
}