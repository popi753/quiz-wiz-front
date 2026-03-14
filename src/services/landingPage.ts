import instance from './apiAxiosInstance';

export default async function fetchLandingPageData(): Promise<Record<string, number>> {
    try {
        const response = await instance.get('/landing-page/statistics');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch landing page data');
    }
}