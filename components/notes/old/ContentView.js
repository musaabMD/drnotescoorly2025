// // // // "use client"
// // // // import React, { useState } from 'react';
// // // // import { Search, ThumbsUp, ThumbsDown, Menu, X, User, LogIn, Lock } from 'lucide-react';
// // // // import { Input } from "@/components/ui/input";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // // import Header from '@/components/Header';
// // // // import ContentView from '@/components/notes/ContentView';

// // // // const MCQApp = () => {
// // // //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// // // //   const [revealedAnswers, setRevealedAnswers] = useState({});
// // // //   const [reviews, setReviews] = useState({});
// // // //   const [search, setSearch] = useState('');
// // // //   const [subjectFilter, setSubjectFilter] = useState('all');
// // // //   const [reviewFilter, setReviewFilter] = useState('all');
// // // //   const [yearFilter, setYearFilter] = useState('all');
// // // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // //   const [showFeedback, setShowFeedback] = useState({});

// // // //   // Custom color palette
// // // //   const colors = {
// // // //     primary: "#007832",
// // // //     background: "#F6EFE8",
// // // //     accent: "#E8D8CE",
// // // //     tabs: "#E5DFDA",
// // // //     text: "#000000",
// // // //     textLight: "#333333",
// // // //     // Thumbs colors
// // // //     thumbsUpBg: "#EFFDF4",
// // // //     thumbsUpIcon: "#17A34A",
// // // //     thumbsDownBg: "#FFF7ED",
// // // //     thumbsDownIcon: "#F97315"
// // // //   };

// // // //   // DrNote Logo SVG Component
// // // //   const DrNoteLogo = () => (
// // // //     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //       <rect width="40" height="40" rx="8" fill="#007832" />
// // // //       <path d="M8 12C8 10.8954 8.89543 10 10 10H22C27.5228 10 32 14.4772 32 20C32 25.5228 27.5228 30 22 30H10C8.89543 30 8 29.1046 8 28V12Z" fill="white"/>
// // // //       <path d="M14 16V24M14 16H22C23.6569 16 25 17.3431 25 19V21C25 22.6569 23.6569 24 22 24H14V16Z" stroke="#007832" strokeWidth="2" strokeLinecap="round"/>
// // // //       <path d="M26 15L29 15M27.5 10V13.5" stroke="#E8D8CE" strokeWidth="2" strokeLinecap="round"/>
// // // //     </svg>
// // // //   );

// // // //   const questions = [
// // // //     {
// // // //       id: 1,
// // // //       shortQuestion: 'Mycobacterium tuberculosis',
// // // //       shortAnswer: 'Chronic cough, night sweats, weight loss',
// // // //       fullQuestion: 'What are the classic symptoms of pulmonary TB?',
// // // //       options: [
// // // //         'Acute onset fever and rash',
// // // //         'Chronic cough, night sweats, weight loss',
// // // //         'Sudden chest pain and dyspnea',
// // // //         'Recurrent sinusitis'
// // // //       ],
// // // //       correctAnswer: 1,
// // // //       explanation: 'Pulmonary tuberculosis typically presents with chronic cough (>2-3 weeks), night sweats, and weight loss. The cough may initially be dry but often becomes productive with blood-streaked sputum (hemoptysis). Other symptoms include fever, fatigue, and chest pain. These symptoms develop gradually over weeks to months, distinguishing it from acute respiratory infections.',
// // // //       subject: 'Respiratory',
// // // //       date: 'Feb25'
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       shortQuestion: 'Brucella spp.',
// // // //       shortAnswer: 'Undulant fever, night sweats, arthralgia',
// // // //       fullQuestion: 'Which presentation is most characteristic of brucellosis?',
// // // //       options: [
// // // //         'Acute high fever with maculopapular rash',
// // // //         'Undulant fever, night sweats, arthralgia',
// // // //         'Productive cough and hemoptysis',
// // // //         'Watery diarrhea and abdominal cramps'
// // // //       ],
// // // //       correctAnswer: 1,
// // // //       explanation: 'Brucellosis typically presents with undulant (wave-like) fever that rises and falls over the day, accompanied by profuse sweating (especially at night), joint and muscle pain, fatigue, and headache. The infection is zoonotic, commonly transmitted through unpasteurized dairy products or direct contact with infected animals.',
// // // //       subject: 'Infectious Disease',
// // // //       date: 'Jan25'
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       shortQuestion: 'Epstein-Barr Virus',
// // // //       shortAnswer: 'Fatigue, sore throat, lymphadenopathy',
// // // //       fullQuestion: 'What are the classic symptoms of infectious mononucleosis?',
// // // //       options: [
// // // //         'Watery diarrhea and abdominal pain',
// // // //         'Fatigue, sore throat, lymphadenopathy',
// // // //         'Maculopapular rash and arthralgia',
// // // //         'Headache and nuchal rigidity'
// // // //       ],
// // // //       correctAnswer: 1,
// // // //       explanation: 'Infectious mononucleosis, caused by Epstein-Barr virus (EBV), classically presents with the triad of fatigue, pharyngitis (sore throat), and lymphadenopathy (particularly posterior cervical). Other common features include fever, malaise, splenomegaly, and atypical lymphocytosis. A maculopapular rash may develop in patients treated with ampicillin or amoxicillin.',
// // // //       subject: 'Infectious Disease',
// // // //       date: 'Mar25'
// // // //     }
// // // //   ];

