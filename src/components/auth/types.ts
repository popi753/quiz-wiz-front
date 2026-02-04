import type { UseFormRegister } from "react-hook-form";

export type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms: boolean;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string;
  required: boolean;
  error: string;
  register: UseFormRegister<any>;
};
