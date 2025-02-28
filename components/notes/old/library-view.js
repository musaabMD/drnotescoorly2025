// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { ChevronDown, ChevronRight } from 'lucide-react';

// // // // Clean View Component
// // // const CleanView = ({ data }) => {
// // //   return (
// // //     <div className="grid gap-12">
// // //       {Object.entries(data).map(([topic, items]) => (
// // //         <div key={topic}>
// // //           <h2 className="text-3xl font-bold text-gray-900 mb-8">{topic}</h2>
// // //           <div className="grid gap-8">
// // //             {items.map((item, idx) => (
// // //               <div key={idx} className="space-y-4">
// // //                 <div className="text-sm text-blue-600 font-medium">
// // //                   {item.category}
// // //                 </div>
// // //                 <h3 className="text-2xl font-bold text-gray-900">
// // //                   {item.pathogen}
// // //                 </h3>
// // //                 <div className="text-gray-600 leading-relaxed text-lg">
// // //                   {item.treatment}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // // Table of Contents View Component
// // // const TOCView = ({ data }) => {
// // //   const [expandedSections, setExpandedSections] = useState({});

// // //   const toggleSection = (id) => {
// // //     setExpandedSections(prev => ({
// // //       ...prev,
// // //       [id]: !prev[id]
// // //     }));
// // //   };

// // //   return (
// // //     <div className="max-w-4xl mx-auto">
// // //       {Object.entries(data).map(([topic, items], topicIdx) => (
// // //         <div key={topic} className="mb-8">
// // //           <h2 className="text-2xl font-bold text-gray-900 mb-4">
// // //             {topicIdx + 1}. {topic}
// // //           </h2>
// // //           <div className="pl-6">
// // //             {items.map((item, idx) => {
// // //               const sectionId = `${topicIdx}-${idx}`;
// // //               return (
// // //                 <div key={idx} className="border-l-2 border-gray-200">
// // //                   <div 
// // //                     className="flex items-center gap-2 pl-4 py-2 cursor-pointer hover:text-blue-600 transition-colors"
// // //                     onClick={() => toggleSection(sectionId)}
// // //                   >
// // //                     {expandedSections[sectionId] ? (
// // //                       <ChevronDown size={20} />
// // //                     ) : (
// // //                       <ChevronRight size={20} />
// // //                     )}
// // //                     <span className="text-lg">
// // //                       {topicIdx + 1}.{idx + 1} {item.category} - {item.pathogen}
// // //                     </span>
// // //                   </div>
                  
// // //                   {expandedSections[sectionId] && (
// // //                     <div className="pl-12 pr-4 py-4 text-gray-600">
// // //                       <div className="prose max-w-none">
// // //                         <p className="text-lg leading-relaxed">
// // //                           {item.treatment}
// // //                         </p>
// // //                         {item.mcq && (
// // //                           <div className="mt-4 bg-gray-50 p-4 rounded-lg">
// // //                             <h4 className="font-medium text-gray-900 mb-2">
// // //                               Clinical Scenario
// // //                             </h4>
// // //                             <p>{item.mcq.question}</p>
                            
// // //                             <h4 className="font-medium text-gray-900 mt-4 mb-2">
// // //                               Key Points
// // //                             </h4>
// // //                             <ul className="list-disc pl-4">
// // //                               {item.mcq.keyPoints.map((point, pIdx) => (
// // //                                 <li key={pIdx}>{point}</li>
// // //                               ))}
// // //                             </ul>
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // // Sample data structure
// // // const sampleData = {
// // //   "Malaria": [
// // //     {
// // //       category: "Definition",
// // //       pathogen: "Overview of Malaria",
// // //       treatment: "Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes. It's preventable and curable if diagnosed early."
// // //     },
// // //     {
// // //       category: "Clinical Features",
// // //       pathogen: "Symptoms and Signs",
// // //       treatment: "Common symptoms include fever, chills, headache, muscle aches, and fatigue. Severe cases may develop complications affecting the brain, lungs, or kidneys."
// // //     }
// // //   ],
// // //   "Tuberculosis": [
// // //     {
// // //       category: "Treatment",
// // //       pathogen: "TB Management",
// // //       treatment: "Treatment typically involves a combination of antibiotics taken for 6 to 9 months. The most common regimen includes isoniazid, rifampin, ethambutol, and pyrazinamide."
// // //     }
// // //   ]
// // // };

