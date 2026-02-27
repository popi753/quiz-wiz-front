import { ArrowDown } from "@/components";

export default function LoadMoreButton({ onClick }: { onClick: () => void }) {
    return (
        <button className="flex flex-row items-center justify-center gap-4 px-5 py-3 rounded-lg bg-gray-100" onClick={onClick}>
            <ArrowDown className="w-4 h-4" />
            <span className="font-semibold text-base leading-6 text-purple">
                Load More
            </span>
        </button>
    );
};