// // // // "use client"
// // // // import React, { useState } from 'react';
// // // // import Header from '@/components/Header';
// // // // import MCQHero from '@/components/notes/MCQHero';
// // // // import MCQQuestions from '@/components/notes/MCQQuestions';

// // // // const MCQApp = () => {
// // // //   const [search, setSearch] = useState('');
// // // //   const [subjectFilter, setSubjectFilter] = useState('all');
// // // //   const [reviewFilter, setReviewFilter] = useState('all');
// // // //   const [yearFilter, setYearFilter] = useState('all');
// // // //   const [reviews, setReviews] = useState({});

// // // //   // Custom color palette
// // // //   const colors = {
// // // //     primary: "#007832",
// // // //     background: "#F6EFE8"
// // // //   };

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

// // // //   // Helper functions for filters and counts
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

// // // //   return (
// // // //     <div style={{backgroundColor: colors.background}} className="min-h-screen">
// // // //       {/* Header */}
// // // //       <Header />

// // // //       {/* Hero Section with Search and Filters */}
// // // //       <MCQHero 
// // // //         questionsCount={questions.length}
// // // //         reviewCounts={reviewCounts}
// // // //         subjects={subjects}
// // // //         subjectCounts={subjectCounts}
// // // //         years={years}
// // // //         yearCounts={yearCounts}
// // // //         search={search}
// // // //         setSearch={setSearch}
// // // //         subjectFilter={subjectFilter}
// // // //         setSubjectFilter={setSubjectFilter}
// // // //         yearFilter={yearFilter}
// // // //         setYearFilter={setYearFilter}
// // // //         reviewFilter={reviewFilter}
// // // //         setReviewFilter={setReviewFilter}
// // // //       />

// // // //       {/* Questions List */}
// // // //       <MCQQuestions 
// // // //         filteredQuestions={filteredQuestions}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MCQApp;
// // // "use client"
// // // import React, { useState } from 'react';
// // // import Header from '@/components/Header';
// // // import MCQHero from '@/components/notes/MCQHero';
// // // import MCQQuestions from '@/components/notes/MCQQuestions';

// // // const MCQApp = () => {
// // //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// // //   const [revealedAnswers, setRevealedAnswers] = useState({});
// // //   const [reviews, setReviews] = useState({});
// // //   const [search, setSearch] = useState('');
// // //   const [subjectFilter, setSubjectFilter] = useState('all');
// // //   const [reviewFilter, setReviewFilter] = useState('all');
// // //   const [yearFilter, setYearFilter] = useState('all');
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [showFeedback, setShowFeedback] = useState({});

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

// // //   return (
// // //     <div style={{backgroundColor: colors.background}} className="min-h-screen">
// // //       {/* Hero Section with Search and Filters */}
// // //       <MCQHero 
// // //         questionsCount={questions.length}
// // //         reviewCounts={reviewCounts}
// // //         subjects={subjects}
// // //         subjectCounts={subjectCounts}
// // //         years={years}
// // //         yearCounts={yearCounts}
// // //         search={search}
// // //         setSearch={setSearch}
// // //         subjectFilter={subjectFilter}
// // //         setSubjectFilter={setSubjectFilter}
// // //         yearFilter={yearFilter}
// // //         setYearFilter={setYearFilter}
// // //         reviewFilter={reviewFilter}
// // //         setReviewFilter={setReviewFilter}
// // //       />

// // //       {/* Questions List */}
// // //       <MCQQuestions 
// // //         filteredQuestions={filteredQuestions}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default MCQApp;
// // "use client"
// // import React, { useState, useEffect } from 'react';
// // import Header from '@/components/Header';
// // import { ArrowLeft } from 'lucide-react';
// // import MCQHero from '@/components/notes/MCQHero';
// // import MCQQuestions from '@/components/notes/MCQQuestions';
// // import Link from 'next/link';
// // import { createClient } from '@supabase/supabase-js';