// // // //   const handleReview = (id, status, e) => {
// // // //     e.stopPropagation();
// // // //     setReviews(prev => ({
// // // //       ...prev,
// // // //       [id]: status
// // // //     }));
// // // //   };

// // // //   const handleSelectAnswer = (questionId, optionIndex) => {
// // // //     setSelectedAnswers(prev => ({
// // // //       ...prev, 
// // // //       [questionId]: optionIndex
// // // //     }));
// // // //     setShowFeedback(prev => ({
// // // //       ...prev,
// // // //       [questionId]: true
// // // //     }));
// // // //   };

// // // //   const toggleAnswer = (id, e) => {
// // // //     e.stopPropagation(); // Prevent event bubbling
// // // //     setRevealedAnswers(prev => ({
// // // //       ...prev,
// // // //       [id]: !prev[id]
// // // //     }));
// // // //   };

// // // //   const toggleAllAnswers = () => {
// // // //     const currentIds = filteredQuestions.map(q => q.id);
// // // //     const allRevealed = currentIds.every(id => revealedAnswers[id]);

// // // //     if (allRevealed) {
// // // //       // Hide all answers
// // // //       const newRevealedState = {...revealedAnswers};
// // // //       currentIds.forEach(id => {
// // // //         newRevealedState[id] = false;
// // // //       });
// // // //       setRevealedAnswers(newRevealedState);
// // // //     } else {
// // // //       // Show all answers
// // // //       const newRevealedState = {...revealedAnswers};
// // // //       currentIds.forEach(id => {
// // // //         newRevealedState[id] = true;
// // // //       });
// // // //       setRevealedAnswers(newRevealedState);
// // // //     }
// // // //   };

// // // //   const getSubjectCounts = () => {
// // // //     const counts = questions.reduce((acc, q) => {
// // // //       acc[q.subject] = (acc[q.subject] || 0) + 1;
// // // //       return acc;
// // // //     }, {});
// // // //     return counts;
// // // //   };

// // // //   const getReviewCounts = () => {
// // // //     const gotIt = Object.values(reviews).filter(status => status === 'got-it').length;
// // // //     const review = Object.values(reviews).filter(status => status === 'review').length;
// // // //     const notReviewed = questions.length - gotIt - review;
// // // //     return { gotIt, review, notReviewed };
// // // //   };

// // // //   const getYearCounts = () => {
// // // //     const years = {};
// // // //     questions.forEach(q => {
// // // //       const year = '20' + q.date.slice(-2);
// // // //       years[year] = (years[year] || 0) + 1;
// // // //     });
// // // //     return years;
// // // //   };

// // // //   const subjectCounts = getSubjectCounts();
// // // //   const reviewCounts = getReviewCounts();
// // // //   const yearCounts = getYearCounts();
// // // //   const subjects = Object.keys(subjectCounts);
// // // //   const years = Object.keys(yearCounts);

// // // //   const filteredQuestions = questions.filter(q => {
// // // //     const matchesSearch = q.shortQuestion.toLowerCase().includes(search.toLowerCase()) ||
// // // //                           q.shortAnswer.toLowerCase().includes(search.toLowerCase());
// // // //     const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
// // // //     const matchesReview = reviewFilter === 'all' || 
// // // //                           (reviewFilter === 'got-it' && reviews[q.id] === 'got-it') ||
// // // //                           (reviewFilter === 'review' && reviews[q.id] === 'review') ||
// // // //                           (reviewFilter === 'not-reviewed' && !reviews[q.id]);
// // // //     const matchesYear = yearFilter === 'all' || ('20' + q.date.slice(-2)) === yearFilter;
// // // //     return matchesSearch && matchesSubject && matchesReview && matchesYear;
// // // //   });

// // // //   const areAllAnswersRevealed = filteredQuestions.length > 0 && 
// // // //     filteredQuestions.every(q => revealedAnswers[q.id]);

// // // //   return (
// // // //     <div style={{backgroundColor: colors.background}} className="min-h-screen">
// // // //       {/* Header */}
// // // //       <Header/>

// // // //       {/* Hero Section with Search and Filters */}
// // // //       <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// // // //         <div className="max-w-5xl mx-auto px-4">
// // // //           <div className="flex flex-col items-center">
// // // //             <h1 className="text-2xl md:text-3xl font-bold mb-6">Medical MCQ Bank</h1>
            
// // // //             <div className="flex gap-8 md:gap-12 mb-8">
// // // //               <div className="text-center">
// // // //                 <div className="text-2xl md:text-3xl font-semibold">{questions.length}</div>
// // // //                 <div className="text-sm opacity-80 mt-1">Total</div>
// // // //               </div>
// // // //               <div className="text-center">
// // // //                 <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// // // //                 <div className="text-sm opacity-80 mt-1">Got It</div>
// // // //               </div>
// // // //               <div className="text-center">
// // // //                 <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// // // //                 <div className="text-sm opacity-80 mt-1">Review</div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Search */}
// // // //             <div className="relative w-full max-w-2xl mb-6">
// // // //               <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // //               <Input
// // // //                 placeholder="Search questions..."
// // // //                 className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// // // //                 value={search}
// // // //                 onChange={(e) => setSearch(e.target.value)}
// // // //               />
// // // //             </div>

// // // //             {/* Filters */}
// // // //             <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// // // //               <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// // // //                 <SelectTrigger 
// // // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // //                   className="w-[240px] h-12 border-0"
// // // //                 >
// // // //                   <SelectValue placeholder="All Subjects" />
// // // //                 </SelectTrigger>
// // // //                 <SelectContent>
// // // //                   <SelectItem value="all">All Subjects ({questions.length})</SelectItem>
// // // //                   {subjects.map(subject => (
// // // //                     <SelectItem key={subject} value={subject}>
// // // //                       {subject} ({subjectCounts[subject]})
// // // //                     </SelectItem>
// // // //                   ))}
// // // //                 </SelectContent>
// // // //               </Select>

// // // //               {/* Year Filter */}
// // // //               <Select value={yearFilter} onValueChange={setYearFilter}>
// // // //                 <SelectTrigger 
// // // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // //                   className="w-[180px] h-12 border-0"
// // // //                 >
// // // //                   <SelectValue placeholder="All Years" />
// // // //                 </SelectTrigger>
// // // //                 <SelectContent>
// // // //                   <SelectItem value="all">All Years ({questions.length})</SelectItem>
// // // //                   {years.map(year => (
// // // //                     <SelectItem key={year} value={year}>
// // // //                       {year} ({yearCounts[year]})
// // // //                     </SelectItem>
// // // //                   ))}
// // // //                 </SelectContent>
// // // //               </Select>