// // // // Main Component with View Switcher
// // // const LibraryView = ({ data = sampleData, viewType = 'clean' }) => {
// // //   return (
// // //     <div className="p-8">
// // //       {viewType === 'clean' ? (
// // //         <CleanView data={data} />
// // //       ) : (
// // //         <TOCView data={data} />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default LibraryView;
// // 'use client';

// // import React, { useState } from 'react';
// // import { Pin, Quote, BookOpen, HelpCircle, ClipboardList, ChevronRight, ChevronDown, LayoutGrid, List, AlignLeft } from 'lucide-react';

// // const CategoryBadge = ({ category }) => (
// //   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
// //     {category}
// //   </span>
// // );

// // const MetricBadge = ({ icon: Icon, count }) => (
// //   <div className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
// //     <Icon size={16} />
// //     <span className="text-sm">{count}</span>
// //   </div>
// // );

// // // Original Card View
// // const CardView = ({ data, pinnedCards, togglePin, onCardClick }) => {
// //   const defaultTopics = ['Malaria', 'Tuberculosis', 'HIV/AIDS', 'Pneumonia'];
// //   const sampleText = `This is a comprehensive overview of the topic covering key aspects including pathophysiology, clinical presentation, diagnostic approaches, and treatment strategies. The condition requires careful consideration of various factors such as patient demographics, comorbidities, and available resources. Understanding these elements is crucial for optimal patient care and management. Current guidelines recommend a systematic approach to diagnosis and treatment, taking into account both local and international standards. Regular monitoring and follow-up are essential components of the management plan.`;

// //   return (
// //     <div className="grid gap-12">
// //       {defaultTopics.map(topic => (
// //         <div key={topic}>
// //           <div className="mb-8">
// //             <div className="flex justify-between items-center">
// //               <h2 className="text-3xl font-bold text-gray-900">{topic}</h2>
// //               <div className="flex gap-3">
// //                 <MetricBadge icon={HelpCircle} count={2} />
// //                 <MetricBadge icon={BookOpen} count={3} />
// //                 <MetricBadge icon={ClipboardList} count={1} />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="grid gap-6">
// //             {['Definition', 'Clinical Features', 'Diagnosis'].map((category, idx) => (
// //               <article 
// //                 key={category}
// //                 className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
// //               >
// //                 <div className="p-8">
// //                   <div className="mb-6">
// //                     <CategoryBadge category={category} />
// //                   </div>

// //                   <div className="flex items-start justify-between mb-6">
// //                     <h3 
// //                       className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 flex items-center gap-2"
// //                       onClick={() => onCardClick(idx)}
// //                     >
// //                       {`${topic} ${category}`}
// //                       <ChevronRight size={24} className="text-gray-400" />
// //                     </h3>
// //                   </div>

// //                   <div className="space-y-6">
// //                     <div className="text-gray-600 leading-relaxed text-lg">
// //                       {sampleText}
// //                     </div>

// //                     <div className="mt-8 pt-6 flex items-center justify-between">
// //                       <div className="flex items-center gap-4">
// //                         <button className="text-gray-400 hover:text-gray-600 transition-colors">
// //                           <Quote size={20} />
// //                         </button>
// //                         <button 
// //                           onClick={() => togglePin(idx)}
// //                           className="text-gray-400 hover:text-gray-600 transition-colors"
// //                         >
// //                           <Pin 
// //                             size={20}
// //                             className={pinnedCards[idx] ? 'fill-red-500 text-red-500' : ''}
// //                           />
// //                         </button>
// //                       </div>

