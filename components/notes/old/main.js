// // // // // // // // 'use client'

// // // // // // // // import { useState, useEffect } from 'react'
// // // // // // // // import FilterSection from './filters'
// // // // // // // // import MedicalCard from './short'

// // // // // // // // const MedicalInfoCards = () => {
// // // // // // // //   const [expandedCards, setExpandedCards] = useState({})
// // // // // // // //   const [visibleAnswers, setVisibleAnswers] = useState({})
// // // // // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // // // // //   const [selectedSubject, setSelectedSubject] = useState("Bacterial Infections")
// // // // // // // //   const [filteredData, setFilteredData] = useState([])

// // // // // // // //   const subjects = ["Bacterial Infections", "Viral Infections", "Fungal Infections"]

// // // // // // // //   const medicalData = [
// // // // // // // //     {
// // // // // // // //       pathogen: "Haemophilus influenzae (B)",
// // // // // // // //       treatment: "Amoxicillin ± clavulanate (mucosal infections), ceftriaxone (meningitis), rifampin (prophylaxis)",
// // // // // // // //       subject: "Bacterial Infections"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       pathogen: "Neisseria gonorrhoeae",
// // // // // // // //       treatment: "Ceftriaxone (add doxycycline to cover likely concurrent C trachomatis)",
// // // // // // // //       subject: "Bacterial Infections"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       pathogen: "Influenza Virus",
// // // // // // // //       treatment: "Oseltamivir or Zanamivir for severe cases, supportive care",
// // // // // // // //       subject: "Viral Infections"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       pathogen: "Candida albicans",
// // // // // // // //       treatment: "Fluconazole, Echinocandins for resistant cases",
// // // // // // // //       subject: "Fungal Infections"
// // // // // // // //     }
// // // // // // // //   ]

// // // // // // // //   useEffect(() => {
// // // // // // // //     setFilteredData(
// // // // // // // //       medicalData.filter(
// // // // // // // //         (item) =>
// // // // // // // //           item.subject === selectedSubject &&
// // // // // // // //           (item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // // //            item.treatment.toLowerCase().includes(searchTerm.toLowerCase()))
// // // // // // // //       )
// // // // // // // //     )
// // // // // // // //   }, [searchTerm, selectedSubject])

// // // // // // // //   const toggleExpand = (index) => {
// // // // // // // //     setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))
// // // // // // // //   }

// // // // // // // //   const showSingleAnswer = (index) => {
// // // // // // // //     setVisibleAnswers(prev => ({ ...prev, [index]: !prev[index] }))
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // // //       <FilterSection
// // // // // // // //         searchTerm={searchTerm}
// // // // // // // //         setSearchTerm={setSearchTerm}
// // // // // // // //         selectedSubject={selectedSubject}
// // // // // // // //         setSelectedSubject={setSelectedSubject}
// // // // // // // //         subjects={subjects}
// // // // // // // //         visibleAnswers={visibleAnswers}
// // // // // // // //         setVisibleAnswers={setVisibleAnswers}
// // // // // // // //         filteredData={filteredData}
// // // // // // // //       />

// // // // // // // //       <div className="container mx-auto px-4 py-8">
// // // // // // // //         <div className="space-y-4">
// // // // // // // //           {filteredData.map((item, index) => (
// // // // // // // //             <MedicalCard
// // // // // // // //               key={index}
// // // // // // // //               pathogen={item.pathogen}
// // // // // // // //               treatment={item.treatment}
// // // // // // // //               isExpanded={expandedCards[index] || false}
// // // // // // // //               showAnswer={visibleAnswers[index] || false}
// // // // // // // //               toggleExpand={() => toggleExpand(index)}
// // // // // // // //               onCardClick={() => showSingleAnswer(index)}
// // // // // // // //             />
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default MedicalInfoCards
// // // // // // // 'use client'

// // // // // // // import { useState, useEffect } from 'react'
// // // // // // // import FilterSection from './filters'
// // // // // // // import MedicalCard from './short'
// // // // // // // import DetailedContent from './detailed'
// // // // // // // import { medicalData, subjects } from './data'

// // // // // // // const MedicalInfoCards = () => {
// // // // // // //   const [expandedCards, setExpandedCards] = useState({})
// // // // // // //   const [visibleAnswers, setVisibleAnswers] = useState({})
// // // // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // // // //   const [selectedSubject, setSelectedSubject] = useState("Bacterial Infections")
// // // // // // //   const [filteredData, setFilteredData] = useState([])

