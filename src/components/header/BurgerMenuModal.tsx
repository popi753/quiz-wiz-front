import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { PrimaryButton, Logo, Close, PersonIcon } from "@/components";
import { useBackgroundLocation, useIsMobile } from "@/hooks";
import { UserContext } from "@/contexts";
import { handleDialogBackdropClick } from "@/helpers";
import { onLogout } from "@/services";
import useHeaderHook from "./useHeaderHook";

const BurgeMenuModal = forwardRef<HTMLDialogElement>((_props, ref) => {

    const headerDialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        if (!headerDialogRef.current) {
            throw new Error("Dialog ref is not assigned");
        }
        return headerDialogRef.current;
    });

    const {
        user,
        handleSetUser,
        navigate,
        toast,
        isMobile,
        location
    } = useHeaderHook();

    return (
        <dialog ref={headerDialogRef} onClick={(e) => handleDialogBackdropClick(e, headerDialogRef)} className="box-content w-full h-fit px-6 bg-white border-2 border-gray-300 sm:hidden backdrop:backdrop-blur-sm">
            <div className="w-full h-auto flex flex-col justify-start items-start gap-10 p-4 ">
                <div className="w-full flex flex-row justify-between">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <button onClick={() => headerDialogRef.current?.close()}>
                        <Close />
                    </button>
                </div>
                <div>
                    <Link to="/quizlisting"  >
                        <span className="font-semibold text-lg leading-8 tracking-normal text-gray-600">Quizzes</span>
                    </Link>
                </div>

                {user.username ? (

                    <div className="w-full flex flex-col gap-6">
                        <div className="h-full flex flex-row justify-start items-start gap-8">
                            <PersonIcon />
                            <div className="flex flex-col">
                                <span className="font-semibold text-sm leading-5" >{user.username}</span>
                                <span className="text-sm leading-5">{user.email}</span>
                            </div>
                        </div>
                        <div>
                            <PrimaryButton btnType="light" className="w-full h-10" type="button" onClick={() => { headerDialogRef.current?.close(); onLogout().then(() => handleSetUser({ username: "", email: "" })).catch((error) => toast("error", { header: "Logout Error", message: error.message })) }}>
                                Logout
                            </PrimaryButton>
                        </div>
                    </div>
                ) :

                    <div className="w-full flex flex-col gap-6">
                        <PrimaryButton btnType="dark" className="w-full h-10" type="button" onClick={() => { headerDialogRef.current?.close(); navigate("/register", { state: { background: isMobile ? location : null } }) }}>
                            Sign up
                        </PrimaryButton>
                        <PrimaryButton btnType="light" className="w-full h-10" type="button" onClick={() => { headerDialogRef.current?.close(); navigate("/login", { state: { background: isMobile ? location : null } }) }}>
                            Login
                        </PrimaryButton>
                    </div>

                }
            </div>
        </dialog>
    );
});

export default BurgeMenuModal;