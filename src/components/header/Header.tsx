import { useCallback, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { BurgerMenuModal } from "./index";
import { PrimaryButton } from "@/components";
import { Logo, BurgerMenu } from "@/components/icons";

export default function Header() {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    return (
        <header className="w-full h-auto flex flex-row justify-between items-center px-20 p-4 border-b border-gray-300 max-sm:px-6">
            <div className="flex flex-row justify-between items-center gap-10 max-sm:w-full">
                <Link to="/">
                    <Logo />
                </Link>
                <Link to="/quizzes" className="hover:underline max-sm:hidden" >
                    <span className="font-semibold text-sm leading-6 tracking-normal text-gray-600">Quizzes</span>
                </Link>
                <button className="sm:hidden" onClick={() => dialogRef.current?.showModal()}>
                    <BurgerMenu />
                </button>

            </div>
            <BurgerMenuModal ref={dialogRef} />

            <div className="flex flex-row justify-between items-center gap-2 font-raleway max-sm:hidden">
                <PrimaryButton btnType="dark" className="w-25 h-10" type="button" onClick={() => navigate("/register")}>
                    Sign up
                </PrimaryButton>
                <PrimaryButton btnType="light" className="w-25 h-10" type="button" onClick={() => navigate("/login")}>
                    Login
                </PrimaryButton>

            </div>
        </header>
    );
}