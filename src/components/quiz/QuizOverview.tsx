import { useNavigate } from "react-router";
import { PrimaryButton, QuizDetailsRow } from "@/components";
import type { Quiz } from "@/types";

export default function QuizOverview({ quiz }: { quiz: Quiz }) {

    const navigate = useNavigate();

    return (
        <div className=" flex flex-col gap-14 items-start">
            <div className="w-full flex flex-row items-start justify-between gap-8">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-4xl ">
                            {quiz.title}
                        </h1>
                        <ul className="flex flex-row gap-6">
                            {quiz.categories.map((category, id) => (
                                <li key={id} className="font-semibold text-sm leading-5 text-purple">
                                    {category.category}
                                </li>
                            ))}
                        </ul>
                        <p className="font-semibold text-sm leading-6 text-gray-500">
                            {quiz.description}
                        </p>

                    </div>

                    <div className=" flex flex-col gap-10">
                        <QuizDetailsRow quiz={quiz} />

                        {(!quiz.submission || quiz.submission.length === 0) &&
                            <PrimaryButton btnType="purple" className="w-80 h-12 rounded-lg" type="button" onClick={() => navigate(`/filling/${quiz.id}`)}>
                                Start quiz
                            </PrimaryButton>
                        }

                    </div>
                </div>

                <div className="flex rounded-xl w-82 h-75">
                    <img className="rounded-xl" alt="JavaScript Basics" src={quiz.imgUrl} />
                </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-6">
                <h3 className="font-bold text-xl">Instructions</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae optio expedita reiciendis rerum quas adipisci, sint ducimus hic debitis accusamus alias ab itaque dicta, laborum illum voluptatum nisi odit quia.</p>
            </div>
        </div>
    );
};