// // // Default questions as fallback
// // const defaultQuestions = [
// //   {
// //     id: 1,
// //     shortQuestion: 'Mycobacterium tuberculosis',
// //     shortAnswer: 'Chronic cough, night sweats, weight loss',
// //     fullQuestion: 'What are the classic symptoms of pulmonary TB?',
// //     options: [
// //       'Acute onset fever and rash',
// //       'Chronic cough, night sweats, weight loss',
// //       'Sudden chest pain and dyspnea',
// //       'Recurrent sinusitis'
// //     ],
// //     correctAnswer: 1,
// //     explanation: 'Pulmonary tuberculosis typically presents with chronic cough (>2-3 weeks), night sweats, and weight loss. The cough may initially be dry but often becomes productive with blood-streaked sputum (hemoptysis). Other symptoms include fever, fatigue, and chest pain. These symptoms develop gradually over weeks to months, distinguishing it from acute respiratory infections.',
// //     subject: 'Respiratory',
// //     date: 'Feb25'
// //   },
// //   {
// //     id: 2,
// //     shortQuestion: 'Brucella spp.',
// //     shortAnswer: 'Undulant fever, night sweats, arthralgia',
// //     fullQuestion: 'Which presentation is most characteristic of brucellosis?',
// //     options: [
// //       'Acute high fever with maculopapular rash',
// //       'Undulant fever, night sweats, arthralgia',
// //       'Productive cough and hemoptysis',
// //       'Watery diarrhea and abdominal cramps'
// //     ],
// //     correctAnswer: 1,
// //     explanation: 'Brucellosis typically presents with undulant (wave-like) fever that rises and falls over the day, accompanied by profuse sweating (especially at night), joint and muscle pain, fatigue, and headache. The infection is zoonotic, commonly transmitted through unpasteurized dairy products or direct contact with infected animals.',
// //     subject: 'Infectious Disease',
// //     date: 'Jan25'
// //   },
// //   {
// //     id: 3,
// //     shortQuestion: 'Epstein-Barr Virus',
// //     shortAnswer: 'Fatigue, sore throat, lymphadenopathy',
// //     fullQuestion: 'What are the classic symptoms of infectious mononucleosis?',
// //     options: [
// //       'Watery diarrhea and abdominal pain',
// //       'Fatigue, sore throat, lymphadenopathy',
// //       'Maculopapular rash and arthralgia',
// //       'Headache and nuchal rigidity'
// //     ],
// //     correctAnswer: 1,
// //     explanation: 'Infectious mononucleosis, caused by Epstein-Barr virus (EBV), classically presents with the triad of fatigue, pharyngitis (sore throat), and lymphadenopathy (particularly posterior cervical). Other common features include fever, malaise, splenomegaly, and atypical lymphocytosis. A maculopapular rash may develop in patients treated with ampicillin or amoxicillin.',
// //     subject: 'Infectious Disease',
// //     date: 'Mar25'
// //   }
// // ];

// // const MCQApp = ({ examName = "Medical MCQ Bank", examId, initialQuestions = null, loadFromSupabase = false }) => {
// //   const [expandedQuestion, setExpandedQuestion] = useState(null);
// //   const [revealedAnswers, setRevealedAnswers] = useState({});
// //   const [reviews, setReviews] = useState({});
// //   const [search, setSearch] = useState('');
// //   const [subjectFilter, setSubjectFilter] = useState('all');
// //   const [reviewFilter, setReviewFilter] = useState('all');
// //   const [yearFilter, setYearFilter] = useState('all');
// //   const [questions, setQuestions] = useState(initialQuestions || defaultQuestions);
// //   const [loading, setLoading] = useState(loadFromSupabase && !initialQuestions);
// //   const [error, setError] = useState(null);
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

// //   // If loadFromSupabase is true and no initialQuestions were passed, fetch from Supabase
// //   useEffect(() => {
// //     const fetchQuestionsFromSupabase = async () => {
// //       if (!loadFromSupabase || initialQuestions) return;
      
// //       try {
// //         setLoading(true);
        
// //         // Initialize Supabase
// //         const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// //         const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// //         const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
// //         // First get the exam ID from slug
// //         const { data: examData, error: examError } = await supabase
// //           .from('exams')
// //           .select('id')
// //           .eq('slug', examId)
// //           .single();
          
