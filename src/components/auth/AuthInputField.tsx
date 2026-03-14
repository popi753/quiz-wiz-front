import { AlertCircle, Eye } from '@/components';
import { changeVisibility, type InputProps } from './index';

export default function AuthInputField({ id, label, required, error, register, ...props }: InputProps) {
    return (
        <>
            <div className="relative flex flex-1 flex-col gap-2">
                <label htmlFor={id} className='text-sm leading-5 text-gray-700 tracking-normal'>
                    {label}
                </label>
                <input
                    {...props}
                    {...register(id, {
                        required: { value: required, message: "This field is required" },
                        minLength: { value: props.minLength || 0, message: `Minimum length is ${props.minLength}` },
                        maxLength: { value: 255, message: "Maximum length is 255" }
                    })}
                    autoComplete={props.type === "email" ? "email" : "off"}
                    minLength={props.minLength}
                    name={id} id={id}
                    aria-invalid={!!error}
                    className={`flex-1 h-10 p-4 border border-gray-300 rounded-lg focus:outline-3 focus:outline-purple ${error ? 'border-orange' : ''}`}
                />

                {error ? <AlertCircle className='absolute right-[3%] top-1/2 -translate-y-1/2' /> :
                    props.type === "password" ? <Eye className='absolute right-[3%] top-1/2 -translate-y-1/2' onClick={changeVisibility} /> : null}
                <span className="block h-5 text-sm text-orange leading-5 tracking-normal">{error || " "}</span>
            </div>
        </>
    );
};