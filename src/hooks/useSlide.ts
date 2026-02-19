import { useCallback, useEffect, useRef, useState } from "react";

export default function useSlide() {
    const categoriesListRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [showLeftScrollIcon, setShowLeftScrollIcon] = useState(false);
    const [showRightScrollIcon, setShowRightScrollIcon] = useState(true);

    // Drag
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        if (!categoriesListRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - categoriesListRef.current.offsetLeft);
        setScrollLeft(categoriesListRef.current.scrollLeft);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging || !categoriesListRef.current) return;

        e.preventDefault();
        const x = e.pageX - categoriesListRef.current.offsetLeft;
        const mouseSlide = (x - startX) * 1;
        categoriesListRef.current.scrollLeft = scrollLeft - mouseSlide;
    }, [isDragging, scrollLeft, startX]);

    useEffect(() => {
        const updateScrollButtons = () => {
            if (!categoriesListRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = categoriesListRef.current;

            setShowLeftScrollIcon(scrollLeft > 10);
            setShowRightScrollIcon(scrollLeft < scrollWidth - clientWidth - 5);
        };

        const container = categoriesListRef.current;
        if (!container) return;

        updateScrollButtons();
        container.addEventListener("scroll", updateScrollButtons);
        window.addEventListener("resize", updateScrollButtons);

        return () => {
            container.removeEventListener("scroll", updateScrollButtons);
            window.removeEventListener("resize", updateScrollButtons);
        };
    });

    return { categoriesListRef, showLeftScrollIcon, showRightScrollIcon, setIsDragging, handleMouseDown, handleMouseMove };
}