// //                       <div className="flex items-center gap-4">
// //                         <MetricBadge icon={HelpCircle} count={1} />
// //                         <MetricBadge icon={BookOpen} count={1} />
// //                         <MetricBadge icon={ClipboardList} count={1} />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // Clean View without borders or buttons
// // const CleanView = ({ data }) => {
// //   const defaultTopics = ['Malaria', 'Tuberculosis', 'HIV/AIDS', 'Pneumonia'];
// //   const sampleText = `This is a comprehensive overview of the topic covering key aspects including pathophysiology, clinical presentation, diagnostic approaches, and treatment strategies. The condition requires careful consideration of various factors such as patient demographics, comorbidities, and available resources. Understanding these elements is crucial for optimal patient care and management. Current guidelines recommend a systematic approach to diagnosis and treatment, taking into account both local and international standards. Regular monitoring and follow-up are essential components of the management plan.`;

// //   return (
// //     <div className="grid gap-12">
// //       {defaultTopics.map(topic => (
// //         <div key={topic}>
// //           <h2 className="text-3xl font-bold text-gray-900 mb-8">{topic}</h2>
// //           <div className="grid gap-8">
// //             {['Definition', 'Clinical Features', 'Diagnosis'].map((category, idx) => (
// //               <div key={idx} className="space-y-4">
// //                 <div className="text-sm text-blue-600 font-medium">
// //                   {category}
// //                 </div>
// //                 <h3 className="text-2xl font-bold text-gray-900">
// //                   {`${topic} ${category}`}
// //                 </h3>
// //                 <div className="text-gray-600 leading-relaxed text-lg">
// //                   {sampleText}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // Table of Contents View
// // const TOCView = ({ data }) => {
// //   const [expandedSections, setExpandedSections] = useState({});
// //   const defaultTopics = ['Malaria', 'Tuberculosis', 'HIV/AIDS', 'Pneumonia'];
// //   const sampleText = `This is a comprehensive overview of the topic covering key aspects including pathophysiology, clinical presentation, diagnostic approaches, and treatment strategies. The condition requires careful consideration of various factors such as patient demographics, comorbidities, and available resources. Understanding these elements is crucial for optimal patient care and management. Current guidelines recommend a systematic approach to diagnosis and treatment, taking into account both local and international standards. Regular monitoring and follow-up are essential components of the management plan.`;

// //   return (
// //     <div className="max-w-4xl mx-auto">
// //       {defaultTopics.map((topic, topicIdx) => (
// //         <div key={topic} className="mb-8">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //             {topicIdx + 1}. {topic}
// //           </h2>
// //           <div className="pl-6">
// //             {['Definition', 'Clinical Features', 'Diagnosis'].map((category, idx) => {
// //               const sectionId = `${topicIdx}-${idx}`;
// //               return (
// //                 <div key={idx} className="border-l-2 border-gray-200">
// //                   <div 
// //                     className="flex items-center gap-2 pl-4 py-2 cursor-pointer hover:text-blue-600 transition-colors"
// //                     onClick={() => setExpandedSections(prev => ({
// //                       ...prev,
// //                       [sectionId]: !prev[sectionId]
// //                     }))}
// //                   >
// //                     {expandedSections[sectionId] ? (
// //                       <ChevronDown size={20} />
// //                     ) : (
// //                       <ChevronRight size={20} />
// //                     )}
// //                     <span className="text-lg">
// //                       {topicIdx + 1}.{idx + 1} {category}
// //                     </span>
// //                   </div>
                  
