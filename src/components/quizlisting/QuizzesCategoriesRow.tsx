import { ScrollButton, CategoriesRowItem, useSlide, scroll } from "./index";
import { ChevronRight } from "@/components";
import { useIsMobile, } from "@/hooks";
import type { Category, SelectedFilters } from "@/types";

type QuizzesCategoriesRowProps = {
    selectedFilters: SelectedFilters;
    setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
    categories?: Category[];
}

export default function QuizzesCategoriesRow({ selectedFilters, setSelectedFilters, categories }: QuizzesCategoriesRowProps) {

    const isMobile = useIsMobile();
    const { categoriesListRef, showLeftScrollIcon, showRightScrollIcon, setIsDragging, handleMouseDown, handleMouseMove } = useSlide();

    return (
        <div className="md:max-w-[92%] flex-1 flex flex-row justify-between items-center gap-4 max-md:w-full">
            {!isMobile &&
                <ScrollButton
                    disabled={!showLeftScrollIcon}
                    onClick={() => {
                        scroll("left", categoriesListRef);
                    }}
                >
                    <ChevronRight className="transform rotate-180 " />
                </ScrollButton>}
            <div
                ref={categoriesListRef}
                style={{ scrollbarWidth: "none" }}
                className="group w-full flex flex-row justify-between gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                <ul className="flex flex-row justify-start items-center gap-5 border-b border-b-gray-300 px-2 py-4 ">

                    {categories?.length ?
                        <>
                            <CategoriesRowItem
                                key={"All Quizzes"}
                                onChange={() => {
                                    setSelectedFilters({ ...selectedFilters, categories: "" });
                                }}
                                checked={selectedFilters?.categories?.length === 0}
                                id={"All Quizzes"}
                            />
                            {categories?.map(({ category, id }) => (

                                <CategoriesRowItem
                                    key={category + id}
                                    onChange={() => {
                                        setSelectedFilters({ ...selectedFilters, categories: category });
                                    }}
                                    checked={selectedFilters.categories.includes(category)}
                                    id={category}
                                />
                            ))}
                        </>
                        : <p className="text-gray-500">No categories available</p>}
                </ul>
            </div>
            {!isMobile &&
                <ScrollButton
                    disabled={!showRightScrollIcon}
                    onClick={() => {
                        scroll("right", categoriesListRef);
                    }}
                >
                    <ChevronRight />
                </ScrollButton>
            }

        </div>
    );
}