// //         if (examError) throw examError;
        
// //         // Fetch questions for this exam
// //         const { data, error } = await supabase
// //           .from('questions')
// //           .select('*')
// //           .eq('exam_id', examData.id)
// //           .eq('is_active', true);
          
// //         if (error) throw error;
        
// //         if (data && data.length > 0) {
// //           // Transform the data to match our component's expected format
// //           const formattedQuestions = data.map(q => ({
// //             id: q.id,
// //             shortQuestion: q.title || q.text.substring(0, 50),
// //             shortAnswer: q.short_answer || "No short answer available",
// //             fullQuestion: q.text,
// //             options: q.choices?.map(choice => choice.text) || [],
// //             correctAnswer: q.choices?.findIndex(choice => choice.isCorrect) || 0,
// //             explanation: q.explanation || "No explanation available",
// //             subject: q.subject || "General",
// //             date: new Date(q.created_at).toLocaleDateString('en-US', {month: 'short', year: '2-digit'})
// //           }));
          
// //           setQuestions(formattedQuestions);
// //         }
// //       } catch (err) {
// //         console.error('Error fetching questions:', err);
// //         setError('Failed to load questions from database.');
// //         // Fall back to default questions
// //         setQuestions(defaultQuestions);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchQuestionsFromSupabase();
// //   }, [loadFromSupabase, initialQuestions, examId]);

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
// //       const year = q.date.includes('20') ? q.date.slice(-4) : '20' + q.date.slice(-2);
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
// //                           (q.shortAnswer && q.shortAnswer.toLowerCase().includes(search.toLowerCase()));
// //     const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
// //     const matchesReview = reviewFilter === 'all' || 
// //                           (reviewFilter === 'got-it' && reviews[q.id] === 'got-it') ||
// //                           (reviewFilter === 'review' && reviews[q.id] === 'review') ||
// //                           (reviewFilter === 'not-reviewed' && !reviews[q.id]);
// //     const matchesYear = yearFilter === 'all' || 
// //                        (yearFilter === (q.date.includes('20') ? q.date.slice(-4) : '20' + q.date.slice(-2)));
// //     return matchesSearch && matchesSubject && matchesReview && matchesYear;
// //   });

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.background}}>
// //         <Header />
// //         <div className="flex-grow flex items-center justify-center">
// //           <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
// //             <div className="h-8 w-1/3 bg-white opacity-60 rounded"></div>
// //             <div className="h-16 w-full bg-white opacity-40 rounded"></div>
// //             <div className="grid grid-cols-3 gap-4">
// //               {[1, 2, 3].map(i => (
// //                 <div key={i} className="h-24 w-full bg-white opacity-30 rounded"></div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.background}}>
// //         <Header />
// //         <div className="flex-grow flex items-center justify-center">
// //           <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-md mx-auto text-center">
// //             <div className="text-3xl mb-4">😕</div>
// //             <h2 className="text-xl font-semibold mb-2">Error</h2>
// //             <p className="text-gray-600 mb-4">{error}</p>
// //             <Link href="/exams" className="inline-block px-4 py-2 rounded-md" style={{backgroundColor: colors.primary, color: 'white'}}>
// //               Back to Exams
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={{backgroundColor: colors.background}} className="min-h-screen">
// //       <Header />
      
// //       {/* Custom back link if exam name is provided */}
// //       {examId && (
// //         <div className="max-w-5xl mx-auto px-4 py-4">
// //           <Link href={`/exams/${examId}`} className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
// //             <ArrowLeft className="w-4 h-4 mr-1" />
// //             Back to {examName}
// //           </Link>
// //         </div>
// //       )}

// //       {/* Hero Section with Search and Filters */}
// //       <MCQHero 
// //         title={examName}
// //         questionsCount={questions.length}
// //         reviewCounts={reviewCounts}
// //         subjects={subjects}
// //         subjectCounts={subjectCounts}
// //         years={years}
// //         yearCounts={yearCounts}
// //         search={search}
// //         setSearch={setSearch}
// //         subjectFilter={subjectFilter}
// //         setSubjectFilter={setSubjectFilter}
// //         yearFilter={yearFilter}
// //         setYearFilter={setYearFilter}
// //         reviewFilter={reviewFilter}
// //         setReviewFilter={setReviewFilter}
// //       />

// //       {/* Questions List */}
// //       <MCQQuestions 
// //         filteredQuestions={filteredQuestions}
// //         expandedQuestion={expandedQuestion}
// //         setExpandedQuestion={setExpandedQuestion}
// //         revealedAnswers={revealedAnswers}
// //         setRevealedAnswers={setRevealedAnswers}
// //         reviews={reviews}
// //         setReviews={setReviews}
// //         selectedAnswers={selectedAnswers}
// //         setSelectedAnswers={setSelectedAnswers}
// //         showFeedback={showFeedback}
// //         setShowFeedback={setShowFeedback}
// //         colors={colors}
// //       />
// //     </div>
// //   );
// // };

// // export default MCQApp;
// "use client"
// import React, { useState, useEffect } from 'react';
// import Header from '@/components/Header';
// import MCQHero from '@/components/notes/MCQHero';
// import MCQQuestions from '@/components/notes/MCQQuestions';
// import Link from 'next/link';
// import { createClient } from '@supabase/supabase-js';

// // Default questions as fallback
// const defaultQuestions = [
//   {
//     id: 1,
//     shortQuestion: 'Mycobacterium tuberculosis',
//     shortAnswer: 'Chronic cough, night sweats, weight loss',
//     fullQuestion: 'What are the classic symptoms of pulmonary TB?',
//     options: [
//       'Acute onset fever and rash',
//       'Chronic cough, night sweats, weight loss',
//       'Sudden chest pain and dyspnea',
//       'Recurrent sinusitis'
//     ],
//     correctAnswer: 1,
//     explanation: 'Pulmonary tuberculosis typically presents with chronic cough (>2-3 weeks), night sweats, and weight loss. The cough may initially be dry but often becomes productive with blood-streaked sputum (hemoptysis). Other symptoms include fever, fatigue, and chest pain. These symptoms develop gradually over weeks to months, distinguishing it from acute respiratory infections.',
//     subject: 'Respiratory',
//     date: 'Feb25'
//   },
//   {
//     id: 2,
//     shortQuestion: 'Brucella spp.',
//     shortAnswer: 'Undulant fever, night sweats, arthralgia',
//     fullQuestion: 'Which presentation is most characteristic of brucellosis?',
//     options: [
//       'Acute high fever with maculopapular rash',
//       'Undulant fever, night sweats, arthralgia',
//       'Productive cough and hemoptysis',
//       'Watery diarrhea and abdominal cramps'
//     ],
//     correctAnswer: 1,
//     explanation: 'Brucellosis typically presents with undulant (wave-like) fever that rises and falls over the day, accompanied by profuse sweating (especially at night), joint and muscle pain, fatigue, and headache. The infection is zoonotic, commonly transmitted through unpasteurized dairy products or direct contact with infected animals.',
//     subject: 'Infectious Disease',
//     date: 'Jan25'
//   },
//   {
//     id: 3,
//     shortQuestion: 'Epstein-Barr Virus',
//     shortAnswer: 'Fatigue, sore throat, lymphadenopathy',
//     fullQuestion: 'What are the classic symptoms of infectious mononucleosis?',
//     options: [
//       'Watery diarrhea and abdominal pain',
//       'Fatigue, sore throat, lymphadenopathy',
//       'Maculopapular rash and arthralgia',
//       'Headache and nuchal rigidity'
//     ],
//     correctAnswer: 1,
//     explanation: 'Infectious mononucleosis, caused by Epstein-Barr virus (EBV), classically presents with the triad of fatigue, pharyngitis (sore throat), and lymphadenopathy (particularly posterior cervical). Other common features include fever, malaise, splenomegaly, and atypical lymphocytosis. A maculopapular rash may develop in patients treated with ampicillin or amoxicillin.',
//     subject: 'Infectious Disease',
//     date: 'Mar25'
//   }
// ];