// // // //               <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// // // //                 <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// // // //                   <Button 
// // // //                     variant="ghost" 
// // // //                     style={{
// // // //                       backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// // // //                       color: reviewFilter === 'all' ? colors.primary : colors.text
// // // //                     }}
// // // //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // //                     onClick={() => setReviewFilter('all')}
// // // //                   >
// // // //                     All Reviews ({questions.length})
// // // //                   </Button>
// // // //                   <Button 
// // // //                     variant="ghost" 
// // // //                     style={{
// // // //                       backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// // // //                       color: reviewFilter === 'got-it' ? colors.primary : colors.text
// // // //                     }}
// // // //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // //                     onClick={() => setReviewFilter('got-it')}
// // // //                   >
// // // //                     Got It ({reviewCounts.gotIt})
// // // //                   </Button>
// // // //                   <Button 
// // // //                     variant="ghost" 
// // // //                     style={{
// // // //                       backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// // // //                       color: reviewFilter === 'review' ? colors.primary : colors.text
// // // //                     }}
// // // //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // //                     onClick={() => setReviewFilter('review')}
// // // //                   >
// // // //                     Need Review ({reviewCounts.review})
// // // //                   </Button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Questions List */}
// // // //       <div className="max-w-5xl mx-auto px-4 py-8">
// // // //         <div className="flex justify-between items-center mb-4">
// // // //           <h2 className="text-xl font-medium" style={{color: colors.text}}>
// // // //             {filteredQuestions.length} Questions
// // // //           </h2>
          
// // // //           {/* Show/Hide All Answers text button */}
// // // //           <button 
// // // //             onClick={toggleAllAnswers}
// // // //             className="text-sm hover:underline transition-colors"
// // // //             style={{color: colors.primary}}
// // // //           >
// // // //             {areAllAnswersRevealed ? 'Hide all answers' : 'Show all answers'}
// // // //           </button>
// // // //         </div>
        
// // // //         <div className="space-y-3">
// // // //           {filteredQuestions.map((question, index) => (
// // // //             <ContentView
// // // //               key={question.id}
// // // //               question={question}
// // // //               index={index}
// // // //               revealedAnswers={revealedAnswers}
// // // //               toggleAnswer={toggleAnswer}
// // // //               reviews={reviews}
// // // //               handleReview={handleReview}
// // // //               expandedQuestion={expandedQuestion}
// // // //               setExpandedQuestion={setExpandedQuestion}
// // // //               selectedAnswers={selectedAnswers}
// // // //               setSelectedAnswers={setSelectedAnswers}
// // // //               showFeedback={showFeedback}
// // // //               setShowFeedback={setShowFeedback}
// // // //               colors={colors}
// // // //             />
// // // //           ))}

// // // //           {/* No results message */}
// // // //           {filteredQuestions.length === 0 && (
// // // //             <div className="bg-white rounded-lg p-8 text-center">
// // // //               <div className="text-gray-500 mb-2">
// // // //                 <Search className="h-8 w-8 mx-auto opacity-50" />
// // // //               </div>
// // // //               <h3 className="text-lg font-medium mb-2" style={{color: colors.text}}>No questions found</h3>
// // // //               <p className="text-gray-500">Try adjusting your filters or search terms</p>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MCQApp;
// // // "use client"
// // // import React, { useState } from 'react';
// // // import { Search, ThumbsUp, ThumbsDown, Menu, X, User, LogIn, Lock } from 'lucide-react';
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import Header from '@/components/Header';
// // // import ContentView from '@/components/notes/MCQApp';

// // // const MCQApp = () => {
// // //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// // //   const [revealedAnswers, setRevealedAnswers] = useState({});
// // //   const [reviews, setReviews] = useState({});
// // //   const [search, setSearch] = useState('');
// // //   const [subjectFilter, setSubjectFilter] = useState('all');
// // //   const [reviewFilter, setReviewFilter] = useState('all');
// // //   const [yearFilter, setYearFilter] = useState('all');
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [showFeedback, setShowFeedback] = useState({});

// // //   // Custom color palette
// // //   const colors = {
// // //     primary: "#007832",
// // //     background: "#F6EFE8",
// // //     accent: "#E8D8CE",
// // //     tabs: "#E5DFDA",
// // //     text: "#000000",
// // //     textLight: "#333333",
// // //     // Thumbs colors
// // //     thumbsUpBg: "#EFFDF4",
// // //     thumbsUpIcon: "#17A34A",
// // //     thumbsDownBg: "#FFF7ED",
// // //     thumbsDownIcon: "#F97315"
// // //   };

