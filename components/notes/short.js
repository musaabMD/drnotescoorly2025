// // // // // // // 'use client'

// // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react'
// // // // // // // import DetailedContent from './detailed'

// // // // // // // export const CardHeader = ({ pathogen, shortAnswer, showAnswer, isExpanded, onClick }) => {
// // // // // // //   return (
// // // // // // //     <div className="flex flex-col sm:flex-row items-stretch cursor-pointer" onClick={onClick}>
// // // // // // //       <div className="w-full sm:w-1/2 bg-blue-100 p-4">
// // // // // // //         <p className="text-gray-800 font-medium break-words">{pathogen}</p>
// // // // // // //       </div>
// // // // // // //       <div className="w-full sm:w-1/2 bg-white p-4 flex justify-between items-center">
// // // // // // //         <div className="flex-1 mr-4">
// // // // // // //           {showAnswer ? (
// // // // // // //             <p className="text-gray-700 break-words">{shortAnswer}</p>
// // // // // // //           ) : (
// // // // // // //             <p className="text-gray-400 italic">Click to show answer</p>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //         {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // const MedicalCard = ({ pathogen, treatment, isExpanded, showAnswer, toggleExpand, onCardClick }) => {
// // // // // // //   const shortAnswer = treatment.split(',')[0]

// // // // // // //   const handleClick = () => {
// // // // // // //     if (isExpanded) {
// // // // // // //       toggleExpand()
// // // // // // //     } else {
// // // // // // //       onCardClick()
// // // // // // //       toggleExpand()
// // // // // // //     }
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden mb-4 shadow-sm">
// // // // // // //       <CardHeader
// // // // // // //         pathogen={pathogen}
// // // // // // //         shortAnswer={shortAnswer}
// // // // // // //         showAnswer={showAnswer}
// // // // // // //         isExpanded={isExpanded}
// // // // // // //         onClick={handleClick}
// // // // // // //       />
// // // // // // //       {isExpanded && <DetailedContent treatment={treatment} />}
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default MedicalCard
// // // // // // 'use client'
// // // // // // import { ChevronDown, ChevronUp } from 'lucide-react'
// // // // // // import DetailedContent from './detailed'

// // // // // // export const CardHeader = ({ 
// // // // // //   pathogen, 
// // // // // //   shortAnswer, 
// // // // // //   showAnswer, 
// // // // // //   isExpanded, 
// // // // // //   onAnswerClick, 
// // // // // //   onExpandClick,
// // // // // //   onArrowClick 
// // // // // // }) => {
// // // // // //   return (
// // // // // //     <div 
// // // // // //       className="flex flex-col sm:flex-row items-stretch"
// // // // // //       onDoubleClick={onExpandClick}
// // // // // //     >
// // // // // //       <div 
// // // // // //         className="w-full sm:w-1/2 bg-blue-100 p-4 cursor-pointer"
// // // // // //         onClick={onAnswerClick}
// // // // // //       >
// // // // // //         <p className="text-gray-800 font-medium break-words">{pathogen}</p>
// // // // // //       </div>
// // // // // //       <div 
// // // // // //         className="w-full sm:w-1/2 bg-white p-4 flex justify-between items-center"
// // // // // //       >
// // // // // //         <div 
// // // // // //           className="flex-1 mr-4 cursor-pointer"
// // // // // //           onClick={onAnswerClick}
// // // // // //         >
// // // // // //           {showAnswer ? (
// // // // // //             <p className="text-gray-700 break-words">{shortAnswer}</p>
// // // // // //           ) : (
// // // // // //             <p className="text-gray-400 italic">Click to show answer</p>
// // // // // //           )}
// // // // // //         </div>
// // // // // //         <div 
// // // // // //           className="cursor-pointer p-1 hover:bg-gray-100 rounded"
// // // // // //           onClick={onArrowClick}
// // // // // //         >
// // // // // //           {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // const MedicalCard = ({ pathogen, treatment, isExpanded, showAnswer, toggleExpand, onCardClick }) => {
// // // // // //   const shortAnswer = treatment.split(',')[0]

// // // // // //   const handleAnswerClick = (e) => {
// // // // // //     e.stopPropagation()
// // // // // //     onCardClick()
// // // // // //   }

// // // // // //   const handleExpandClick = (e) => {
// // // // // //     e.stopPropagation()
// // // // // //     toggleExpand()
// // // // // //   }

