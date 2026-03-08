import { useState } from "react";
import { QuizAnswer } from "./index";
import { OptionsIcon } from "@/components";
import type { Question } from "@/types";

export default function QuizQuestion({ question, index }: { question: Question, index: number }) {

    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-2">
                <span className="font-semibold text-sm leading-5 text-purple capitalize">question-{index + 1}</span>
                <hr className="w-4 text-gray-300 -rotate-90" />
                <span className="font-semibold text-sm leading-5  text-orange capitalize">points-{question.point} </span>
            </div>
            <h3 className="font-bold text-lg ">
                {question.question} ?
            </h3>
            {question.correctAnswers_count > 1 && (
                    <div className="w-72 flex flex-row items-center justify-center gap-4 p-3 rounded-lg border border-green-300 bg-green-50 text-green-700">
                        <OptionsIcon />
                        <span>You can select {question.correctAnswers_count} options</span>
                    </div>

                )
            }

            <div className="flex flex-col gap-2">
                {question.answers.map((answer) => (
                    <QuizAnswer key={answer.id} answer={answer} name={`question-${question.id}`}
                        selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} limit={question.correctAnswers_count} />
                ))}

            </div>

        </div>
    );
};