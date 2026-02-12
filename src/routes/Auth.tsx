import { useEffect } from 'react';
import { sanctumCsrfCookie } from '@/services';
import { useIsMobile } from '@/hooks';
import { AuthModal, AuthContainer } from '@/components';

export default function Auth({ children, bgImageUrl }: { children: React.ReactNode, bgImageUrl?: string }) {
    useEffect(() => {
        sanctumCsrfCookie();
    }, []);
    const isMobile = useIsMobile();

    if (!isMobile && bgImageUrl) {
        return (
            <AuthContainer bgImageUrl={bgImageUrl} children={children} />
        );
    }

    return (
        <AuthModal children={children} />
    );
};