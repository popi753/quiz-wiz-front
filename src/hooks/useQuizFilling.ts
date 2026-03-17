import { useRef } from "react";
import { useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchQuizQuestions, submitQuiz } from "@/services";
import type { SubmitQuizProps } from "@/types";

export default function useQuizFilling() {

    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ['quizFillingData', id],
        queryFn: () => fetchQuizQuestions(Number(id)),
        retry: false,
    });
    const quiz = data?.quiz;

    const timerRef = useRef<number | null>(null);
    const ResultModalRef = useRef<HTMLDialogElement>(null);

    const { mutate, isPending, isSuccess, data: submissionData } = useMutation<{ message: string; mistakes: number; rightAnswers: number, time: number }, Error, SubmitQuizProps>({
        mutationFn: ({ quizId, remainingTime, submittedQuiz }) => submitQuiz({ quizId, remainingTime, submittedQuiz }),
        onMutate: () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
            ResultModalRef.current?.showModal();
        }
    });

    return { data: quiz, isLoading, error, timerRef, ResultModalRef, mutate, isPending, isSuccess, submissionData };
};