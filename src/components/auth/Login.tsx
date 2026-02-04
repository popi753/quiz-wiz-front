import { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { useForm } from "react-hook-form";

import { PrimaryButton } from "@/components";
import { AuthInputField, useSubmitForm, type LoginFormData, AuthSwitch } from './index';

import { useToast } from "@/contexts";
import { onLogin } from "@/services";

export default function Login() {
    const toast = useToast();
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const verify = searchParams.get("verify");
        if (verify === "0") {
            toast("warning", {
                header: "TOken Expired",
                message: "emial verification token expired. please try again.",
            });
        }
        else if (verify === "1") {
            toast("success", {
                header: "Email Verified",
                message: "continue authorization.",
            });
        }
        else if (verify === "2") {
            toast("success", {
                header: "Email was already verified",
                message: "You can proceed to login.",
            });
        }
        else if (verify === "3") {
            toast("error", {
                header: "Email Verification Failed",
                message: "The email verification link is invalid or has expired. try again.",
            });
        }
    }, []);

    const { register, setError, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        mode: 'all',
        defaultValues: {
            email: 'test@gmail.com',
            password: 'pass',
            remember: true,
        }
    });

    const { isPending, onSubmit } = useSubmitForm(setError, onLogin);

    return (
        <>
            <span className="font-Raleway font-extrabold text-3xl leading-[130%] tracking-[-1px]!">
                Sign in
            </span>
            <form
                className="w-full flex flex-col items-center gap-8"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full flex flex-col gap-5">
                    <AuthInputField
                        register={register}
                        minLength={3}
                        type="email"
                        placeholder="example@gmail.com"
                        id="email"
                        required={true}
                        error={errors.email?.message || ''}
                        label="Email"
                    />

                    <AuthInputField
                        register={register}
                        minLength={3}
                        type="password"
                        placeholder="Must be 3 characters"
                        id="password"
                        required={true}
                        error={errors.password?.message || ''}
                        label="Password"
                    />

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row gap-2.5">
                                <input
                                    {...register('remember', {
                                        required: {
                                            value: false,
                                            message: 'You must accept the terms and privacy policy',
                                        },
                                    })}
                                    className="w-5 h-5 accent-black"
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-gray-700 leading-[125%] tracking-normal"
                                >
                                    Remember for 30 days
                                </label>
                            </div>

                            <Link to={'/forgetpassword'} className="hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <span className="block h-5 text-sm text-orange leading-5 font-normal tracking-normal">
                            {errors.remember?.message || ''}
                        </span>
                    </div>
                </div>

                <PrimaryButton
                    btnType="dark"
                    className="w-full h-14 rounded-xl"
                    type="submit"
                    disabled={isPending}
                >
                    Sign in
                </PrimaryButton>

                <AuthSwitch text="Don't have an account?" link="/register" linkText="Sign up" />
            </form>
        </>
    );
};
