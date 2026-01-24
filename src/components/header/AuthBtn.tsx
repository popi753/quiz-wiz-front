import { Link } from "react-router";

type AuthBtnProps = {
    text: string;
    btnType: "dark" | "light";
    btnClasses: string;
    link: string;
};

export default function AuthBtn({ text, btnType, btnClasses, link }: AuthBtnProps) {

    return (
        <Link to={link}>
            <button className={`${btnClasses} h-10 hover:scale-110 rounded-sm ${btnType === "dark" ? "bg-black text-white" : btnType === "light" ? "bg-gray-100 text-purple hover:bg-gray-200" : ""} py-3.5 flex justify-center items-center`}>
                <span className=" font-bold text-sm leading-none">{text}</span>
            </button>
        </Link>
    );

}