import { BackButton, Error404Icon, ErrorPage, QuizOverview, RelatedQuizzes } from "@/components";
import { useQuizOverview } from "@/hooks";

export default function QuizOverviewPage() {

    const { navigate, data, isLoading, error } = useQuizOverview();

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

    if (error || !data) {
        return <ErrorPage errorCode={404} errorText="oops" icon={<Error404Icon />} />;
    }

    return (
        <div className="w-full h-full flex-1 flex flex-col items-start justify-start px-24 pt-6 pb-20 gap-6">

            <BackButton onClick={() => navigate("/quizlisting")} />

            <div className="w-full flex-1 flex flex-row items-start justify-between gap-8">

                <QuizOverview quiz={data.quiz} />

                <RelatedQuizzes relatedQuizzes={data.relatedQuizzes} />

            </div>
        </div>
    );
};