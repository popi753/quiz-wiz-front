import { Link } from "react-router";
import { type FooterListItemProps } from "./types"

export default function FooterListItem({ item }: { item: FooterListItemProps }) {
    const { text, link, blank } = item;
    return (
        <li className="hover:underline font-normal text-xs leading-5 text-gray-600">
            {blank === false ?
                <Link to={link} >{text}</Link>
                :
                <a href={link} target="_blank">{text}</a>
            }
        </li>
    )
} 