// // // // // // "use client"
// // // // // // import React from 'react';
// // // // // // import { Search } from 'lucide-react';
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // // // // import { Button } from "@/components/ui/button";

// // // // // // const MCQHero = ({ 
// // // // // //   questionsCount,
// // // // // //   reviewCounts,
// // // // // //   subjects,
// // // // // //   subjectCounts,
// // // // // //   years,
// // // // // //   yearCounts,
// // // // // //   search,
// // // // // //   setSearch,
// // // // // //   subjectFilter,
// // // // // //   setSubjectFilter,
// // // // // //   yearFilter,
// // // // // //   setYearFilter,
// // // // // //   reviewFilter,
// // // // // //   setReviewFilter
// // // // // // }) => {
// // // // // //   // Custom color palette
// // // // // //   const colors = {
// // // // // //     primary: "#007832",
// // // // // //     background: "#F6EFE8",
// // // // // //     accent: "#E8D8CE",
// // // // // //     tabs: "#E5DFDA",
// // // // // //     text: "#000000",
// // // // // //     textLight: "#333333",
// // // // // //   };

// // // // // //   return (
// // // // // //     <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// // // // // //       <div className="max-w-5xl mx-auto px-4">
// // // // // //         <div className="flex flex-col items-center">
// // // // // //           <h1 className="text-2xl md:text-3xl font-bold mb-6">Medical MCQ Bank</h1>
          
// // // // // //           <div className="flex gap-8 md:gap-12 mb-8">
// // // // // //             <div className="text-center">
// // // // // //               <div className="text-2xl md:text-3xl font-semibold">{questionsCount}</div>
// // // // // //               <div className="text-sm opacity-80 mt-1">Total</div>
// // // // // //             </div>
// // // // // //             <div className="text-center">
// // // // // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// // // // // //               <div className="text-sm opacity-80 mt-1">Got It</div>
// // // // // //             </div>
// // // // // //             <div className="text-center">
// // // // // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// // // // // //               <div className="text-sm opacity-80 mt-1">Review</div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Search */}
// // // // // //           <div className="relative w-full max-w-2xl mb-6">
// // // // // //             <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // // // //             <Input
// // // // // //               placeholder="Search questions..."
// // // // // //               className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// // // // // //               value={search}
// // // // // //               onChange={(e) => setSearch(e.target.value)}
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Filters */}
// // // // // //           <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// // // // // //             <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// // // // // //               <SelectTrigger 
// // // // // //                 style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // // // //                 className="w-[240px] h-12 border-0"
// // // // // //               >
// // // // // //                 <SelectValue placeholder="All Subjects" />
// // // // // //               </SelectTrigger>
// // // // // //               <SelectContent>
// // // // // //                 <SelectItem value="all">All Subjects ({questionsCount})</SelectItem>
// // // // // //                 {subjects.map(subject => (
// // // // // //                   <SelectItem key={subject} value={subject}>
// // // // // //                     {subject} ({subjectCounts[subject]})
// // // // // //                   </SelectItem>
// // // // // //                 ))}
// // // // // //               </SelectContent>
// // // // // //             </Select>

// // // // // //             {/* Year Filter */}
// // // // // //             <Select value={yearFilter} onValueChange={setYearFilter}>
// // // // // //               <SelectTrigger 
// // // // // //                 style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // // // //                 className="w-[180px] h-12 border-0"
// // // // // //               >
// // // // // //                 <SelectValue placeholder="All Years" />
// // // // // //               </SelectTrigger>
// // // // // //               <SelectContent>
// // // // // //                 <SelectItem value="all">All Years ({questionsCount})</SelectItem>
// // // // // //                 {years.map(year => (
// // // // // //                   <SelectItem key={year} value={year}>
// // // // // //                     {year} ({yearCounts[year]})
// // // // // //                   </SelectItem>
// // // // // //                 ))}
// // // // // //               </SelectContent>
// // // // // //             </Select>

// // // // // //             <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// // // // // //               <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// // // // // //                 <Button 
// // // // // //                   variant="ghost" 
// // // // // //                   style={{
// // // // // //                     backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// // // // // //                     color: reviewFilter === 'all' ? colors.primary : colors.text
// // // // // //                   }}
// // // // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // // // //                   onClick={() => setReviewFilter('all')}
// // // // // //                 >
// // // // // //                   All Reviews ({questionsCount})
// // // // // //                 </Button>
// // // // // //                 <Button 
// // // // // //                   variant="ghost" 
// // // // // //                   style={{
// // // // // //                     backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// // // // // //                     color: reviewFilter === 'got-it' ? colors.primary : colors.text
// // // // // //                   }}
// // // // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // // // //                   onClick={() => setReviewFilter('got-it')}
// // // // // //                 >
// // // // // //                   Got It ({reviewCounts.gotIt})
// // // // // //                 </Button>
// // // // // //                 <Button 
// // // // // //                   variant="ghost" 
// // // // // //                   style={{
// // // // // //                     backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// // // // // //                     color: reviewFilter === 'review' ? colors.primary : colors.text
// // // // // //                   }}
// // // // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // // // //                   onClick={() => setReviewFilter('review')}
// // // // // //                 >
// // // // // //                   Need Review ({reviewCounts.review})
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default MCQHero;
// // // // // "use client"
// // // // // import React from 'react';
// // // // // import { Search } from 'lucide-react';
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // // // import { Button } from "@/components/ui/button";

// // // // // const MCQHero = ({ 
// // // // //   title = "Medical MCQ Bank",
// // // // //   questionsCount,
// // // // //   reviewCounts,
// // // // //   subjects,
// // // // //   subjectCounts,
// // // // //   years,
// // // // //   yearCounts,
// // // // //   search,
// // // // //   setSearch,
// // // // //   subjectFilter,
// // // // //   setSubjectFilter,
// // // // //   yearFilter,
// // // // //   setYearFilter,
// // // // //   reviewFilter,
// // // // //   setReviewFilter
// // // // // }) => {
// // // // //   // Custom color palette
// // // // //   const colors = {
// // // // //     primary: "#007832",
// // // // //     background: "#F6EFE8",
// // // // //     accent: "#E8D8CE",
// // // // //     tabs: "#E5DFDA",
// // // // //     text: "#000000",
// // // // //     textLight: "#333333",
// // // // //   };

// // // // //   return (
// // // // //     <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// // // // //       <div className="max-w-5xl mx-auto px-4">
// // // // //         <div className="flex flex-col items-center">
// // // // //           <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
          
// // // // //           <div className="flex gap-8 md:gap-12 mb-8">
// // // // //             <div className="text-center">
// // // // //               <div className="text-2xl md:text-3xl font-semibold">{questionsCount}</div>
// // // // //               <div className="text-sm opacity-80 mt-1">Total</div>
// // // // //             </div>
// // // // //             <div className="text-center">
// // // // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// // // // //               <div className="text-sm opacity-80 mt-1">Got It</div>
// // // // //             </div>
// // // // //             <div className="text-center">
// // // // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// // // // //               <div className="text-sm opacity-80 mt-1">Review</div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Search */}
// // // // //           <div className="relative w-full max-w-2xl mb-6">
// // // // //             <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // // //             <Input
// // // // //               placeholder="Search questions..."
// // // // //               className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// // // // //               value={search}
// // // // //               onChange={(e) => setSearch(e.target.value)}
// // // // //             />
// // // // //           </div>

// // // // //           {/* Filters */}
// // // // //           <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// // // // //             {subjects.length > 0 && (
// // // // //               <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// // // // //                 <SelectTrigger 
// // // // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // // //                   className="w-[240px] h-12 border-0"
// // // // //                 >
// // // // //                   <SelectValue placeholder="All Subjects" />
// // // // //                 </SelectTrigger>
// // // // //                 <SelectContent>
// // // // //                   <SelectItem value="all">All Subjects ({questionsCount})</SelectItem>
// // // // //                   {subjects.map(subject => (
// // // // //                     <SelectItem key={subject} value={subject}>
// // // // //                       {subject} ({subjectCounts[subject]})
// // // // //                     </SelectItem>
// // // // //                   ))}
// // // // //                 </SelectContent>
// // // // //               </Select>
// // // // //             )}

// // // // //             {/* Year Filter */}
// // // // //             {years.length > 0 && (
// // // // //               <Select value={yearFilter} onValueChange={setYearFilter}>
// // // // //                 <SelectTrigger 
// // // // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // // //                   className="w-[180px] h-12 border-0"
// // // // //                 >
// // // // //                   <SelectValue placeholder="All Years" />
// // // // //                 </SelectTrigger>
// // // // //                 <SelectContent>
// // // // //                   <SelectItem value="all">All Years ({questionsCount})</SelectItem>
// // // // //                   {years.map(year => (
// // // // //                     <SelectItem key={year} value={year}>
// // // // //                       {year} ({yearCounts[year]})
// // // // //                     </SelectItem>
// // // // //                   ))}
// // // // //                 </SelectContent>
// // // // //               </Select>
// // // // //             )}

// // // // //             <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// // // // //               <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// // // // //                 <Button 
// // // // //                   variant="ghost" 
// // // // //                   style={{
// // // // //                     backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// // // // //                     color: reviewFilter === 'all' ? colors.primary : colors.text
// // // // //                   }}
// // // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // // //                   onClick={() => setReviewFilter('all')}
// // // // //                 >
// // // // //                   All Reviews ({questionsCount})
// // // // //                 </Button>
// // // // //                 <Button 
// // // // //                   variant="ghost" 
// // // // //                   style={{
// // // // //                     backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// // // // //                     color: reviewFilter === 'got-it' ? colors.primary : colors.text
// // // // //                   }}
// // // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // // //                   onClick={() => setReviewFilter('got-it')}
// // // // //                 >
// // // // //                   Got It ({reviewCounts.gotIt})
// // // // //                 </Button>
// // // // //                 <Button 
// // // // //                   variant="ghost" 
// // // // //                   style={{
// // // // //                     backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// // // // //                     color: reviewFilter === 'review' ? colors.primary : colors.text
// // // // //                   }}
// // // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // // //                   onClick={() => setReviewFilter('review')}
// // // // //                 >
// // // // //                   Need Review ({reviewCounts.review})
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MCQHero;
// // // // "use client"
// // // // import React from 'react';
// // // // import { Search } from 'lucide-react';
// // // // import { Input } from "@/components/ui/input";
// // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // // import { Button } from "@/components/ui/button";

// // // // const MCQHero = ({ 
// // // //   title = "Medical MCQ Bank",
// // // //   questionsCount,
// // // //   reviewCounts,
// // // //   subjects,
// // // //   subjectCounts,
// // // //   years,
// // // //   yearCounts,
// // // //   search,
// // // //   setSearch,
// // // //   subjectFilter,
// // // //   setSubjectFilter,
// // // //   yearFilter,
// // // //   setYearFilter,
// // // //   reviewFilter,
// // // //   setReviewFilter
// // // // }) => {
// // // //   // Custom color palette
// // // //   const colors = {
// // // //     primary: "#007832",
// // // //     background: "#F6EFE8",
// // // //     accent: "#E8D8CE",
// // // //     tabs: "#E5DFDA",
// // // //     text: "#000000",
// // // //     textLight: "#333333",
// // // //   };

// // // //   return (
// // // //     <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// // // //       <div className="max-w-5xl mx-auto px-4">
// // // //         <div className="flex flex-col items-center">
// // // //           <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
          
// // // //           <div className="flex gap-8 md:gap-12 mb-8">
// // // //             <div className="text-center">
// // // //               <div className="text-2xl md:text-3xl font-semibold">{questionsCount}</div>
// // // //               <div className="text-sm opacity-80 mt-1">Total</div>
// // // //             </div>
// // // //             <div className="text-center">
// // // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// // // //               <div className="text-sm opacity-80 mt-1">Got It</div>
// // // //             </div>
// // // //             <div className="text-center">
// // // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// // // //               <div className="text-sm opacity-80 mt-1">Review</div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Search */}
// // // //           <div className="relative w-full max-w-2xl mb-6">
// // // //             <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // // //             <Input
// // // //               placeholder="Search questions..."
// // // //               className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// // // //               value={search}
// // // //               onChange={(e) => setSearch(e.target.value)}
// // // //             />
// // // //           </div>

// // // //           {/* Filters */}
// // // //           <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// // // //             {subjects.length > 0 && (
// // // //               <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// // // //                 <SelectTrigger 
// // // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // //                   className="w-[240px] h-12 border-0"
// // // //                 >
// // // //                   <SelectValue placeholder="All Subjects" />
// // // //                 </SelectTrigger>
// // // //                 <SelectContent>
// // // //                   <SelectItem value="all">All Subjects ({questionsCount})</SelectItem>
// // // //                   {subjects.map(subject => (
// // // //                     <SelectItem key={subject} value={subject}>
// // // //                       {subject} ({subjectCounts[subject]})
// // // //                     </SelectItem>
// // // //                   ))}
// // // //                 </SelectContent>
// // // //               </Select>
// // // //             )}

// // // //             {/* Year Filter */}
// // // //             {years.length > 0 && (
// // // //               <Select value={yearFilter} onValueChange={setYearFilter}>
// // // //                 <SelectTrigger 
// // // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // // //                   className="w-[180px] h-12 border-0"
// // // //                 >
// // // //                   <SelectValue placeholder="All Years" />
// // // //                 </SelectTrigger>
// // // //                 <SelectContent>
// // // //                   <SelectItem value="all">All Years ({questionsCount})</SelectItem>
// // // //                   {years.map(year => (
// // // //                     <SelectItem key={year} value={year}>
// // // //                       {year} ({yearCounts[year]})
// // // //                     </SelectItem>
// // // //                   ))}
// // // //                 </SelectContent>
// // // //               </Select>
// // // //             )}

// // // //             <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// // // //               <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// // // //                 <Button 
// // // //                   variant="ghost" 
// // // //                   style={{
// // // //                     backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// // // //                     color: reviewFilter === 'all' ? colors.primary : colors.text
// // // //                   }}
// // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // //                   onClick={() => setReviewFilter('all')}
// // // //                 >
// // // //                   All Reviews ({questionsCount})
// // // //                 </Button>
// // // //                 <Button 
// // // //                   variant="ghost" 
// // // //                   style={{
// // // //                     backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// // // //                     color: reviewFilter === 'got-it' ? colors.primary : colors.text
// // // //                   }}
// // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // //                   onClick={() => setReviewFilter('got-it')}
// // // //                 >
// // // //                   Got It ({reviewCounts.gotIt})
// // // //                 </Button>
// // // //                 <Button 
// // // //                   variant="ghost" 
// // // //                   style={{
// // // //                     backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// // // //                     color: reviewFilter === 'review' ? colors.primary : colors.text
// // // //                   }}
// // // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // // //                   onClick={() => setReviewFilter('review')}
// // // //                 >
// // // //                   Need Review ({reviewCounts.review})
// // // //                 </Button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MCQHero;
// // // "use client"
// // // import React from 'react';
// // // import { Search, ArrowLeft } from 'lucide-react';
// // // import { Input } from "@/components/ui/input";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import { Button } from "@/components/ui/button";
// // // import Link from 'next/link';

// // // const MCQHero = ({ 
// // //   title = "Medical MCQ Bank",
// // //   questionsCount = 0,
// // //   reviewCounts = { gotIt: 0, review: 0, notReviewed: 0 },
// // //   subjects = [],
// // //   subjectCounts = {},
// // //   years = [],
// // //   yearCounts = {},
// // //   search = "",
// // //   setSearch,
// // //   subjectFilter = "all",
// // //   setSubjectFilter,
// // //   yearFilter = "all",
// // //   setYearFilter,
// // //   reviewFilter = "all",
// // //   setReviewFilter,
// // //   examId
// // // }) => {
// // //   // Custom color palette
// // //   const colors = {
// // //     primary: "#007832",
// // //     background: "#F6EFE8",
// // //     accent: "#E8D8CE",
// // //     tabs: "#E5DFDA",
// // //     text: "#000000",
// // //     textLight: "#333333",
// // //   };

