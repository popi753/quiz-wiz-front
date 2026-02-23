import { useEffect, useRef } from "react";
import { handleDetailsBackdropClick } from "@/helpers";
import { FilterButton, FilterForm } from "./index";
import type { SelectedFilters, Category, Difficulty } from "@/types";

type FilterDropDownMenuProps = {
    setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
    categories: Category[];
    difficulties: Difficulty[];
}

export default function FilterMenu({ setSelectedFilters, categories, difficulties }: FilterDropDownMenuProps) {

    const filterDetailsRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            handleDetailsBackdropClick(e, filterDetailsRef);
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <details ref={filterDetailsRef}>
            <summary className="flex justify-center items-center gap-2">
                <FilterButton type="active" />
            </summary>
            <FilterForm
                setSelectedFilters={setSelectedFilters}
                categories={categories}
                difficulties={difficulties}
                filterDetailsRef={filterDetailsRef}
            />
        </details>
    );
};