import { cn } from "@/helpers";

type ScrollButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
}

export default function ScrollButton({ ...props }: ScrollButtonProps) {
    return (
        <button {...props}
            className={cn("flex items-center p-2 cursor-pointer rounded-full hover:bg-gray-300 max-md:hidden",
                {
                    "opacity-50 hover:bg-gray-200 cursor-default!": props.disabled
                }
            )}
        >
            {props.children}
        </button>
    );
};