// // //   return (
// // //     <div style={{backgroundColor: colors.primary}} className="text-white py-8 md:py-12">
// // //       <div className="max-w-5xl mx-auto px-4">
// // //         {/* Back link (conditionally rendered) */}
// // //         {examId && (
// // //           <div className="mb-6">
// // //             <Link 
// // //               href={`/exams/${examId}`} 
// // //               className="inline-flex items-center text-white/90 hover:text-white transition-colors"
// // //             >
// // //               <ArrowLeft className="w-4 h-4 mr-1.5" />
// // //               Back to {title !== "Medical MCQ Bank" ? title : "Exam"}
// // //             </Link>
// // //           </div>
// // //         )}

// // //         <div className="flex flex-col items-center">
// // //           <h1 className="text-2xl md:text-3xl font-bold mb-6">{title}</h1>
          
// // //           <div className="flex gap-8 md:gap-12 mb-8">
// // //             <div className="text-center">
// // //               <div className="text-2xl md:text-3xl font-semibold">{questionsCount}</div>
// // //               <div className="text-sm opacity-80 mt-1">Total</div>
// // //             </div>
// // //             <div className="text-center">
// // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.gotIt}</div>
// // //               <div className="text-sm opacity-80 mt-1">Got It</div>
// // //             </div>
// // //             <div className="text-center">
// // //               <div className="text-2xl md:text-3xl font-semibold">{reviewCounts.review}</div>
// // //               <div className="text-sm opacity-80 mt-1">Review</div>
// // //             </div>
// // //           </div>

// // //           {/* Search */}
// // //           <div className="relative w-full max-w-2xl mb-6">
// // //             <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
// // //             <Input
// // //               placeholder="Search questions..."
// // //               className="pl-10 h-12 bg-white/90 text-gray-800 border-0 w-full"
// // //               value={search}
// // //               onChange={(e) => setSearch(e.target.value)}
// // //             />
// // //           </div>

// // //           {/* Filters */}
// // //           <div className="flex gap-4 w-full max-w-4xl justify-center flex-wrap">
// // //             {subjects.length > 0 && (
// // //               <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// // //                 <SelectTrigger 
// // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // //                   className="w-[240px] h-12 border-0"
// // //                 >
// // //                   <SelectValue placeholder="All Subjects" />
// // //                 </SelectTrigger>
// // //                 <SelectContent>
// // //                   <SelectItem value="all">All Subjects ({questionsCount})</SelectItem>
// // //                   {subjects.map(subject => (
// // //                     <SelectItem key={subject} value={subject}>
// // //                       {subject} ({subjectCounts[subject]})
// // //                     </SelectItem>
// // //                   ))}
// // //                 </SelectContent>
// // //               </Select>
// // //             )}

// // //             {/* Year Filter */}
// // //             {years.length > 0 && (
// // //               <Select value={yearFilter} onValueChange={setYearFilter}>
// // //                 <SelectTrigger 
// // //                   style={{backgroundColor: colors.tabs, color: colors.text}} 
// // //                   className="w-[180px] h-12 border-0"
// // //                 >
// // //                   <SelectValue placeholder="All Years" />
// // //                 </SelectTrigger>
// // //                 <SelectContent>
// // //                   <SelectItem value="all">All Years ({questionsCount})</SelectItem>
// // //                   {years.map(year => (
// // //                     <SelectItem key={year} value={year}>
// // //                       {year} ({yearCounts[year]})
// // //                     </SelectItem>
// // //                   ))}
// // //                 </SelectContent>
// // //               </Select>
// // //             )}

// // //             <div style={{backgroundColor: colors.tabs}} className="p-1 rounded-xl">
// // //               <div className="flex divide-x divide-gray-200 rounded-lg overflow-hidden">
// // //                 <Button 
// // //                   variant="ghost" 
// // //                   style={{
// // //                     backgroundColor: reviewFilter === 'all' ? 'white' : 'transparent',
// // //                     color: reviewFilter === 'all' ? colors.primary : colors.text
// // //                   }}
// // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // //                   onClick={() => setReviewFilter('all')}
// // //                 >
// // //                   All Reviews ({questionsCount})
// // //                 </Button>
// // //                 <Button 
// // //                   variant="ghost" 
// // //                   style={{
// // //                     backgroundColor: reviewFilter === 'got-it' ? 'white' : 'transparent',
// // //                     color: reviewFilter === 'got-it' ? colors.primary : colors.text
// // //                   }}
// // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // //                   onClick={() => setReviewFilter('got-it')}
// // //                 >
// // //                   Got It ({reviewCounts.gotIt})
// // //                 </Button>
// // //                 <Button 
// // //                   variant="ghost" 
// // //                   style={{
// // //                     backgroundColor: reviewFilter === 'review' ? 'white' : 'transparent',
// // //                     color: reviewFilter === 'review' ? colors.primary : colors.text
// // //                   }}
// // //                   className="px-4 py-2 h-auto rounded-none hover:bg-white/80"
// // //                   onClick={() => setReviewFilter('review')}
// // //                 >
// // //                   Need Review ({reviewCounts.review})
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default MCQHero;
// // "use client"
// // import React from 'react';
// // import { Search, ArrowLeft, BookOpen, CheckCircle, RotateCcw, Filter, BookOpenCheck } from 'lucide-react';
// // import { Input } from "@/components/ui/input";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import Link from 'next/link';

