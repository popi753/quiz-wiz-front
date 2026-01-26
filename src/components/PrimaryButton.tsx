import { cn } from "@/helpers/utils";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    btnType: "dark" | "light";
    children: React.ReactNode;
};

export default function PrimaryButton({ btnType, children, ...props }: PrimaryButtonProps) {
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