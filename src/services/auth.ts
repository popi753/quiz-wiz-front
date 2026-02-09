import instance from "./apiAxiosInstance";
import type { UserContextType } from "@/contexts";
import type { RegisterFormData, LoginFormData, ForgotPasswordFormData, ResetPasswordFormData } from "@/components/auth";

export type onRegisterResponseType = {
        success: boolean,
        message: string,
}

export async function onRegister(data: RegisterFormData): Promise<onRegisterResponseType> {
        try {
                const response = await instance.post('/register', data);
                return response.data;
        } catch (error: unknown) {
                throw error;
        }
};

export type onLoginResponseType = {
        success: boolean,
        user: UserContextType['user'],
}

export async function onLogin(data: LoginFormData): Promise<onLoginResponseType> {
        try {
                const response = await instance.post('/login', data);
                return response.data;
        } catch (error: unknown) {
                throw error;
        }
};

type onForgotPasswordResponseType = {
        success: boolean,
        status: string,
}

export async function onForgotPassword(data: ForgotPasswordFormData): Promise<onForgotPasswordResponseType> {
        try {
                const response = await instance.post('/forgot-password', data);
                return response.data;
        } catch (error: unknown) {
                throw error;
        }
};

export type onResetPasswordResponseType = {
        success: boolean,
        status: string,
}

export async function onResetPassword(data: ResetPasswordFormData): Promise<onResetPasswordResponseType> {
        try {
                const response = await instance.post('/reset-password', data);
                return response.data;
        } catch (error: unknown) {
                throw error;
        }
};
