import instance from "./apiAxiosInstance";
import type { UserContextType } from "@/contexts";
import type { RegisterFormData, LoginFormData, ForgotPasswordFormData, ResetPasswordFormData } from "@/components/auth";

export type onRegisterResponseType = {
        success: boolean,
        message: string,
};

export async function onRegister(data: RegisterFormData): Promise<onRegisterResponseType> {
        const response = await instance.post('/register', data);
        return response.data;
};

export type onLoginResponseType = {
        success: boolean,
        user: UserContextType['user'],
};

export async function onLogin(data: LoginFormData): Promise<onLoginResponseType> {
        const response = await instance.post('/login', data);
        return response.data;
};

type onForgotPasswordResponseType = {
        success: boolean,
        status: string,
};

export async function onForgotPassword(data: ForgotPasswordFormData): Promise<onForgotPasswordResponseType> {
        const response = await instance.post('/forgot-password', data);
        return response.data;
};

export type onResetPasswordResponseType = {
        success: boolean,
        status: string,
};

export async function onResetPassword(data: ResetPasswordFormData): Promise<onResetPasswordResponseType> {
        const response = await instance.post('/reset-password', data);
        return response.data;
};

type onCheckProfileResponseType = {
        success: boolean,
        user: UserContextType['user'] | null,
};

export async function onCheckProfile(): Promise<onCheckProfileResponseType> {
        const response = await instance.post('/user');
        return response.data;
};

export async function onLogout(): Promise<{ success: boolean, message: string }> {
        const response = await instance.post('/logout');
        return response.data;
};
