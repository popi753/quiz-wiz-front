import type { Answer } from "./Answer";

export type Question = {
    id: number,
    quiz_id: number,
    question: string,
    point: number,
    correctAnswers_count: number,
    answers: Answer[],
}