// const MCQApp = ({ examName = "Medical MCQ Bank", examId, initialQuestions = null, loadFromSupabase = false }) => {
//   const [expandedQuestion, setExpandedQuestion] = useState(null);
//   const [revealedAnswers, setRevealedAnswers] = useState({});
//   const [reviews, setReviews] = useState({});
//   const [search, setSearch] = useState('');
//   const [subjectFilter, setSubjectFilter] = useState('all');
//   const [reviewFilter, setReviewFilter] = useState('all');
//   const [yearFilter, setYearFilter] = useState('all');
//   const [questions, setQuestions] = useState(initialQuestions || defaultQuestions);
//   const [loading, setLoading] = useState(loadFromSupabase && !initialQuestions);
//   const [error, setError] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showFeedback, setShowFeedback] = useState({});

//   // Custom color palette
//   const colors = {
//     primary: "#007832",
//     background: "#F6EFE8",
//     accent: "#E8D8CE",
//     tabs: "#E5DFDA",
//     text: "#000000",
//     textLight: "#333333",
//     // Thumbs colors
//     thumbsUpBg: "#EFFDF4",
//     thumbsUpIcon: "#17A34A",
//     thumbsDownBg: "#FFF7ED",
//     thumbsDownIcon: "#F97315"
//   };

//   // If loadFromSupabase is true and no initialQuestions were passed, fetch from Supabase
//   useEffect(() => {
//     const fetchQuestionsFromSupabase = async () => {
//       if (!loadFromSupabase || initialQuestions) return;
      
//       try {
//         setLoading(true);
        
//         // Initialize Supabase
//         const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//         const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
//         const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
//         // First get the exam ID from slug
//         const { data: examData, error: examError } = await supabase
//           .from('exams')
//           .select('id')
//           .eq('slug', examId)
//           .single();
          
//         if (examError) throw examError;
        
//         // Fetch questions for this exam
//         const { data, error } = await supabase
//           .from('questions')
//           .select('*')
//           .eq('exam_id', examData.id)
//           .eq('is_active', true);
          
//         if (error) throw error;
        
//         if (data && data.length > 0) {
//           // Transform the data to match our component's expected format
//           const formattedQuestions = data.map(q => ({
//             id: q.id,
//             shortQuestion: q.title || q.text.substring(0, 50),
//             shortAnswer: q.short_answer || "No short answer available",
//             fullQuestion: q.text,
//             options: q.choices?.map(choice => choice.text) || [],
//             correctAnswer: q.choices?.findIndex(choice => choice.isCorrect) || 0,
//             explanation: q.explanation || "No explanation available",
//             subject: q.subject || "General",
//             date: new Date(q.created_at).toLocaleDateString('en-US', {month: 'short', year: '2-digit'})
//           }));
          
//           setQuestions(formattedQuestions);
//         }
//       } catch (err) {
//         console.error('Error fetching questions:', err);
//         setError('Failed to load questions from database.');
//         // Fall back to default questions
//         setQuestions(defaultQuestions);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestionsFromSupabase();
//   }, [loadFromSupabase, initialQuestions, examId]);

//   const getSubjectCounts = () => {
//     const counts = questions.reduce((acc, q) => {
//       acc[q.subject] = (acc[q.subject] || 0) + 1;
//       return acc;
//     }, {});
//     return counts;
//   };

//   const getReviewCounts = () => {
//     const gotIt = Object.values(reviews).filter(status => status === 'got-it').length;
//     const review = Object.values(reviews).filter(status => status === 'review').length;
//     const notReviewed = questions.length - gotIt - review;
//     return { gotIt, review, notReviewed };
//   };

//   const getYearCounts = () => {
//     const years = {};
//     questions.forEach(q => {
//       const year = q.date.includes('20') ? q.date.slice(-4) : '20' + q.date.slice(-2);
//       years[year] = (years[year] || 0) + 1;
//     });
//     return years;
//   };

//   const subjectCounts = getSubjectCounts();
//   const reviewCounts = getReviewCounts();
//   const yearCounts = getYearCounts();
//   const subjects = Object.keys(subjectCounts);
//   const years = Object.keys(yearCounts);