// // //   // DrNote Logo SVG Component
// // //   const DrNoteLogo = () => (
// // //     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //       <rect width="40" height="40" rx="8" fill="#007832" />
// // //       <path d="M8 12C8 10.8954 8.89543 10 10 10H22C27.5228 10 32 14.4772 32 20C32 25.5228 27.5228 30 22 30H10C8.89543 30 8 29.1046 8 28V12Z" fill="white"/>
// // //       <path d="M14 16V24M14 16H22C23.6569 16 25 17.3431 25 19V21C25 22.6569 23.6569 24 22 24H14V16Z" stroke="#007832" strokeWidth="2" strokeLinecap="round"/>
// // //       <path d="M26 15L29 15M27.5 10V13.5" stroke="#E8D8CE" strokeWidth="2" strokeLinecap="round"/>
// // //     </svg>
// // //   );

// // //   const questions = [
// // //     {
// // //       id: 1,
// // //       shortQuestion: 'Mycobacterium tuberculosis',
// // //       shortAnswer: 'Chronic cough, night sweats, weight loss',
// // //       fullQuestion: 'What are the classic symptoms of pulmonary TB?',
// // //       options: [
// // //         'Acute onset fever and rash',
// // //         'Chronic cough, night sweats, weight loss',
// // //         'Sudden chest pain and dyspnea',
// // //         'Recurrent sinusitis'
// // //       ],
// // //       correctAnswer: 1,
// // //       explanation: 'Pulmonary tuberculosis typically presents with chronic cough (>2-3 weeks), night sweats, and weight loss. The cough may initially be dry but often becomes productive with blood-streaked sputum (hemoptysis). Other symptoms include fever, fatigue, and chest pain. These symptoms develop gradually over weeks to months, distinguishing it from acute respiratory infections.',
// // //       subject: 'Respiratory',
// // //       date: 'Feb25'
// // //     },
// // //     {
// // //       id: 2,
// // //       shortQuestion: 'Brucella spp.',
// // //       shortAnswer: 'Undulant fever, night sweats, arthralgia',
// // //       fullQuestion: 'Which presentation is most characteristic of brucellosis?',
// // //       options: [
// // //         'Acute high fever with maculopapular rash',
// // //         'Undulant fever, night sweats, arthralgia',
// // //         'Productive cough and hemoptysis',
// // //         'Watery diarrhea and abdominal cramps'
// // //       ],
// // //       correctAnswer: 1,
// // //       explanation: 'Brucellosis typically presents with undulant (wave-like) fever that rises and falls over the day, accompanied by profuse sweating (especially at night), joint and muscle pain, fatigue, and headache. The infection is zoonotic, commonly transmitted through unpasteurized dairy products or direct contact with infected animals.',
// // //       subject: 'Infectious Disease',
// // //       date: 'Jan25'
// // //     },
// // //     {
// // //       id: 3,
// // //       shortQuestion: 'Epstein-Barr Virus',
// // //       shortAnswer: 'Fatigue, sore throat, lymphadenopathy',
// // //       fullQuestion: 'What are the classic symptoms of infectious mononucleosis?',
// // //       options: [
// // //         'Watery diarrhea and abdominal pain',
// // //         'Fatigue, sore throat, lymphadenopathy',
// // //         'Maculopapular rash and arthralgia',
// // //         'Headache and nuchal rigidity'
// // //       ],
// // //       correctAnswer: 1,
// // //       explanation: 'Infectious mononucleosis, caused by Epstein-Barr virus (EBV), classically presents with the triad of fatigue, pharyngitis (sore throat), and lymphadenopathy (particularly posterior cervical). Other common features include fever, malaise, splenomegaly, and atypical lymphocytosis. A maculopapular rash may develop in patients treated with ampicillin or amoxicillin.',
// // //       subject: 'Infectious Disease',
// // //       date: 'Mar25'
// // //     }
// // //   ];

// // //   const handleReview = (id, status, e) => {
// // //     e.stopPropagation();
// // //     setReviews(prev => ({
// // //       ...prev,
// // //       [id]: status
// // //     }));
// // //   };

