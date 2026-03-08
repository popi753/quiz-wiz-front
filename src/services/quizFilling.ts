import instance from "./apiAxiosInstance";
import type { Quiz } from "@/types";

export async function fetchQuizQuestions(id: number): Promise<Quiz> {
    const response = await instance.get(`quiz/${id}/questions`);
    return response.data;
};
