import { ReactNode } from "react";
import { section } from "./styles";

interface Props {
  id?: string;
  children: ReactNode;
  twoColumn?: boolean;
  className?: string;
}

  export default function SectionLayout({ id, twoColumn = false, children, className = '' }: Props) {
    const base = 'max-w-5xl mx-auto px-6 md:px-10 py-16 border-b border-neutral-200/60 dark:border-neutral-800';

  if (twoColumn) {
    return (
      <section id={id} className={`${section.twoColumn} ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`${base} ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