// // const MCQHero = ({ 
// //   title = "Medical MCQ Bank",
// //   questionsCount = 0,
// //   reviewCounts = { gotIt: 0, review: 0, notReviewed: 0 },
// //   subjects = [],
// //   subjectCounts = {},
// //   years = [],
// //   yearCounts = {},
// //   search = "",
// //   setSearch,
// //   subjectFilter = "all",
// //   setSubjectFilter,
// //   yearFilter = "all",
// //   setYearFilter,
// //   reviewFilter = "all",
// //   setReviewFilter,
// //   examId
// // }) => {
// //   return (
// //     <div className="bg-gray-50 border-b">
// //       <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
// //         {/* Back link (conditionally rendered) */}
// //         {examId && (
// //           <div className="mb-6">
// //             <Link 
// //               href={`/exams/${examId}`} 
// //               className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-base"
// //             >
// //               <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-0.5 transition-transform" />
// //               <span>Back to {title !== "Medical MCQ Bank" ? title : "Exam"}</span>
// //             </Link>
// //           </div>
// //         )}

// //         <div className="flex flex-col items-center">
// //           <h1 className="text-2xl md:text-4xl font-bold mb-10 text-gray-800 tracking-tight">{title}</h1>
          
// //           {/* Stats Cards */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
// //             <Card className="border-0 shadow-lg bg-white rounded-xl overflow-hidden">
// //               <CardContent className="p-0">
// //                 <div className="flex items-stretch h-full">
// //                   <div className="bg-indigo-600 p-4 flex items-center justify-center">
// //                     <BookOpenCheck className="h-8 w-8 text-white" />
// //                   </div>
// //                   <div className="flex flex-col justify-center p-6 flex-1">
// //                     <span className="text-3xl md:text-4xl font-bold text-gray-800">{questionsCount}</span>
// //                     <span className="text-base font-medium text-gray-600 mt-1">Total Questions</span>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
            
// //             <Card className="border-0 shadow-lg bg-white rounded-xl overflow-hidden">
// //               <CardContent className="p-0">
// //                 <div className="flex items-stretch h-full">
// //                   <div className="bg-emerald-600 p-4 flex items-center justify-center">
// //                     <CheckCircle className="h-8 w-8 text-white" />
// //                   </div>
// //                   <div className="flex flex-col justify-center p-6 flex-1">
// //                     <span className="text-3xl md:text-4xl font-bold text-emerald-600">{reviewCounts.gotIt}</span>
// //                     <span className="text-base font-medium text-gray-600 mt-1">Got It</span>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
            
// //             <Card className="border-0 shadow-lg bg-white rounded-xl overflow-hidden">
// //               <CardContent className="p-0">
// //                 <div className="flex items-stretch h-full">
// //                   <div className="bg-amber-600 p-4 flex items-center justify-center">
// //                     <RotateCcw className="h-8 w-8 text-white" />
// //                   </div>
// //                   <div className="flex flex-col justify-center p-6 flex-1">
// //                     <span className="text-3xl md:text-4xl font-bold text-amber-600">{reviewCounts.review}</span>
// //                     <span className="text-base font-medium text-gray-600 mt-1">Need Review</span>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Search */}
// //           <div className="relative w-full max-w-3xl mb-8">
// //             <div className="absolute left-5 top-1/2 -translate-y-1/2">
// //               <Search className="h-6 w-6 text-gray-500" />
// //             </div>
// //             <Input
// //               placeholder="Search questions..."
// //               className="pl-14 h-16 text-lg border-gray-300 shadow-md rounded-xl w-full focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 bg-white"
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //             />
// //           </div>

// //           {/* Filters */}
// //           <div className="w-full max-w-5xl bg-white p-6 rounded-xl shadow-md border border-gray-100">
// //             <div className="flex flex-col gap-6">
// //               <div className="flex flex-col md:flex-row md:items-end gap-4">
// //                 {/* Subject Filter */}
// //                 {subjects.length > 0 && (
// //                   <div className="w-full md:w-auto">
// //                     <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700">
// //                       <Filter className="h-4 w-4" />
// //                       SUBJECT
// //                     </div>
// //                     <Select value={subjectFilter} onValueChange={setSubjectFilter}>
// //                       <SelectTrigger 
// //                         className="w-full md:w-[280px] h-14 text-base bg-gray-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 rounded-lg"
// //                       >
// //                         <SelectValue placeholder="All Subjects" />
// //                       </SelectTrigger>
// //                       <SelectContent className="max-h-80">
// //                         <SelectItem value="all" className="text-base py-3">All Subjects ({questionsCount})</SelectItem>
// //                         {subjects.map(subject => (
// //                           <SelectItem key={subject} value={subject} className="text-base py-3">
// //                             {subject} <Badge variant="outline" className="ml-2 bg-gray-100 text-base py-1">{subjectCounts[subject]}</Badge>
// //                           </SelectItem>
// //                         ))}
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 )}

