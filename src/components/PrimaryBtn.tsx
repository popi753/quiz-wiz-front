import { cn } from "@/helpers/utils";

type AuthBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    btnType: "dark" | "light";
    children: React.ReactNode;
};

export default function PrimaryBtn({ btnType, children, ...props }: AuthBtnProps) {
    return (
        <button {...props}
            className={cn("hover:scale-110 rounded-sm py-3.5 flex justify-center items-center",
                props.className,
                {
                    "bg-black text-white": btnType === "dark",
                    "bg-gray-100 text-purple hover:bg-gray-200": btnType === "light"
                })}>
            <span className=" font-bold text-sm leading-none">
                {children}
            </span>
        </button>
    );

}