// // // // // // //   useEffect(() => {
// // // // // // //     setFilteredData(
// // // // // // //       medicalData.filter(
// // // // // // //         (item) =>
// // // // // // //           item.subject === selectedSubject &&
// // // // // // //           (item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // // //            item.treatment.toLowerCase().includes(searchTerm.toLowerCase()))
// // // // // // //       )
// // // // // // //     )
// // // // // // //   }, [searchTerm, selectedSubject])

// // // // // // //   const toggleExpand = (index) => {
// // // // // // //     setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))
// // // // // // //   }

// // // // // // //   const showSingleAnswer = (index) => {
// // // // // // //     setVisibleAnswers(prev => ({ ...prev, [index]: !prev[index] }))
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // //       <FilterSection
// // // // // // //         searchTerm={searchTerm}
// // // // // // //         setSearchTerm={setSearchTerm}
// // // // // // //         selectedSubject={selectedSubject}
// // // // // // //         setSelectedSubject={setSelectedSubject}
// // // // // // //         subjects={subjects}
// // // // // // //         visibleAnswers={visibleAnswers}
// // // // // // //         setVisibleAnswers={setVisibleAnswers}
// // // // // // //         filteredData={filteredData}
// // // // // // //       />
// // // // // // //       <div className="container mx-auto px-4 py-8">
// // // // // // //         <div className="space-y-4">
// // // // // // //           {filteredData.map((item, index) => (
// // // // // // //             <div key={index} className="space-y-2">
// // // // // // //               <MedicalCard
// // // // // // //                 pathogen={item.pathogen}
// // // // // // //                 treatment={item.treatment}
// // // // // // //                 isExpanded={expandedCards[index] || false}
// // // // // // //                 showAnswer={visibleAnswers[index] || false}
// // // // // // //                 toggleExpand={() => toggleExpand(index)}
// // // // // // //                 onCardClick={() => showSingleAnswer(index)}
// // // // // // //               />
// // // // // // //               {expandedCards[index] && item.mcq && (
// // // // // // //                 <DetailedContent
// // // // // // //                   mcqData={item.mcq}
// // // // // // //                   showAnswer={visibleAnswers[index]}
// // // // // // //                 />
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default MedicalInfoCards
// // // // // // 'use client'

// // // // // // import { useState, useEffect } from 'react'
// // // // // // import FilterSection from './filters'
// // // // // // import MedicalCard from './short'
// // // // // // import DetailedContent from './detailed'
// // // // // // import { medicalData, subjects } from './data'

// // // // // // const MedicalInfoCards = () => {
// // // // // //   const [expandedCards, setExpandedCards] = useState({})
// // // // // //   const [visibleAnswers, setVisibleAnswers] = useState({})
// // // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // // //   const [selectedSubject, setSelectedSubject] = useState("Bacterial Infections")
// // // // // //   const [filteredData, setFilteredData] = useState([])

// // // // // //   useEffect(() => {
// // // // // //     setFilteredData(
// // // // // //       medicalData.filter(
// // // // // //         (item) =>
// // // // // //           (selectedSubject === "All" || item.subject === selectedSubject) &&
// // // // // //           (item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //            item.treatment.toLowerCase().includes(searchTerm.toLowerCase()))
// // // // // //       )
// // // // // //     )
// // // // // //   }, [searchTerm, selectedSubject])

// // // // // //   const toggleExpand = (index) => {
// // // // // //     setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))
// // // // // //   }

// // // // // //   const showSingleAnswer = (index) => {
// // // // // //     setVisibleAnswers(prev => ({ ...prev, [index]: !prev[index] }))
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // //       <FilterSection
// // // // // //         searchTerm={searchTerm}
// // // // // //         setSearchTerm={setSearchTerm}
// // // // // //         selectedSubject={selectedSubject}
// // // // // //         setSelectedSubject={setSelectedSubject}
// // // // // //         subjects={subjects}
// // // // // //         visibleAnswers={visibleAnswers}
// // // // // //         setVisibleAnswers={setVisibleAnswers}
// // // // // //         filteredData={filteredData}
// // // // // //       />
// // // // // //       <div className="container mx-auto px-4 py-8">
// // // // // //         <div className="space-y-4">
// // // // // //           {filteredData.map((item, index) => (
// // // // // //             <div key={index} className="space-y-2">
// // // // // //               <MedicalCard
// // // // // //                 pathogen={item.pathogen}
// // // // // //                 treatment={item.treatment}
// // // // // //                 isExpanded={expandedCards[index] || false}
// // // // // //                 showAnswer={visibleAnswers[index] || false}
// // // // // //                 toggleExpand={() => toggleExpand(index)}
// // // // // //                 onCardClick={() => showSingleAnswer(index)}
// // // // // //               />
// // // // // //               {expandedCards[index] && item.mcq && (
// // // // // //                 <DetailedContent
// // // // // //                   mcqData={item.mcq}
// // // // // //                   showAnswer={visibleAnswers[index]}
// // // // // //                 />
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default MedicalInfoCards
// // // // // 'use client'

