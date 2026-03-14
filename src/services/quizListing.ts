import instance from './apiAxiosInstance';
import type { Category, Difficulty, Meta, Quiz, SelectedFilters } from '@/types';

type fetchFilterOptionsResponse = {
    categories: Category[],
    difficulties: Difficulty[],
};

export async function fetchFilterOptions(): Promise<fetchFilterOptionsResponse> {
    const response = await instance.get("/quiz/filters");
    return response.data;

};

type fetchQuizzesResponse = {
    data: Quiz[],
    meta: Meta,
};

export async function fetchQuizzes(selectedFilters: SelectedFilters, cursor?: string,): Promise<fetchQuizzesResponse> {
    const response = await instance.get(`/quiz?cursor=${cursor}&categories=${selectedFilters.categories}&difficulties=${selectedFilters.difficulties}&sorter=${selectedFilters.sorter}&search=${selectedFilters.search}&myQuizzes=${selectedFilters.myQuizzes}&notCompleted=${selectedFilters.notCompleted}`);
    return response.data;
};



