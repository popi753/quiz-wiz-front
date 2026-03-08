import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { fetchQuizQuestions } from "@/services";

export default function useQuizFilling() {

    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ['quizFillingData', id],
        queryFn: () => fetchQuizQuestions(Number(id)),
        retry: false,
    });

    const timerRef = useRef<number | null>(null);

    return { data, isLoading, error, timerRef };
};