import { useCallback, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router";

export default function useHeaderSearchField() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search") || "";
    const [headerSearchValue, setHeaderSearchValue] = useState<string>(searchValue);

    const handleSearch = useCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        navigate(`/quizlisting?${params.toString()}`);
    }, [searchParams, navigate]);

    return {
        location,
        headerSearchValue,
        setHeaderSearchValue,
        handleSearch
    };

};