// // //   const handleSelectAnswer = (questionId, optionIndex) => {
// // //     setSelectedAnswers(prev => ({
// // //       ...prev, 
// // //       [questionId]: optionIndex
// // //     }));
// // //     setShowFeedback(prev => ({
// // //       ...prev,
// // //       [questionId]: true
// // //     }));
// // //   };

// // //   const toggleAnswer = (id, e) => {
// // //     e.stopPropagation(); // Prevent event bubbling
// // //     setRevealedAnswers(prev => ({
// // //       ...prev,
// // //       [id]: !prev[id]
// // //     }));
// // //   };

// // //   const toggleAllAnswers = () => {
// // //     const currentIds = filteredQuestions.map(q => q.id);
// // //     const allRevealed = currentIds.every(id => revealedAnswers[id]);

// // //     if (allRevealed) {
// // //       // Hide all answers
// // //       const newRevealedState = {...revealedAnswers};
// // //       currentIds.forEach(id => {
// // //         newRevealedState[id] = false;
// // //       });
// // //       setRevealedAnswers(newRevealedState);
// // //     } else {
// // //       // Show all answers
// // //       const newRevealedState = {...revealedAnswers};
// // //       currentIds.forEach(id => {
// // //         newRevealedState[id] = true;
// // //       });
// // //       setRevealedAnswers(newRevealedState);
// // //     }
// // //   };

// // //   const getSubjectCounts = () => {
// // //     const counts = questions.reduce((acc, q) => {
// // //       acc[q.subject] = (acc[q.subject] || 0) + 1;
// // //       return acc;
// // //     }, {});
// // //     return counts;
// // //   };

// // //   const getReviewCounts = () => {
// // //     const gotIt = Object.values(reviews).filter(status => status === 'got-it').length;
// // //     const review = Object.values(reviews).filter(status => status === 'review').length;
// // //     const notReviewed = questions.length - gotIt - review;
// // //     return { gotIt, review, notReviewed };
// // //   };

// // //   const getYearCounts = () => {
// // //     const years = {};
// // //     questions.forEach(q => {
// // //       const year = '20' + q.date.slice(-2);
// // //       years[year] = (years[year] || 0) + 1;
// // //     });
// // //     return years;
// // //   };

// // //   const subjectCounts = getSubjectCounts();
// // //   const reviewCounts = getReviewCounts();
// // //   const yearCounts = getYearCounts();
// // //   const subjects = Object.keys(subjectCounts);
// // //   const years = Object.keys(yearCounts);

// // //   const filteredQuestions = questions.filter(q => {
// // //     const matchesSearch = q.shortQuestion.toLowerCase().includes(search.toLowerCase()) ||
// // //                           q.shortAnswer.toLowerCase().includes(search.toLowerCase());
// // //     const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
// // //     const matchesReview = reviewFilter === 'all' || 
// // //                           (reviewFilter === 'got-it' && reviews[q.id] === 'got-it') ||
// // //                           (reviewFilter === 'review' && reviews[q.id] === 'review') ||
// // //                           (reviewFilter === 'not-reviewed' && !reviews[q.id]);
// // //     const matchesYear = yearFilter === 'all' || ('20' + q.date.slice(-2)) === yearFilter;
// // //     return matchesSearch && matchesSubject && matchesReview && matchesYear;
// // //   });

// // //   const areAllAnswersRevealed = filteredQuestions.length > 0 && 
// // //     filteredQuestions.every(q => revealedAnswers[q.id]);

// // //   return (
// // //     <div style={{backgroundColor: colors.background}} className="min-h-screen">
// // //       {/* Header */}
// // //       <Header/>

// // //       {/* Hero Section with Search and Filters */}
// // //       <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// // //         <div className="max-w-5xl mx-auto px-4">
// // //           <div className="flex flex-col items-center">
// // //             <h1 className="text-2xl md:text-3xl font-bold mb-6">Medical MCQ Bank</h1>
            
// // //             <div className="flex gap-8 md:gap-12 mb-8">
// // //               <div className="text-center">
// // //                 <div className="text-2xl md:text-3xl font-semibold">{questions.length}</div>
// // //                 <div className="text-sm opacity-80 mt-1">Total</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// // //                 <div className="text-sm opacity-80 mt-1">Got It</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// // //                 <div className="text-sm opacity-80 mt-1">Review</div>
// // //               </div>
// // //             </div>

