import { useRef, useState } from "react";
import { QuizQuestionsContainer, Timer, handleSubmitQuiz } from "./index";
import type { Question } from "@/types";

type QuizFormProps = {
    id: number,
    timerRef: React.RefObject<number | null>,
    questions: Question[],
    time: number,
}

export default function QuizForm({ id, timerRef, questions, time }: QuizFormProps) {

    const formRef = useRef<HTMLFormElement>(null);
    const [remainingTime, setRemainingTime] = useState<number>(NaN);
    const handleSubmit = handleSubmitQuiz(id, remainingTime);

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