// // // // // import { useState, useEffect } from 'react'
// // // // // import FilterSection from './filters'
// // // // // import MedicalCard from './short'
// // // // // import DetailedContent from './detailed'
// // // // // import { medicalData, subjects } from './data'

// // // // // const MedicalInfoCards = () => {
// // // // //   const [expandedCards, setExpandedCards] = useState({})
// // // // //   const [visibleAnswers, setVisibleAnswers] = useState({})
// // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // //   const [selectedSubject, setSelectedSubject] = useState("All")
// // // // //   const [filteredData, setFilteredData] = useState([])

// // // // //   useEffect(() => {
// // // // //     setFilteredData(
// // // // //       medicalData.filter(
// // // // //         (item) =>
// // // // //           (selectedSubject === "All" || item.subject === selectedSubject) &&
// // // // //           (item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //            item.treatment.toLowerCase().includes(searchTerm.toLowerCase()))
// // // // //       )
// // // // //     )
// // // // //   }, [searchTerm, selectedSubject])

// // // // //   const toggleExpand = (index) => {
// // // // //     setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))
// // // // //   }

// // // // //   const showSingleAnswer = (index) => {
// // // // //     setVisibleAnswers(prev => ({ ...prev, [index]: !prev[index] }))
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50">
// // // // //       <FilterSection
// // // // //         searchTerm={searchTerm}
// // // // //         setSearchTerm={setSearchTerm}
// // // // //         selectedSubject={selectedSubject}
// // // // //         setSelectedSubject={setSelectedSubject}
// // // // //         subjects={subjects}
// // // // //         visibleAnswers={visibleAnswers}
// // // // //         setVisibleAnswers={setVisibleAnswers}
// // // // //         filteredData={filteredData}
// // // // //       />
// // // // //       <div className="container mx-auto px-4 py-8">
// // // // //         <div className="space-y-4">
// // // // //           {filteredData.map((item, index) => (
// // // // //             <div key={index} className="space-y-2">
// // // // //               <MedicalCard
// // // // //                 pathogen={item.pathogen}
// // // // //                 treatment={item.treatment}
// // // // //                 isExpanded={expandedCards[index] || false}
// // // // //                 showAnswer={visibleAnswers[index] || false}
// // // // //                 toggleExpand={() => toggleExpand(index)}
// // // // //                 onCardClick={() => showSingleAnswer(index)}
// // // // //               />
// // // // //               {expandedCards[index] && item.mcq && (
// // // // //                 <DetailedContent
// // // // //                   mcqData={item.mcq}
// // // // //                   showAnswer={visibleAnswers[index]}
// // // // //                 />
// // // // //               )}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default MedicalInfoCards
// // // // 'use client';

// // // // import React, { useState, useEffect, useCallback } from 'react';
// // // // import Hero from './hero';
// // // // import ListView from './list-view';
// // // // import FlashcardView from './flashcard-view';
// // // // import MCQView from './mcq-view';
// // // // import { subjects, medicalData } from './data';

// // // // const MedicalInfoCards = () => {
// // // //   // State management
// // // //   const [expandedCards, setExpandedCards] = useState({});
// // // //   const [visibleAnswers, setVisibleAnswers] = useState({});
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [selectedSubject, setSelectedSubject] = useState("All");
// // // //   const [selectedTiming, setSelectedTiming] = useState("all");
// // // //   const [showPinned, setShowPinned] = useState(false);
// // // //   const [showUnanswered, setShowUnanswered] = useState(false);
// // // //   const [filteredData, setFilteredData] = useState(medicalData);
// // // //   const [currentView, setCurrentView] = useState('notes');
// // // //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// // // //   const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
// // // //   const [cardTimings, setCardTimings] = useState({});
// // // //   const [pinnedCards, setPinnedCards] = useState({});

// // // //   // Filter data based on all criteria
// // // //   useEffect(() => {
// // // //     setFilteredData(
// // // //       medicalData.filter(
// // // //         (item, index) => {
// // // //           const matchesSearch = 
// // // //             item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             item.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //             (item.mcq?.question.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
          
// // // //           const matchesSubject = 
// // // //             selectedSubject === "All" || item.subject === selectedSubject;
          
// // // //           const matchesTiming = 
// // // //             selectedTiming === "all" || cardTimings[index]?.timing === selectedTiming;

// // // //           const matchesPinned = 
// // // //             !showPinned || pinnedCards[index];

// // // //           const matchesUnanswered = 
// // // //             !showUnanswered || !visibleAnswers[index];

