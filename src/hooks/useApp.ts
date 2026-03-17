import { useContext, useEffect } from "react";
import { useIsMobile, useBackgroundLocation } from "./index";
import { UserContext, useToast } from "@/contexts";
import { onCheckProfile, sanctumCsrfCookie } from "@/services";

export default function useApp(){
const isMobile = useIsMobile();
    const backgroundUrlLocation = useBackgroundLocation();
    const toast = useToast();
    const { handleSetUser } = useContext(UserContext);

    useEffect(() => {
        try {
            sanctumCsrfCookie()
        } catch (error) {
            toast("error", {
                header: "Error accurred",
                message: "Server is not responding. try again later",
            });
            return;
        }
        onCheckProfile().then((profile) => {
            profile.user && handleSetUser(profile.user);
        });
    }, []);

    return {isMobile, backgroundUrlLocation};
};