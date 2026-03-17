import { Link } from "react-router";
import { cn } from "@/helpers/utils";
import { Bulb, CheckMark, Diploma, Zap } from "@/components";
import { QuizCardDetailsItem } from "./index";
import type { Category, Quiz } from "@/types";

export default function QuizCard({ quiz, className }: { quiz: Quiz, className?: string }) {
    const { title, imgUrl, max_points, total_users, difficulty, categories, submission } = quiz;

    return (
        <li>
            <Link to={`/quiz/${quiz.id}`} className={cn(" w-98 h-128 flex flex-col items-center px-6 pt-6 pb-8 gap-8 shadow-[0px_12px_20px_0px_#10182814]", className)}>
                <div>
                    <img
                        src={imgUrl}
                        alt={title} />
                </div>
                <div className="w-full flex flex-col gap-6 text-gray-900">
                    <ul className="flex flex-row gap-2">
                        {categories.map(({ category, id }: Category) => (
                            <li key={id + category} className="font-semibold text-sm leading-5 text-indigo-500">{category}</li>
                        ))}
                    </ul>
                    <h1 className="font-semibold text-2xl leading-8 truncate" title={title}>
                        {title}
                    </h1>
                    <div className="flex justify-start gap-5">
                        {submission?.length ?
                            <>
                                <QuizCardDetailsItem
                                    icon={<CheckMark className="" />}
                                    iconBg="bg-emerald-100"
                                    header="Completed"
                                    text={submission[0].created_at.split(" ")[0]}
                                />
                                <QuizCardDetailsItem
                                    header="Total Time"
                                    text={submission[0].time + " mins"}
                                />

                            </> : <>
                                <QuizCardDetailsItem
                                    icon={<Bulb />}
                                    iconBg="bg-gray-100"
                                    header="Not Completed"
                                    text="Date,Time"
                                />
                                <QuizCardDetailsItem
                                    header="Total Time"
                                    text="N/A"
                                />
                            </>

                        }

                        <QuizCardDetailsItem
                            header="Total Users"
                            text={total_users}
                        />
                    </div>
                    <div className="flex justify-start gap-5">
                        <QuizCardDetailsItem
                            icon={<Zap color={difficulty.color} />}
                            iconBg={difficulty.color + "20"}
                            header="Difficulty Level"
                            text={difficulty.difficulty}
                        />
                        {submission?.length ?
                            <QuizCardDetailsItem
                                icon={<Diploma />}
                                iconBg="bg-pink-100"
                                header="Points"
                                text={submission[0].score + "/" + max_points}
                            /> : null
                        }
                    </div>
                </div>
            </Link>
        </li>
    );
};