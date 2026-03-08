import { useToast } from "@/contexts";

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
}
