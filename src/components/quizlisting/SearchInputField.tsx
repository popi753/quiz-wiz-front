import { SearchIcon } from "@/components";

export default function SearchInputField({ id, state, setState }: { id: string, state: string, setState: (value: string) => void }) {
    return (
        <div className="relative">
            <input
                id={id}
                className="box-content w-xl p-1 pl-12 border border-gray-300 rounded-3xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="search"
                placeholder="Search"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <SearchIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        </div>
    );
};