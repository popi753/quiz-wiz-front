import { forwardRef, useImperativeHandle, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router";
import { PrimaryButton } from "@/components";
import { Logo, Close } from "@/components/icons";

const BurgeMenuModal = forwardRef<HTMLDialogElement>((_props, ref) => {

    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        if (!dialog.current) {
            throw new Error("Dialog ref is not assigned");
        }
        return dialog.current;
    });

    const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialog.current) {
            dialog.current?.close();
        }
    }, [dialog]);

    const navigate = useNavigate();

    return (
        <dialog onClick={handleBackdropClick} className="box-content w-full h-fit px-6 bg-white border-2 border-gray-300 sm:hidden backdrop:backdrop-blur-sm">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-10 p-4 ">
                <div className="w-full flex flex-row justify-between">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <button onClick={() => dialog.current?.close()}>
                        <Close />
                    </button>
                </div>
                <div>
                    <Link to="/quizzes"  >
                        <span className="font-semibold text-[18px] leading-8 tracking-normal text-gray-600">Quizzes</span>
                    </Link>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <PrimaryButton btnType="dark" className="w-full h-10" type="button" onClick={() => navigate("/register")}>
                        Sign up
                    </PrimaryButton>
                    <PrimaryButton btnType="light" className="w-full h-10" type="button" onClick={() => navigate("/login")}>
                        Login
                    </PrimaryButton>
                </div>

            </div>
        </dialog>
    );
});

export default BurgeMenuModal;