import { Link } from "react-router";

export default function AuthSwitch({ text, link, linkText }: { text: string, link: string, linkText: string }) {
    return (
        <span className="text-[14px] text-gray-700 leading-[125%] tracking-[-1px] sm:self-baseline max-sm:-order-1">
            {text}
            <Link
                to={link}
                className="font-semibold text-[14px] text-purple tracking-[0%] px-2 hover:underline"
            >
                {linkText}
            </Link>
        </span>
    );
};