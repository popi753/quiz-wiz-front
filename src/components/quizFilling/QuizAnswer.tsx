import { useSelectAnswer } from "./index";
import type { Answer } from "@/types";

type QuizAnswerProps = {
    answer: Answer,
    name: string,
    selectedAnswers: number[],
    setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>,
    limit: number,
}

export default function QuizAnswer({ answer, name, selectedAnswers, setSelectedAnswers, limit }: QuizAnswerProps) {

    const handleSelectAnswer = useSelectAnswer(selectedAnswers, setSelectedAnswers, limit);

    return (
        <div className="w-3xl flex flex-row gap-2 items-center justify-between pr-2 rounded-lg border border-gray-200 text-gray-600 cursor-pointer has-[input:checked]:text-purple has-[input:checked]:border-purple has-[input:checked]:bg-purple-50">
            <label htmlFor={answer.id.toString()}
                className="flex-1 text-sm leading-5 p-4 truncate capitalize cursor-pointer"
            >
                {answer.answer}
            </label>

            <input
                type="checkbox"
                id={answer.id.toString()}
                name={name}
                value={answer.id}
                className="cursor-pointer"
                checked={selectedAnswers.includes(answer.id)}
                onChange={(e) => handleSelectAnswer(e, answer.id)} />
        </div>
    );
};

