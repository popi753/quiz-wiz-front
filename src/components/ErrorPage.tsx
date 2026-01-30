import { useNavigate } from "react-router";
import { BackArrow } from "@/components";

type ErrorPageProps = {
    errorText: string;
    errorCode: number;
    icon: React.ReactNode;
};

export default function ErrorPage({ errorText, errorCode, icon }: ErrorPageProps) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 py-14 max-md:gap-6 max-md:px-14 max-md:py-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="font-Raleway font-black text-6xl text-center max-md:text-4xl">{errorText}</h1>
                <h2 className="font-bold text-xl ">Error {errorCode}</h2>
            </div>
            {icon}
            <div>
                <button onClick={() => navigate(-1)} className="flex flex-row items-center gap-4">
                    <BackArrow />
                    <span className="text-xl text-purple capitalize">Go Back</span>
                </button>
            </div>

        </div>
    );
}