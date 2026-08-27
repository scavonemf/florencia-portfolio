"use client";

import { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

export function RevealBlock({
  children,
  delay = "0ms",
}: {
  children: ReactNode;
  delay?: string;
}) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}