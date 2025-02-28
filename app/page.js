
// import ExamList from '@/components/notes/ExamList'
// import React from 'react'

// const page = () => {
//   return (
//    <ExamList/>
//   )
// }

// export default page
import { ClientSuspense } from "@/components/ClientWrapper";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  return (
    <ClientSuspense>
      <HomeContent />
    </ClientSuspense>
  );
}