// // import React from 'react';
// // import { Search, Filter, Rows, SquareStack, FileText } from 'lucide-react';
// // import { Input } from "@/components/ui/input";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Button } from "@/components/ui/button";
// // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Card } from "@/components/ui/card";

// // const HeaderHero = ({ 
// //   examName = "",
// //   activeView = "mcq",
// //   onViewChange,
// //   searchQuery = "",
// //   onSearchChange,
// //   selectedFilter = "all",
// //   onFilterChange,
// //   stats = {
// //     total: 0,
// //     correct: 0,
// //     incorrect: 0,
// //     remaining: 0
// //   }
// // }) => {
// //   return (
// //     <div className="border-b bg-white">
// //       <div className="container mx-auto px-4 py-6">
// //         {/* Top Section */}
// //         <div className="mb-6">
// //           <h1 className="text-2xl font-bold text-gray-900 mb-2">{examName}</h1>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             <Card className="p-4 bg-white">
// //               <div className="text-2xl font-bold">{stats.total}</div>
// //               <div className="text-sm text-gray-600">Total Questions</div>
// //             </Card>
// //             <Card className="p-4 bg-white">
// //               <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
// //               <div className="text-sm text-gray-600">Correct</div>
// //             </Card>
// //             <Card className="p-4 bg-white">
// //               <div className="text-2xl font-bold text-red-600">{stats.incorrect}</div>
// //               <div className="text-sm text-gray-600">Incorrect</div>
// //             </Card>
// //             <Card className="p-4 bg-white">
// //               <div className="text-2xl font-bold text-blue-600">{stats.remaining}</div>
// //               <div className="text-sm text-gray-600">Remaining</div>
// //             </Card>
// //           </div>
// //         </div>

// //         {/* Filters Section */}
// //         <div className="flex flex-col md:flex-row gap-4 mb-6">
// //           <div className="relative flex-1">
// //             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
// //             <Input
// //               placeholder="Search questions..."
// //               value={searchQuery}
// //               onChange={(e) => onSearchChange(e.target.value)}
// //               className="pl-10"
// //             />
// //           </div>
          
// //           <Select value={selectedFilter} onValueChange={onFilterChange}>
// //             <SelectTrigger className="w-full md:w-[200px]">
// //               <SelectValue>
// //                 {selectedFilter === 'all' && 'All Questions'}
// //                 {selectedFilter === 'correct' && 'Correct'}
// //                 {selectedFilter === 'incorrect' && 'Incorrect'}
// //                 {selectedFilter === 'unused' && 'Unused'}
// //                 {selectedFilter === 'pinned' && 'Pinned'}
// //               </SelectValue>
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Questions</SelectItem>
// //               <SelectItem value="correct">Correct</SelectItem>
// //               <SelectItem value="incorrect">Incorrect</SelectItem>
// //               <SelectItem value="unused">Unused</SelectItem>
// //               <SelectItem value="pinned">Pinned</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>

