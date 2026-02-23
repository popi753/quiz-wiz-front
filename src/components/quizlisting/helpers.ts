import type { SelectedFilters } from "@/types";

export function scroll(direction: "left" | "right", categoriesListRef: React.RefObject<HTMLDivElement | null>) {
    if (!categoriesListRef.current) return;
    const scrollAmount = 300;
    categoriesListRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
    });
};


export function handleSubmit(e: React.FormEvent<HTMLFormElement>,
                            setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>) {

    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const selectedFilters: Partial<SelectedFilters> = {
        difficulties: "",
        categories: "",
        sorter: data.get("sorter") as string || "",
    };

    if (data.get("my-quizzes") === "on") {
        selectedFilters.myQuizzes = "true";
    }

    if (data.get("not-completed") === "on") {
        selectedFilters.notCompleted = "true";
    }

    data.delete("sorter");
    data.delete("my-quizzes");
    data.delete("not-completed");
    console.log("submitting");

    for (const pair of data.keys()) {
        const [filter, value] = pair.split("-");
        const filterKey = filter as keyof SelectedFilters;
        selectedFilters[filterKey] = selectedFilters[filterKey] + value + ",";
    }

    setSelectedFilters(prev => ({ ...prev, ...selectedFilters }));
};