// // // // // //   const handleArrowClick = (e) => {
// // // // // //     e.stopPropagation()
// // // // // //     toggleExpand()
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden mb-4 shadow-sm">
// // // // // //       <CardHeader
// // // // // //         pathogen={pathogen}
// // // // // //         shortAnswer={shortAnswer}
// // // // // //         showAnswer={showAnswer}
// // // // // //         isExpanded={isExpanded}
// // // // // //         onAnswerClick={handleAnswerClick}
// // // // // //         onExpandClick={handleExpandClick}
// // // // // //         onArrowClick={handleArrowClick}
// // // // // //       />
// // // // // //       {isExpanded && <DetailedContent treatment={treatment} />}
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default MedicalCard

// // // // // 'use client'
// // // // // import { ChevronDown, ChevronUp, Pin } from 'lucide-react'
// // // // // import DetailedContent from './detailed'
// // // // // import { useState } from 'react'

// // // // // export const CardHeader = ({ 
// // // // //   pathogen, 
// // // // //   shortAnswer, 
// // // // //   showAnswer, 
// // // // //   isExpanded, 
// // // // //   onAnswerClick, 
// // // // //   onExpandClick,
// // // // //   onArrowClick,
// // // // //   isPinned,
// // // // //   onPinClick
// // // // // }) => {
// // // // //   return (
// // // // //     <div 
// // // // //       className="flex flex-col sm:flex-row items-stretch"
// // // // //       onDoubleClick={onExpandClick}
// // // // //     >
// // // // //       <div 
// // // // //         className="w-full sm:w-1/2 bg-blue-100 p-4 cursor-pointer"
// // // // //         onClick={onAnswerClick}
// // // // //       >
// // // // //         <p className="text-gray-800 font-medium break-words">{pathogen}</p>
// // // // //       </div>
// // // // //       <div 
// // // // //         className="w-full sm:w-1/2 bg-white p-4 flex justify-between items-center"
// // // // //       >
// // // // //         <div 
// // // // //           className="flex-1 mr-4 cursor-pointer"
// // // // //           onClick={onAnswerClick}
// // // // //         >
// // // // //           {showAnswer ? (
// // // // //             <p className="text-gray-700 break-words">{shortAnswer}</p>
// // // // //           ) : (
// // // // //             <p className="text-gray-400 italic">Click to show answer</p>
// // // // //           )}
// // // // //         </div>
// // // // //         <div className="flex items-center gap-2">
// // // // //           <button 
// // // // //             className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
// // // // //             onClick={onPinClick}
// // // // //           >
// // // // //             <Pin 
// // // // //               size={20} 
// // // // //               className={`transition-colors ${isPinned ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
// // // // //             />
// // // // //           </button>
// // // // //           <button 
// // // // //             className="cursor-pointer p-1 hover:bg-gray-100 rounded"
// // // // //             onClick={onArrowClick}
// // // // //           >
// // // // //             {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // const MedicalCard = ({ pathogen, treatment, isExpanded, showAnswer, toggleExpand, onCardClick }) => {
// // // // //   const shortAnswer = treatment.split(',')[0]
// // // // //   const [isPinned, setIsPinned] = useState(false)

// // // // //   const handleAnswerClick = (e) => {
// // // // //     e.stopPropagation()
// // // // //     onCardClick()
// // // // //   }

// // // // //   const handleExpandClick = (e) => {
// // // // //     e.stopPropagation()
// // // // //     if (!isPinned) {
// // // // //       toggleExpand()
// // // // //     }
// // // // //   }

// // // // //   const handleArrowClick = (e) => {
// // // // //     e.stopPropagation()
// // // // //     if (!isPinned) {
// // // // //       toggleExpand()
// // // // //     }
// // // // //   }

// // // // //   const handlePinClick = (e) => {
// // // // //     e.stopPropagation()
// // // // //     setIsPinned(!isPinned)
// // // // //   }

// // // // //   return (
// // // // //     <div className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden mb-4 shadow-sm">
// // // // //       <CardHeader
// // // // //         pathogen={pathogen}
// // // // //         shortAnswer={shortAnswer}
// // // // //         showAnswer={showAnswer}
// // // // //         isExpanded={isExpanded}
// // // // //         onAnswerClick={handleAnswerClick}
// // // // //         onExpandClick={handleExpandClick}
// // // // //         onArrowClick={handleArrowClick}
// // // // //         isPinned={isPinned}
// // // // //         onPinClick={handlePinClick}
// // // // //       />
// // // // //       {isExpanded && (
// // // // //         <div onDoubleClick={(e) => {
// // // // //           e.stopPropagation()
// // // // //           if (!isPinned) {
// // // // //             toggleExpand()
// // // // //           }
// // // // //         }}>
// // // // //           <DetailedContent treatment={treatment} />
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default MedicalCard
// // // // 'use client'
// // // // import { ChevronDown, ChevronUp, Pin } from 'lucide-react'
// // // // import DetailedContent from './detailed'
// // // // import { useState } from 'react'

