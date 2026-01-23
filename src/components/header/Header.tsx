import { useRef } from "react";
import { Link } from "react-router";
import { AuthBtn, BurgerMenuModal } from "./index";
import { Logo, BurgerMenu } from "@/components/icons";

export default function Header() {

    const dialogRef = useRef<HTMLDialogElement>(null);

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
                <AuthBtn text="Sign Up" btnType="dark" btnClasses="w-25" link="/register" />
                <AuthBtn text="Log in" btnType="light" btnClasses="w-25" link="/login" />
            </div>
        </header>
    );
}