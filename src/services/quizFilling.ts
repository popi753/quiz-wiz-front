import instance from "./apiAxiosInstance";
import type { Quiz, SubmitQuizProps } from "@/types";

export async function fetchQuizQuestions(id: number): Promise<{quiz: Quiz}> {
    const response = await instance.get(`quiz/${id}/questions`);
    return response.data;
};

export async function submitQuiz({ quizId, remainingTime, submittedQuiz }: SubmitQuizProps): Promise<{ message: string; mistakes: number; rightAnswers: number, time: number }> {
    const response = await instance.post(`quiz/${quizId}/submit`, { submittedQuiz, time: remainingTime });
    return response.data;
};