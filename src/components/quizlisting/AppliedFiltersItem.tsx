import { cn } from "@/helpers";

type FilterTabItemProps = {
    id: string;
    name: string;
    color?: string;
    className: string;
};

export default function AppliedFiltersItem({ id, name, color, className }: FilterTabItemProps) {
    return (
        <div key={id} className="flex flex-row items-center ">
            <input className="hidden peer" type="checkbox" name={id} id={`${name}-${id}`} />
            <label
                style={
                    {
                        '--bg': color + "25",
                        '--text': color,
                    } as React.CSSProperties
                }
                htmlFor={`${name}-${id}`}
                className={cn("capitalize px-3 py-2 font-semibold text-sm leading-5 cursor-pointer rounded-3xl bg-(--bg) text-(--text) peer-checked:text-white peer-checked:bg-(--text)",
                    className
                )}>
                {name}
            </label>
        </div>
    );
};