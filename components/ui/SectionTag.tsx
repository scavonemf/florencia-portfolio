import { sectionTag } from "../ui/sharedStyles";

interface SectionTagProps {
  text: string;
}

export default function SectionTag({ text }: SectionTagProps) {
  return (
      <span className={sectionTag}>
        {text}
      </span> 
  )
}