// //                 {/* Year Filter */}
// //                 {years.length > 0 && (
// //                   <div className="w-full md:w-auto">
// //                     <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700">
// //                       <Filter className="h-4 w-4" />
// //                       YEAR
// //                     </div>
// //                     <Select value={yearFilter} onValueChange={setYearFilter}>
// //                       <SelectTrigger 
// //                         className="w-full md:w-[200px] h-14 text-base bg-gray-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 rounded-lg"
// //                       >
// //                         <SelectValue placeholder="All Years" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="all" className="text-base py-3">All Years ({questionsCount})</SelectItem>
// //                         {years.map(year => (
// //                           <SelectItem key={year} value={year} className="text-base py-3">
// //                             {year} <Badge variant="outline" className="ml-2 bg-gray-100 text-base py-1">{yearCounts[year]}</Badge>
// //                           </SelectItem>
// //                         ))}
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Review Status Filter */}
// //               <div className="w-full">
// //                 <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-700">
// //                   <Filter className="h-4 w-4" />
// //                   REVIEW STATUS
// //                 </div>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                   <Button 
// //                     variant={reviewFilter === 'all' ? "default" : "outline"}
// //                     className={`h-16 text-base font-medium rounded-lg ${
// //                       reviewFilter === 'all' 
// //                         ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
// //                         : 'text-gray-700 hover:bg-gray-100 border-gray-300'
// //                     }`}
// //                     onClick={() => setReviewFilter('all')}
// //                   >
// //                     <BookOpen className="h-5 w-5 mr-2" />
// //                     All Questions
// //                     <Badge className={`ml-3 ${
// //                       reviewFilter === 'all' 
// //                         ? 'bg-indigo-500 text-white' 
// //                         : 'bg-gray-200 text-gray-800'
// //                     } text-base py-1 px-2.5`}>{questionsCount}</Badge>
// //                   </Button>
                  
// //                   <Button 
// //                     variant={reviewFilter === 'got-it' ? "default" : "outline"}
// //                     className={`h-16 text-base font-medium rounded-lg ${
// //                       reviewFilter === 'got-it' 
// //                         ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
// //                         : 'text-gray-700 hover:bg-gray-100 border-gray-300'
// //                     }`}
// //                     onClick={() => setReviewFilter('got-it')}
// //                   >
// //                     <CheckCircle className="h-5 w-5 mr-2" />
// //                     Got It
// //                     <Badge className={`ml-3 ${
// //                       reviewFilter === 'got-it' 
// //                         ? 'bg-emerald-500 text-white' 
// //                         : 'bg-gray-200 text-gray-800'
// //                     } text-base py-1 px-2.5`}>{reviewCounts.gotIt}</Badge>
// //                   </Button>
                  
// //                   <Button 
// //                     variant={reviewFilter === 'review' ? "default" : "outline"}
// //                     className={`h-16 text-base font-medium rounded-lg ${
// //                       reviewFilter === 'review' 
// //                         ? 'bg-amber-600 text-white hover:bg-amber-700' 
// //                         : 'text-gray-700 hover:bg-gray-100 border-gray-300'
// //                     }`}
// //                     onClick={() => setReviewFilter('review')}
// //                   >
// //                     <RotateCcw className="h-5 w-5 mr-2" />
// //                     Need Review
// //                     <Badge className={`ml-3 ${
// //                       reviewFilter === 'review' 
// //                         ? 'bg-amber-500 text-white' 
// //                         : 'bg-gray-200 text-gray-800'
// //                     } text-base py-1 px-2.5`}>{reviewCounts.review}</Badge>
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MCQHero;
// "use client"
// import React, { useState, useEffect } from 'react';
// import { 
//   Search, 
//   ArrowLeft, 
//   Filter,
//   BookOpen,
//   CheckCircle,
//   RotateCcw,
//   Calendar,
//   GraduationCap,
//   BookMarked,
//   ChevronDown
// } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import Link from 'next/link';

// const MCQHero = ({ 
//   title = "Medical MCQ Bank",
//   questionsCount = 0,
//   reviewCounts = { gotIt: 0, review: 0, notReviewed: 0 },
//   subjects = [],
//   subjectCounts = {},
//   years = [],
//   yearCounts = {},
//   search = "",
//   setSearch,
//   subjectFilter = "all",
//   setSubjectFilter,
//   yearFilter = "all",
//   setYearFilter,
//   reviewFilter = "all",
//   setReviewFilter,
//   examId
// }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Fixed Header */}
//       <div className={`sticky top-0 z-50 bg-white transition-all duration-300 border-b ${
//         isScrolled ? 'shadow-sm' : ''
//       }`}>
//         <div className="container mx-auto px-4">
//           <div className="h-16 flex items-center justify-between gap-4">
//             {/* Back Button (if examId exists) */}
//             {examId && (
//               <Link 
//                 href={`/exams/${examId}`}
//                 className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
//               >
//                 <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
//                 <span className="hidden sm:inline">Back</span>
//               </Link>
//             )}

//             {/* Title with Icon */}
//             <div className="flex items-center gap-3 flex-1">
//               <BookMarked className="h-6 w-6 text-blue-600" />
//               <div>
//                 <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
//                 {examId && (
//                   <p className="text-sm text-gray-500 hidden sm:block">Medical Examination</p>
//                 )}
//               </div>
//             </div>

