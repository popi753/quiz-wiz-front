import type { useMutation } from "@tanstack/react-query";
import { useToast } from "@/contexts";
import type { SubmissionAnswer, SubmitQuizProps } from "@/types";

export function useSelectAnswer(selectedAnswers: number[], setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>, limit: number) {

  const toast = useToast();

  return (e: React.ChangeEvent<HTMLInputElement>, answerId: number) => {
    if (e.target.checked) {
      if (selectedAnswers.length >= limit) {
        toast("warning", {
          header: "Selection limit reached",
          message: `You can only select up to ${limit} options for this question.`,
        });
        return;
      } else {
        setSelectedAnswers([...selectedAnswers, answerId]);
      }
      setSelectedAnswers([...selectedAnswers, answerId]);
    } else {
      setSelectedAnswers(selectedAnswers.filter(id => id !== answerId));
    }
  };
};

export function handleSubmitQuiz(mutate: ReturnType<typeof useMutation<{ message: string; mistakes: number; rightAnswers: number }, Error, SubmitQuizProps>>['mutate'], id: number, remainingTime: number) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const submissionAnswers: SubmissionAnswer[] = [];

    for (const [key, value] of fd.entries()) {
      const questionId = Number(key.split("-")[1]);

      const existingAnswer = submissionAnswers.find(e => e.question_id === questionId);
      if (existingAnswer) {
        existingAnswer.answers.push(Number(value));
      } else {
        const obj: SubmissionAnswer = { question_id: questionId, answers: [Number(value)] };
        submissionAnswers.push(obj);
      }
    }

    mutate({ quizId: Number(id), remainingTime, submittedQuiz: submissionAnswers });
  };
};