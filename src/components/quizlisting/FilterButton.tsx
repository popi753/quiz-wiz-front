import { FilterIcon } from "@/components";
import { cn } from "@/helpers";

export default function FilterButton({ type }: { type?: "active" | "disabled" }) {

    return (
        <div className={cn("flex flex-row items-center gap-2 border-2 rounded-md px-3 py-1",
            {
                "border-gray-600 text-gray-500 hover:bg-gray-100 cursor-pointer": type === "active",
                "bg-black text-white": type === "disabled",
            }
        )}>
            <FilterIcon color={type === "disabled" ? "white" : "#667085"} />

            <span className=" text-sm leading-6 ">Filter</span>
        </div>
    );
};