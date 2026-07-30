import { cn } from "../../lib/utils"

export const sectionBase = cn(
  "border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors duration-300"
)
export const sectionContact = cn(
  "grid grid-cols-1 md:grid-cols-[1fr_420px] max-w-5xl mx-auto px-6 md:px-10 py-16 border-b border-neutral-200/60 dark:border-neutral-800 gap-10 items-start"
)
export const sectionPanel = cn("max-w-7xl mx-auto px-6 md:px-10 py-20")
export const sectionTag = cn(
  "text-xs font-medium tracking-wider uppercase text-neutral-400 font-mono block mb-2"
)
export const sectionText = cn(
  "text-neutral-800 dark:text-neutral-200 text-base leading-relaxed font-sans"
)
export const sectionTextSecondary = cn(
  "text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed"
)
export const pillTag = cn(
  "text-xs px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900"
)
export const inputLabel = cn("text-[11px] tracking-widest font-mono text-neutral-400 uppercase")
export const inputField = cn(
  "w-full bg-transparent border border-neutral-200/60 dark:border-neutral-800 rounded-lg px-4 py-2.5 text-[13px] text-neutral-900 dark:text-neutral-50 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
)
