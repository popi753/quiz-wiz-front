import { Error404Icon, ErrorPage, QuizFillingHeader, QuizForm, ResultModal } from "@/components";
import { useQuizFilling } from "@/hooks";

export default function QuizFillingPage() {

    const { data, isLoading, error, timerRef, ResultModalRef, mutate, isPending, isSuccess, submissionData } = useQuizFilling();

    if (isLoading) {
        return <div className="loader">Loading...</div>;
    }

    if (error || !data) {
        return <ErrorPage errorCode={404} errorText="oops" icon={<Error404Icon />} />;
    }

    return (
        <div className="flex-1 w-full h-full flex flex-col items-center gap-24 px-22 py-15">
            <QuizFillingHeader quiz={data} />

            <QuizForm
                id={data.id}
                timerRef={timerRef}
                mutate={mutate}
                questions={data.questions ?? []}
                time={data.time}
            />

            <ResultModal
                quizTitle={data.title}
                quizLevel={data.difficulty}
                time={submissionData?.time ?? 0}
                mistakes={submissionData?.mistakes ?? 0}
                rightAnswers={submissionData?.rightAnswers ?? 0}
                isPending={isPending}
                isSuccess={isSuccess}
                ref={ResultModalRef} />
        </div>
    );
};