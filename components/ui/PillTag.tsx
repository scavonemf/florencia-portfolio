import { pillTag } from "./sharedStyles";

export function PillTag({ text }: { text: string }) {
  return (
    <span className={pillTag}>
      {text}
    </span>
  )
}