//   const filteredQuestions = questions.filter(q => {
//     const matchesSearch = q.shortQuestion.toLowerCase().includes(search.toLowerCase()) ||
//                           (q.shortAnswer && q.shortAnswer.toLowerCase().includes(search.toLowerCase()));
//     const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
//     const matchesReview = reviewFilter === 'all' || 
//                           (reviewFilter === 'got-it' && reviews[q.id] === 'got-it') ||
//                           (reviewFilter === 'review' && reviews[q.id] === 'review') ||
//                           (reviewFilter === 'not-reviewed' && !reviews[q.id]);
//     const matchesYear = yearFilter === 'all' || 
//                        (yearFilter === (q.date.includes('20') ? q.date.slice(-4) : '20' + q.date.slice(-2)));
//     return matchesSearch && matchesSubject && matchesReview && matchesYear;
//   });

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.background}}>
//         <Header />
//         <div className="flex-grow flex items-center justify-center">
//           <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
//             <div className="h-8 w-1/3 bg-white opacity-60 rounded"></div>
//             <div className="h-16 w-full bg-white opacity-40 rounded"></div>
//             <div className="grid grid-cols-3 gap-4">
//               {[1, 2, 3].map(i => (
//                 <div key={i} className="h-24 w-full bg-white opacity-30 rounded"></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.background}}>
//         <Header />
//         <div className="flex-grow flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-md mx-auto text-center">
//             <div className="text-3xl mb-4">😕</div>
//             <h2 className="text-xl font-semibold mb-2">Error</h2>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <Link href="/exams" className="inline-block px-4 py-2 rounded-md" style={{backgroundColor: colors.primary, color: 'white'}}>
//               Back to Exams
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{backgroundColor: colors.background}} className="min-h-screen">
//       <Header />

//       {/* Hero Section with Search and Filters */}
//       <MCQHero 
//         title={examName}
//         questionsCount={questions.length}
//         reviewCounts={reviewCounts}
//         subjects={subjects}
//         subjectCounts={subjectCounts}
//         years={years}
//         yearCounts={yearCounts}
//         search={search}
//         setSearch={setSearch}
//         subjectFilter={subjectFilter}
//         setSubjectFilter={setSubjectFilter}
//         yearFilter={yearFilter}
//         setYearFilter={setYearFilter}
//         reviewFilter={reviewFilter}
//         setReviewFilter={setReviewFilter}
//         examId={examId}
//       />

//       {/* Questions List */}
//       <MCQQuestions 
//         filteredQuestions={filteredQuestions}
//         expandedQuestion={expandedQuestion}
//         setExpandedQuestion={setExpandedQuestion}
//         revealedAnswers={revealedAnswers}
//         setRevealedAnswers={setRevealedAnswers}
//         reviews={reviews}
//         setReviews={setReviews}
//         selectedAnswers={selectedAnswers}
//         setSelectedAnswers={setSelectedAnswers}
//         showFeedback={showFeedback}
//         setShowFeedback={setShowFeedback}
//         colors={colors}
//       />
//     </div>
//   );
// };

// export default MCQApp;
"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MCQHero from '@/components/notes/old/MCQHero';
import MCQQuestions from '@/components/notes/old/MCQQuestions';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

