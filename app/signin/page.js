// // "use client";

// // import Link from "next/link";
// // import { useState } from "react";
// // import { createClient } from "@/libs/supabase/client";
// // import toast from "react-hot-toast";
// // import config from "@/config";
// // import Header from "@/components/Header";
// // import { ArrowLeft } from "lucide-react";

// // export default function Signin() {
// //   const supabase = createClient();
// //   const [isLoading, setIsLoading] = useState(false);
  
// //   const handleSignin = async (e, options) => {
// //     e?.preventDefault();
// //     setIsLoading(true);
    
// //     try {
// //       const { provider } = options;
// //       const redirectURL = window.location.origin + "/api/auth/callback";
// //       await supabase.auth.signInWithOAuth({
// //         provider,
// //         options: {
// //           redirectTo: redirectURL,
// //         },
// //       });
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to sign in with Google");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-[#F6EFE8]">
// //       <Header />
      
// //       <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
// //         <div className="w-full max-w-md">
// //           {/* Back to Home Link */}
// //           <div className="text-center mb-8">
// //             <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
// //               <ArrowLeft className="w-4 h-4 mr-1" />
// //               Home
// //             </Link>
// //           </div>
          
// //           {/* Title */}
// //           <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
// //             Sign in to {config.appName}
// //           </h1>

// //           {/* Google Sign In Button */}
// //           <div className="mb-6">
// //             <button
// //               className="w-full py-3 px-4 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 rounded-md border border-gray-300 shadow-sm transition-colors"
// //               onClick={(e) => handleSignin(e, { provider: "google" })}
// //               disabled={isLoading}
// //             >
// //               {isLoading ? (
// //                 <span className="loading loading-spinner loading-xs mr-2"></span>
// //               ) : (
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="w-5 h-5 mr-3"
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
// //               <span className="font-medium">Sign In With Google</span>
// //             </button>
// //           </div>

// //           {/* No Account Text */}
// //           <div className="text-center text-sm text-gray-600">
// //             <p>
// //               Don't have an account?{" "}
// //               <Link href="/signup" className="text-[#007832] font-medium hover:underline">
// //                 Sign up
// //               </Link>
// //             </p>
// //           </div>
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
// import config from "@/config";
// import Header from "@/components/Header";
// import { ArrowLeft } from "lucide-react";

// export default function Signin() {
//   const supabase = createClient();
//   const [isLoading, setIsLoading] = useState(false);
  
//   const handleSignin = async (e, options) => {
//     e?.preventDefault();
//     setIsLoading(true);
//     try {
//       const { provider } = options;
//       const redirectURL = window.location.origin + "/api/auth/callback";
//       await supabase.auth.signInWithOAuth({
//         provider,
//         options: {
//           redirectTo: redirectURL,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to sign in with Google");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#F6EFE8]">
//       <Header />
      
//       <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
//         <div className="w-full max-w-md">
//           {/* Back to Home Link */}
//           <div className="text-center mb-8">
//             <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
//               <ArrowLeft className="w-4 h-4 mr-1" />
//               Home
//             </Link>
//           </div>
          
//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
//             Sign in to {config.appName}
//           </h1>
          
//           {/* Google Sign In Button */}
//           <div className="mb-6">
//             <button
//               className="w-full py-3 px-4 flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 rounded-md border border-gray-300 shadow-sm transition-colors"
//               onClick={(e) => handleSignin(e, { provider: "google" })}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <span className="loading loading-spinner loading-xs mr-2"></span>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5 mr-3"
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
//               <span className="font-medium">Sign In With Google</span>
//             </button>
//           </div>
          
//           {/* No Account Text */}
//           <div className="text-center text-sm text-gray-600">
//             <p>
//               Don&apos;t have an account?{" "}
//               <Link href="/signup" className="text-[#007832] font-medium hover:underline">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import { ClientSuspense } from "@/components/ClientWrapper";
import SigninContent from "@/components/SigninContent";

export default function SigninPage() {
  return (
    <ClientSuspense>
      <SigninContent />
    </ClientSuspense>
  );
}