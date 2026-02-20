import instance from './apiAxiosInstance';
import type { Category } from '@/types';

export async function fetchFilterOptions(): Promise<{ categories: Category[] }> {
    try {
        const response = await instance.get("/quizlisting/filters");
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}



