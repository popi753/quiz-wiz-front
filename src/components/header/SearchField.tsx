import { SearchIcon, CloseIcon } from "@/components";
import { useHeaderSearchField } from "@/hooks";

export default function SearchField() {

    const { location, headerSearchValue, setHeaderSearchValue, handleSearch } = useHeaderSearchField();

    if (location?.pathname !== "/quizlisting") {
        return null;
    }

    return (
        <div className="relative flex flex-row items-center gap-2 cursor-pointer rounded-lg has-[input:focus]:bg-gray-100 has-[input:focus]:border-gray-400 has-[input:focus]:border" >
            <button
                className="absolute z-10 p-1 left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onMouseDown={() => { handleSearch(headerSearchValue); }}>
                <SearchIcon className="pointer-events-none"
                />
            </button>
            <input
                value={headerSearchValue}
                onChange={(e) => { setHeaderSearchValue(e.currentTarget.value); }}
                type="text" id="quiz-search" name="quiz-search" placeholder="Search"
                className="whitespace-wrap truncate peer w-26 pl-10 focus:w-full focus:px-10 focus:rounded-xl focus:outline-0" />
            <button
                onMouseDown={() => { setHeaderSearchValue(""); handleSearch(""); }} 
                className="hidden p-3 bg-white rounded-r-lg border-l border-gray-400 h-full peer-[input:focus]:block ">
                <CloseIcon />
            </button>
        </div>
    );
};