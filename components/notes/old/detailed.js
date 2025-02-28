// // 'use client'

// // import { useState } from 'react'

// // const DetailedContent = ({ treatment }) => {
// //   const [showAnswer, setShowAnswer] = useState(false)
// //   const [selectedAnswer, setSelectedAnswer] = useState(null)

// //   const mcqChoices = [
// //     {
// //       id: 'A',
// //       text: 'Ampicillin + Cefotaxime',
// //       isCorrect: true
// //     },
// //     {
// //       id: 'B',
// //       text: 'Gentamicin alone',
// //       isCorrect: false
// //     },
// //     {
// //       id: 'C',
// //       text: 'Ceftriaxone alone',
// //       isCorrect: false
// //     },
// //     {
// //       id: 'D',
// //       text: 'Vancomycin alone',
// //       isCorrect: false
// //     }
// //   ]

// //   const handleAnswerClick = (id) => {
// //     setSelectedAnswer(id)
// //     setShowAnswer(true)
// //   }

// //   return (
// //     <div className="w-full bg-white p-4 sm:p-6 border-t">
// //       <div className="space-y-6">
// //         {/* MCQ Question Section */}
// //         <div>
// //           <h4 className="font-medium text-gray-700 mb-4">Question:</h4>
// //           <p className="text-gray-600 mb-4">A 2-week-old neonate presents with fever and irritability. The lumbar puncture reveals Gram-positive diplococci. What is the most appropriate initial antibiotic regimen?</p>
          
// //           <div className="space-y-2">
// //             {mcqChoices.map((choice) => (
// //               <button
// //                 key={choice.id}
// //                 onClick={() => handleAnswerClick(choice.id)}
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
// //         </div>

// //         {/* Show Explanation only after answering */}
// //         {showAnswer && (
// //           <div className="mt-4">
// //             <h4 className="font-medium text-gray-700 mb-2">Explanation:</h4>
// //             <p className="text-gray-600 mb-4">
// //               In neonatal meningitis with Gram-positive diplococci, empiric treatment with Ampicillin + 
// //               Cefotaxime is recommended due to the likely presence of Streptococcus pneumoniae or 
// //               Group B Streptococcus. This combination provides broad coverage while culture results are pending.
// //             </p>
// //           </div>
// //         )}

// //         {/* Key Points Section */}
// //         <div>
// //           <h4 className="font-medium text-gray-700 mb-2">Key Points:</h4>
// //           <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-6">
// //             <li>First-line treatment option</li>
// //             <li>Monitor patient response carefully</li>
// //             <li>Consider local resistance patterns</li>
// //             <li>Check for contraindications and drug interactions</li>
// //           </ul>
// //         </div>

// //         {/* Centered Review Buttons */}
// //         <div className="flex justify-center">
// //           <div className="flex flex-wrap gap-2 justify-center max-w-xl">
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
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// // export default DetailedContent


// 'use client'

// import { useState } from 'react'

// const DetailedContent = ({ mcqData }) => {
//   const [showAnswer, setShowAnswer] = useState(false)
//   const [selectedAnswer, setSelectedAnswer] = useState(null)

//   const handleAnswerClick = (id) => {
//     setSelectedAnswer(id)
//     setShowAnswer(true)
//   }

//   // Return null if mcqData is not provided
//   if (!mcqData) {
//     return null
//   }

//   return (
//     <div className="w-full bg-white p-4 sm:p-6 border-t">
//       <div className="space-y-6">
//         {/* MCQ Question Section */}
//         <div>
//           <h4 className="font-medium text-gray-700 mb-4">Question:</h4>
//           <p className="text-gray-600 mb-4">{mcqData.question}</p>
          
//           <div className="space-y-2">
//             {mcqData.choices.map((choice) => (
//               <button
//                 key={choice.id}
//                 onClick={() => handleAnswerClick(choice.id)}
//                 className={`w-full p-3 rounded-lg border text-left transition-colors
//                   ${selectedAnswer === choice.id && choice.isCorrect && showAnswer ? 'bg-green-100 border-green-500' : ''}
//                   ${selectedAnswer === choice.id && !choice.isCorrect && showAnswer ? 'bg-red-100 border-red-500' : ''}
//                   ${selectedAnswer !== choice.id && choice.isCorrect && showAnswer ? 'bg-green-50 border-green-500' : ''}
//                   ${!showAnswer ? 'hover:bg-gray-50' : ''}
//                 `}
//               >
//                 <div className="flex items-start">
//                   <span className="min-w-[25px]">{choice.id}.</span>
//                   <span>{choice.text}</span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Show Explanation only after answering */}
//         {showAnswer && (
//           <div className="mt-4">
//             <h4 className="font-medium text-gray-700 mb-2">Explanation:</h4>
//             <p className="text-gray-600 mb-4">{mcqData.explanation}</p>
//           </div>
//         )}

//         {/* Key Points Section */}
//         <div>
//           <h4 className="font-medium text-gray-700 mb-2">Key Points:</h4>
//           <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-6">
//             {mcqData.keyPoints.map((point, index) => (
//               <li key={index}>{point}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Centered Review Buttons */}
//         <div className="flex justify-center">
//           <div className="flex flex-wrap gap-2 justify-center max-w-xl">
//             <button className="px-6 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
//               Again <span className="text-sm">25m</span>
//             </button>
//             <button className="px-6 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
//               Hard <span className="text-sm">12h</span>
//             </button>
//             <button className="px-6 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
//               Good <span className="text-sm">1d</span>
//             </button>
//             <button className="px-6 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
//               Easy <span className="text-sm">4d</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DetailedContent