import instance from "./apiAxiosInstance";
import type { RegisterFormData, LoginFormData, ForgotPasswordFormData, ResetPasswordFormData } from "@/components/auth";
import type { onAuthResponse, onUserResponse } from "@/types";

export async function onRegister(data: RegisterFormData): Promise<onAuthResponse> {
        const response = await instance.post('/register', data);
        return response.data;
};

export async function onLogin(data: LoginFormData): Promise<onUserResponse> {
        const response = await instance.post('/login', data);
        return response.data;
};

export async function onForgotPassword(data: ForgotPasswordFormData): Promise<onAuthResponse> {
        const response = await instance.post('/forgot-password', data);
        return response.data;
};

export async function onResetPassword(data: ResetPasswordFormData): Promise<onAuthResponse> {
        const response = await instance.post('/reset-password', data);
        return response.data;
};

export async function onCheckProfile(): Promise<onUserResponse> {
        const response = await instance.get('/user');
        return response.data;
};

export async function onLogout(): Promise<onAuthResponse> {
        const response = await instance.post('/logout');
        return response.data;
};
