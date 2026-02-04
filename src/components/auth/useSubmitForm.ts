import { useCallback, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import type { UseFormSetError } from "react-hook-form";
import { UserContext, useToast } from "@/contexts";
import type { LoginFormData, RegisterFormData } from "./types";
import { handleErrorResponse, handleLoginSuccess } from "./helpers";

export default function useSubmitForm<GenericFormDataType extends RegisterFormData | LoginFormData>(setError: UseFormSetError<GenericFormDataType>, onAuthFunc: (data: GenericFormDataType) => Promise<any>) {
    const toast = useToast();
    const { mutate, isPending } = useMutation({
        mutationFn: (data: GenericFormDataType) => onAuthFunc(data),
    });

    const { handleSetUser } = useContext(UserContext) || [];

    const onSubmit = useCallback(
        (data: GenericFormDataType) => {

            if ("password_confirmation" in data && data.password !== data.password_confirmation) {
                setError('password_confirmation' as any, {
                    message: 'passwords do not match',
                });
                return;
            }

            mutate(data, {
                onSuccess: (data) => {
                    if ('password_confirmation' in data) {
                        toast('success', {
                            header: 'Registration Successful',
                            message: 'Check your email for verification instructions.',
                        });
                    } else {
                        handleLoginSuccess(data, handleSetUser);
                    }
                },
                onError: (error) => {
                    handleErrorResponse(error, toast, setError);
                },
            });
        },
        [mutate, setError, toast, handleSetUser],
    );
    return { isPending, onSubmit };
};