//             {/* Stats & Filter Button */}
//             <div className="flex items-center gap-4 text-sm">
//               <span className="hidden sm:flex items-center gap-2 text-gray-500">
//                 <BookOpen className="h-4 w-4" />
//                 {questionsCount} questions
//               </span>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center gap-2"
//               >
//                 <Filter className="h-4 w-4" />
//                 Filters
//                 <Badge variant="secondary" className="ml-1">
//                   {Object.values([
//                     subjectFilter !== 'all',
//                     yearFilter !== 'all',
//                     reviewFilter !== 'all'
//                   ]).filter(Boolean).length}
//                 </Badge>
//                 <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filters Panel */}
//       <div className={`sticky top-16 z-40 bg-white border-b transition-all duration-300 overflow-hidden ${
//         showFilters ? 'max-h-[400px]' : 'max-h-0 border-transparent'
//       }`}>
//         <div className="container mx-auto px-4 py-4">
//           <div className="max-w-3xl mx-auto space-y-4">
//             {/* Search */}
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//               <Input
//                 placeholder="Search questions..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10 h-12 bg-white border-gray-300 focus:border-gray-900 focus:ring-0 rounded-lg w-full"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {/* Subject Filter */}
//               {subjects.length > 0 && (
//                 <div className="space-y-1.5">
//                   <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
//                     <GraduationCap className="h-4 w-4" />
//                     Subject
//                   </label>
//                   <Select value={subjectFilter} onValueChange={setSubjectFilter}>
//                     <SelectTrigger className="h-12 bg-white border-gray-300 focus:border-gray-900 focus:ring-0">
//                       <SelectValue placeholder="All Subjects" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Subjects ({questionsCount})</SelectItem>
//                       {subjects.map(subject => (
//                         <SelectItem key={subject} value={subject}>
//                           {subject} ({subjectCounts[subject]})
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               )}

//               {/* Year Filter */}
//               {years.length > 0 && (
//                 <div className="space-y-1.5">
//                   <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
//                     <Calendar className="h-4 w-4" />
//                     Year
//                   </label>
//                   <Select value={yearFilter} onValueChange={setYearFilter}>
//                     <SelectTrigger className="h-12 bg-white border-gray-300 focus:border-gray-900 focus:ring-0">
//                       <SelectValue placeholder="All Years" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Years ({questionsCount})</SelectItem>
//                       {years.map(year => (
//                         <SelectItem key={year} value={year}>
//                           {year} ({yearCounts[year]})
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               )}
//             </div>

//             {/* Review Status Filter */}
//             <div className="space-y-1.5">
//               <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
//                 <BookOpen className="h-4 w-4" />
//                 Review Status
//               </label>
//               <div className="flex flex-wrap gap-2">
//                 <Button
//                   variant={reviewFilter === 'all' ? 'default' : 'outline'}
//                   onClick={() => setReviewFilter('all')}
//                   className="flex-1 h-12"
//                 >
//                   <BookOpen className="h-4 w-4 mr-2" />
//                   All ({questionsCount})
//                 </Button>
//                 <Button
//                   variant={reviewFilter === 'got-it' ? 'default' : 'outline'}
//                   onClick={() => setReviewFilter('got-it')}
//                   className="flex-1 h-12"
//                 >
//                   <CheckCircle className="h-4 w-4 mr-2" />
//                   Got It ({reviewCounts.gotIt})
//                 </Button>
//                 <Button
//                   variant={reviewFilter === 'review' ? 'default' : 'outline'}
//                   onClick={() => setReviewFilter('review')}
//                   className="flex-1 h-12"
//                 >
//                   <RotateCcw className="h-4 w-4 mr-2" />
//                   Need Review ({reviewCounts.review})
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Progress Stats - Only visible when filters are hidden */}
//       <div className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
//         !showFilters ? 'max-h-[200px] py-4 border-b' : 'max-h-0'
//       }`}>
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4">
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="flex justify-center mb-2">
//                 <BookOpen className="h-5 w-5 text-blue-600" />
//               </div>
//               <div className="text-2xl font-bold text-gray-900">{questionsCount}</div>
//               <div className="text-sm text-gray-500 mt-1">Total</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="flex justify-center mb-2">
//                 <CheckCircle className="h-5 w-5 text-green-600" />
//               </div>
//               <div className="text-2xl font-bold text-green-600">{reviewCounts.gotIt}</div>
//               <div className="text-sm text-gray-500 mt-1">Got It</div>
//             </div>
//             <div className="bg-white p-4 rounded-lg border text-center">
//               <div className="flex justify-center mb-2">
//                 <RotateCcw className="h-5 w-5 text-orange-600" />
//               </div>
//               <div className="text-2xl font-bold text-orange-600">{reviewCounts.review}</div>
//               <div className="text-sm text-gray-500 mt-1">Review</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MCQHero;
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowLeft, 
  Filter,
  BookOpen,
  CheckCircle,
  RotateCcw,
  Calendar,
  GraduationCap,
  BookMarked,
  ChevronDown,
  LayoutList,
  LayoutGrid,
  Rows,
  SquareStack,
  FileText
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

