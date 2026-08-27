export const section = {
twoColumn:
    "grid grid-cols-1 md:grid-cols-[1fr_420px] max-w-5xl mx-auto px-6 md:px-10 py-16 border-b border-neutral-200/60 dark:border-neutral-800 gap-10 items-start",
};

export const heading = {
  h2: "text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.06] tracking-[-0.03em] mb-6 text-neutral-900 dark:text-neutral-50 mb-6",
  emphasis: "italic text-neutral-400",
};

export const text = {
  secondary:
    "text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed",
    block:
    "text-neutral-800 dark:text-neutral-200 text-base leading-relaxed font-sans mb-3",
};

export const input = {
  label:
    "text-[11px] tracking-widest font-mono uppercase text-neutral-400",

  field:
    "w-full bg-transparent border border-neutral-200/60 dark:border-neutral-800 rounded-lg px-4 py-2.5 text-[13px] text-neutral-900 dark:text-neutral-50 transition-colors focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600",
};

export const form = {
  container: "w-full space-y-5 flex flex-col justify-center",
  row: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  group: "space-y-1.5",
  actions: "flex justify-start pt-2",
  submit: "w-full sm:w-auto",
};

export const feedback = {
  success:
    "mt-2 text-[13px] font-mono text-emerald-600 dark:text-emerald-400 animate-fade-in",
};