// // // 'use client'

// // // // Import individual icons from lucide-react
// // // import { LucideIcon } from 'lucide-react'
// // // import { 
// // //   BeakerIcon as Flask,
// // //   MicroscopeIcon as Microscope, 
// // //   ActivityIcon as Virus 
// // // } from 'lucide-react'

// // // const Hero = ({ subject, totalNotes }) => {
// // //   const getSubjectData = (subjectName) => {
// // //     switch(subjectName) {
// // //       case 'Bacterial Infections':
// // //         return {
// // //           description: 'Test your knowledge on bacterial infections and treatments',
// // //           icon: Microscope
// // //         }
// // //       case 'Viral Infections':
// // //         return {
// // //           description: 'Practice viral pathogen management and protocols',
// // //           icon: Virus
// // //         }
// // //       case 'Fungal Infections':
// // //         return {
// // //           description: 'Learn about fungal disease treatments and approaches',
// // //           icon: Flask
// // //         }
// // //       default:
// // //         return {
// // //           description: 'Test your knowledge on medical treatments',
// // //           icon: Microscope
// // //         }
// // //     }
// // //   }

// // //   const subjectData = getSubjectData(subject)
// // //   const IconComponent = subjectData.icon

// // //   return (
// // //     <div className="flex justify-center items-center">
// // //       <div className="text-center">
// // //         <div className="flex flex-col items-center gap-3">
// // //           <div className="flex justify-center items-center bg-white/10 rounded-lg p-2">
// // //             <IconComponent size={32} />
// // //           </div>
// // //           <div>
// // //             <h1 className="text-3xl font-bold">
// // //               {subject} <span className="text-2xl opacity-80">({totalNotes})</span>
// // //             </h1>
// // //             <p className="text-lg opacity-80 mt-1">{subjectData.description}</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Hero
// // 'use client';

// // import React from 'react';
// // import { Search, Pin, EyeOff } from 'lucide-react';
// // import { Input } from "@/components/ui/input";
// // import {
// //   Tabs,
// //   TabsList,
// //   TabsTrigger
// // } from "@/components/ui/tabs";

// // const timingOptions = [
// //   { value: 'all', label: 'All Cards' },
// //   { value: 'again', label: 'Again', time: '25m' },
// //   { value: 'hard', label: 'Hard', time: '12h' },
// //   { value: 'good', label: 'Good', time: '1d' },
// //   { value: 'easy', label: 'Easy', time: '4d' }
// // ];

// // const Hero = ({ 
// //   totalItems, 
// //   currentView,
// //   onViewChange,
// //   searchTerm,
// //   setSearchTerm,
// //   selectedSubject,
// //   setSelectedSubject,
// //   subjects,
// //   showPinned,
// //   setShowPinned,
// //   showUnanswered,
// //   setShowUnanswered,
// //   selectedTiming,
// //   setSelectedTiming
// // }) => {
// //   return (
// //     <div className="bg-gradient-to-r from-blue-600 to-blue-700 pb-6">
// //       {/* App Name & Stats */}
// //       <div className="container mx-auto px-4 pt-6">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="flex items-center justify-between mb-6">
// //             <h1 className="text-2xl font-bold text-white">DrNote</h1>
// //             <div className="text-blue-100">
// //               {totalItems} items
// //             </div>
// //           </div>

// //           {/* View Switcher */}
// //           <Tabs value={currentView} onValueChange={onViewChange} className="mb-6">
// //             <TabsList className="bg-white/10 border-0">
// //               <TabsTrigger 
// //                 value="notes"
// //                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
// //               >
// //                 Notes
// //               </TabsTrigger>
// //               <TabsTrigger 
// //                 value="flashcards"
// //                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
// //               >
// //                 Flashcards
// //               </TabsTrigger>
// //               <TabsTrigger 
// //                 value="mcq"
// //                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
// //               >
// //                 MCQ
// //               </TabsTrigger>
// //             </TabsList>
// //           </Tabs>

// //           {/* Search & Quick Filters */}
// //           <div className="flex flex-col gap-4">
// //             <div className="flex gap-2">
// //               <div className="relative flex-1">
// //                 <Input
// //                   type="text"
// //                   placeholder="Search..."
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                   className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pl-10"
// //                 />
// //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
// //               </div>
// //               <select
// //                 value={selectedSubject}
// //                 onChange={(e) => setSelectedSubject(e.target.value)}
// //                 className="bg-white/10 border-white/20 text-white rounded-md px-3 py-2"
// //               >
// //                 {subjects.map(subject => (
// //                   <option key={subject} value={subject} className="text-gray-900">
// //                     {subject}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* Quick Filters */}
// //             <div className="flex flex-wrap justify-between items-center gap-2">
// //               <div className="flex gap-2">
// //                 <button
// //                   onClick={() => setShowPinned(prev => !prev)}
// //                   className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-1
// //                     ${showPinned 
// //                       ? 'bg-white text-blue-600' 
// //                       : 'bg-white/10 text-white hover:bg-white/20'
// //                     }`}
// //                 >
// //                   <Pin className="h-4 w-4" />
// //                   Pinned
// //                 </button>
// //                 <button
// //                   onClick={() => setShowUnanswered(prev => !prev)}
// //                   className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-1
// //                     ${showUnanswered 
// //                       ? 'bg-white text-blue-600' 
// //                       : 'bg-white/10 text-white hover:bg-white/20'
// //                     }`}
// //                 >
// //                   <EyeOff className="h-4 w-4" />
// //                   Unanswered
// //                 </button>
// //               </div>