// Default questions as fallback
const defaultQuestions = [
  {
    id: 1,
    shortQuestion: 'Mycobacterium tuberculosis',
    shortAnswer: 'Chronic cough, night sweats, weight loss',
    fullQuestion: 'What are the classic symptoms of pulmonary TB?',
    options: [
      'Acute onset fever and rash',
      'Chronic cough, night sweats, weight loss',
      'Sudden chest pain and dyspnea',
      'Recurrent sinusitis'
    ],
    correctAnswer: 1,
    explanation: 'Pulmonary tuberculosis typically presents with chronic cough (>2-3 weeks), night sweats, and weight loss. The cough may initially be dry but often becomes productive with blood-streaked sputum (hemoptysis). Other symptoms include fever, fatigue, and chest pain. These symptoms develop gradually over weeks to months, distinguishing it from acute respiratory infections.',
    subject: 'Respiratory',
    date: 'Feb25'
  },
  {
    id: 2,
    shortQuestion: 'Brucella spp.',
    shortAnswer: 'Undulant fever, night sweats, arthralgia',
    fullQuestion: 'Which presentation is most characteristic of brucellosis?',
    options: [
      'Acute high fever with maculopapular rash',
      'Undulant fever, night sweats, arthralgia',
      'Productive cough and hemoptysis',
      'Watery diarrhea and abdominal cramps'
    ],
    correctAnswer: 1,
    explanation: 'Brucellosis typically presents with undulant (wave-like) fever that rises and falls over the day, accompanied by profuse sweating (especially at night), joint and muscle pain, fatigue, and headache. The infection is zoonotic, commonly transmitted through unpasteurized dairy products or direct contact with infected animals.',
    subject: 'Infectious Disease',
    date: 'Jan25'
  },
  {
    id: 3,
    shortQuestion: 'Epstein-Barr Virus',
    shortAnswer: 'Fatigue, sore throat, lymphadenopathy',
    fullQuestion: 'What are the classic symptoms of infectious mononucleosis?',
    options: [
      'Watery diarrhea and abdominal pain',
      'Fatigue, sore throat, lymphadenopathy',
      'Maculopapular rash and arthralgia',
      'Headache and nuchal rigidity'
    ],
    correctAnswer: 1,
    explanation: 'Infectious mononucleosis, caused by Epstein-Barr virus (EBV), classically presents with the triad of fatigue, pharyngitis (sore throat), and lymphadenopathy (particularly posterior cervical). Other common features include fever, malaise, splenomegaly, and atypical lymphocytosis. A maculopapular rash may develop in patients treated with ampicillin or amoxicillin.',
    subject: 'Infectious Disease',
    date: 'Mar25'
  }
];

