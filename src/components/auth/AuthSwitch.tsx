import { Link } from "react-router";
import { useBackgroundLocation } from "@/hooks";

export default function AuthSwitch({ text, link, linkText }: { text: string, link: string, linkText: string }) {
    const background = useBackgroundLocation();

    return (
        <span className="text-sm text-gray-700 leading-[125%] sm:self-baseline max-sm:-order-1">
            {text}
            <Link
                to={link}
                state={{ background: background }}
                className="font-semibold text-sm text-purple px-2 hover:underline"
            >
                {linkText}
            </Link>
        </span>
    );
};