// // // //           return matchesSearch && matchesSubject && matchesTiming && matchesPinned && matchesUnanswered;
// // // //         }
// // // //       )
// // // //     );
// // // //     setCurrentCardIndex(0);
// // // //   }, [searchTerm, selectedSubject, selectedTiming, showPinned, showUnanswered, pinnedCards, visibleAnswers, cardTimings]);

// // // //   // Card management functions
// // // //   const togglePin = (index) => {
// // // //     setPinnedCards(prev => ({
// // // //       ...prev,
// // // //       [index]: !prev[index]
// // // //     }));
// // // //   };

// // // //   const toggleExpand = (index) => {
// // // //     setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
// // // //   };

// // // //   const showSingleAnswer = (index) => {
// // // //     setVisibleAnswers(prev => ({ ...prev, [index]: !prev[index] }));
// // // //   };

// // // //   const handleCardTiming = (index, timing) => {
// // // //     setCardTimings(prev => ({
// // // //       ...prev,
// // // //       [index]: {
// // // //         timing,
// // // //         timestamp: Date.now()
// // // //       }
// // // //     }));
// // // //   };

// // // //   // Navigation functions
// // // //   const handleNext = () => {
// // // //     setCurrentCardIndex(prev => Math.min(filteredData.length - 1, prev + 1));
// // // //     setShowFlashcardAnswer(false);
// // // //   };

// // // //   const handlePrev = () => {
// // // //     setCurrentCardIndex(prev => Math.max(0, prev - 1));
// // // //     setShowFlashcardAnswer(false);
// // // //   };

// // // //   // Keyboard navigation
// // // //   const handleKeyPress = useCallback((event) => {
// // // //     if (currentView !== 'notes') {
// // // //       if (!showFlashcardAnswer) {
// // // //         setShowFlashcardAnswer(true);
// // // //       } else {
// // // //         switch (event.key) {
// // // //           case 'ArrowLeft':
// // // //             handlePrev();
// // // //             break;
// // // //           case 'ArrowRight':
// // // //             handleNext();
// // // //             break;
// // // //           case '1':
// // // //             handleCardTiming(currentCardIndex, 'again');
// // // //             handleNext();
// // // //             break;
// // // //           case '2':
// // // //             handleCardTiming(currentCardIndex, 'hard');
// // // //             handleNext();
// // // //             break;
// // // //           case '3':
// // // //             handleCardTiming(currentCardIndex, 'good');
// // // //             handleNext();
// // // //             break;
// // // //           case '4':
// // // //             handleCardTiming(currentCardIndex, 'easy');
// // // //             handleNext();
// // // //             break;
// // // //           case ' ':  // Spacebar
// // // //             handleNext();
// // // //             break;
// // // //           default:
// // // //             break;
// // // //         }
// // // //       }
// // // //     }
// // // //   }, [currentView, showFlashcardAnswer, currentCardIndex, filteredData.length]);

// // // //   // Setup keyboard listeners
// // // //   useEffect(() => {
// // // //     window.addEventListener('keydown', handleKeyPress);
// // // //     return () => {
// // // //       window.removeEventListener('keydown', handleKeyPress);
// // // //     };
// // // //   }, [handleKeyPress]);

// // // //   // Save state to localStorage
// // // //   useEffect(() => {
// // // //     // Save the current state to localStorage
// // // //     const stateToSave = {
// // // //       pinnedCards,
// // // //       cardTimings,
// // // //       visibleAnswers,
// // // //       selectedSubject,
// // // //       currentView
// // // //     };
// // // //     localStorage.setItem('drNoteState', JSON.stringify(stateToSave));
// // // //   }, [pinnedCards, cardTimings, visibleAnswers, selectedSubject, currentView]);

// // // //   // Load state from localStorage on initial mount
// // // //   useEffect(() => {
// // // //     const savedState = localStorage.getItem('drNoteState');
// // // //     if (savedState) {
// // // //       const parsedState = JSON.parse(savedState);
// // // //       setPinnedCards(parsedState.pinnedCards || {});
// // // //       setCardTimings(parsedState.cardTimings || {});
// // // //       setVisibleAnswers(parsedState.visibleAnswers || {});
// // // //       setSelectedSubject(parsedState.selectedSubject || "All");
// // // //       setCurrentView(parsedState.currentView || 'notes');
// // // //     }
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       <Hero
// // // //         totalItems={filteredData.length}
// // // //         currentView={currentView}
// // // //         onViewChange={setCurrentView}
// // // //         searchTerm={searchTerm}
// // // //         setSearchTerm={setSearchTerm}
// // // //         selectedSubject={selectedSubject}
// // // //         setSelectedSubject={setSelectedSubject}
// // // //         subjects={subjects}
// // // //         showPinned={showPinned}
// // // //         setShowPinned={setShowPinned}
// // // //         showUnanswered={showUnanswered}
// // // //         setShowUnanswered={setShowUnanswered}
// // // //         selectedTiming={selectedTiming}
// // // //         setSelectedTiming={setSelectedTiming}
// // // //       />
      