const MCQHero = ({ 
  title = "Medical MCQ Bank",
  questionsCount = 0,
  reviewCounts = { gotIt: 0, review: 0, notReviewed: 0 },
  subjects = [],
  subjectCounts = {},
  years = [],
  yearCounts = {},
  search = "",
  setSearch,
  subjectFilter = "all",
  setSubjectFilter,
  yearFilter = "all",
  setYearFilter,
  reviewFilter = "all",
  setReviewFilter,
  examId
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('all');
  const [contentType, setContentType] = useState('mcq');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="py-8 md:py-12 max-w-4xl mx-auto text-center">
            {examId && (
              <Link 
                href={`/exams/${examId}`}
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group mb-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Exams
              </Link>
            )}
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookMarked className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
            </div>
            
            <p className="text-gray-600 text-lg mb-8">
              Study and review {questionsCount} medical questions
            </p>

            {/* Content Type Selector */}
            <div className="flex justify-center gap-2 mb-8">
              <Button
                variant={contentType === 'mcq' ? 'default' : 'outline'}
                onClick={() => setContentType('mcq')}
                className="h-10"
              >
                <Rows className="h-4 w-4 mr-2" />
                MCQ
              </Button>
              <Button
                variant={contentType === 'flashcards' ? 'default' : 'outline'}
                onClick={() => setContentType('flashcards')}
                className="h-10"
              >
                <SquareStack className="h-4 w-4 mr-2" />
                Flashcards
              </Button>
              <Button
                variant={contentType === 'notes' ? 'default' : 'outline'}
                onClick={() => setContentType('notes')}
                className="h-10"
              >
                <FileText className="h-4 w-4 mr-2" />
                Notes
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{questionsCount}</div>
                <div className="text-sm text-gray-500 mt-1">Total</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">{reviewCounts.gotIt}</div>
                <div className="text-sm text-gray-500 mt-1">Got It</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-center">
                <div className="flex justify-center mb-2">
                  <RotateCcw className="h-5 w-5 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">{reviewCounts.review}</div>
                <div className="text-sm text-gray-500 mt-1">Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Controls */}
      <div className={`sticky top-0 z-50 bg-white border-b transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="py-4 flex flex-col sm:flex-row sm:h-16 sm:py-0 items-center gap-4">
            {/* Controls Row 1 - View Mode & Filters (Mobile) */}
            <div className="flex w-full items-center justify-between gap-4 sm:hidden">
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger className="h-10 w-[130px] border-gray-300">
                  <SelectValue>
                    <span className="flex items-center">
                      {viewMode === 'all' ? (
                        <><LayoutGrid className="h-4 w-4 mr-2" />All</>
                      ) : (
                        <><LayoutList className="h-4 w-4 mr-2" />Single</>
                      )}
                    </span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    <span className="flex items-center">
                      <LayoutGrid className="h-4 w-4 mr-2" />
                      View All
                    </span>
                  </SelectItem>
                  <SelectItem value="single">
                    <span className="flex items-center">
                      <LayoutList className="h-4 w-4 mr-2" />
                      One by One
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="h-10 flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <Badge variant="secondary" className="ml-2">
                  {[
                    subjectFilter !== 'all',
                    yearFilter !== 'all',
                    reviewFilter !== 'all'
                  ].filter(Boolean).length}
                </Badge>
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 h-10 bg-white border-gray-300 focus:border-gray-900 focus:ring-0 rounded-full w-full"
              />
            </div>

            {/* Desktop Controls */}
            <div className="hidden sm:flex items-center gap-4">
              {/* View Mode Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('all')}
                  className="h-10"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  View All
                </Button>
                <Button
                  variant={viewMode === 'single' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('single')}
                  className="h-10"
                >
                  <LayoutList className="h-4 w-4 mr-2" />
                  One by One
                </Button>
              </div>

              {/* Filter Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="h-10 flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <Badge variant="secondary" className="ml-2">
                  {[
                    subjectFilter !== 'all',
                    yearFilter !== 'all',
                    reviewFilter !== 'all'
                  ].filter(Boolean).length}
                </Badge>
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <div className={`bg-white border-b transition-all duration-300 overflow-hidden ${
        showFilters ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subjects.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Subject
                  </label>
                  <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="All Subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects ({questionsCount})</SelectItem>
                      {subjects.map(subject => (
                        <SelectItem key={subject} value={subject}>
                          {subject} ({subjectCounts[subject]})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {years.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Year
                  </label>
                  <Select value={yearFilter} onValueChange={setYearFilter}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years ({questionsCount})</SelectItem>
                      {years.map(year => (
                        <SelectItem key={year} value={year}>
                          {year} ({yearCounts[year]})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Review Status
              </label>
              <div className="flex gap-2">
                <Button
                  variant={reviewFilter === 'all' ? 'default' : 'outline'}
                  onClick={() => setReviewFilter('all')}
                  className="flex-1 h-10"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  All ({questionsCount})
                </Button>
                <Button
                  variant={reviewFilter === 'got-it' ? 'default' : 'outline'}
                  onClick={() => setReviewFilter('got-it')}
                  className="flex-1 h-10"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Got It ({reviewCounts.gotIt})
                </Button>
                <Button
                  variant={reviewFilter === 'review' ? 'default' : 'outline'}
                  onClick={() => setReviewFilter('review')}
                  className="flex-1 h-10"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Need Review ({reviewCounts.review})
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MCQHero;