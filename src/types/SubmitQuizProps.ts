import type { SubmissionAnswer } from "./SubmissionAnswer";

export type SubmitQuizProps = {
    quizId: number;
    remainingTime: number;
    submittedQuiz: SubmissionAnswer[];
};