// //                   {expandedSections[sectionId] && (
// //                     <div className="pl-12 pr-4 py-4 text-gray-600">
// //                       <div className="prose max-w-none">
// //                         <p className="text-lg leading-relaxed">
// //                           {sampleText}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // // View Selector Component
// // const ViewSelector = ({ currentView, onViewChange }) => (
// //   <div className="flex gap-2 mb-6">
// //     <button
// //       onClick={() => onViewChange('card')}
// //       className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
// //         currentView === 'card' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //       }`}
// //     >
// //       <LayoutGrid size={16} />
// //       <span>Cards</span>
// //     </button>
// //     <button
// //       onClick={() => onViewChange('clean')}
// //       className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
// //         currentView === 'clean' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //       }`}
// //     >
// //       <AlignLeft size={16} />
// //       <span>Clean</span>
// //     </button>
// //     <button
// //       onClick={() => onViewChange('toc')}
// //       className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
// //         currentView === 'toc' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //       }`}
// //     >
// //       <List size={16} />
// //       <span>Contents</span>
// //     </button>
// //   </div>
// // );

// // // Main Library View Component
// // const LibraryView = ({ data, pinnedCards, togglePin, onCardClick }) => {
// //   const [currentView, setCurrentView] = useState('card');

// //   return (
// //     <div className="p-8">
// //       <ViewSelector currentView={currentView} onViewChange={setCurrentView} />
      
// //       {currentView === 'card' && (
// //         <CardView 
// //           data={data}
// //           pinnedCards={pinnedCards}
// //           togglePin={togglePin}
// //           onCardClick={onCardClick}
// //         />
// //       )}
      
// //       {currentView === 'clean' && (
// //         <CleanView data={data} />
// //       )}
      
// //       {currentView === 'toc' && (
// //         <TOCView data={data} />
// //       )}
// //     </div>
// //   );
// // };

// // export default LibraryView;
// 'use client';

// import React, { useState } from 'react';
// import { Pin, Quote, BookOpen, HelpCircle, ClipboardList, ChevronRight, ChevronDown, LayoutGrid, AlignLeft } from 'lucide-react';

// const CategoryBadge = ({ category }) => (
//   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//     {category}
//   </span>
// );

// const MetricBadge = ({ icon: Icon, count }) => (
//   <div className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
//     <Icon size={16} />
//     <span className="text-sm">{count}</span>
//   </div>
// );

// // Integrated Card View
// const CardView = ({ data, pinnedCards, togglePin, onCardClick }) => {
//   const [expandedSections, setExpandedSections] = useState(new Set());
//   const defaultTopics = ['Malaria', 'Tuberculosis', 'HIV/AIDS', 'Pneumonia'];
//   const sampleText = `This is a comprehensive overview of the topic covering key aspects including pathophysiology, clinical presentation, diagnostic approaches, and treatment strategies. The condition requires careful consideration of various factors such as patient demographics, comorbidities, and available resources.`;

//   const toggleSection = (sectionId) => {
//     setExpandedSections(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(sectionId)) {
//         newSet.delete(sectionId);
//       } else {
//         newSet.add(sectionId);
//       }
//       return newSet;
//     });
//   };

//   const expandAll = () => {
//     const allIndices = defaultTopics.flatMap((_, topicIdx) => 
//       ['Definition', 'Clinical Features', 'Diagnosis'].map((_, idx) => `${topicIdx}-${idx}`)
//     );
//     setExpandedSections(new Set(allIndices));
//   };

//   const collapseAll = () => {
//     setExpandedSections(new Set());
//   };

//   return (
//     <div className="space-y-8">
//       <div className="flex justify-end gap-2">
//         <button 
//           onClick={expandAll}
//           className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//         >
//           Expand All
//         </button>
//         <button 
//           onClick={collapseAll}
//           className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//         >
//           Collapse All
//         </button>
//       </div>

//       {defaultTopics.map((topic, topicIdx) => (
//         <div key={topic} className="space-y-4">
//           <h2 className="text-2xl font-bold text-gray-900 pt-8 first:pt-0">{topic}</h2>
          
//           {['Definition', 'Clinical Features', 'Diagnosis'].map((category, idx) => {
//             const sectionId = `${topicIdx}-${idx}`;
//             const isExpanded = expandedSections.has(sectionId);

