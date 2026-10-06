

import {
  heading,
} from "../ui/styles";


export default function SectionTitle({title, subtitle}: { title: string; subtitle?: string }) {
    return (
        <h2 className={heading.h2}>
            {title}{" "}
            {subtitle &&
            <em className={heading.emphasis}>{subtitle  }</em>}
        </h2>
    )
}