// // // // export const CardHeader = ({ 
// // // //   pathogen, 
// // // //   shortAnswer, 
// // // //   isExpanded, 
// // // //   onCardClick,
// // // //   isPinned,
// // // //   onPinClick
// // // // }) => {
// // // //   return (
// // // //     <div className="flex flex-col sm:flex-row items-stretch">
// // // //       <div 
// // // //         className="w-full sm:w-1/2 bg-blue-100 p-4 cursor-pointer"
// // // //         onClick={onCardClick}
// // // //       >
// // // //         <p className="text-gray-800 font-medium break-words">{pathogen}</p>
// // // //       </div>
// // // //       <div className="w-full sm:w-1/2 bg-white p-4 flex justify-between items-center">
// // // //         <div 
// // // //           className="flex-1 mr-4 cursor-pointer"
// // // //           onClick={onCardClick}
// // // //         >
// // // //           {isExpanded ? (
// // // //             <p className="text-gray-700 break-words">{shortAnswer}</p>
// // // //           ) : (
// // // //             <p className="text-gray-400 italic">Click to show details</p>
// // // //           )}
// // // //         </div>
// // // //         <div className="flex items-center gap-2">
// // // //           <button 
// // // //             className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
// // // //             onClick={(e) => {
// // // //               e.stopPropagation()
// // // //               onPinClick()
// // // //             }}
// // // //           >
// // // //             <Pin 
// // // //               size={20} 
// // // //               className={`transition-colors ${isPinned ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
// // // //             />
// // // //           </button>
// // // //           {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // const MedicalCard = ({ pathogen, treatment, isExpanded, toggleExpand }) => {
// // // //   const shortAnswer = treatment.split(',')[0]
// // // //   const [isPinned, setIsPinned] = useState(false)

// // // //   const handleCardClick = (e) => {
// // // //     e.stopPropagation()
// // // //     if (!isPinned) {
// // // //       toggleExpand()
// // // //     }
// // // //   }

// // // //   const handlePinClick = () => {
// // // //     setIsPinned(!isPinned)
// // // //   }

// // // //   return (
// // // //     <div className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden mb-4 shadow-sm">
// // // //       <CardHeader
// // // //         pathogen={pathogen}
// // // //         shortAnswer={shortAnswer}
// // // //         isExpanded={isExpanded}
// // // //         onCardClick={handleCardClick}
// // // //         isPinned={isPinned}
// // // //         onPinClick={handlePinClick}
// // // //       />
// // // //       {isExpanded && (
// // // //         <div onClick={handleCardClick}>
// // // //           <DetailedContent treatment={treatment} />
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   )
// // // // }

// // // // export default MedicalCard
// // // 'use client'
// // // import { ChevronDown, ChevronUp, Pin } from 'lucide-react'
// // // import DetailedContent from './detailed'
// // // import { useState } from 'react'

// // // export const CardHeader = ({ 
// // //   pathogen, 
// // //   shortAnswer, 
// // //   isExpanded, 
// // //   showAnswer,
// // //   onCardClick,
// // //   isPinned,
// // //   onPinClick,
// // //   toggleExpand
// // // }) => {
// // //   return (
// // //     <div 
// // //       className="flex flex-col sm:flex-row items-stretch"
// // //       onDoubleClick={() => {
// // //         if (!isPinned) {
// // //           toggleExpand()
// // //         }
// // //       }}
// // //     >
// // //       <div 
// // //         className="w-full sm:w-1/2 bg-blue-100 p-4 cursor-pointer"
// // //         onClick={() => {
// // //           if (!isPinned) {
// // //             onCardClick()
// // //           }
// // //         }}
// // //       >
// // //         <p className="text-gray-800 font-medium break-words">{pathogen}</p>
// // //       </div>
// // //       <div className="w-full sm:w-1/2 bg-white p-4 flex justify-between items-center">
// // //         <div 
// // //           className="flex-1 mr-4 cursor-pointer"
// // //           onClick={() => {
// // //             if (!isPinned) {
// // //               onCardClick()
// // //             }
// // //           }}
// // //         >
// // //           {showAnswer ? (
// // //             <p className="text-gray-700 break-words">{shortAnswer}</p>
// // //           ) : (
// // //             <p className="text-gray-400 italic">Click to show answer</p>
// // //           )}
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <button 
// // //             className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
// // //             onClick={(e) => {
// // //               e.preventDefault()
// // //               onPinClick()
// // //             }}
// // //           >
// // //             <Pin 
// // //               size={20} 
// // //               className={`transition-colors ${isPinned ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
// // //             />
// // //           </button>
// // //           <button 
// // //             className="cursor-pointer p-1 hover:bg-gray-100 rounded"
// // //             onClick={(e) => {
// // //               e.preventDefault()
// // //               if (!isPinned) {
// // //                 toggleExpand()
// // //               }
// // //             }}
// // //           >
// // //             {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // const MedicalCard = ({ pathogen, treatment, isExpanded, showAnswer, toggleExpand, onCardClick }) => {
// // //   const shortAnswer = treatment.split(',')[0]
// // //   const [isPinned, setIsPinned] = useState(false)

