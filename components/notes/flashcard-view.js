// 'use client';

// import React from 'react';

// const FlashcardView = ({ 
//   data, 
//   currentIndex, 
//   showAnswer, 
//   onShowAnswer, 
//   onNext, 
//   onPrev 
// }) => {
//   const currentCard = data[currentIndex];
  
//   if (!currentCard) return null;

//   return (
//     <div className="max-w-3xl mx-auto">
//       <div 
//         className="bg-white border rounded-lg shadow-sm p-6 min-h-[400px] cursor-pointer"
//         onClick={onShowAnswer}
//       >
//         <div className="mb-4 text-sm text-gray-500">
//           {currentIndex + 1} / {data.length}
//         </div>
        
//         <div className="space-y-6">
//           <h3 className="text-xl font-medium text-gray-900">
//             {currentCard.mcq.question}
//           </h3>

//           {showAnswer && (
//             <div className="space-y-6 mt-8">
//               <div>
//                 <h4 className="font-medium text-gray-700 mb-2">Answer:</h4>
//                 <p className="text-gray-600">
//                   {currentCard.treatment}
//                 </p>
//               </div>
              
//               <div>
//                 <h4 className="font-medium text-gray-700 mb-2">Explanation:</h4>
//                 <p className="text-gray-600">
//                   {currentCard.mcq.explanation}
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-medium text-gray-700 mb-2">Key Points:</h4>
//                 <ul className="list-disc pl-6 space-y-1 text-gray-600">
//                   {currentCard.mcq.keyPoints.map((point, index) => (
//                     <li key={index}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex justify-center mt-6 gap-4">
//         <button
//           onClick={onPrev}
//           className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
//           disabled={currentIndex === 0}
//         >
//           Previous
//         </button>
//         <div className="flex gap-2">
//           <button className="px-6 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
//             Again <span className="text-sm">25m</span>
//           </button>
//           <button className="px-6 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
//             Hard <span className="text-sm">12h</span>
//           </button>
//           <button className="px-6 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
//             Good <span className="text-sm">1d</span>
//           </button>
//           <button className="px-6 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
//             Easy <span className="text-sm">4d</span>
//           </button>
//         </div>
//         <button
//           onClick={onNext}
//           className="px-6 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
//           disabled={currentIndex === data.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FlashcardView;
'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const FlashcardView = ({ examId }) => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        setLoading(true);
        
        // First get the exam ID from slug
        const { data: examData, error: examError } = await supabase
          .from('exams')
          .select('id')
          .eq('slug', examId)
          .single();
          
        if (examError) throw examError;

        // Then fetch flashcards for this exam
        const { data, error } = await supabase
          .from('flashcards')
          .select('*')
          .eq('exam_id', examData.id)
          .order('created_at');

        if (error) throw error;

        setCards(data || []);
      } catch (err) {
        console.error('Error fetching flashcards:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, [examId]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="h-[400px] flex items-center justify-center">
            <div className="animate-spin">
              <RotateCw className="h-8 w-8 text-gray-400" />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-4">😕</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Flashcards</h3>
          <p className="text-gray-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  if (cards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-4">📚</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Flashcards Available</h3>
          <p className="text-gray-500">There are no flashcards available for this exam yet.</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Card {currentIndex + 1} of {cards.length}
          </div>
          <div className="text-sm text-gray-500">
            {Math.round((currentIndex + 1) / cards.length * 100)}% Complete
          </div>
        </div>

        {/* Flashcard */}
        <Card
          className="min-h-[400px] cursor-pointer perspective-1000 transition-transform duration-500"
          onClick={handleFlip}
        >
          <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'hidden' : 'block'}`}>
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium">{currentCard.front}</h3>
                  <p className="text-sm text-gray-500 mt-4">Click to reveal answer</p>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'block' : 'hidden'}`}>
              <div className="flex items-center justify-center h-full p-8">
                <div className="text-center">
                  <p className="text-lg">{currentCard.back}</p>
                  <p className="text-sm text-gray-500 mt-4">Click to flip back</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardView;