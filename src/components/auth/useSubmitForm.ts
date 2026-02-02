import { useCallback, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import type { UseFormSetError } from "react-hook-form";
import { AxiosError } from "axios";
import { onRegister } from "@/services";
import { UserContext, useToast } from "@/contexts";
import type { RegisterFormData } from "./types";

export default function useSubmitForm(setError: UseFormSetError<RegisterFormData>) {
    const toast = useToast();

    const { mutate, isPending } = useMutation({
        mutationFn: (data: RegisterFormData) => onRegister(data),
    });

    const userContext = useContext(UserContext) || [];

    const onSubmit = useCallback(
        (data: RegisterFormData) => {
            if (data.password !== data.password_confirmation) {
                setError('password_confirmation', {
                    message: 'passwords do not match',
                });
                return;
            }

            mutate(data, {
                onSuccess: (data) => {
                    toast('success', {
                        header: 'Registration Successful',
                        message: 'Check your email for verification instructions.',
                    });
                    userContext.handleSetUser(data);
                },
                onError: (error) => {
                    if (error instanceof AxiosError) {
                        if (error.response?.status === 500 || !(error.response?.status)) {
                            toast('error', {
                                header: 'error',
                                message: 'An unexpected error occurred. please try again later',
                            });
                        } else {
                            const apiErrors = error.response?.data?.errors;
                            if (apiErrors) {
                                for (const field in apiErrors) {
                                    setError(field as keyof RegisterFormData, {
                                        message: apiErrors[field][0],
                                    });
                                }
                            }
                        }
                    }
                },
            });
        },
        [mutate, setError, toast, userContext],
    );
    return { isPending, onSubmit };
};