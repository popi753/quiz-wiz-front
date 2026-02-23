import { SorterArrow, DiamonIcon, ArrowUp } from "@/components";
import { AppliedSorterItem } from "./index";

export default function AppliedSorterContainer() {
    return (

        <div className="flex-1 flex flex-col p-4 gap-6 border-2 border-gray-300 rounded-lg">
            <h3 className="font-semibold text-sm leading-5 text-purple">Sort By</h3>
            <div className="flex flex-col gap-4">
                <AppliedSorterItem key={"1-az"} icon={<ArrowUp className="" />} text="A-Z" value="asc" />
                <AppliedSorterItem key={"2-za"} icon={<ArrowUp className="rotate-180" />} text="Z-A" value="desc" />
                <AppliedSorterItem key={"3-mostpopular"} icon={<DiamonIcon />} text="Most Popular" value="popular" />
                <AppliedSorterItem key={"4-new"} icon={<SorterArrow className="" />} text="Newest" value="newest" />
                <AppliedSorterItem key={"5-old"} icon={<SorterArrow className="rotate-180" />} text="Oldest" value="oldest" />
            </div>
        </div>
    );
};