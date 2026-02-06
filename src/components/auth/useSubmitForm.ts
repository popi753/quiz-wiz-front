import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import type { UseFormSetError } from "react-hook-form";
import { UserContext, useToast } from "@/contexts";
import type { onLoginResponseType, onRegisterResponseType } from "@/services";
import type { LoginFormData, RegisterFormData } from "./types";
import { handleErrorResponse, handleLoginSuccess } from "./helpers";

type UseSubmitFormProps =
    | { setError: UseFormSetError<RegisterFormData>; onAuthFunc: (data: RegisterFormData) => Promise<onRegisterResponseType>; type: 'register'; }
    | { setError: UseFormSetError<LoginFormData>; onAuthFunc: (data: LoginFormData) => Promise<onLoginResponseType>; type: 'login'; };


export default function useSubmitForm(props: UseSubmitFormProps) {
    const { setError, onAuthFunc, type } = props;
    const toast = useToast();
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: onAuthFunc as (data: RegisterFormData | LoginFormData) => Promise<onRegisterResponseType | onLoginResponseType>,
    });

    const { handleSetUser } = useContext(UserContext) || [];

    const onSubmit = useCallback(
        (data: RegisterFormData | LoginFormData) => {

            if (type === "register" && data.password !== (data as RegisterFormData).password_confirmation) {
                setError('password_confirmation', {
                    message: 'passwords do not match',
                });
                return;
            }

            mutate(data, {
                onSuccess: (data) => {
                    if (type === "register") {
                        toast('success', {
                            header: 'Registration Successful',
                            message: 'Check your email for verification instructions.',
                        });
                    }
                    if (type === "login") {
                        handleLoginSuccess((data as onLoginResponseType).user, handleSetUser, navigate);
                    }
                },
                onError: (error) => {
                    if (type === "register") {
                        handleErrorResponse(error, toast, setError);
                    } else if (type === "login") {
                        handleErrorResponse(error, toast, setError);
                    }
                },
            });
        },
        [mutate, setError, toast, handleSetUser],
    );
    return { isPending, onSubmit };
};
