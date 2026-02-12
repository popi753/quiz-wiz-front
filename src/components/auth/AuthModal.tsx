import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useBackgroundLocation } from "@/hooks";
import { handleBackdropClick } from "./helpers";

export default function AuthModal({ children }: { children: React.ReactNode }) {

    const navigate = useNavigate();
    const background = useBackgroundLocation();

    const authDialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const authDialog = authDialogRef.current;
        document.body.style.overflow = 'hidden';
        authDialog?.showModal();
        return () => {
            document.body.style.overflow = 'auto';
            authDialog?.close();
            navigate(background?.pathname || "/")
        }
    }, [background, navigate]);

    return (
        <dialog ref={authDialogRef} onClick={(e) => handleBackdropClick(e, authDialogRef, background?.pathname || "/", navigate)}
            className="box-content w-full max-w-none sm:hidden backdrop:backdrop-blur-sm h-auto top-[15%] rounded-t-4xl">

            <div className="animate-slide-up flex flex-col pb-10">
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 m-auto w-8 h-1 bg-gray-400 rounded-2xl opacity-40"/>
                
                <div className='flex flex-col gap-10 px-6 pt-8 items-center'>
                    {children}
                </div>
            </div>
        </dialog>
    );
};