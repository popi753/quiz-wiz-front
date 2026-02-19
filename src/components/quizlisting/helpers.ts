export function scroll(direction: "left" | "right", categoriesListRef: React.RefObject<HTMLDivElement | null>) {
    if (!categoriesListRef.current) return;
    const scrollAmount = 300;
    categoriesListRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
    });
};

