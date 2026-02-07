import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/components";
import { AuthInputField, useSubmitForm, type ForgotPasswordFormData } from "./index";
import { onForgotPassword } from "@/services";

export default function ForgotPassword() {
    const { register, setError, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
        mode: 'all',
        defaultValues: {
            email: '',
        }
    });

    const { isPending, onSubmit } = useSubmitForm({ setError, onAuthFunc: onForgotPassword, type: 'forgot-password' });

    return (
        <>
            <span className="font-Raleway font-extrabold text-3xl leading-[130%] tracking-[-1px]!">
                Forgot Password?
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
