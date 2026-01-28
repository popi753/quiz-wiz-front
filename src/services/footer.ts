import instance from './instance';
import { type  FooterListProps } from '../components/footer';

export default async function fetchFooterData(): Promise<FooterListProps[]> {
    try {
        const response = await instance.get('/footerdata');
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}