import { useLocation } from "react-router";
import { useIsMobile } from "@/hooks";

export default function useBackgroundLocation(): Location | null {

    const location = useLocation();
    const background = useIsMobile() ? (location.state as { background?: Location })?.background : null;
    return background || null;
};
