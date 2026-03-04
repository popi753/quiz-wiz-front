import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizQuestions, } from "@/services";
import { Error404Icon, ErrorPage } from "@/components";

export default function QuizFillingPage() {

    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ['quizFillingData', id],
        queryFn: () => fetchQuizQuestions(Number(id)),
        retry: false,
    });


    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

    if (error || !data) {
        return <ErrorPage errorCode={404} errorText="oops" icon={<Error404Icon />} />;
    }


    return (
        <div className="flex-1 w-full h-full flex flex-col items-center gap-24 px-22 py-15">


        </div>

    );
}