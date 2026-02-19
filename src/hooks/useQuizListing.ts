import { useState } from "react";
import { fetchFilterOptions } from "@/services/quizListing";
import { useQuery } from "@tanstack/react-query";
import type { SelectedFilters } from "@/types";


export default function useQuizListing() {

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
        categories: "",
    });

    const { data: filterOptionsData, isLoading: isFilterOptionsLoading, error: filterOptionsError } = useQuery({
        queryKey: ['quizFilterOptions'],
        queryFn: fetchFilterOptions,
    });

    return {
        selectedFilters,
        setSelectedFilters,
        filterOptionsData,
        isFilterOptionsLoading,
        filterOptionsError,
    };
}