import { useQuizListing } from "@/hooks";
import { Error500Icon, ErrorPage, FilterMenu, QuizCard, QuizzesCategoriesRow, LoadMoreButton } from "@/components";
import type { Quiz } from "@/types";

export default function QuizListingPage() {

    const { selectedFilters, setSelectedFilters, filterOptionsData, isFilterOptionsLoading, filterOptionsError, data, isLoading, error, hasNextPage, fetchNextPage } = useQuizListing();

    if (isFilterOptionsLoading || isLoading) {
        return <div className="loader" />;
    }

    if (filterOptionsError || error) {
        return <ErrorPage errorCode={500} errorText="Internal Server Error" icon={<Error500Icon />} />;
    }

    return (
        <div className="w-full flex-1 flex flex-col px-20 pt-6 pb-16 justify-start items-center gap-12 max-md:px-10">
            <div className="w-full flex flex-row justify-between items-center gap-2 max-md:flex-col">
                <QuizzesCategoriesRow
                    selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}
                    categories={filterOptionsData?.categories ?? []}
                />

                <FilterMenu
                    setSelectedFilters={setSelectedFilters}
                    categories={filterOptionsData?.categories ?? []}
                    difficulties={filterOptionsData?.difficulties ?? []} />
            </div>

            <ul className="w-full flex flex-row flex-wrap justify-center gap-8">
                {data?.pages.map((page) => (
                    page.data.map((quiz: Quiz) => (
                        <QuizCard quiz={quiz} key={quiz.id} />
                    ))
                ))}
            </ul>

            {hasNextPage && <LoadMoreButton onClick={() => fetchNextPage()} />}

        </div>
    );

};