//             return (
//               <div key={sectionId} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                 <div
//                   onClick={() => {
//                     toggleSection(sectionId);
//                     onCardClick && onCardClick(idx);
//                   }}
//                   className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="flex items-center justify-center w-8 h-8 text-white bg-blue-600 rounded text-lg font-medium">
//                       {idx + 1}
//                     </span>
//                     <h3 className="text-xl font-medium text-gray-900">
//                       {category}
//                     </h3>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         togglePin(idx);
//                       }}
//                       className={`p-1.5 rounded-full hover:bg-gray-200 transition-colors ${
//                         pinnedCards[idx] ? 'text-blue-500' : 'text-gray-400'
//                       }`}
//                     >
//                       <Pin className="w-4 h-4" />
//                     </button>
//                     <ChevronDown 
//                       className={`w-5 h-5 transition-transform duration-200 text-gray-400 ${
//                         isExpanded ? 'rotate-180' : ''
//                       }`}
//                     />
//                   </div>
//                 </div>

//                 {isExpanded && (
//                   <div className="p-8">
//                     <div className="text-gray-600 leading-relaxed text-lg">
//                       {sampleText}
//                     </div>

//                     <div className="mt-8 pt-6 flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <button className="text-gray-400 hover:text-gray-600 transition-colors">
//                           <Quote size={20} />
//                         </button>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <MetricBadge icon={HelpCircle} count={1} />
//                         <MetricBadge icon={BookOpen} count={1} />
//                         <MetricBadge icon={ClipboardList} count={1} />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Clean View
// const CleanView = ({ data }) => {
//   const defaultTopics = ['Malaria', 'Tuberculosis', 'HIV/AIDS', 'Pneumonia'];
//   const sampleText = `This is a comprehensive overview of the topic covering key aspects including pathophysiology, clinical presentation, diagnostic approaches, and treatment strategies. The condition requires careful consideration of various factors such as patient demographics, comorbidities, and available resources.`;

//   return (
//     <div className="grid gap-12">
//       {defaultTopics.map(topic => (
//         <div key={topic}>
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">{topic}</h2>
//           <div className="grid gap-8">
//             {['Definition', 'Clinical Features', 'Diagnosis'].map((category, idx) => (
//               <div key={idx} className="space-y-4">
//                 <div className="text-sm text-blue-600 font-medium">
//                   {category}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">
//                   {`${topic} ${category}`}
//                 </h3>
//                 <div className="text-gray-600 leading-relaxed text-lg">
//                   {sampleText}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // View Selector Component
// const ViewSelector = ({ currentView, onViewChange }) => (
//   <div className="flex gap-2 mb-6">
//     <button
//       onClick={() => onViewChange('card')}
//       className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
//         currentView === 'card' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//       }`}
//     >
//       <LayoutGrid size={16} />
//       <span>Cards</span>
//     </button>
//     <button
//       onClick={() => onViewChange('clean')}
//       className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
//         currentView === 'clean' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//       }`}
//     >
//       <AlignLeft size={16} />
//       <span>Clean</span>
//     </button>
//   </div>
// );

// // Main Library View Component
// const LibraryView = ({ data }) => {
//   const [currentView, setCurrentView] = useState('card');
//   const [pinnedCards, setPinnedCards] = useState({});

//   const togglePin = (idx) => {
//     setPinnedCards(prev => ({
//       ...prev,
//       [idx]: !prev[idx]
//     }));
//   };

//   const handleCardClick = (idx) => {
//     console.log('Card clicked:', idx);
//   };

//   return (
//     <div className="p-8">
//       <ViewSelector 
//         currentView={currentView} 
//         onViewChange={setCurrentView}
//       />
      
//       {currentView === 'card' && (
//         <CardView 
//           data={data}
//           pinnedCards={pinnedCards}
//           togglePin={togglePin}
//           onCardClick={handleCardClick}
//         />
//       )}
      
//       {currentView === 'clean' && (
//         <CleanView data={data} />
//       )}
//     </div>
//   );
// };

// export default LibraryView;