// // //             {/* Search */}
// // //             <div className="relative w-full max-w-2xl mb-6">
// // //               <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //               <Input
// // //                 placeholder="Search questions..."
// // //                 className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// // //                 value={search}
// // //                 onChange={(e) => setSearch(e.target.value)}
// // //               />
// // //             </div>

// // //             {/* Filters */}
// // //             <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// // //               <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// // //                 <SelectTrigger 
// // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // //                   className="w-[240px] h-12 border-0"
// // //                 >
// // //                   <SelectValue placeholder="All Subjects" />
// // //                 </SelectTrigger>
// // //                 <SelectContent>
// // //                   <SelectItem value="all">All Subjects ({questions.length})</SelectItem>
// // //                   {subjects.map(subject => (
// // //                     <SelectItem key={subject} value={subject}>
// // //                       {subject} ({subjectCounts[subject]})
// // //                     </SelectItem>
// // //                   ))}
// // //                 </SelectContent>
// // //               </Select>

// // //               {/* Year Filter */}
// // //               <Select value={yearFilter} onValueChange={setYearFilter}>
// // //                 <SelectTrigger 
// // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // //                   className="w-[180px] h-12 border-0"
// // //                 >
// // //                   <SelectValue placeholder="All Years" />
// // //                 </SelectTrigger>
// // //                 <SelectContent>
// // //                   <SelectItem value="all">All Years ({questions.length})</SelectItem>
// // //                   {years.map(year => (
// // //                     <SelectItem key={year} value={year}>
// // //                       {year} ({yearCounts[year]})
// // //                     </SelectItem>
// // //                   ))}
// // //                 </SelectContent>
// // //               </Select>

// // //               <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// // //                 <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// // //                   <Button 
// // //                     variant="ghost" 
// // //                     style={{
// // //                       backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// // //                       color: reviewFilter === 'all' ? colors.primary : colors.text
// // //                     }}
// // //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // //                     onClick={() => setReviewFilter('all')}
// // //                   >
// // //                     All Reviews ({questions.length})
// // //                   </Button>
// // //                   <Button 
// // //                     variant="ghost" 
// // //                     style={{
// // //                       backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// // //                       color: reviewFilter === 'got-it' ? colors.primary : colors.text
// // //                     }}
// // //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // //                     onClick={() => setReviewFilter('got-it')}
// // //                   >
// // //                     Got It ({reviewCounts.gotIt})
// // //                   </Button>
// // //                   <Button 
// // //                     variant="ghost" 
// // //                     style={{
// // //                       backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// // //                       color: reviewFilter === 'review' ? colors.primary : colors.text
// // //                     }}
// // //                     className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // //                     onClick={() => setReviewFilter('review')}
// // //                   >
// // //                     Need Review ({reviewCounts.review})
// // //                   </Button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Questions List */}
// // //       <div className="max-w-5xl mx-auto px-4 py-8">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="text-xl font-medium" style={{color: colors.text}}>
// // //             {filteredQuestions.length} Questions
// // //           </h2>
          
// // //           {/* Show/Hide All Answers text button */}
// // //           <button 
// // //             onClick={toggleAllAnswers}
// // //             className="text-sm hover:underline transition-colors"
// // //             style={{color: colors.primary}}
// // //           >
// // //             {areAllAnswersRevealed ? 'Hide all answers' : 'Show all answers'}
// // //           </button>
// // //         </div>
        
// // //         <div className="space-y-3">
// // //           {filteredQuestions.map((question, index) => (
// // //             <ContentView
// // //               key={question.id}
// // //               question={question}
// // //               index={index}
// // //               revealedAnswers={revealedAnswers}
// // //               toggleAnswer={toggleAnswer}
// // //               reviews={reviews}
// // //               handleReview={handleReview}
// // //               expandedQuestion={expandedQuestion}
// // //               setExpandedQuestion={setExpandedQuestion}
// // //               selectedAnswers={selectedAnswers}
// // //               setSelectedAnswers={setSelectedAnswers}
// // //               showFeedback={showFeedback}
// // //               setShowFeedback={setShowFeedback}
// // //               colors={colors}
// // //             />
// // //           ))}

// // //           {/* No results message */}
// // //           {filteredQuestions.length === 0 && (
// // //             <div className="bg-white rounded-lg p-8 text-center">
// // //               <div className="text-gray-500 mb-2">
// // //                 <Search className="h-8 w-8 mx-auto opacity-50" />
// // //               </div>
// // //               <h3 className="text-lg font-medium mb-2" style={{color: colors.text}}>No questions found</h3>
// // //               <p className="text-gray-500">Try adjusting your filters or search terms</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MCQApp;
// // "use client"
// // import React, { useState } from 'react';
// // import { Search, ThumbsUp, ThumbsDown, Menu, X, User, LogIn, Lock } from 'lucide-react';
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import Header from '@/components/Header';
// // import ContentView from '@/components/notes/ContentView'; // Fixed import path

// // const MCQApp = () => {
// //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// //   const [revealedAnswers, setRevealedAnswers] = useState({});
// //   const [reviews, setReviews] = useState({});
// //   const [search, setSearch] = useState('');
// //   const [subjectFilter, setSubjectFilter] = useState('all');
// //   const [reviewFilter, setReviewFilter] = useState('all');
// //   const [yearFilter, setYearFilter] = useState('all');
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
// //       <Header/>

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
// //             <ContentView
// //               key={question.id}
// //               question={question}
// //               index={index}
// //               revealedAnswers={revealedAnswers}
// //               toggleAnswer={toggleAnswer}
// //               reviews={reviews}
// //               handleReview={handleReview}
// //               expandedQuestion={expandedQuestion}
// //               setExpandedQuestion={setExpandedQuestion}
// //               selectedAnswers={selectedAnswers}
// //               setSelectedAnswers={setSelectedAnswers}
// //               showFeedback={showFeedback}
// //               setShowFeedback={setShowFeedback}
// //               colors={colors}
// //             />
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
// import React, { useState } from 'react';
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import MCQView from './mcq-view';
// import FlashcardView from './flashcard-view';
// import NoteView from './note-view';
// import { Rows, SquareStack, FileText } from 'lucide-react';

// const ContentView = ({ examId, initialQuestions = [], examName = "" }) => {
//   const [activeView, setActiveView] = useState('mcq');

//   const renderContent = () => {
//     switch (activeView) {
//       case 'flashcards':
//         return <FlashcardView examId={examId} />;
//       case 'notes':
//         return <NoteView examId={examId} />;
//       case 'mcq':
//       default:
//         return (
//           <MCQView 
//             questions={initialQuestions} 
//             examId={examId}
//             examName={examName}
//           />
//         );
//     }
//   };

//   return (
//     <div className="space-y-8">
//       <div className="border-b">
//         <div className="container mx-auto px-4">
//           <Tabs
//             value={activeView}
//             onValueChange={setActiveView}
//             className="w-full"
//           >
//             <TabsList className="inline-flex h-14 items-center justify-center rounded-none border-b bg-transparent p-0">
//               <TabsTrigger
//                 value="mcq"
//                 className="inline-flex items-center justify-center rounded-none border-b-2 border-transparent px-6 py-4 text-sm font-medium text-muted-foreground ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//               >
//                 <Rows className="mr-2 h-4 w-4" />
//                 MCQ
//               </TabsTrigger>
//               <TabsTrigger
//                 value="flashcards"
//                 className="inline-flex items-center justify-center rounded-none border-b-2 border-transparent px-6 py-4 text-sm font-medium text-muted-foreground ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//               >
//                 <SquareStack className="mr-2 h-4 w-4" />
//                 Flashcards
//               </TabsTrigger>
//               <TabsTrigger
//                 value="notes"
//                 className="inline-flex items-center justify-center rounded-none border-b-2 border-transparent px-6 py-4 text-sm font-medium text-muted-foreground ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
//               >
//                 <FileText className="mr-2 h-4 w-4" />
//                 Notes
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>
//       </div>

//       <div className="container mx-auto px-4">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default ContentView;