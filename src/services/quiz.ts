import instance from "./apiAxiosInstance";
import type { Quiz } from "@/types";

export async function fetchQuiz(id: number): Promise<{ quiz: Quiz, relatedQuizzes: Quiz[] }> {

    const response = await instance.get(`quiz/${id}`);
    return response.data;

};
