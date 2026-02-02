import { useForm } from 'react-hook-form';
import { PrimaryButton } from '@/components';
import { AuthInputField, useSubmitForm, type RegisterFormData, AuthSwitch } from './index';

export default function Register() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: false,
    },
  });

  const { isPending, onSubmit } = useSubmitForm(setError);

  return (
    <>
      <span className="font-Raleway font-extrabold text-3xl leading-[130%] tracking-[-1px]!">
        Create Account
      </span>
      <form className="w-full flex flex-col items-center gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-5">
          <AuthInputField
            register={register}
            minLength={3}
            type="text"
            placeholder="Your username"
            id="username"
            required={true}
            error={errors.username?.message || ''}
            label="Username"
          />

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

          <AuthInputField
            register={register}
            minLength={3}
            type="password"
            placeholder="Must be 3 characters"
            id="password_confirmation"
            required={true}
            error={errors.password?.message || errors.password_confirmation?.message || ''}
            label="Confirm Password"
          />

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2.5">
              <input
                {...register('terms', {
                  required: {
                    value: true,
                    message: 'You must accept the terms and conditions to proceed',
                  },
                })}
                className="w-5 h-5 accent-black"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="text-[14px] text-gray-700 leading-[125%] tracking-normal"
              >
                I accept the terms and privacy policy
              </label>
            </div>
            <span className="block h-5 text-[14px] text-orange leading-5 font-normal tracking-normal">
              {errors.terms?.message || ''}
            </span>
          </div>
        </div>

        <PrimaryButton
          btnType="dark"
          className="w-full h-14 rounded-xl"
          type="submit"
          disabled={isPending}
        >
          Sign up
        </PrimaryButton>

        <AuthSwitch text="Already have an account?" link="/login" linkText="Log in" />
      </form>
    </>
  );
};
