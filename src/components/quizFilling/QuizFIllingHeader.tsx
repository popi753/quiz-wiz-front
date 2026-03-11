import { QuizDetailsRow, Tack } from "@/components";
import type { Category, Quiz } from "@/types";

export default function QuizFillingHeader({ quiz }: { quiz: Quiz }) {
    return (
        <header className="flex flex-col items-center gap-6">
            <h1 className="font-raleway font-bold text-4xl ">{quiz.title}</h1>
            <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row gap-2">
                    <Tack />
                    <div className="flex flex-row items-center gap-3">
                        {quiz.categories.map((category: Category, index: number) => (
                            <div key={category.id} className="flex flex-row items-center gap-3">
                                <span className="font-semibold text-sm leang-5 text-gray-500 capi">
                                    {category.category}
                                </span>
                                {index !== quiz.categories.length - 1 &&
                                    <span className="rounded-full bg-gray-300 w-1 h-1"></span>}
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="w-4 border-gray-300 -rotate-90" />
                <QuizDetailsRow quiz={quiz} />
            </div>
        </header>
    );
};