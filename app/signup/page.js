// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { createClient } from "@/libs/supabase/client";
// // import toast from "react-hot-toast";
// // import config from "@/config";
// // import { ArrowLeft, Mail, User, CheckCircle, Lock } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import Header from "@/components/Header";

// // // DrNote Logo SVG Component
// // const DrNoteLogo = () => (
// //   <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// //     <rect width="40" height="40" rx="8" fill="#007832" />
// //     <path d="M8 12C8 10.8954 8.89543 10 10 10H22C27.5228 10 32 14.4772 32 20C32 25.5228 27.5228 30 22 30H10C8.89543 30 8 29.1046 8 28V12Z" fill="white"/>
// //     <path d="M14 16V24M14 16H22C23.6569 16 25 17.3431 25 19V21C25 22.6569 23.6569 24 22 24H14V16Z" stroke="#007832" strokeWidth="2" strokeLinecap="round"/>
// //     <path d="M26 15L29 15M27.5 10V13.5" stroke="#E8D8CE" strokeWidth="2" strokeLinecap="round"/>
// //   </svg>
// // );

// // export default function Signup() {
// //   const supabase = createClient();
// //   const [isLoading, setIsLoading] = useState(false);
  
// //   // Custom color palette
// //   const colors = {
// //     primary: "#007832",
// //     background: "#F6EFE8",
// //     accent: "#E8D8CE",
// //     text: "#000000"
// //   };

// //   const handleSignupWithGoogle = async () => {
// //     setIsLoading(true);
    
// //     try {
// //       const { error } = await supabase.auth.signInWithOAuth({
// //         provider: 'google',
// //         options: {
// //           redirectTo: `${window.location.origin}/api/auth/callback`,
// //         },
// //       });
      
// //       if (error) {
// //         throw error;
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to sign up with Google");
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-[#F6EFE8]">
// //       <Header/>
      
// //       <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
// //         <div className="w-full max-w-md">
// //           {/* Logo and Title */}
// //           <div className="flex flex-col items-center mb-6">
// //             <DrNoteLogo />
// //             <h1 className="text-3xl font-bold mt-4" style={{color: colors.text}}>
// //               Sign up to DrNote
// //             </h1>
// //           </div>
          
// //           {/* Free Trial Message */}
// //           <div className="text-center mb-10">
// //             <p className="text-gray-700 font-medium">
// //               Start your free one day trial today
// //             </p>
// //             <p className="text-gray-600 text-sm mt-2">
// //               Get full access to our comprehensive Qbank and study tools
// //             </p>
// //           </div>

// //           {/* Google Signup Button */}
// //           <div className="mb-8">
// //             <Button
// //               className="w-full py-6 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-sm"
// //               onClick={handleSignupWithGoogle}
// //               disabled={isLoading}
// //             >
// //               {isLoading ? (
// //                 <div className="h-5 w-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2"></div>
// //               ) : (
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="w-5 h-5 mr-2"
// //                   viewBox="0 0 48 48"
// //                 >
// //                   <path
// //                     fill="#FFC107"
// //                     d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
// //                   />
// //                   <path
// //                     fill="#FF3D00"
// //                     d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
// //                   />
// //                   <path
// //                     fill="#4CAF50"
// //                     d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
// //                   />
// //                   <path
// //                     fill="#1976D2"
// //                     d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
// //                   />
// //                 </svg>
// //               )}
// //               Sign up with Google
// //             </Button>
// //           </div>

// //           {/* Benefits Section */}
// //           <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
// //             <h3 className="font-semibold text-lg mb-4 text-center" style={{color: colors.primary}}>
// //               What you'll get:
// //             </h3>
// //             <ul className="space-y-3">
// //               <li className="flex items-start">
// //                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
// //                 <span className="text-gray-700">Comprehensive Qbank with 5,000+ questions</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
// //                 <span className="text-gray-700">High-yield medical flashcards</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
// //                 <span className="text-gray-700">Personalized study progress tracking</span>
// //               </li>
// //               <li className="flex items-start">
// //                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
// //                 <span className="text-gray-700">Custom exam creation</span>
// //               </li>
// //             </ul>
// //           </div>
          
// //           {/* Already have account */}
// //           <div className="text-center text-sm">
// //             <p className="text-gray-600">
// //               Already have an account?{" "}
// //               <Link href="/signin" className="text-green-700 font-medium hover:underline">
// //                 Sign in
// //               </Link>
// //             </p>
// //           </div>
          
// //           {/* Terms of Service */}
// //           <p className="text-center text-xs text-gray-500 mt-6">
// //             By signing up, you agree to our{" "}
// //             <Link href="/terms" className="underline hover:text-gray-700">
// //               Terms of Service
// //             </Link>{" "}
// //             and{" "}
// //             <Link href="/privacy" className="underline hover:text-gray-700">
// //               Privacy Policy
// //             </Link>
// //           </p>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { createClient } from "@/libs/supabase/client";
// import toast from "react-hot-toast";
// /* eslint-disable no-unused-vars */
// import config from "@/config";
// import { CheckCircle, Lock } from "lucide-react";
// /* eslint-enable no-unused-vars */
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";

// // DrNote Logo SVG Component
// const DrNoteLogo = () => (
//   <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect width="40" height="40" rx="8" fill="#007832" />
//     <path d="M8 12C8 10.8954 8.89543 10 10 10H22C27.5228 10 32 14.4772 32 20C32 25.5228 27.5228 30 22 30H10C8.89543 30 8 29.1046 8 28V12Z" fill="white"/>
//     <path d="M14 16V24M14 16H22C23.6569 16 25 17.3431 25 19V21C25 22.6569 23.6569 24 22 24H14V16Z" stroke="#007832" strokeWidth="2" strokeLinecap="round"/>
//     <path d="M26 15L29 15M27.5 10V13.5" stroke="#E8D8CE" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// export default function Signup() {
//   const supabase = createClient();
//   const [isLoading, setIsLoading] = useState(false);
  
//   // Custom color palette
//   const colors = {
//     primary: "#007832",
//     background: "#F6EFE8",
//     accent: "#E8D8CE",
//     text: "#000000"
//   };

//   const handleSignupWithGoogle = async () => {
//     setIsLoading(true);
    
//     try {
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//         options: {
//           redirectTo: `${window.location.origin}/api/auth/callback`,
//         },
//       });
      
//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to sign up with Google");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#F6EFE8]">
//       <Header/>
      
//       <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
//         <div className="w-full max-w-md">
//           {/* Logo and Title */}
//           <div className="flex flex-col items-center mb-6">
//             <DrNoteLogo />
//             <h1 className="text-3xl font-bold mt-4" style={{color: colors.text}}>
//               Sign up to DrNote
//             </h1>
//           </div>
          
//           {/* Free Trial Message */}
//           <div className="text-center mb-10">
//             <p className="text-gray-700 font-medium">
//               Start your free one day trial today
//             </p>
//             <p className="text-gray-600 text-sm mt-2">
//               Get full access to our comprehensive Qbank and study tools
//             </p>
//           </div>

//           {/* Google Signup Button */}
//           <div className="mb-8">
//             <Button
//               className="w-full py-6 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 shadow-sm"
//               onClick={handleSignupWithGoogle}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <div className="h-5 w-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2"></div>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 mr-2"
//                   viewBox="0 0 48 48"
//                 >
//                   <path
//                     fill="#FFC107"
//                     d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//                   />
//                   <path
//                     fill="#FF3D00"
//                     d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
//                   />
//                   <path
//                     fill="#4CAF50"
//                     d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//                   />
//                   <path
//                     fill="#1976D2"
//                     d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//                   />
//                 </svg>
//               )}
//               Sign up with Google
//             </Button>
//           </div>

//           {/* Benefits Section */}
//           <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
//             <h3 className="font-semibold text-lg mb-4 text-center" style={{color: colors.primary}}>
//               What you&apos;ll get:
//             </h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
//                 <span className="text-gray-700">Comprehensive Qbank with 5,000+ questions</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
//                 <span className="text-gray-700">High-yield medical flashcards</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
//                 <span className="text-gray-700">Personalized study progress tracking</span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
//                 <span className="text-gray-700">Custom exam creation</span>
//               </li>
//             </ul>
//           </div>
          
//           {/* Already have account */}
//           <div className="text-center text-sm">
//             <p className="text-gray-600">
//               Already have an account?{" "}
//               <Link href="/signin" className="text-green-700 font-medium hover:underline">
//                 Sign in
//               </Link>
//             </p>
//           </div>
          
//           {/* Terms of Service */}
//           <p className="text-center text-xs text-gray-500 mt-6">
//             By signing up, you agree to our{" "}
//             <Link href="/terms" className="underline hover:text-gray-700">
//               Terms of Service
//             </Link>{" "}
//             and{" "}
//             <Link href="/privacy" className="underline hover:text-gray-700">
//               Privacy Policy
//             </Link>
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }
import { ClientSuspense } from "@/components/ClientWrapper";
import SignupContent from "@/components/SignupContent";

export default function SignupPage() {
  return (
    <ClientSuspense>
      <SignupContent />
    </ClientSuspense>
  );
}