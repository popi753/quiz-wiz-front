import instance from "./apiAxiosInstance";
import { type RegisterFormData, type LoginFormData } from "@/components/auth";

export async function onRegister(data: RegisterFormData) {
        try {
                const response = await instance.post('/register', data);
                return response.data;

        } catch (error: unknown) {
                throw error;
        }
};

export async function onLogin(data: LoginFormData) {
        try {
                const response = await instance.post('/login', data);
                return response.data;
        } catch (error: unknown) {
                throw error;
        }
};