// // // //       <div className="container mx-auto px-4 py-8">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           {currentView === 'notes' && (
// // // //             <ListView
// // // //               filteredData={filteredData}
// // // //               expandedCards={expandedCards}
// // // //               visibleAnswers={visibleAnswers}
// // // //               toggleExpand={toggleExpand}
// // // //               showSingleAnswer={showSingleAnswer}
// // // //               onTimingChange={handleCardTiming}
// // // //               cardTimings={cardTimings}
// // // //               pinnedCards={pinnedCards}
// // // //               togglePin={togglePin}
// // // //             />
// // // //           )}
          
// // // //           {currentView === 'flashcards' && (
// // // //             <FlashcardView
// // // //               data={filteredData}
// // // //               currentIndex={currentCardIndex}
// // // //               showAnswer={showFlashcardAnswer}
// // // //               onShowAnswer={() => setShowFlashcardAnswer(true)}
// // // //               onNext={handleNext}
// // // //               onPrev={handlePrev}
// // // //               onTimingChange={handleCardTiming}
// // // //               cardTimings={cardTimings}
// // // //               pinnedCards={pinnedCards}
// // // //               togglePin={togglePin}
// // // //             />
// // // //           )}

// // // //           {currentView === 'mcq' && (
// // // //             <MCQView
// // // //               data={filteredData}
// // // //               currentIndex={currentCardIndex}
// // // //               onNext={handleNext}
// // // //               onPrev={handlePrev}
// // // //               onTimingChange={handleCardTiming}
// // // //               cardTimings={cardTimings}
// // // //               pinnedCards={pinnedCards}
// // // //               togglePin={togglePin}
// // // //             />
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MedicalInfoCards;
// // // 'use client';

// // // import React, { useState, useEffect, useCallback } from 'react';
// // // import Hero from './hero';
// // // import ListView from './list-view';
// // // import FlashcardView from './flashcard-view';
// // // import MCQView from './mcq-view';
// // // import LibraryView from './library-view';
// // // import { subjects, medicalData } from './data';

// // // const MedicalInfoCards = () => {
// // //   // State management
// // //   const [expandedCards, setExpandedCards] = useState({});
// // //   const [visibleAnswers, setVisibleAnswers] = useState({});
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [selectedSubject, setSelectedSubject] = useState("All");
// // //   const [selectedTiming, setSelectedTiming] = useState("all");
// // //   const [showPinned, setShowPinned] = useState(false);
// // //   const [showUnanswered, setShowUnanswered] = useState(false);
// // //   const [filteredData, setFilteredData] = useState(medicalData);
// // //   const [currentView, setCurrentView] = useState('notes');
// // //   const [currentCardIndex, setCurrentCardIndex] = useState(0);
// // //   const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
// // //   const [cardTimings, setCardTimings] = useState({});
// // //   const [pinnedCards, setPinnedCards] = useState({});

// // //   // Filter data based on all criteria
// // //   useEffect(() => {
// // //     setFilteredData(
// // //       medicalData.filter((item, index) => {
// // //         const matchesSearch = 
// // //           item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           item.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //           (item.mcq?.question.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
        
// // //         const matchesSubject = 
// // //           selectedSubject === "All" || item.subject === selectedSubject;
        
// // //         const matchesTiming = 
// // //           selectedTiming === "all" || cardTimings[index]?.timing === selectedTiming;

// // //         const matchesPinned = 
// // //           !showPinned || pinnedCards[index];

// // //         const matchesUnanswered = 
// // //           !showUnanswered || !visibleAnswers[index];

// // //         return matchesSearch && matchesSubject && matchesTiming && matchesPinned && matchesUnanswered;
// // //       })
// // //     );
// // //     setCurrentCardIndex(0);
// // //   }, [searchTerm, selectedSubject, selectedTiming, showPinned, showUnanswered, pinnedCards, visibleAnswers, cardTimings]);

// // //   // Card management functions
// // //   const togglePin = (index) => {
// // //     setPinnedCards(prev => ({
// // //       ...prev,
// // //       [index]: !prev[index]
// // //     }));
// // //   };

// // //   const toggleExpand = (index) => {
// // //     setExpandedCards(prev => ({
// // //       ...prev,
// // //       [index]: !prev[index]
// // //     }));
// // //   };

