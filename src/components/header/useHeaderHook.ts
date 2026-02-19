import { UserContext, useToast, type UserContextType } from "@/contexts";
import useIsMobile from "@/hooks/useIsMobile";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";

export default function useHeaderHook() {
    const { user, handleSetUser } = useContext<UserContextType>(UserContext) || { user: { username: "", email: "" }, handleSetUser: () => {} };
    const navigate = useNavigate();
    const toast = useToast();
    const isMobile = useIsMobile();
    const location = useLocation();

    return {
        user,
        handleSetUser,
        navigate,
        toast,
        isMobile,
        location
    };
};