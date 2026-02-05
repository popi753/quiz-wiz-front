import type { UserContextType } from "@/contexts";
import instance from "./apiAxiosInstance";
import { type RegisterFormData, type LoginFormData } from "@/components/auth";

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