// // //   const showSingleAnswer = (index) => {
// // //     setVisibleAnswers(prev => ({
// // //       ...prev,
// // //       [index]: !prev[index]
// // //     }));
// // //   };

// // //   const handleCardTiming = (index, timing) => {
// // //     setCardTimings(prev => ({
// // //       ...prev,
// // //       [index]: {
// // //         timing,
// // //         timestamp: Date.now()
// // //       }
// // //     }));
// // //   };

// // //   // Navigation functions
// // //   const handleNext = () => {
// // //     setCurrentCardIndex(prev => Math.min(filteredData.length - 1, prev + 1));
// // //     setShowFlashcardAnswer(false);
// // //   };

// // //   const handlePrev = () => {
// // //     setCurrentCardIndex(prev => Math.max(0, prev - 1));
// // //     setShowFlashcardAnswer(false);
// // //   };

// // //   // Keyboard navigation
// // //   const handleKeyPress = useCallback((event) => {
// // //     if (currentView !== 'notes') {
// // //       if (!showFlashcardAnswer) {
// // //         setShowFlashcardAnswer(true);
// // //       } else {
// // //         switch (event.key) {
// // //           case 'ArrowLeft':
// // //             handlePrev();
// // //             break;
// // //           case 'ArrowRight':
// // //             handleNext();
// // //             break;
// // //           case '1':
// // //             handleCardTiming(currentCardIndex, 'again');
// // //             handleNext();
// // //             break;
// // //           case '2':
// // //             handleCardTiming(currentCardIndex, 'hard');
// // //             handleNext();
// // //             break;
// // //           case '3':
// // //             handleCardTiming(currentCardIndex, 'good');
// // //             handleNext();
// // //             break;
// // //           case '4':
// // //             handleCardTiming(currentCardIndex, 'easy');
// // //             handleNext();
// // //             break;
// // //           case ' ':
// // //             handleNext();
// // //             break;
// // //           default:
// // //             break;
// // //         }
// // //       }
// // //     }
// // //   }, [currentView, showFlashcardAnswer, currentCardIndex]);

// // //   useEffect(() => {
// // //     window.addEventListener('keydown', handleKeyPress);
// // //     return () => {
// // //       window.removeEventListener('keydown', handleKeyPress);
// // //     };
// // //   }, [handleKeyPress]);

// // //   // Load/Save state from/to localStorage
// // //   useEffect(() => {
// // //     const stateToSave = {
// // //       pinnedCards,
// // //       cardTimings,
// // //       visibleAnswers,
// // //       selectedSubject,
// // //       currentView
// // //     };
// // //     localStorage.setItem('drNoteState', JSON.stringify(stateToSave));
// // //   }, [pinnedCards, cardTimings, visibleAnswers, selectedSubject, currentView]);

// // //   useEffect(() => {
// // //     const savedState = localStorage.getItem('drNoteState');
// // //     if (savedState) {
// // //       const parsedState = JSON.parse(savedState);
// // //       setPinnedCards(parsedState.pinnedCards || {});
// // //       setCardTimings(parsedState.cardTimings || {});
// // //       setVisibleAnswers(parsedState.visibleAnswers || {});
// // //       setSelectedSubject(parsedState.selectedSubject || "All");
// // //       setCurrentView(parsedState.currentView || 'notes');
// // //     }
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <Hero
// // //         totalItems={filteredData.length}
// // //         currentView={currentView}
// // //         onViewChange={setCurrentView}
// // //         searchTerm={searchTerm}
// // //         setSearchTerm={setSearchTerm}
// // //         selectedSubject={selectedSubject}
// // //         setSelectedSubject={setSelectedSubject}
// // //         subjects={subjects}
// // //         showPinned={showPinned}
// // //         setShowPinned={setShowPinned}
// // //         showUnanswered={showUnanswered}
// // //         setShowUnanswered={setShowUnanswered}
// // //         selectedTiming={selectedTiming}
// // //         setSelectedTiming={setSelectedTiming}
// // //       />
      
// // //       <div className="container mx-auto px-4 py-8">
// // //         <div className="max-w-4xl mx-auto">
// // //           {currentView === 'notes' && (
// // //             <ListView
// // //               filteredData={filteredData}
// // //               expandedCards={expandedCards}
// // //               visibleAnswers={visibleAnswers}
// // //               toggleExpand={toggleExpand}
// // //               showSingleAnswer={showSingleAnswer}
// // //               onTimingChange={handleCardTiming}
// // //               cardTimings={cardTimings}
// // //               pinnedCards={pinnedCards}
// // //               togglePin={togglePin}
// // //             />
// // //           )}
          
