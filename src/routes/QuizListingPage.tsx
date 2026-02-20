import { useQuizListing } from "@/hooks";
import { Error500Icon, ErrorPage, QuizzesCategoriesRow } from "@/components";

export default function QuizListingPage() {

    const { selectedFilters, setSelectedFilters, filterOptionsData, isFilterOptionsLoading, filterOptionsError } = useQuizListing();

    if (isFilterOptionsLoading) {
        return <div className="loader" />;
    }

    if (filterOptionsError) {
        return <ErrorPage errorCode={500} errorText="Internal Server Error" icon={<Error500Icon />} />;
    }
    return (
        <div className="w-full flex-1 flex flex-col px-20 pt-6 pb-16 justify-start items-center gap-12 max-md:px-10">
            <div className="w-full flex flex-row justify-between items-center gap-2 max-md:flex-col">
                <QuizzesCategoriesRow
                    selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}
                    categories={filterOptionsData?.categories}
                />
            </div>

        </div>
    );

};