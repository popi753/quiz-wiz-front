import { QuizQuestion } from "./index";
import type { Question } from "@/types";

export default function QuizQuestionsContainer({ questions }: { questions: Question[] }) {

    return (
        <div className="w-full flex flex-col gap-12">
            {questions.map((question, index) => (
                <QuizQuestion key={question.id} question={question} index={index} />
            ))}
        </div>
    );
}