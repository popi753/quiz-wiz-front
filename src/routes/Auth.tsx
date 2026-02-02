import { Link, useNavigate } from 'react-router';
import { Logo, ChevronLeft } from '@/components';

export default function Auth({ children, bgImageUrl }: { children: React.ReactNode, bgImageUrl: string }) {

    const navigate = useNavigate();

    return (
        <div className="flex-1 w-full h-full flex flex-row">
            <div className={`flex-1 ${bgImageUrl} bg-no-repeat bg-cover p-10 max-sm:hidden`}>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex-1 p-12">
                <button onClick={() => navigate(-1)} className='flex flex-row items-center gap-4'>
                    <ChevronLeft />
                    <span className='font-medium text-gray-500 text-lg align-middle'>Back</span>
                </button>
                <div className='flex flex-col gap-10 px-6 pt-12'>
                    {children}
                </div>
            </div>
        </div>
    );
};