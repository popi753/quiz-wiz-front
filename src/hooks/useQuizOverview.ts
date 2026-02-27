import { fetchQuiz } from "@/services/quiz";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

export default function useQuizOverview() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['quizData', id],
        queryFn: () => fetchQuiz(Number(id)),
        retry: false,
    });

    return {navigate, data, isLoading, error};
}