// //               {/* Timing Filters */}
// //               <div className="flex gap-1">
// //                 {timingOptions.map((option) => (
// //                   <button
// //                     key={option.value}
// //                     onClick={() => setSelectedTiming(option.value)}
// //                     className={`px-2 py-1 rounded-md text-sm transition-colors whitespace-nowrap
// //                       ${selectedTiming === option.value 
// //                         ? 'bg-white text-blue-600' 
// //                         : 'bg-white/10 text-white hover:bg-white/20'
// //                       }`}
// //                   >
// //                     {option.label}
// //                     {option.time && (
// //                       <span className="ml-1 opacity-75">({option.time})</span>
// //                     )}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;
// 'use client';

// import React from 'react';
// import { Search, Pin, EyeOff, Clock, List, LayoutGrid, ListChecks, Book } from 'lucide-react';
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger
// } from "@/components/ui/tabs";

// const timingOptions = [
//   { value: 'all', label: 'All Cards' },
//   { value: 'again', label: 'Again', time: '25m' },
//   { value: 'hard', label: 'Hard', time: '12h' },
//   { value: 'good', label: 'Good', time: '1d' },
//   { value: 'easy', label: 'Easy', time: '4d' }
// ];

// const Hero = ({ 
//   totalItems, 
//   currentView,
//   onViewChange,
//   searchTerm,
//   setSearchTerm,
//   selectedSubject,
//   setSelectedSubject,
//   subjects,
//   showPinned,
//   setShowPinned,
//   showUnanswered,
//   setShowUnanswered,
//   selectedTiming,
//   setSelectedTiming
// }) => {
//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-blue-700 pb-6">
//       <div className="container mx-auto px-4 pt-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-2xl font-bold text-white">DrNote</h1>
//             <div className="text-blue-100">
//               {totalItems} items
//             </div>
//           </div>

//           <Tabs value={currentView} onValueChange={onViewChange} className="mb-6">
//             <TabsList className="bg-white/10 border-0">
//               <TabsTrigger 
//                 value="notes"
//                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
//               >
//                 <List className="mr-2 h-4 w-4" />
//                 Notes
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="flashcards"
//                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
//               >
//                 <LayoutGrid className="mr-2 h-4 w-4" />
//                 Flashcards
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="mcq"
//                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
//               >
//                 <ListChecks className="mr-2 h-4 w-4" />
//                 MCQ
//               </TabsTrigger>
//               <TabsTrigger 
//                 value="library"
//                 className="data-[state=active]:bg-white data-[state=active]:text-blue-600 text-white"
//               >
//                 <Book className="mr-2 h-4 w-4" />
//                 Library
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>

//           <div className="flex flex-col gap-4">
//             <div className="flex gap-2">
//               <div className="relative flex-1">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-md px-3 py-2 pl-10"
//                 />
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
//               </div>
//               <select
//                 value={selectedSubject}
//                 onChange={(e) => setSelectedSubject(e.target.value)}
//                 className="bg-white/10 border-white/20 text-white rounded-md px-3 py-2"
//               >
//                 {subjects.map(subject => (
//                   <option key={subject} value={subject} className="text-gray-900">
//                     {subject}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex flex-wrap justify-between items-center gap-2">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setShowPinned(prev => !prev)}
//                   className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-1
//                     ${showPinned 
//                       ? 'bg-white text-blue-600' 
//                       : 'bg-white/10 text-white hover:bg-white/20'
//                     }`}
//                 >
//                   <Pin className="h-4 w-4" />
//                   Pinned
//                 </button>
//                 <button
//                   onClick={() => setShowUnanswered(prev => !prev)}
//                   className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-1
//                     ${showUnanswered 
//                       ? 'bg-white text-blue-600' 
//                       : 'bg-white/10 text-white hover:bg-white/20'
//                     }`}
//                 >
//                   <EyeOff className="h-4 w-4" />
//                   Unanswered
//                 </button>
//               </div>

//               <div className="flex gap-1">
//                 {timingOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     onClick={() => setSelectedTiming(option.value)}
//                     className={`px-2 py-1 rounded-md text-sm transition-colors whitespace-nowrap
//                       ${selectedTiming === option.value 
//                         ? 'bg-white text-blue-600' 
//                         : 'bg-white/10 text-white hover:bg-white/20'
//                       }`}
//                   >
//                     {option.label}
//                     {option.time && (
//                       <span className="ml-1 opacity-75">({option.time})</span>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;