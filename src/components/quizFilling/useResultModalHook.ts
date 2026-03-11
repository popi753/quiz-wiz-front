import { useEffect, useImperativeHandle, useRef } from "react";
import { useNavigate } from "react-router";

export default function useResultModalHook(isSuccess: boolean, ref: React.ForwardedRef<HTMLDialogElement>) {
    const navigate = useNavigate();
    const ResultDialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
        if (!ResultDialogRef.current) {
            throw new Error("Dialog ref is not assigned");
        }
        return ResultDialogRef.current;
    });

    useEffect(() => {
        if (isSuccess) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSuccess]);

    return { navigate, ResultDialogRef };
};