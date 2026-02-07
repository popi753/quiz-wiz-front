import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { PrimaryButton } from "@/components";
import { AuthInputField, handleErrorResponse } from "./index";
import { useToast } from "@/contexts";
import { onForgetPassword } from "@/services";

export default function ForgetPassword() {
    const toast = useToast();
    const { register, setError, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
        }
    });

    const { mutate, isPending } = useMutation({
        mutationFn: (email: string) => onForgetPassword(email),
    });

    const onSubmit = useCallback((formData: { email: string }) => {
        mutate(formData.email, {
            onSuccess: (data) => {
                toast('success', {
                    header: 'Verification Successful',
                    message: data.status,
                });
            },
            onError: (error) => {
                handleErrorResponse(error, toast, setError)
            }
        });
    }, [])

    return (
        <>
            <span className="font-Raleway font-extrabold text-3xl leading-[130%] tracking-[-1px]!">
                Forget Password?
            </span>
            <span className="text-sm leading-[165%] text-gray-600">
                Don’t worry! It happens. Please enter the email associated with your account.
            </span>
            <form
                className="w-full flex flex-col items-center gap-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full flex flex-col gap-5">
                    <AuthInputField
                        register={register}
                        minLength={3}
                        type="email"
                        placeholder="Enter Your Email Adress"
                        id="email"
                        required={true}
                        error={errors.email?.message || ''}
                        label="Email Address"
                    />
                </div>

                <PrimaryButton
                    btnType="dark"
                    className="w-full h-14 rounded-xl"
                    type="submit"
                    disabled={isPending}
                >
                    Send
                </PrimaryButton>
            </form>
        </>
    );
};
