import type { UserContextType } from "@/contexts";

export type onUserResponse = {
        success: boolean,
        user: UserContextType['user'] | null,
};