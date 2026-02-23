import { useState } from "react";
import { PrimaryButton, CloseIcon } from "@/components";
import { AppliedFiltersContainer, AppliedSorterContainer, FilterButton, SearchInputField, handleSubmit } from "./index";
import type { Category, Difficulty, SelectedFilters } from "@/types";

type FilterFormProps = {
    setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
    categories: Category[];
    difficulties: Difficulty[];
    filterDetailsRef: React.RefObject<HTMLDetailsElement | null>;
};

export default function FilterForm({ setSelectedFilters, difficulties, categories, filterDetailsRef }: FilterFormProps) {

    const [searchString, setSearchString] = useState("");

    return (
        <form
            onSubmit={(e) => handleSubmit(e, setSelectedFilters)}
            className="z-100 w-auto h-auto absolute right-0 top-5/4 flex flex-col rounded-lg border border-gray-400 bg-white shadow-[0px_1px_4px_0px_#00000026]">
            <div className="flex-1 flex flex-col p-4">
                <div className="flex flex-row p-4 gap-4 bg-gray-100 rounded-lg">
                    <div className="flex flex-row gap-4">
                        <FilterButton type="disabled" />
                        <SearchInputField id="FilterSearch" state={searchString} setState={setSearchString} />
                    </div>

                    <div className="flex flex-row items-center gap-4">
                        <PrimaryButton btnType="purple" type="submit" className="w-28 h-9 rounded-lg"> Confirm</PrimaryButton>
                        <hr className="w-4 text-gray-500 -rotate-90" />
                        <button type="reset" className="flex flex-row items-center gap-4 cursor-pointer">
                            <span className="whitespace-nowrap text-gray-500 text-sm leading-6">reset all filters</span>
                        </button>

                        <button type="reset" onClick={() => { filterDetailsRef.current!.open = false; }}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>

                <div className="flex flex-row gap-3">
                    <AppliedFiltersContainer
                        difficulties={difficulties}
                        categories={categories}
                        searchString={searchString}
                    />

                    <AppliedSorterContainer />
                </div>
            </div>
        </form>
    );
};