const MCQApp = ({ examName = "Medical MCQ Bank", examId, initialQuestions = null, loadFromSupabase = false }) => {
  // Retrieve stored reviews from localStorage if available
  const getStoredReviews = () => {
    if (typeof window !== 'undefined') {
      const storedReviews = localStorage.getItem(`${examId || 'mcq'}_reviews`);
      return storedReviews ? JSON.parse(storedReviews) : {};
    }
    return {};
  };

  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [reviews, setReviews] = useState(getStoredReviews());
  const [search, setSearch] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [reviewFilter, setReviewFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [questions, setQuestions] = useState(initialQuestions || defaultQuestions);
  const [loading, setLoading] = useState(loadFromSupabase && !initialQuestions);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});

  // Custom color palette
  const colors = {
    primary: "#007832",
    background: "#F6EFE8",
    accent: "#E8D8CE",
    tabs: "#E5DFDA",
    text: "#000000",
    textLight: "#333333",
    // Thumbs colors
    thumbsUpBg: "#EFFDF4",
    thumbsUpIcon: "#17A34A",
    thumbsDownBg: "#FFF7ED",
    thumbsDownIcon: "#F97315"
  };

  // If loadFromSupabase is true and no initialQuestions were passed, fetch from Supabase
  useEffect(() => {
    const fetchQuestionsFromSupabase = async () => {
      if (!loadFromSupabase || initialQuestions) return;
      
      try {
        setLoading(true);
        
        // Initialize Supabase
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        // First get the exam ID from slug
        const { data: examData, error: examError } = await supabase
          .from('exams')
          .select('id')
          .eq('slug', examId)
          .single();
          
        if (examError) throw examError;
        
        // Fetch questions for this exam
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('exam_id', examData.id)
          .eq('is_active', true);
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          // Transform the data to match our component's expected format
          const formattedQuestions = data.map(q => ({
            id: q.id,
            shortQuestion: q.title || q.text,
            shortAnswer: q.short_answer || "No short answer available",
            fullQuestion: q.text,
            options: q.choices?.map(choice => choice.text) || [],
            correctAnswer: q.choices?.findIndex(choice => choice.isCorrect) || 0,
            explanation: q.explanation || "No explanation available",
            subject: q.subject || "General",
            date: new Date(q.created_at).toLocaleDateString('en-US', {month: 'short', year: '2-digit'})
          }));
          
          setQuestions(formattedQuestions);
        }
      } catch (err) {
        console.error('Error fetching questions:', err);
        setError('Failed to load questions from database.');
        // Fall back to default questions
        setQuestions(defaultQuestions);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionsFromSupabase();
  }, [loadFromSupabase, initialQuestions, examId]);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && Object.keys(reviews).length > 0) {
      localStorage.setItem(`${examId || 'mcq'}_reviews`, JSON.stringify(reviews));
    }
  }, [reviews, examId]);

  const getSubjectCounts = () => {
    const counts = questions.reduce((acc, q) => {
      acc[q.subject] = (acc[q.subject] || 0) + 1;
      return acc;
    }, {});
    return counts;
  };

  const getReviewCounts = () => {
    const gotIt = Object.values(reviews).filter(status => status === 'got-it').length;
    const review = Object.values(reviews).filter(status => status === 'review').length;
    const notReviewed = questions.length - gotIt - review;
    return { gotIt, review, notReviewed };
  };

  const getYearCounts = () => {
    const years = {};
    questions.forEach(q => {
      const year = q.date.includes('20') ? q.date.slice(-4) : '20' + q.date.slice(-2);
      years[year] = (years[year] || 0) + 1;
    });
    return years;
  };

  const subjectCounts = getSubjectCounts();
  const reviewCounts = getReviewCounts();
  const yearCounts = getYearCounts();
  const subjects = Object.keys(subjectCounts);
  const years = Object.keys(yearCounts);

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.shortQuestion.toLowerCase().includes(search.toLowerCase()) ||
                          (q.shortAnswer && q.shortAnswer.toLowerCase().includes(search.toLowerCase()));
    const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
    const matchesReview = reviewFilter === 'all' || 
                          (reviewFilter === 'got-it' && reviews[q.id] === 'got-it') ||
                          (reviewFilter === 'review' && reviews[q.id] === 'review') ||
                          (reviewFilter === 'not-reviewed' && !reviews[q.id]);
    const matchesYear = yearFilter === 'all' || 
                       (yearFilter === (q.date.includes('20') ? q.date.slice(-4) : '20' + q.date.slice(-2)));
    return matchesSearch && matchesSubject && matchesReview && matchesYear;
  });

  // Handle review updates
  const handleReviewUpdate = (id, status) => {
    const updatedReviews = { ...reviews, [id]: status };
    setReviews(updatedReviews);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.background}}>
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse space-y-6 max-w-4xl w-full px-4">
            <div className="h-8 w-1/3 bg-white opacity-60 rounded"></div>
            <div className="h-16 w-full bg-white opacity-40 rounded"></div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 w-full bg-white opacity-30 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col" style={{backgroundColor: colors.background}}>
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg border border-gray-200 max-w-md mx-auto text-center">
            <div className="text-3xl mb-4">😕</div>
            <h2 className="text-xl font-semibold mb-2">Error</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link href="/exams" className="inline-block px-4 py-2 rounded-md" style={{backgroundColor: colors.primary, color: 'white'}}>
              Back to Exams
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: colors.background}} className="min-h-screen">
      <Header />

      {/* Hero Section with Search and Filters */}
      <MCQHero 
        title={examName}
        questionsCount={questions.length}
        reviewCounts={reviewCounts}
        subjects={subjects}
        subjectCounts={subjectCounts}
        years={years}
        yearCounts={yearCounts}
        search={search}
        setSearch={setSearch}
        subjectFilter={subjectFilter}
        setSubjectFilter={setSubjectFilter}
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        reviewFilter={reviewFilter}
        setReviewFilter={setReviewFilter}
        examId={examId}
      />

      {/* Questions List */}
      <MCQQuestions 
        filteredQuestions={filteredQuestions}
        expandedQuestion={expandedQuestion}
        setExpandedQuestion={setExpandedQuestion}
        revealedAnswers={revealedAnswers}
        setRevealedAnswers={setRevealedAnswers}
        reviews={reviews}
        setReviews={handleReviewUpdate}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        showFeedback={showFeedback}
        setShowFeedback={setShowFeedback}
        colors={colors}
      />
    </div>
  );
};

export default MCQApp;