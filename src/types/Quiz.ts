import type { Category, Submission, Difficulty, Question } from "./index";

export type Quiz = {
    id: number,
    user_id: number,
    title: string,
    description: string,
    imgUrl: string,
    max_points: number,
    total_users: number,
    question_count?: number,
    questions?: Question[],
    difficulty: Difficulty,
    time: number,
    categories: Category[],
    created_at: string,
    updated_at: string,
    submission?: Submission[],
};