// // //           {currentView === 'flashcards' && (
// // //             <FlashcardView
// // //               data={filteredData}
// // //               currentIndex={currentCardIndex}
// // //               showAnswer={showFlashcardAnswer}
// // //               onShowAnswer={() => setShowFlashcardAnswer(true)}
// // //               onNext={handleNext}
// // //               onPrev={handlePrev}
// // //               onTimingChange={handleCardTiming}
// // //               cardTimings={cardTimings}
// // //               pinnedCards={pinnedCards}
// // //               togglePin={togglePin}
// // //             />
// // //           )}

// // //           {currentView === 'mcq' && (
// // //             <MCQView
// // //               data={filteredData}
// // //               currentIndex={currentCardIndex}
// // //               onNext={handleNext}
// // //               onPrev={handlePrev}
// // //               onTimingChange={handleCardTiming}
// // //               cardTimings={cardTimings}
// // //               pinnedCards={pinnedCards}
// // //               togglePin={togglePin}
// // //             />
// // //           )}

// // //           {currentView === 'library' && (
// // //             <LibraryView
// // //               data={filteredData}
// // //               pinnedCards={pinnedCards}
// // //               togglePin={togglePin}
// // //               onCardClick={(index) => {
// // //                 setCurrentCardIndex(index);
// // //                 setCurrentView('notes');
// // //                 toggleExpand(index);
// // //                 showSingleAnswer(index);
// // //               }}
// // //             />
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MedicalInfoCards;
// // 'use client';

// // import React, { useState } from 'react';
// // import ListView from './list-view';

// // // Sample medical data - replace with your actual data
// // const medicalData = [
// //   {
// //     pathogen: "Haemophilus influenzae (B)",
// //     treatment: "Amoxicillin ± clavulanate (mucosal infections), ceftriaxone (meningitis), rifampin (prophylaxis)",
// //     subject: "Bacterial Infections"
// //   },
// //   {
// //     pathogen: "Neisseria gonorrhoeae",
// //     treatment: "Ceftriaxone (add doxycycline to cover likely concurrent C trachomatis)",
// //     subject: "Bacterial Infections"
// //   }
// // ];

// // const MedicalInfoCards = () => {
// //   const [visibleAnswers, setVisibleAnswers] = useState({});
// //   const [filteredData, setFilteredData] = useState(medicalData);

// //   const showSingleAnswer = (index) => {
// //     setVisibleAnswers(prev => ({
// //       ...prev,
// //       [index]: !prev[index]
// //     }));
// //   };

// //   const handleShowAll = () => {
// //     const allAnswers = {};
// //     filteredData.forEach((_, index) => {
// //       allAnswers[index] = true;
// //     });
// //     setVisibleAnswers(allAnswers);
// //   };

// //   const handleHideAll = () => {
// //     setVisibleAnswers({});
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="flex justify-end gap-4 mb-4">
// //           <button
// //             onClick={handleShowAll}
// //             className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
// //           >
// //             Show All
// //           </button>
// //           <button
// //             onClick={handleHideAll}
// //             className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
// //           >
// //             Hide All
// //           </button>
// //         </div>
        
// //         <ListView
// //           filteredData={filteredData}
// //           visibleAnswers={visibleAnswers}
// //           showSingleAnswer={showSingleAnswer}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default MedicalInfoCards;
// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Hero from './hero';
// import ListView from './list-view';
// import FlashcardView from './flashcard-view';
// import MCQView from './mcq-view';
// import LibraryView from './library-view';
// import { subjects, medicalData } from './data';

// const MedicalInfoCards = () => {
//   // State management
//   const [visibleAnswers, setVisibleAnswers] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedSubject, setSelectedSubject] = useState("All");
//   const [selectedTiming, setSelectedTiming] = useState("all");
//   const [showPinned, setShowPinned] = useState(false);
//   const [showUnanswered, setShowUnanswered] = useState(false);
//   const [filteredData, setFilteredData] = useState(medicalData);
//   const [currentView, setCurrentView] = useState('notes');
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
//   const [cardTimings, setCardTimings] = useState({});
//   const [pinnedCards, setPinnedCards] = useState({});

//   // Show/Hide all answers functions
//   const handleShowAll = () => {
//     const allAnswers = {};
//     filteredData.forEach((_, index) => {
//       allAnswers[index] = true;
//     });
//     setVisibleAnswers(allAnswers);
//   };

//   const handleHideAll = () => {
//     setVisibleAnswers({});
//   };

//   // Filter data based on all criteria
//   useEffect(() => {
//     setFilteredData(
//       medicalData.filter((item, index) => {
//         const matchesSearch = 
//           item.pathogen.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           item.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           (item.mcq?.question.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
        
//         const matchesSubject = 
//           selectedSubject === "All" || item.subject === selectedSubject;
        
