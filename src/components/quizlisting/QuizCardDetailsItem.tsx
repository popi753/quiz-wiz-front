import type React from "react";
import { cn } from "@/helpers/utils";

type QuizCardItemProps = {
    icon?: React.ReactNode;
    iconBg?: string;
    header: string;
    text: string | number;
};

export default function QuizCardDetailsItem({ icon, iconBg, header, text }: QuizCardItemProps) {
    return (
        <div className="flex flex-row items-center justify-center gap-2">
            {icon &&
                <div style={{ backgroundColor: iconBg }}
                    className={cn("w-10 h-10 rounded-full flex items-center justify-center", iconBg)}>
                    {icon}
                </div>}

            <div className="flex flex-col">
                <h3 className="font-semibold text-sm leading-5 text-nowrap">{header}</h3>
                <p className="text-sm leading-5 text-gray-600">{text}</p>
            </div>
        </div>
    );
};