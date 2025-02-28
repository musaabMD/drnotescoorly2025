// // 'use client'
// // import { Search } from 'lucide-react'
// // import Hero from './hero'

// // const FilterSection = ({
// //   searchTerm,
// //   setSearchTerm,
// //   selectedSubject,
// //   setSelectedSubject,
// //   subjects,
// //   visibleAnswers,
// //   setVisibleAnswers,
// //   filteredData
// // }) => {
// //   return (
// //     <div className="bg-blue-600 text-white py-8">
// //       <div className="container mx-auto px-4">
// //         {/* Hero Section */}
// //         <div className="mb-8">
// //           <Hero
// //             subject={selectedSubject}
// //             totalNotes={filteredData.length}
// //           />
// //         </div>
// //         {/* Search and Filters */}
// //         <div className="max-w-3xl mx-auto">
// //           <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
// //             <div className="relative w-full lg:flex-1">
// //               <input
// //                 type="text"
// //                 placeholder="Search pathogens or treatments..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="w-full py-2 pl-10 pr-4 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               />
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// //             </div>
// //             <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
// //               <select
// //                 value={selectedSubject}
// //                 onChange={(e) => setSelectedSubject(e.target.value)}
// //                 className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white w-full sm:w-auto"
// //               >
// //                 {subjects.map((subject) => (
// //                   <option key={subject} value={subject}>
// //                     {subject}
// //                   </option>
// //                 ))}
// //               </select>
// //               <button
// //                 onClick={() => setVisibleAnswers(prev => {
// //                   const newState = {};
// //                   filteredData.forEach((_, index) => {
// //                     newState[index] = Object.values(prev).some(value => value === true) ? false : true;
// //                   });
// //                   return newState;
// //                 })}
// //                 className="px-4 py-2 rounded-lg bg-white hover:bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 w-full sm:w-auto"
// //               >
// //                 {Object.values(visibleAnswers).some(value => value === true) ? 'Hide All Answers' : 'Show All Answers'}
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default FilterSection
// 'use client';

// import React from 'react';
// import { Search, Clock, List, LayoutGrid, ListChecks, Filter, Pin, Eye, EyeOff } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from "@/components/ui/select";
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger
// } from "@/components/ui/tabs";
// import Hero from './hero';

// const timingOptions = [
//   { value: 'all', label: 'All Cards', time: null },
//   { value: 'again', label: 'Again', time: '25m' },
//   { value: 'hard', label: 'Hard', time: '12h' },
//   { value: 'good', label: 'Good', time: '1d' },
//   { value: 'easy', label: 'Easy', time: '4d' }
// ];

// const FilterSection = ({
//   searchTerm,
//   setSearchTerm,
//   selectedSubject,
//   setSelectedSubject,
//   subjects,
//   selectedTiming,
//   setSelectedTiming,
//   currentView,
//   onViewChange,
//   totalItems,
//   showPinned,
//   setShowPinned,
//   showUnanswered,
//   setShowUnanswered
// }) => {
//   return (
//     <div>
//       <Hero 
//         totalItems={totalItems} 
//         subject={selectedSubject}
//         view={currentView}
//       />

//       {/* Top Bar with View Switcher */}
//       <div className="bg-white border-b">
//         <div className="container mx-auto px-4">
//           <Tabs value={currentView} onValueChange={onViewChange} className="w-full">
//             <TabsList className="w-full justify-center h-16">
//               <TabsTrigger value="notes">
//                 <List className="mr-2 h-4 w-4" />
//                 Notes
//               </TabsTrigger>
//               <TabsTrigger value="flashcards">
//                 <LayoutGrid className="mr-2 h-4 w-4" />
//                 Flashcards
//               </TabsTrigger>
//               <TabsTrigger value="mcq">
//                 <ListChecks className="mr-2 h-4 w-4" />
//                 MCQ
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>
//       </div>

//       {/* Filters Section */}
//       <div className="bg-gray-50 border-b">
//         <div className="container mx-auto px-4 py-4">
//           <div className="max-w-4xl mx-auto space-y-4">
//             {/* Search Row */}
//             <div className="relative">
//               <Input
//                 type="text"
//                 placeholder="Search medical conditions..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             </div>

//             {/* Subject and Filters Row */}
//             <div className="flex flex-wrap justify-center gap-2 items-center">
//               <Select
//                 value={selectedSubject}
//                 onValueChange={setSelectedSubject}
//               >
//                 <SelectTrigger className="w-[150px] bg-white">
//                   <SelectValue placeholder="Select subject" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {subjects.map((subject) => (
//                     <SelectItem key={subject} value={subject}>
//                       {subject}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => setShowPinned(prev => !prev)}
//                   className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-colors ${
//                     showPinned
//                       ? 'bg-blue-100 text-blue-600'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   <Pin className="h-4 w-4" />
//                   Pinned
//                 </button>
//                 <button
//                   onClick={() => setShowUnanswered(prev => !prev)}
//                   className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-colors ${
//                     showUnanswered
//                       ? 'bg-blue-100 text-blue-600'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {showUnanswered ? (
//                     <EyeOff className="h-4 w-4" />
//                   ) : (
//                     <Eye className="h-4 w-4" />
//                   )}
//                   Unanswered
//                 </button>
//               </div>
//             </div>

//             {/* Timing Filter */}
//             <div className="flex flex-wrap justify-center items-center gap-2">
//               <Clock size={16} className="text-gray-400" />
//               {timingOptions.map((option) => (
//                 <button
//                   key={option.value}
//                   onClick={() => setSelectedTiming(option.value)}
//                   className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
//                     selectedTiming === option.value
//                       ? 'bg-blue-100 text-blue-600'
//                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                   }`}
//                 >
//                   {option.label}
//                   {option.time && (
//                     <span className="ml-1 opacity-75">({option.time})</span>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;