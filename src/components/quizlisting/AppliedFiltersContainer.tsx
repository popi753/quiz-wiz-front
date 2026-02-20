import { useContext } from "react";
import { UserContext, type UserContextType } from "@/contexts";
import { AppliedFiltersItem } from "./index";
import type { Category, Difficulty } from "@/types";

type FiltersContainerProps = {
    difficulties: Difficulty[],
    categories: Category[],
    searchString: string,
}

export default function AppliedFiltersContainer({ difficulties, categories, searchString }: FiltersContainerProps) {

    const { user } = useContext<UserContextType>(UserContext) || {};

    return (
        <div className="flex-[1.8] flex flex-col p-4 border-2 border-gray-300 rounded-lg gap-4">
            {user.username &&
                <>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-sm leading-5 text-purple">
                            filter by
                        </h3>
                        <div className="flex flex-row items-center gap-4 cursor-pointer">
                            <label htmlFor="my-quizzes" className="font-semibold text-sm leading-5">My Quizzes</label>
                            <input type="checkbox" name="my-quizzes" id="my-quizzes" />
                        </div>
                        <div className="flex flex-row items-center gap-4 cursor-pointer">
                            <label htmlFor="not-completed" className="font-semibold text-sm leading-5">Not Completed</label>
                            <input type="checkbox" name="not-completed" id="not-completed" />
                        </div>
                    </div>
                    <hr className="border-gray-200" />
                </>
            }
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-sm leading-5 ">
                    Levels
                </h3>
                <div className="max-h-62 overflow-auto flex flex-row flex-wrap gap-4 ">
                    {difficulties?.filter(element => element.difficulty.toLowerCase().includes(searchString.toLowerCase()))
                        .map(({ difficulty, id, color }) => (
                            <AppliedFiltersItem key={id + difficulty} id={`difficulties-${difficulty}-${id}`} name={difficulty} color={color} className="" />
                        ))}
                </div>
            </div>

            <hr className="border-gray-200" />

            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-sm leading-5 ">
                    Categories
                </h3>
                <div className="max-h-62 overflow-auto flex flex-row flex-wrap gap-4 ">
                    {categories?.filter(element => element.category.toLowerCase().includes(searchString.toLowerCase()))
                        .map(({ category, id }) => (
                            <AppliedFiltersItem key={id + category} id={`categories-${category}-${id}`} name={category} className="text-gray-600 peer-checked:text-white peer-checked:bg-black" />
                        ))}
                </div>
            </div>
        </div>
    );
};