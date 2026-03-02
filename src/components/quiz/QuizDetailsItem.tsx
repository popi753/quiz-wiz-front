type QuizDetailsItemProps = {
    Icon: React.ReactNode,
    text: string;
};

export default function QuizDetailsItem({ Icon, text }: QuizDetailsItemProps) {
    return (
        <li className="flex flex-row items-center gap-2">
            {Icon}
            <span className="font-semibold text-sm leading-5 text-gray-500">{text}</span>
        </li>
    );
}