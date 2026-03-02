import { useNavigate } from "react-router";
import { ChevronLeft } from "@/components";

export default function BackButton({ onClick }: { onClick?: () => void }) {
    const navigate = useNavigate();

    return (
        <button onClick={() => onClick ? onClick() : navigate(-1)} className='flex flex-row items-center gap-4'>
            <ChevronLeft />
            <span className='font-medium text-gray-500 text-lg align-middle'>Back</span>
        </button>
    );
};