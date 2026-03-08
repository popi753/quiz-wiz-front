import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { PrimaryButton } from "@/components";
import { formatTime } from "@/helpers";

type TimerProps = {
    time: number;
    formRef: React.RefObject<HTMLFormElement | null>;
    remainingTime: number;
    setRemainingTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer = forwardRef<number, TimerProps>(({ time, formRef, remainingTime, setRemainingTime }, ref) => {
    const timerRef = useRef<number>(NaN);

    useEffect(() => {
        if (time && isNaN(remainingTime)) {
            setRemainingTime(time);
        }

        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setRemainingTime(prev => prev - 1);
            }, 1000);
        }

        if (remainingTime === 0) {
            clearInterval(timerRef.current);
            if (formRef.current) {
                formRef.current?.requestSubmit();
            }
        }

    }, [remainingTime, setRemainingTime, formRef, time]);

    useImperativeHandle(ref, () => {
        return timerRef.current;
    });

    return (
        <div className="sticky top-10 flex flex-col items-center justify-center gap-6 w-100 h-60 shadow-lg rounded-lg border border-gray-200 px-6 py-8">
            <div className="absolute -top-6 right-1/2 translate-x-1/2 w-32 px-16 py-2 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-lg">
                <h4 className="font-semibold text-base leading-8 tracking-normal capitalize text-gray-500">
                    timer
                </h4>
            </div>

            <div className="w-full flex justify-center border-b border-b-gray-200">
                <span className="font-normal text-6xl leading-[140%] tabular-nums">
                    {formatTime(remainingTime)}
                </span>
            </div>
            <PrimaryButton btnType="purple" className="w-full rounded-lg" type="submit">
                Submit
            </PrimaryButton>
        </div>
    );
});

export default Timer;