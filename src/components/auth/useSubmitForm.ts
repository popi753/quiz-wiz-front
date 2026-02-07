import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import type { UseFormSetError } from "react-hook-form";
import { UserContext, useToast } from "@/contexts";
import type { onForgotPasswordResponseType, onLoginResponseType, onRegisterResponseType, onResetPasswordResponseType } from "@/services";
import type { ForgotPasswordFormData, LoginFormData, RegisterFormData, ResetPasswordFormData } from "./types";
import { handleErrorResponse } from "./helpers";

type UseSubmitFormProps =
    | { setError: UseFormSetError<RegisterFormData>; onAuthFunc: (data: RegisterFormData) => Promise<onRegisterResponseType>; type: 'register'; }
    | { setError: UseFormSetError<LoginFormData>; onAuthFunc: (data: LoginFormData) => Promise<onLoginResponseType>; type: 'login'; }
    | { setError: UseFormSetError<ForgotPasswordFormData>; onAuthFunc: (data: ForgotPasswordFormData) => Promise<onForgotPasswordResponseType>; type: 'forgot-password'; }
    | { setError: UseFormSetError<ResetPasswordFormData>; onAuthFunc: (data: ResetPasswordFormData) => Promise<onResetPasswordResponseType>; type: 'reset-password'; };

export default function useSubmitForm(props: UseSubmitFormProps) {
    const { setError, onAuthFunc, type } = props;
    const toast = useToast();
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: onAuthFunc as (data: RegisterFormData | LoginFormData | ForgotPasswordFormData | ResetPasswordFormData) => Promise<onRegisterResponseType | onLoginResponseType | onForgotPasswordResponseType | onResetPasswordResponseType>,
    });

    const { handleSetUser } = useContext(UserContext) || {};

    const onSubmit = useCallback(
        (data: RegisterFormData | LoginFormData | ForgotPasswordFormData | ResetPasswordFormData) => {

            if ((type === "register" || type === "reset-password") && (data as RegisterFormData | ResetPasswordFormData).password !== (data as RegisterFormData | ResetPasswordFormData).password_confirmation) {
                setError('password', {
                    message: 'passwords do not match',
                });
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
                        handleSetUser((data as onLoginResponseType).user);
                        navigate("/quizlisting");
                    }
                    if (type === "forgot-password") {
                        toast('success', {
                            header: 'Verification Successful',
                            message: (data as onForgotPasswordResponseType).status,
                        });
                    }
                    if (type === "reset-password") {
                        toast('success', {
                            header: 'Password Reset Successful',
                            message: 'Your password has been reset successfully.',
                        });
                    }
                },
                onError: (error) => {
                    handleErrorResponse(error, toast, setError as UseFormSetError<RegisterFormData | LoginFormData | ForgotPasswordFormData | ResetPasswordFormData>);
                },
            });
        },
        [mutate, setError, toast, handleSetUser, type, navigate],
    );
    return { isPending, onSubmit };
};