// // //   const handlePinClick = () => {
// // //     setIsPinned(!isPinned)
// // //   }

// // //   return (
// // //     <div className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden mb-4 shadow-sm">
// // //       <CardHeader
// // //         pathogen={pathogen}
// // //         shortAnswer={shortAnswer}
// // //         isExpanded={isExpanded}
// // //         showAnswer={showAnswer}
// // //         onCardClick={onCardClick}
// // //         isPinned={isPinned}
// // //         onPinClick={handlePinClick}
// // //         toggleExpand={toggleExpand}
// // //       />
// // //       {isExpanded && (
// // //         <div 
// // //           onClick={() => {
// // //             if (!isPinned) {
// // //               onCardClick()
// // //             }
// // //           }}
// // //         >
// // //           <DetailedContent treatment={treatment} />
// // //         </div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // export default MedicalCard
// // 'use client';

// // import React from 'react';

// // const MedicalCard = ({ 
// //   pathogen, 
// //   treatment, 
// //   showAnswer,
// //   onCardClick
// // }) => {
// //   const shortAnswer = treatment.split(',')[0];

// //   return (
// //     <div 
// //       className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden shadow-sm cursor-pointer"
// //       onClick={onCardClick}
// //     >
// //       <div className="flex flex-col sm:flex-row items-stretch">
// //         <div className="w-full sm:w-1/2 bg-blue-100 p-4">
// //           <p className="text-gray-800 font-medium break-words">{pathogen}</p>
// //         </div>
// //         <div className="w-full sm:w-1/2 bg-white p-4">
// //           <div className="flex-1">
// //             {showAnswer ? (
// //               <p className="text-gray-700 break-words">{treatment}</p>
// //             ) : (
// //               <p className="text-gray-400 italic">Click to show answer</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MedicalCard;
// import React, { useState } from 'react';
// import { ThumbsUp, ThumbsDown } from 'lucide-react';

// const MedicalCard = ({ 
//   pathogen, 
//   treatment, 
//   showAnswer,
//   onCardClick,
//   onEvaluate
// }) => {
//   const [evaluation, setEvaluation] = useState(null);

//   const handleClick = (e) => {
//     e.preventDefault();
//     onCardClick();
//   };

//   const handleEvaluate = (value, e) => {
//     e.stopPropagation();
//     setEvaluation(value);
//     if (onEvaluate) {
//       onEvaluate({ pathogen, evaluation: value });
//     }
//   };

//   return (
//     <div 
//       className="w-full hover:bg-gray-50 transition-colors border rounded-lg overflow-hidden shadow-md mb-6 cursor-pointer"
//       onClick={handleClick}
//     >
//       <div className="flex flex-col sm:flex-row items-stretch">
//         <div className="w-full sm:w-1/3 bg-blue-100 p-4">
//           <h3 className="text-lg font-semibold text-gray-800 break-words">
//             {pathogen}
//           </h3>
//         </div>
        
//         <div className="w-full sm:w-2/3 bg-white p-4">
//           <div className="flex flex-col justify-between h-full">
//             {showAnswer ? (
//               <>
//                 <p className="text-gray-700 whitespace-pre-line mb-4">
//                   {treatment}
//                 </p>
//                 <div className="flex items-center gap-2 border-t pt-3 mt-auto">
//                   <button 
//                     onClick={(e) => handleEvaluate('correct', e)}
//                     className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all
//                       ${evaluation === 'correct' 
//                         ? 'bg-green-100 text-green-700' 
//                         : 'hover:bg-gray-100 text-gray-600'}`}
//                   >
//                     <ThumbsUp size={16} />
//                     <span className="text-sm font-medium">Got it</span>
//                   </button>
                  
//                   <button 
//                     onClick={(e) => handleEvaluate('incorrect', e)}
//                     className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all
//                       ${evaluation === 'incorrect' 
//                         ? 'bg-red-100 text-red-700' 
//                         : 'hover:bg-gray-100 text-gray-600'}`}
//                   >
//                     <ThumbsDown size={16} />
//                     <span className="text-sm font-medium">Review</span>
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div className="flex items-center h-full">
//                 <p className="text-gray-400">Click to reveal answer</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalCard;