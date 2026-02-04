import instance from "./apiAxiosInstance";
import { type RegisterFormData } from "@/components/auth";


export async function onRegister(data: RegisterFormData) {
        try {
                const response = await instance.post('/register', data);
                return response.data;
        } catch (error: unknown) {
                throw error;
        }
}
