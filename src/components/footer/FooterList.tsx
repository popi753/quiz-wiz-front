import FooterListItem from "./FooterListItem"
import { type FooterListProps } from "./types"

export default function FooterList({ headerText, items }: FooterListProps) {
    return (
        <ul className="flex flex-col gap-6 items-start max-sm:gap-4">
            <header className="font-semibold text-sm leading-5 text-gray-900">
                {headerText}
            </header>
            {items.map((item, index) => (
                <FooterListItem key={index} item={item}></FooterListItem>
            ))}
        </ul>
    )
} 