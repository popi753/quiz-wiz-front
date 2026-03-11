import { forwardRef } from "react";
import { CloseIcon, ResultCheckCircle, PrimaryButton } from "@/components";
import { ResultModalItem, useResultModalHook } from "./index";
import type { Difficulty } from "@/types";
import { formatTime } from "@/helpers";

type ResultModalProps = {
    isPending: boolean;
    isSuccess: boolean;
    quizTitle: string;
    quizLevel: Difficulty;
    time: number;
    mistakes: number;
    rightAnswers: number;
}

const ResultModal = forwardRef<HTMLDialogElement, ResultModalProps>(({ isPending, isSuccess, quizTitle, quizLevel, time, mistakes, rightAnswers }, ref) => {

    const { navigate, ResultDialogRef } = useResultModalHook(isSuccess, ref);

    return (
        <dialog
            ref={ResultDialogRef}
            className="box-content w-100 h-fit p-6 m-auto bg-white border-2 border-gray-300 backdrop:backdrop-blur-sm rounded-lg shadow-lg"
        >
            {isPending && <div className="loader">Loading...</div>}
            {isSuccess &&
                <div className="w-full h-auto flex flex-col items-center">
                    <div className="w-full flex justify-end" onClick={() => { navigate('/'); }}>
                        <CloseIcon />
                    </div>
                    <div className="w-full flex flex-col items-center gap-6">
                        <div className="w-full flex flex-col items-center gap-5">
                            <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full">
                                <div className="flex items-center justify-center w-9 h-9 bg-green-200 rounded-full">
                                    <ResultCheckCircle />
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-8 text-center">
                                <div>
                                    <h3 className="font-semibold text-lg leading-7  text-gray-900">
                                        Quiz finished!
                                    </h3>
                                    <span className="font-normal text-sm leading-5 text-gray-600 ">
                                        your results
                                    </span>
                                </div>

                                <div className=" flex flex-col items-start gap-3">
                                    <ResultModalItem headerText="quiz name" contentText={quizTitle} contentColor="black" />
                                    <hr className="w-full border-gray-200" />
                                    <ResultModalItem headerText="quiz level" contentText={quizLevel.difficulty} contentColor={quizLevel.color} />
                                    <hr className="w-full border-gray-200" />
                                    <ResultModalItem headerText="time" contentText={formatTime(time)} contentColor="black" />
                                    <hr className="w-full border-gray-200" />
                                    <ResultModalItem headerText="mistakes" contentText={mistakes} contentColor="red" />
                                    <hr className="w-full border-gray-200" />
                                    <ResultModalItem headerText="right answers" contentText={rightAnswers} contentColor="green" />
                                </div>
                            </div>
                        </div>
                        <PrimaryButton btnType="purple" type="button" onClick={() => { navigate('/'); }} className="w-full rounded-lg">
                            back to home
                        </PrimaryButton>
                    </div>
                </div>
            }
        </dialog>
    );
});

export default ResultModal;