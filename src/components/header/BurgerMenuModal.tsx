import { forwardRef, useImperativeHandle, useRef, useCallback } from "react";
import { Link } from "react-router";
import {AuthBtn} from "./index";
import { Logo, Close } from "@/components/icons";

const BurgeMenuModal = forwardRef<HTMLDialogElement>((_props, ref) => {

    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => dialog.current as HTMLDialogElement);

    const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialog.current) {
            dialog.current?.close();
        }
    }, [dialog]);

    return (
        <dialog ref={dialog} onClick={handleBackdropClick} className="box-content w-full h-fit px-6 bg-white border-2 border-gray-300 sm:hidden backdrop:backdrop-blur-sm">
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
                    <AuthBtn text="Sign Up" btnType="dark" btnClasses="w-full" link="/register" />
                    <AuthBtn text="Log in" btnType="light" btnClasses="w-full" link="/login" />

                </div>

            </div>
        </dialog>
    );
});

export default BurgeMenuModal;