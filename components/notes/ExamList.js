// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import Header from "@/components/Header";

// // // Mock data - replace with actual data fetching
// // const examsData = [
// //   {
// //     id: "usmle-step1",
// //     title: "USMLE Step 1",
// //     category: "Medical License",
// //     description: "Comprehensive exam focusing on basic science concepts",
// //     questionCount: 280,
// //     averageTime: "8 hours",
// //     popularity: "High",
// //     difficulty: "Hard",
// //     isFeatured: true,
// //   },
// //   {
// //     id: "nclex-rn",
// //     title: "NCLEX-RN",
// //     category: "Nursing",
// //     description: "National Council Licensure Examination for Registered Nurses",
// //     questionCount: 265,
// //     averageTime: "6 hours",
// //     popularity: "Very High",
// //     difficulty: "Medium",
// //     isFeatured: true,
// //   },
// //   {
// //     id: "mcat",
// //     title: "MCAT",
// //     category: "Medical School Admission",
// //     description: "Medical College Admission Test for prospective medical students",
// //     questionCount: 230,
// //     averageTime: "7.5 hours",
// //     popularity: "High",
// //     difficulty: "Hard",
// //     isFeatured: false,
// //   },
// //   {
// //     id: "pance",
// //     title: "PANCE",
// //     category: "Physician Assistant",
// //     description: "Physician Assistant National Certifying Examination",
// //     questionCount: 300,
// //     averageTime: "5 hours",
// //     popularity: "Medium",
// //     difficulty: "Medium",
// //     isFeatured: false,
// //   },
// //   {
// //     id: "naplex",
// //     title: "NAPLEX",
// //     category: "Pharmacy",
// //     description: "North American Pharmacist Licensure Examination",
// //     questionCount: 250,
// //     averageTime: "6 hours",
// //     popularity: "Medium",
// //     difficulty: "Hard",
// //     isFeatured: false,
// //   },
// //   {
// //     id: "comlex-level-1",
// //     title: "COMLEX Level 1",
// //     category: "Osteopathic Medicine",
// //     description: "Comprehensive Osteopathic Medical Licensing Examination",
// //     questionCount: 352,
// //     averageTime: "8 hours",
// //     popularity: "Medium",
// //     difficulty: "Hard",
// //     isFeatured: false,
// //   }
// // ];

// // const colors = {
// //   primary: "#007832",
// //   background: "#FFFFFF",
// //   white: "#FFFFFF",
// //   text: "#000000"
// // };

// // const ExamList = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
  
// //   // Filter exams based on search term
// //   const filteredExams = examsData.filter(exam => {
// //     const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //                           exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //                           exam.category.toLowerCase().includes(searchTerm.toLowerCase());
// //     return matchesSearch;
// //   });

// //   return (
// //     <div className="min-h-screen flex flex-col bg-white">
// //       <Header />
      
// //       <main className="flex-grow">
// //         {/* Minimalist Search Section */}
// //         <div className="max-w-6xl mx-auto px-4 py-10">
// //           <div className="max-w-2xl mx-auto">
// //             <h1 className="text-3xl font-bold text-center mb-8">
// //               Medical Exam Preparation
// //             </h1>
            
// //             <div className="relative mb-12">
// //               <Input
// //                 type="text"
// //                 placeholder="Search for an exam..."
// //                 className="pl-10 pr-4 py-3 h-12 rounded-md text-gray-800 border border-gray-200 shadow-sm"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //               <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Exams List */}
// //         <div className="max-w-6xl mx-auto px-4 pb-16">
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-xl font-medium">Available Exams</h2>
// //             {searchTerm && (
// //               <div className="text-sm text-gray-600">
// //                 Showing {filteredExams.length} of {examsData.length} exams
// //               </div>
// //             )}
// //           </div>
          
// //           {filteredExams.length > 0 ? (
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {filteredExams.map(exam => (
// //                 <Link href={`/exams/${exam.id}`} key={exam.id} className="block group">
// //                   <div className="bg-gray-50 rounded-lg border-2 border-stone-300 hover:shadow transition-shadow p-6 border border-gray-100 h-full flex flex-col">
// //                     <div className="mb-1">
// //                       <Badge className="bg-gray-100 text-gray-700 font-normal">
// //                         {exam.category}
// //                       </Badge>
// //                     </div>
// //                     <h3 
// //                       className="text-lg font-semibold mb-2 group-hover:text-[#007832] transition-colors" 
// //                       style={{color: colors.text}}
// //                     >
// //                       {exam.title}
// //                     </h3>
// //                     <p className="text-gray-600 mb-6 flex-grow text-sm">
// //                       {exam.description}
// //                     </p>
                    
// //                     <div className="border-t border-gray-100 pt-4 mt-auto">
// //                       <div className="flex justify-between items-center mb-4">
// //                         <div className="flex items-center text-sm text-gray-500">
// //                           <Clock className="h-4 w-4 mr-1.5" />
// //                           <span>{exam.averageTime}</span>
// //                         </div>
// //                         <div>
// //                           <Badge
// //                             className={`${
// //                               exam.difficulty === "Hard" ? "bg-red-50 text-red-800" :
// //                               exam.difficulty === "Medium" ? "bg-yellow-50 text-yellow-800" :
// //                               "bg-green-50 text-green-800"
// //                             }`}
// //                           >
// //                             {exam.difficulty}
// //                           </Badge>
// //                         </div>
// //                       </div>
                      
// //                       <div className="flex items-center text-sm text-gray-500 mb-4">
// //                         <BookOpen className="h-4 w-4 mr-1.5" />
// //                         <span>{exam.questionCount} questions</span>
// //                       </div>
                      
// //                       <Button 
// //                         className="w-full group-hover:bg-[#00682d] transition-colors"
// //                         style={{ backgroundColor: colors.primary }}
// //                       >
// //                         View Details <ArrowRight className="ml-2 h-4 w-4" />
// //                       </Button>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           ) : (
// //             <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-100">
// //               <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
// //                 <Search className="h-6 w-6 text-gray-400" />
// //               </div>
// //               <h3 className="text-lg font-medium mb-2">No exams found</h3>
// //               <p className="text-gray-600 mb-4 text-sm">
// //                 We couldn't find any exams matching "{searchTerm}"
// //               </p>
// //               <Button
// //                 variant="outline"
// //                 className="border-gray-200 text-sm"
// //                 onClick={() => setSearchTerm("")}
// //               >
// //                 Clear Search
// //               </Button>
// //             </div>
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ExamList;
// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import Header from "@/components/Header";
// import { createClient } from '@supabase/supabase-js';

// // Initialize Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// const colors = {
//   primary: "#000000",
//   background: "#FFFFFF",
//   white: "#FFFFFF",
//   text: "#000000"
// };

// const ExamList = () => {
//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchExams = async () => {
//       try {
//         setLoading(true);
        
//         // Fetch exams from Supabase where category is 'Medical'
//         const { data, error } = await supabase
//           .from('exams')
//           .select(`
//             id,
//             name,
//             category,
//             description,
//             slug,
//             is_active,
//             created_at
//           `)
//           .eq('category', 'Medical')
//           .eq('is_active', true);
          
//         if (error) throw error;
        
//         // Get additional stats for each exam
//         const examsWithStats = await Promise.all(
//           data.map(async (exam) => {
//             // Get question count
//             const { count: questionCount, error: countError } = await supabase
//               .from('questions')
//               .select('id', { count: 'exact', head: true })
//               .eq('exam_id', exam.id)
//               .eq('is_active', true);
              
//             if (countError) console.error('Error fetching question count:', countError);
            
//             // We're no longer calculating difficulty
            
//             // Determine average time (roughly 1.5 minutes per question)
//             const totalMinutes = questionCount ? questionCount * 1.5 : 0;
//             const hours = Math.floor(totalMinutes / 60);
//             const minutes = Math.round(totalMinutes % 60);
//             const averageTime = hours > 0 
//               ? `${hours} hour${hours > 1 ? 's' : ''}${minutes > 0 ? ` ${minutes} min` : ''}`
//               : `${minutes} minutes`;
            
//             return {
//               id: exam.id,
//               title: exam.name,
//               category: exam.category,
//               description: exam.description || 'No description available',
//               questionCount: questionCount || 0,
//               averageTime,

//               slug: exam.slug,
//               isFeatured: false // You could determine this based on other criteria
//             };
//           })
//         );
        
//         setExams(examsWithStats);
//       } catch (err) {
//         console.error('Error fetching exams:', err);
//         setError('Failed to load exams. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExams();
//   }, []);

//   // Filter exams based on search term
//   const filteredExams = exams.filter(exam => {
//     const matchesSearch = 
//       exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       exam.category.toLowerCase().includes(searchTerm.toLowerCase());
    
//     return matchesSearch;
//   });

//   return (
//     <div className="min-h-screen flex flex-col bg-zinc-100/30">
//       <Header />
//       <main className="flex-grow py-6 bg-stone-200">
//         {/* Minimalist Search Section */}
//         <div className="max-w-6xl mx-auto px-4 py-10">
//           <div className="max-w-2xl mx-auto">
//             <h1 className="text-3xl font-bold text-center mb-8">
//               Medical Exam Preparation
//             </h1>
//             <div className="relative mb-12 bg-white">
//               <Input
//                 type="text"
//                 placeholder="Search for an exam..."
//                 className="pl-10 pr-4 py-3 h-12 rounded-md text-zinc-800 border border-zinc-200 focus:border-black focus-visible:ring-black shadow-sm"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Search className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
//             </div>
//           </div>
//         </div>

//         {/* Exams List */}
//         <div className="max-w-6xl mx-auto px-4 pb-16">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-xl font-medium">Available Exams</h2>
//             {searchTerm && (
//               <div className="text-sm text-zinc-600">
//                 Showing {filteredExams.length} of {exams.length} exams
//               </div>
//             )}
//           </div>

//           {loading ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
//               {[1, 2, 3, 4, 5, 6].map(i => (
//                 <div key={i} className="bg-zinc-50/50 rounded-lg p-6   h-full animate-pulse">
//                   <div className="w-24 h-6 bg-zinc-200 rounded mb-4"></div>
//                   <div className="w-full h-6 bg-zinc-200 rounded mb-2"></div>
//                   <div className="w-2/3 h-6 bg-zinc-200 rounded mb-6"></div>
//                   <div className="w-full h-32 bg-zinc-200 rounded"></div>
//                 </div>
//               ))}
//             </div>
//           ) : error ? (
//             <div className="bg-zinc-50 rounded-lg p-6 text-black text-center border border-zinc-200">
//               <p>{error}</p>
//               <Button 
//                 onClick={() => window.location.reload()}
//                 className="mt-4 bg-black hover:bg-zinc-800"
//               >
//                 Try Again
//               </Button>
//             </div>
//           ) : filteredExams.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredExams.map(exam => (
//                 <Link href={`/exams/${exam.slug}`} key={exam.id} className="block group">
//                   <div className="bg-zinc-50/50 backdrop-blur-sm rounded-lg border border-black border-2 hover:border-black transition-all p-6 h-full flex flex-col shadow-sm hover:shadow-md">
//                     <div className="mb-3">
//                       <Badge variant="secondary" className="font-medium px-3 py-1.5 bg-stone-300 text-zinc-900 border-none text-xs uppercase tracking-wide">
//                         {exam.category}
//                       </Badge>
//                     </div>
//                     <h3
//                       className="text-lg font-semibold mb-2 group-hover:text-black transition-colors"
//                     >
//                       {exam.title}
//                     </h3>
//                     <p className="text-zinc-700 mb-6 flex-grow text-sm leading-relaxed">
//                       {exam.description}
//                     </p>
//                     <div className="border-t border-zinc-200 pt-5 mt-auto">
//                       <div className="flex items-center mb-4">

//                       </div>
//                       <div className="flex items-center text-sm text-zinc-600 mb-4">
//                         <BookOpen className="h-4 w-4 mr-1.5" />
//                         <span>{exam.questionCount} questions</span>
//                       </div>
//                       <Button
//                         variant="default"
//                         className="w-full bg-black hover:bg-zinc-800 text-white transition-colors"
//                       >
//                         Try For Free <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-zinc-200">
//               <div className="w-12 h-12 mx-auto bg-zinc-50 rounded-full flex items-center justify-center mb-4">
//                 <Search className="h-6 w-6 text-zinc-400" />
//               </div>
//               <h3 className="text-lg font-medium mb-2">No exams found</h3>
//               <p className="text-zinc-600 mb-4 text-sm">
//                 We couldn't find any exams matching "{searchTerm}"
//               </p>
//               <Button
//                 variant="outline"
//                 className="border-zinc-200 text-sm hover:bg-zinc-50 hover:text-black"
//                 onClick={() => setSearchTerm("")}
//               >
//                 Clear Search
//               </Button>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ExamList;
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

// Mock data - replace with actual data fetching
const examsData = [
  {
    id: "usmle-step1",
    title: "USMLE Step 1",
    category: "Medical License",
    description: "Comprehensive exam focusing on basic science concepts",
    questionCount: 280,
    averageTime: "8 hours",
    popularity: "High",
    difficulty: "Hard",
    isFeatured: true,
  },
  {
    id: "nclex-rn",
    title: "NCLEX-RN",
    category: "Nursing",
    description: "National Council Licensure Examination for Registered Nurses",
    questionCount: 265,
    averageTime: "6 hours",
    popularity: "Very High",
    difficulty: "Medium",
    isFeatured: true,
  },
  {
    id: "mcat",
    title: "MCAT",
    category: "Medical School Admission",
    description: "Medical College Admission Test for prospective medical students",
    questionCount: 230,
    averageTime: "7.5 hours",
    popularity: "High",
    difficulty: "Hard",
    isFeatured: false,
  },
  {
    id: "pance",
    title: "PANCE",
    category: "Physician Assistant",
    description: "Physician Assistant National Certifying Examination",
    questionCount: 300,
    averageTime: "5 hours",
    popularity: "Medium",
    difficulty: "Medium",
    isFeatured: false,
  },
  {
    id: "naplex",
    title: "NAPLEX",
    category: "Pharmacy",
    description: "North American Pharmacist Licensure Examination",
    questionCount: 250,
    averageTime: "6 hours",
    popularity: "Medium",
    difficulty: "Hard",
    isFeatured: false,
  },
  {
    id: "comlex-level-1",
    title: "COMLEX Level 1",
    category: "Osteopathic Medicine",
    description: "Comprehensive Osteopathic Medical Licensing Examination",
    questionCount: 352,
    averageTime: "8 hours",
    popularity: "Medium",
    difficulty: "Hard",
    isFeatured: false,
  }
];

/* eslint-disable no-unused-vars */
const colors = {
  primary: "#007832",
  background: "#FFFFFF",
  white: "#FFFFFF",
  text: "#000000"
};
/* eslint-enable no-unused-vars */

const ExamList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter exams based on search term
  const filteredExams = examsData.filter(exam => {
    const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Minimalist Search Section */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              Medical Exam Preparation
            </h1>
            
            <div className="relative mb-12">
              <Input
                type="text"
                placeholder="Search for an exam..."
                className="pl-10 pr-4 py-3 h-12 rounded-md text-gray-800 border border-gray-200 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
        
        {/* Exams List */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-medium">Available Exams</h2>
            {searchTerm && (
              <div className="text-sm text-gray-600">
                Showing {filteredExams.length} of {examsData.length} exams
              </div>
            )}
          </div>
          
          {filteredExams.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExams.map(exam => (
                <Link href={`/exams/${exam.id}`} key={exam.id} className="block group">
                  <div className="bg-gray-50 rounded-lg border-2 border-stone-300 hover:shadow transition-shadow p-6 border border-gray-100 h-full flex flex-col">
                    <div className="mb-1">
                      <Badge className="bg-gray-100 text-gray-700 font-normal">
                        {exam.category}
                      </Badge>
                    </div>
                    <h3 
                      className="text-lg font-semibold mb-2 group-hover:text-[#007832] transition-colors" 
                      style={{color: colors.text}}
                    >
                      {exam.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow text-sm">
                      {exam.description}
                    </p>
                    
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{exam.averageTime}</span>
                        </div>
                        <div>
                          <Badge
                            className={`${
                              exam.difficulty === "Hard" ? "bg-red-50 text-red-800" :
                              exam.difficulty === "Medium" ? "bg-yellow-50 text-yellow-800" :
                              "bg-green-50 text-green-800"
                            }`}
                          >
                            {exam.difficulty}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <BookOpen className="h-4 w-4 mr-1.5" />
                        <span>{exam.questionCount} questions</span>
                      </div>
                      
                      <Button 
                        className="w-full group-hover:bg-[#00682d] transition-colors"
                        style={{ backgroundColor: colors.primary }}
                      >
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-100">
              <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No exams found</h3>
              <p className="text-gray-600 mb-4 text-sm">
                We couldn&apos;t find any exams matching &quot;{searchTerm}&quot;
              </p>
              <Button
                variant="outline"
                className="border-gray-200 text-sm"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          )}
          
          {/* Empty state message */}
          {filteredExams.length === 0 && !searchTerm && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center border border-gray-100">
              <h3 className="text-lg font-medium mb-2">No exams available</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Don&apos;t worry if you haven&apos;t found your perfect &quot;match&quot; yet!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ExamList;