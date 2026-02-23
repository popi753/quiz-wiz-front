import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFilterOptions } from "@/services";
import type { SelectedFilters } from "@/types";

export default function useQuizListing() {

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        categories: "",
        difficulties: "",
        sorter: "",
    });

    const { data: filterOptionsData, isLoading: isFilterOptionsLoading, error: filterOptionsError } = useQuery({
        queryKey: ['quizFilterOptions'],
        queryFn: fetchFilterOptions,
        retry: false,
    });

    return {
        selectedFilters,
        setSelectedFilters,
        filterOptionsData,
        isFilterOptionsLoading,
        filterOptionsError,
    };
}