// //         {/* Tabs Navigation */}
// //         <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
// //           <TabsList className="inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1">
// //             <TabsTrigger
// //               value="mcq"
// //               className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
// //             >
// //               <Rows className="mr-2 h-4 w-4" />
// //               MCQ
// //             </TabsTrigger>
// //             <TabsTrigger
// //               value="flashcards"
// //               className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
// //             >
// //               <SquareStack className="mr-2 h-4 w-4" />
// //               Flashcards
// //             </TabsTrigger>
// //             <TabsTrigger
// //               value="notes"
// //               className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
// //             >
// //               <FileText className="mr-2 h-4 w-4" />
// //               Notes
// //             </TabsTrigger>
// //           </TabsList>
// //         </Tabs>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeaderHero;
// import React from 'react';
// import { Search, Filter, Rows, SquareStack, FileText, Clock, Star, BookOpen } from 'lucide-react';
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const HeaderHero = ({ 
//   examName = "",
//   activeView = "mcq",
//   onViewChange,
//   searchQuery = "",
//   onSearchChange,
//   selectedFilter = "all",
//   onFilterChange,
//   stats = {
//     total: 0,
//     correct: 0,
//     incorrect: 0,
//     remaining: 0
//   }
// }) => {
//   // Filter options based on active view
//   const filterOptions = {
//     mcq: [
//       { value: 'all', label: 'All Questions' },
//       { value: 'correct', label: 'Correct' },
//       { value: 'incorrect', label: 'Incorrect' },
//       { value: 'unanswered', label: 'Unanswered' },
//       { value: 'flagged', label: 'Flagged' }
//     ],
//     flashcards: [
//       { value: 'all', label: 'All Cards' },
//       { value: 'due', label: 'Due Today' },
//       { value: 'new', label: 'New Cards' },
//       { value: 'learning', label: 'Learning' },
//       { value: 'review', label: 'Review' }
//     ],
//     notes: [
//       { value: 'all', label: 'All Notes' },
//       { value: 'recent', label: 'Recent' },
//       { value: 'favorites', label: 'Favorites' },
//       { value: 'shared', label: 'Shared' }
//     ]
//   };

//   // Get current filter options based on active view
//   const currentFilterOptions = filterOptions[activeView] || filterOptions.mcq;

//   return (
//     <div className="border-b bg-white">
//       <div className="container mx-auto px-4 py-6">
//         {/* Top Section */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">{examName}</h1>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Card className="p-4 bg-white">
//               <div className="text-2xl font-bold">{stats.total}</div>
//               <div className="text-sm text-gray-600">Total Questions</div>
//             </Card>
//             <Card className="p-4 bg-white">
//               <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
//               <div className="text-sm text-gray-600">Correct</div>
//             </Card>
//             <Card className="p-4 bg-white">
//               <div className="text-2xl font-bold text-red-600">{stats.incorrect}</div>
//               <div className="text-sm text-gray-600">Incorrect</div>
//             </Card>
//             <Card className="p-4 bg-white">
//               <div className="text-2xl font-bold text-blue-600">{stats.remaining}</div>
//               <div className="text-sm text-gray-600">Remaining</div>
//             </Card>
//           </div>
//         </div>

//         {/* View Tabs */}
//         <div className="mb-6">
//           <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
//             <TabsList className="inline-flex h-10 bg-muted p-1 gap-2">
//               <TabsTrigger value="mcq" className="inline-flex items-center gap-2">
//                 <Rows className="h-4 w-4" />
//                 <span className="hidden sm:inline">MCQ Questions</span>
//                 <Badge variant="secondary" className="ml-2">{stats.total}</Badge>
//               </TabsTrigger>
//               <TabsTrigger value="flashcards" className="inline-flex items-center gap-2">
//                 <SquareStack className="h-4 w-4" />
//                 <span className="hidden sm:inline">Flashcards</span>
//               </TabsTrigger>
//               <TabsTrigger value="notes" className="inline-flex items-center gap-2">
//                 <FileText className="h-4 w-4" />
//                 <span className="hidden sm:inline">Notes</span>
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         {/* Secondary Navigation based on active view */}
//         <div className="mb-6">
//           <div className="flex flex-wrap gap-2">
//             {activeView === 'mcq' && (
//               <>
//                 <Button variant="ghost" size="sm" className="inline-flex items-center gap-2">
//                   <Clock className="h-4 w-4" />
//                   <span>Recent</span>
//                 </Button>
//                 <Button variant="ghost" size="sm" className="inline-flex items-center gap-2">
//                   <Star className="h-4 w-4" />
//                   <span>Flagged</span>
//                 </Button>
//               </>
//             )}
//             {activeView === 'flashcards' && (
//               <>
//                 <Button variant="ghost" size="sm">New Cards</Button>
//                 <Button variant="ghost" size="sm">Due Today</Button>
//                 <Button variant="ghost" size="sm">Review</Button>
//               </>
//             )}
//             {activeView === 'notes' && (
//               <>
//                 <Button variant="ghost" size="sm">My Notes</Button>
//                 <Button variant="ghost" size="sm">Shared</Button>
//                 <Button variant="ghost" size="sm">Favorites</Button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* Filters Section */}
//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input
//               placeholder={`Search ${activeView === 'mcq' ? 'questions' : activeView}...`}
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//               className="pl-10"
//             />
//           </div>
          
//           <Select value={selectedFilter} onValueChange={onFilterChange}>
//             <SelectTrigger className="w-full md:w-[200px]">
//               <SelectValue placeholder="Filter by..." />
//             </SelectTrigger>
//             <SelectContent>
//               {currentFilterOptions.map((option) => (
//                 <SelectItem key={option.value} value={option.value}>
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           {/* Additional view-specific filters */}
//           {activeView === 'mcq' && (
//             <Select defaultValue="all">
//               <SelectTrigger className="w-full md:w-[200px]">
//                 <SelectValue placeholder="Subject" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Subjects</SelectItem>
//                 <SelectItem value="anatomy">Anatomy</SelectItem>
//                 <SelectItem value="physiology">Physiology</SelectItem>
//                 <SelectItem value="pathology">Pathology</SelectItem>
//               </SelectContent>
//             </Select>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderHero;
'use client';

import React from 'react';
import { Search, Filter, Rows, SquareStack, FileText, Clock, Star, BookOpen } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExamHeader = ({ 
  examName,
  activeView,
  onViewChange,
  searchQuery,
  onSearchChange,
  selectedFilter,
  onFilterChange,
  stats,
  onRecentClick,
  onFlaggedClick,
  onSubjectChange
}) => {
  // Filter options based on active view
  const filterOptions = {
    mcq: [
      { value: 'all', label: 'All Questions' },
      { value: 'correct', label: 'Correct' },
      { value: 'incorrect', label: 'Incorrect' },
      { value: 'unanswered', label: 'Unanswered' },
      { value: 'flagged', label: 'Flagged' }
    ],
    flashcards: [
      { value: 'all', label: 'All Cards' },
      { value: 'due', label: 'Due Today' },
      { value: 'new', label: 'New Cards' },
      { value: 'learning', label: 'Learning' },
      { value: 'review', label: 'Review' }
    ],
    notes: [
      { value: 'all', label: 'All Notes' },
      { value: 'recent', label: 'Recent' },
      { value: 'favorites', label: 'Favorites' },
      { value: 'shared', label: 'Shared' }
    ]
  };

  const subjectOptions = [
    { value: 'all', label: 'All Subjects' },
    { value: 'anatomy', label: 'Anatomy' },
    { value: 'physiology', label: 'Physiology' },
    { value: 'pathology', label: 'Pathology' },
    { value: 'pharmacology', label: 'Pharmacology' },
    { value: 'biochemistry', label: 'Biochemistry' }
  ];

  return (
    <div className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section with Stats */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{examName}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 bg-white">
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-sm text-gray-600">Total Questions</div>
            </Card>
            <Card className="p-4 bg-white">
              <div className="text-2xl font-bold text-green-600">{stats.correct}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </Card>
            <Card className="p-4 bg-white">
              <div className="text-2xl font-bold text-red-600">{stats.incorrect}</div>
              <div className="text-sm text-gray-600">Incorrect</div>
            </Card>
            <Card className="p-4 bg-white">
              <div className="text-2xl font-bold text-blue-600">{stats.remaining}</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </Card>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="space-y-6">
          {/* View Tabs */}
          <Tabs value={activeView} onValueChange={onViewChange} className="w-full">
            <TabsList className="inline-flex h-10 bg-muted p-1 gap-2">
              <TabsTrigger value="mcq" className="inline-flex items-center gap-2">
                <Rows className="h-4 w-4" />
                <span className="hidden sm:inline">MCQ Questions</span>
                <Badge variant="secondary" className="ml-2">{stats.total}</Badge>
              </TabsTrigger>
              <TabsTrigger value="flashcards" className="inline-flex items-center gap-2">
                <SquareStack className="h-4 w-4" />
                <span className="hidden sm:inline">Flashcards</span>
              </TabsTrigger>
              <TabsTrigger value="notes" className="inline-flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Notes</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onRecentClick}
              className="inline-flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              <span>Recent</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onFlaggedClick}
              className="inline-flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              <span>Flagged</span>
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={`Search ${activeView === 'mcq' ? 'questions' : activeView}...`}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status Filter */}
            <Select value={selectedFilter} onValueChange={onFilterChange}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions[activeView]?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Subject Filter */}
            {activeView === 'mcq' && (
              <Select defaultValue="all" onValueChange={onSubjectChange}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjectOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamHeader;