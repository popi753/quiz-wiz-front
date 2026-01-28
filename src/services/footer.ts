import apiAxiosInstance from './apiAxiosInstance';
import { type  FooterListProps } from '../components/footer';

export default async function fetchFooterData(): Promise<FooterListProps[]> {
    try {
        const response = await apiAxiosInstance.get('/footerdata');
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}