import { UserContext, useToast } from "@/contexts";
import useIsMobile from "@/hooks/useIsMobile";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";

export default function useHeaderHook() {
    const { user, handleSetUser } = useContext(UserContext) || { user: null, handleSetUser: null };
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
    }

};