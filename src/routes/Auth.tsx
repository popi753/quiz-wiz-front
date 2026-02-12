import { Link } from 'react-router';
import { Logo, BackButton } from '@/components';
import { cn } from '@/helpers/utils';
import { useEffect } from 'react';
import { sanctumCsrfCookie } from '@/services';

export default function Auth({ children, bgImageUrl }: { children: React.ReactNode, bgImageUrl: string }) {
    useEffect(() => {
        sanctumCsrfCookie();
    }, []);

    return (
        <div className="flex-1 w-full h-full flex flex-row">
            <div className={cn("flex-1 bg-no-repeat bg-cover p-10 max-sm:hidden",  bgImageUrl )}>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex-1 p-12">
                <BackButton/>
                <div className='flex flex-col gap-10 px-6 pt-12'>
                    {children}
                </div>
            </div>
        </div>
    );
};