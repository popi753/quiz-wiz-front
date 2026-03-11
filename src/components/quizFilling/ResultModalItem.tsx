import { cn } from "@/helpers";

export default function ResultModalItem({ headerText, contentText, contentColor }: { headerText: string, contentText: string | number, contentColor: string }) {
    return (
        <div className="w-full flex flex-col items-start gap-2">
            <h5 className="font-medium text-sm leading-5  text-gray-700 capitalize">
                {headerText}
            </h5>
            <span
                style={{ color: contentColor }}
                className={cn("font-medium text-sm leading-5 capitalize")}>
                {contentText}
            </span>
        </div>
    );
};