//         const matchesTiming = 
//           selectedTiming === "all" || cardTimings[index]?.timing === selectedTiming;

//         const matchesPinned = 
//           !showPinned || pinnedCards[index];

//         const matchesUnanswered = 
//           !showUnanswered || !visibleAnswers[index];

//         return matchesSearch && matchesSubject && matchesTiming && matchesPinned && matchesUnanswered;
//       })
//     );
//     setCurrentCardIndex(0);
//   }, [searchTerm, selectedSubject, selectedTiming, showPinned, showUnanswered, pinnedCards, visibleAnswers, cardTimings]);

//   // Card management functions
//   const togglePin = (index) => {
//     setPinnedCards(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const showSingleAnswer = (index) => {
//     setVisibleAnswers(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const handleCardTiming = (index, timing) => {
//     setCardTimings(prev => ({
//       ...prev,
//       [index]: {
//         timing,
//         timestamp: Date.now()
//       }
//     }));
//   };

//   // Navigation functions
//   const handleNext = () => {
//     setCurrentCardIndex(prev => Math.min(filteredData.length - 1, prev + 1));
//     setShowFlashcardAnswer(false);
//   };

//   const handlePrev = () => {
//     setCurrentCardIndex(prev => Math.max(0, prev - 1));
//     setShowFlashcardAnswer(false);
//   };

//   // Load/Save state from/to localStorage
//   useEffect(() => {
//     const stateToSave = {
//       pinnedCards,
//       cardTimings,
//       visibleAnswers,
//       selectedSubject,
//       currentView
//     };
//     localStorage.setItem('drNoteState', JSON.stringify(stateToSave));
//   }, [pinnedCards, cardTimings, visibleAnswers, selectedSubject, currentView]);

//   useEffect(() => {
//     const savedState = localStorage.getItem('drNoteState');
//     if (savedState) {
//       const parsedState = JSON.parse(savedState);
//       setPinnedCards(parsedState.pinnedCards || {});
//       setCardTimings(parsedState.cardTimings || {});
//       setVisibleAnswers(parsedState.visibleAnswers || {});
//       setSelectedSubject(parsedState.selectedSubject || "All");
//       setCurrentView(parsedState.currentView || 'notes');
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Hero
//         totalItems={filteredData.length}
//         currentView={currentView}
//         onViewChange={setCurrentView}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         selectedSubject={selectedSubject}
//         setSelectedSubject={setSelectedSubject}
//         subjects={subjects}
//         showPinned={showPinned}
//         setShowPinned={setShowPinned}
//         showUnanswered={showUnanswered}
//         setShowUnanswered={setShowUnanswered}
//         selectedTiming={selectedTiming}
//         setSelectedTiming={setSelectedTiming}
//       />
      
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           {currentView === 'notes' && (
//             <>
//               <div className="flex justify-end gap-4 mb-4">
//                 <button
//                   onClick={handleShowAll}
//                   className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
//                 >
//                   Show All
//                 </button>
//                 <button
//                   onClick={handleHideAll}
//                   className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
//                 >
//                   Hide All
//                 </button>
//               </div>
//               <ListView
//                 filteredData={filteredData}
//                 visibleAnswers={visibleAnswers}
//                 showSingleAnswer={showSingleAnswer}
//                 pinnedCards={pinnedCards}
//                 togglePin={togglePin}
//                 onTimingChange={handleCardTiming}
//                 cardTimings={cardTimings}
//               />
//             </>
//           )}
          
//           {currentView === 'flashcards' && (
//             <FlashcardView
//               data={filteredData}
//               currentIndex={currentCardIndex}
//               showAnswer={showFlashcardAnswer}
//               onShowAnswer={() => setShowFlashcardAnswer(true)}
//               onNext={handleNext}
//               onPrev={handlePrev}
//               onTimingChange={handleCardTiming}
//               cardTimings={cardTimings}
//               pinnedCards={pinnedCards}
//               togglePin={togglePin}
//             />
//           )}

//           {currentView === 'mcq' && (
//             <MCQView
//               data={filteredData}
//               currentIndex={currentCardIndex}
//               onNext={handleNext}
//               onPrev={handlePrev}
//               onTimingChange={handleCardTiming}
//               cardTimings={cardTimings}
//               pinnedCards={pinnedCards}
//               togglePin={togglePin}
//             />
//           )}

//           {currentView === 'library' && (
//             <LibraryView
//               data={filteredData}
//               pinnedCards={pinnedCards}
//               togglePin={togglePin}
//               onCardClick={(index) => {
//                 setCurrentCardIndex(index);
//                 setCurrentView('notes');
//                 showSingleAnswer(index);
//               }}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalInfoCards;