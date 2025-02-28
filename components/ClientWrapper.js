"use client";

import { Suspense } from "react";

export function ClientComponent({ children }) {
  return <>{children}</>;
}

export function ClientSuspense({ children, fallback = <div>Loading...</div> }) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}