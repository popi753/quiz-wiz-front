import type { Quiz } from "@/types";
import { Diploma, HashTag, ClockIcon, RocketIcon } from "@/components";
import { QuizDetailsItem } from "./index";

export default function QuizDetailsRow({ quiz }: { quiz: Quiz }) {

    return (
        <ul className="flex flex-row items-center gap-2">
            <QuizDetailsItem Icon={<HashTag />} text={`${quiz.question_count} Questions`} />
            <hr className="w-4 border-gray-300 -rotate-90" />
            <QuizDetailsItem Icon={<Diploma />} text={`${quiz.max_points} Points`} />
            <hr className="w-4 border-gray-300 -rotate-90" />
            <QuizDetailsItem Icon={<RocketIcon />} text={`${quiz.total_users} plays`} />
            <hr className="w-4 border-gray-300 -rotate-90" />
            <QuizDetailsItem Icon={<ClockIcon />} text={`${quiz.time} m`} />
        </ul>
    );
} 