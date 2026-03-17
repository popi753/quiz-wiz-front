import { QuizCard } from "@/components";
import type { Quiz } from "@/types";

export default function RelatedQuizzes({ relatedQuizzes }: { relatedQuizzes: Quiz[] }) {

    return (
        <ul className="flex flex-col gap-6 items-start">
            {relatedQuizzes.map((relatedQuiz: Quiz, index: number) => {
                    return (
                        <QuizCard quiz={relatedQuiz} key={index} className="bg-gray-200 rounded-lg" />
                    );
                })
            }
        </ul>
    );
};