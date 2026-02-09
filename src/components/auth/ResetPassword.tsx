import { useForm } from 'react-hook-form';
import { PrimaryButton } from '@/components';
import { onResetPassword } from '@/services';
import { AuthInputField, AuthSwitch, useSubmitForm, type ResetPasswordFormData } from './index';

export default function ResetPassword() {

  const { register, setError, handleSubmit, formState: { errors } } = useForm<ResetPasswordFormData>({
    mode: 'all',
    defaultValues: {
      password: '',
      password_confirmation: '',
    }
  });

  const { isPending, onSubmit } = useSubmitForm({ setError, onAuthFunc: onResetPassword, type: 'reset-password' });

  return (
    <>
      <span className="font-Raleway font-extrabold text-3xl leading-[130%] tracking-[-1px]!">
        Reset Password
      </span>
      <span className="text-sm leading-[165%] text-gray-600">
        Please type something you will remember
      </span>
      <form className="w-full flex flex-col items-center gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-5">
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
        </div>

        <PrimaryButton
          btnType="dark"
          className="w-full h-14 rounded-xl"
          type="submit"
          disabled={isPending}
        >
          Reset Password
        </PrimaryButton>

        <AuthSwitch text="Already have an account?" link="/login" linkText="Log in" />
      </form>
    </>
  );
};
