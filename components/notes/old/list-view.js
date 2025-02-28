// // // // // 'use client';

// // // // // import React from 'react';
// // // // // import MedicalCard from './short';
// // // // // import DetailedContent from './detailed';

// // // // // const ListView = ({ 
// // // // //   filteredData, 
// // // // //   expandedCards, 
// // // // //   visibleAnswers, 
// // // // //   toggleExpand, 
// // // // //   showSingleAnswer 
// // // // // }) => (
// // // // //   <div className="space-y-4">
// // // // //     {filteredData.map((item, index) => (
// // // // //       <div key={index} className="space-y-2">
// // // // //         <MedicalCard
// // // // //           pathogen={item.pathogen}
// // // // //           treatment={item.treatment}
// // // // //           isExpanded={expandedCards[index] || false}
// // // // //           showAnswer={visibleAnswers[index] || false}
// // // // //           toggleExpand={() => toggleExpand(index)}
// // // // //           onCardClick={() => showSingleAnswer(index)}
// // // // //         />
// // // // //         {expandedCards[index] && item.mcq && (
// // // // //           <DetailedContent
// // // // //             mcqData={item.mcq}
// // // // //             showAnswer={visibleAnswers[index]}
// // // // //           />
// // // // //         )}
// // // // //       </div>
// // // // //     ))}
// // // // //   </div>
// // // // // );

// // // // // export default ListView;
// // // // 'use client';

// // // // import React from 'react';
// // // // import MedicalCard from './short';

// // // // const ListView = ({
// // // //   filteredData,
// // // //   expandedCards,
// // // //   visibleAnswers,
// // // //   toggleExpand,
// // // //   showSingleAnswer
// // // // }) => {
// // // //   return (
// // // //     <div className="space-y-4">
// // // //       {filteredData.map((item, index) => (
// // // //         <MedicalCard
// // // //           key={index}
// // // //           pathogen={item.pathogen}
// // // //           treatment={item.treatment}
// // // //           isExpanded={expandedCards[index] || false}
// // // //           showAnswer={visibleAnswers[index] || false}
// // // //           toggleExpand={() => toggleExpand(index)}
// // // //           onCardClick={() => showSingleAnswer(index)}
// // // //         />
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ListView;
// // // 'use client';

// // // import React from 'react';
// // // import MedicalCard from './short';

// // // const ListView = ({
// // //   filteredData,
// // //   visibleAnswers,
// // //   showSingleAnswer,
// // //   setVisibleAnswers
// // // }) => {
// // //   const handleShowAll = () => {
// // //     const allAnswers = {};
// // //     filteredData.forEach((_, index) => {
// // //       allAnswers[index] = true;
// // //     });
// // //     setVisibleAnswers(allAnswers);
// // //   };

// // //   const handleHideAll = () => {
// // //     setVisibleAnswers({});
// // //   };

// // //   return (
// // //     <div>
// // //       <div className="flex justify-end gap-4 mb-4">
// // //         <button
// // //           onClick={handleShowAll}
// // //           className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
// // //         >
// // //           Show All
// // //         </button>
// // //         <button
// // //           onClick={handleHideAll}
// // //           className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
// // //         >
// // //           Hide All
// // //         </button>
// // //       </div>
      
// // //       <div className="space-y-4">
// // //         {filteredData.map((item, index) => (
// // //           <MedicalCard
// // //             key={index}
// // //             pathogen={item.pathogen}
// // //             treatment={item.treatment}
// // //             showAnswer={visibleAnswers[index] || false}
// // //             onCardClick={() => showSingleAnswer(index)}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default ListView;
// // 'use client';

// // import React from 'react';
// // import MedicalCard from './short';

// // const ListView = ({
// //   filteredData,
// //   visibleAnswers,
// //   showSingleAnswer
// // }) => {
// //   return (
// //     <div>
// //       <div className="space-y-4">
// //         {filteredData.map((item, index) => (
// //           <MedicalCard
// //             key={index}
// //             pathogen={item.pathogen}
// //             treatment={item.treatment}
// //             showAnswer={visibleAnswers[index] || false}
// //             onCardClick={() => showSingleAnswer(index)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListView;
// 'use client';

// import React from 'react';
// import MedicalCard from './short';

// const ListView = ({
//   filteredData = [],  // Provide default empty array
//   visibleAnswers = {},  // Provide default empty object
//   showSingleAnswer
// }) => {
//   // Guard clause for when data is not available
//   if (!Array.isArray(filteredData)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div>
//       <div className="space-y-4">
//         {filteredData.map((item, index) => (
//           <MedicalCard
//             key={index}
//             pathogen={item.pathogen}
//             treatment={item.treatment}
//             showAnswer={visibleAnswers[index] || false}
//             onCardClick={() => showSingleAnswer(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListView;