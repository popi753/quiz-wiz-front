import { useToast } from "@/contexts";
import { AxiosError } from "axios";
import type { UseFormSetError } from "react-hook-form";

export const changeVisibility = (e: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => {
    const input = (e.currentTarget as HTMLElement).previousElementSibling as HTMLInputElement;
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    };
};

export const handleLoginSuccess = (user : { username: string, email: string }, handleSetUser: (user: { username: string, email: string }) => void, navigate : (path: string) => void) => {
    handleSetUser(user);
    navigate("/quizlisting");
};

export function handleErrorResponse<GenericFormDataType extends object>(error: unknown, toast: ReturnType<typeof useToast>, setError: UseFormSetError<GenericFormDataType>) {
    if (!(error instanceof AxiosError) || error.response?.status === 500 || !error.response?.status || !(error.response?.data?.errors)) {
        toast('error', {
            header: 'error',
            message: 'An unexpected error occurred. please try again later',
        });
        return;
    };

    const apiErrors = error.response?.data?.errors;

    for (const field in apiErrors) {
        setError(field as any, {
            message: apiErrors[field][0],
        });
    };
};


