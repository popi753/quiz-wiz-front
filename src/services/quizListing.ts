import instance from './apiAxiosInstance';
import type { Category, Difficulty } from '@/types';

export async function fetchFilterOptions(): Promise<{ categories: Category[], difficulties: Difficulty[] }> {
    try {
        const response = await instance.get("/quiz/filters");
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
};



