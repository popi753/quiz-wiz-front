import { useState } from "react";
import { useSearchParams } from "react-router";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchFilterOptions, fetchQuizzes } from "@/services";
import type { SelectedFilters } from "@/types";

export default function useQuizListing() {

    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search") || "";

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        categories: "",
        difficulties: "",
        sorter: "",
        search: searchValue,
    });

    const { data: filterOptionsData, isLoading: isFilterOptionsLoading, error: filterOptionsError } = useQuery({
        queryKey: ['quizFilterOptions'],
        queryFn: fetchFilterOptions,
        retry: false,
    });

    const { data, isLoading, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ['quizzes', selectedFilters],
        queryFn: ({ pageParam }) => fetchQuizzes(selectedFilters, pageParam),
        initialPageParam: "",
        getNextPageParam: (lastPage) => lastPage.meta.next_cursor,
    });

    return {
        selectedFilters,
        setSelectedFilters,
        filterOptionsData,
        isFilterOptionsLoading,
        filterOptionsError,
        data,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
    };
};