// // "use client";

// // import { useState } from "react";
// // import Link from "next/link";
// // import { CheckCircle, Lock } from "lucide-react";
// // import Header from "@/components/Header";
// // import { Button } from "@/components/ui/button";
// // import config from "@/config";

// // export default function UpgradePage() {
// //   const [isAnnual, setIsAnnual] = useState(false);

// //   // Custom color palette
// //   const colors = {
// //     primary: "#007832",
// //     background: "#F6EFE8",
// //     accent: "#E8D8CE",
// //     text: "#000000"
// //   };

// //   const plans = [
// //     {
// //       name: "Basic",
// //       description: "Perfect for students starting their medical journey",
// //       price: isAnnual ? 49 : 5.99,
// //       priceLabel: isAnnual ? "/year" : "/month",
// //       saveLabel: isAnnual ? "Save $23" : null,
// //       features: [
// //         "1,000+ Qbank questions",
// //         "Basic flashcards",
// //         "Progress tracking",
// //         "Mobile access"
// //       ],
// //       buttonText: "Start Free Trial",
// //       buttonVariant: "outline"
// //     },
// //     {
// //       name: "Premium",
// //       description: "Comprehensive learning for serious medical students",
// //       price: isAnnual ? 99 : 11.99,
// //       priceLabel: isAnnual ? "/year" : "/month",
// //       saveLabel: isAnnual ? "Save $45" : null,
// //       isFeatured: true,
// //       features: [
// //         "5,000+ Qbank questions",
// //         "Full flashcard library",
// //         "Advanced analytics",
// //         "Custom exams",
// //         "Performance insights",
// //         "Priority support"
// //       ],
// //       buttonText: "Upgrade Now",
// //       buttonVariant: "primary"
// //     },
// //     {
// //       name: "Professional",
// //       description: "Complete preparation for medical professionals",
// //       price: isAnnual ? 199 : 19.99,
// //       priceLabel: isAnnual ? "/year" : "/month",
// //       saveLabel: isAnnual ? "Save $60" : null,
// //       features: [
// //         "10,000+ Qbank questions",
// //         "Complete flashcard system",
// //         "AI-powered study recommendations",
// //         "Unlimited custom exams",
// //         "Performance insights",
// //         "Board-style questions",
// //         "1-on-1 tutoring sessions"
// //       ],
// //       buttonText: "Choose Professional",
// //       buttonVariant: "outline"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen flex flex-col bg-[#F6EFE8]">
// //       <Header />
      
// //       <main className="flex-grow py-12 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           {/* Page Title */}
// //           <div className="text-center mb-12">
// //             <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{color: colors.text}}>
// //               Upgrade Your DrNote Experience
// //             </h1>
// //             <p className="text-lg text-gray-700 max-w-2xl mx-auto">
// //               Choose the plan that fits your needs and take your medical education to the next level
// //             </p>
// //           </div>

// //           {/* Billing Toggle */}
// //           <div className="flex justify-center mb-12">
// //             <div className="bg-white rounded-full p-1 flex items-center shadow-sm">
// //               <button
// //                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
// //                   !isAnnual 
// //                     ? 'bg-green-600 text-white' 
// //                     : 'text-gray-700 hover:bg-gray-100'
// //                 }`}
// //                 onClick={() => setIsAnnual(false)}
// //               >
// //                 Monthly
// //               </button>
// //               <button
// //                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
// //                   isAnnual 
// //                     ? 'bg-green-600 text-white' 
// //                     : 'text-gray-700 hover:bg-gray-100'
// //                 }`}
// //                 onClick={() => setIsAnnual(true)}
// //               >
// //                 Annual
// //               </button>
// //             </div>
// //             {isAnnual && (
// //               <div className="ml-4 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
// //                 Save up to 25%
// //               </div>
// //             )}
// //           </div>

// //           {/* Pricing Cards */}
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {plans.map((plan, index) => (
// //               <div 
// //                 key={index}
// //                 className={`rounded-xl overflow-hidden ${
// //                   plan.isFeatured 
// //                     ? 'ring-2 ring-green-600 bg-white shadow-lg transform md:-translate-y-2' 
// //                     : 'bg-white shadow'
// //                 }`}
// //               >
// //                 {plan.isFeatured && (
// //                   <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">
// //                     MOST POPULAR
// //                   </div>
// //                 )}
                
// //                 <div className="p-6 md:p-8">
// //                   <h3 className="text-xl font-bold mb-2" style={{color: colors.primary}}>
// //                     {plan.name}
// //                   </h3>
// //                   <p className="text-gray-600 text-sm mb-6 h-12">
// //                     {plan.description}
// //                   </p>
                  
// //                   <div className="mb-6">
// //                     <div className="flex items-end">
// //                       <span className="text-3xl md:text-4xl font-bold" style={{color: colors.text}}>
// //                         ${plan.price}
// //                       </span>
// //                       <span className="text-gray-600 ml-1 mb-1">{plan.priceLabel}</span>
// //                     </div>
// //                     {plan.saveLabel && (
// //                       <div className="text-green-600 text-sm font-medium mt-1">
// //                         {plan.saveLabel}
// //                       </div>
// //                     )}
// //                   </div>
                  
// //                   <ul className="space-y-3 mb-8">
// //                     {plan.features.map((feature, i) => (
// //                       <li key={i} className="flex items-start">
// //                         <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
// //                         <span className="text-gray-700 text-sm">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
                  
// //                   <Button
// //                     className={`w-full py-6 ${
// //                       plan.buttonVariant === 'primary'
// //                         ? 'bg-green-600 hover:bg-green-700 text-white'
// //                         : 'border-2 border-green-600 bg-transparent hover:bg-green-50 text-green-600'
// //                     }`}
// //                   >
// //                     {plan.isFeatured && <Lock className="h-4 w-4 mr-2" />}
// //                     {plan.buttonText}
// //                   </Button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
          
// //           {/* FAQ Section */}
// //           <div className="mt-20 max-w-3xl mx-auto">
// //             <h2 className="text-2xl font-bold mb-8 text-center" style={{color: colors.text}}>
// //               Frequently Asked Questions
// //             </h2>
            
// //             <div className="space-y-6">
// //               <div className="bg-white rounded-lg p-6 shadow-sm">
// //                 <h3 className="font-medium mb-2" style={{color: colors.primary}}>
// //                   Can I switch plans later?
// //                 </h3>
// //                 <p className="text-gray-700 text-sm">
// //                   Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, you'll receive credit toward your next billing cycle.
// //                 </p>
// //               </div>
              
// //               <div className="bg-white rounded-lg p-6 shadow-sm">
// //                 <h3 className="font-medium mb-2" style={{color: colors.primary}}>
// //                   How does the free trial work?
// //                 </h3>
// //                 <p className="text-gray-700 text-sm">
// //                   All new users get a 7-day free trial of the Premium plan. You won't be charged until the trial period ends, and you can cancel anytime before then.
// //                 </p>
// //               </div>
              
// //               <div className="bg-white rounded-lg p-6 shadow-sm">
// //                 <h3 className="font-medium mb-2" style={{color: colors.primary}}>
// //                   Is there a student discount?
// //                 </h3>
// //                 <p className="text-gray-700 text-sm">
// //                   Yes! Verified medical students receive 20% off any plan. Contact our support team with your school email to verify your status and receive your discount code.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Support Contact */}
// //           <div className="mt-16 text-center">
// //             <p className="text-gray-700">
// //               Have questions about our plans? <Link href="/contact" className="text-green-700 font-medium hover:underline">Contact our support team</Link>
// //             </p>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { CheckCircle, Lock } from "lucide-react";
// import Header from "@/components/Header";
// import { Button } from "@/components/ui/button";
// /* eslint-disable no-unused-vars */
// import config from "@/config";
// /* eslint-enable no-unused-vars */

// export default function UpgradePage() {
//   const [isAnnual, setIsAnnual] = useState(false);

//   // Custom color palette
//   const colors = {
//     primary: "#007832",
//     background: "#F6EFE8",
//     accent: "#E8D8CE",
//     text: "#000000"
//   };

//   const plans = [
//     {
//       name: "Basic",
//       description: "Perfect for students starting their medical journey",
//       price: isAnnual ? 49 : 5.99,
//       priceLabel: isAnnual ? "/year" : "/month",
//       saveLabel: isAnnual ? "Save $23" : null,
//       features: [
//         "1,000+ Qbank questions",
//         "Basic flashcards",
//         "Progress tracking",
//         "Mobile access"
//       ],
//       buttonText: "Start Free Trial",
//       buttonVariant: "outline"
//     },
//     {
//       name: "Premium",
//       description: "Comprehensive learning for serious medical students",
//       price: isAnnual ? 99 : 11.99,
//       priceLabel: isAnnual ? "/year" : "/month",
//       saveLabel: isAnnual ? "Save $45" : null,
//       isFeatured: true,
//       features: [
//         "5,000+ Qbank questions",
//         "Full flashcard library",
//         "Advanced analytics",
//         "Custom exams",
//         "Performance insights",
//         "Priority support"
//       ],
//       buttonText: "Upgrade Now",
//       buttonVariant: "primary"
//     },
//     {
//       name: "Professional",
//       description: "Complete preparation for medical professionals",
//       price: isAnnual ? 199 : 19.99,
//       priceLabel: isAnnual ? "/year" : "/month",
//       saveLabel: isAnnual ? "Save $60" : null,
//       features: [
//         "10,000+ Qbank questions",
//         "Complete flashcard system",
//         "AI-powered study recommendations",
//         "Unlimited custom exams",
//         "Performance insights",
//         "Board-style questions",
//         "1-on-1 tutoring sessions"
//       ],
//       buttonText: "Choose Professional",
//       buttonVariant: "outline"
//     }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-[#F6EFE8]">
//       <Header />
      
//       <main className="flex-grow py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Page Title */}
//           <div className="text-center mb-12">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{color: colors.text}}>
//               Upgrade Your DrNote Experience
//             </h1>
//             <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//               Choose the plan that fits your needs and take your medical education to the next level
//             </p>
//           </div>

//           {/* Billing Toggle */}
//           <div className="flex justify-center mb-12">
//             <div className="bg-white rounded-full p-1 flex items-center shadow-sm">
//               <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
//                   !isAnnual 
//                     ? 'bg-green-600 text-white' 
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsAnnual(false)}
//               >
//                 Monthly
//               </button>
//               <button
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
//                   isAnnual 
//                     ? 'bg-green-600 text-white' 
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//                 onClick={() => setIsAnnual(true)}
//               >
//                 Annual
//               </button>
//             </div>
//             {isAnnual && (
//               <div className="ml-4 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
//                 Save up to 25%
//               </div>
//             )}
//           </div>

//           {/* Pricing Cards */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {plans.map((plan, index) => (
//               <div 
//                 key={index}
//                 className={`rounded-xl overflow-hidden ${
//                   plan.isFeatured 
//                     ? 'ring-2 ring-green-600 bg-white shadow-lg transform md:-translate-y-2' 
//                     : 'bg-white shadow'
//                 }`}
//               >
//                 {plan.isFeatured && (
//                   <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">
//                     MOST POPULAR
//                   </div>
//                 )}
                
//                 <div className="p-6 md:p-8">
//                   <h3 className="text-xl font-bold mb-2" style={{color: colors.primary}}>
//                     {plan.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-6 h-12">
//                     {plan.description}
//                   </p>
                  
//                   <div className="mb-6">
//                     <div className="flex items-end">
//                       <span className="text-3xl md:text-4xl font-bold" style={{color: colors.text}}>
//                         ${plan.price}
//                       </span>
//                       <span className="text-gray-600 ml-1 mb-1">{plan.priceLabel}</span>
//                     </div>
//                     {plan.saveLabel && (
//                       <div className="text-green-600 text-sm font-medium mt-1">
//                         {plan.saveLabel}
//                       </div>
//                     )}
//                   </div>
                  
//                   <ul className="space-y-3 mb-8">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
//                         <span className="text-gray-700 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
                  
//                   <Button
//                     className={`w-full py-6 ${
//                       plan.buttonVariant === 'primary'
//                         ? 'bg-green-600 hover:bg-green-700 text-white'
//                         : 'border-2 border-green-600 bg-transparent hover:bg-green-50 text-green-600'
//                     }`}
//                   >
//                     {plan.isFeatured && <Lock className="h-4 w-4 mr-2" />}
//                     {plan.buttonText}
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* FAQ Section */}
//           <div className="mt-20 max-w-3xl mx-auto">
//             <h2 className="text-2xl font-bold mb-8 text-center" style={{color: colors.text}}>
//               Frequently Asked Questions
//             </h2>
            
//             <div className="space-y-6">
//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="font-medium mb-2" style={{color: colors.primary}}>
//                   Can I switch plans later?
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you&apos;ll be charged the prorated difference. If you downgrade, you&apos;ll receive credit toward your next billing cycle.
//                 </p>
//               </div>
              
//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="font-medium mb-2" style={{color: colors.primary}}>
//                   How does the free trial work?
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   All new users get a 7-day free trial of the Premium plan. You won&apos;t be charged until the trial period ends, and you can cancel anytime before then.
//                 </p>
//               </div>
              
//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="font-medium mb-2" style={{color: colors.primary}}>
//                   Is there a student discount?
//                 </h3>
//                 <p className="text-gray-700 text-sm">
//                   Yes! Verified medical students receive 20% off any plan. Contact our support team with your school email to verify your status and receive your discount code.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Support Contact */}
//           <div className="mt-16 text-center">
//             <p className="text-gray-700">
//               Have questions about our plans? <Link href="/contact" className="text-green-700 font-medium hover:underline">Contact our support team</Link>
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import { ClientSuspense } from "@/components/ClientWrapper";
import PricingContent from "@/components/PricingContent";

export default function PricingPage() {
  return (
    <ClientSuspense>
      <PricingContent />
    </ClientSuspense>
  );
}