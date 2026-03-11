import { useRef, useState } from "react";
import type { useMutation } from "@tanstack/react-query";
import { QuizQuestionsContainer, Timer, handleSubmitQuiz } from "./index";
import type { Question, SubmitQuizProps } from "@/types";

type QuizFormProps = {
    id: number,
    timerRef: React.RefObject<number | null>,
    mutate: ReturnType<typeof useMutation<{ message: string; mistakes: number; rightAnswers: number }, Error, SubmitQuizProps>>['mutate'],
    questions: Question[],
    time: number,
}

export default function QuizForm({ id, timerRef, mutate, questions, time }: QuizFormProps) {

    const formRef = useRef<HTMLFormElement>(null);
    const [remainingTime, setRemainingTime] = useState<number>(NaN);
    const handleSubmit = handleSubmitQuiz(mutate, id, remainingTime);

    return (
        <form
            ref={formRef}
            className="w-full flex flex-row"
            onSubmit={handleSubmit}>
            <QuizQuestionsContainer questions={questions} />

            <Timer
                remainingTime={remainingTime}
                setRemainingTime={setRemainingTime}
                formRef={formRef}
                time={time * 60}
                ref={timerRef}
            />
        </form>
    );
};