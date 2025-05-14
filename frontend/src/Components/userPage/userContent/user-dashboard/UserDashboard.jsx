import DesktopDashboard from "./DesktopDashboard";
import MobileDashboard from "./MobileDashboard";
import {use} from "react";
import {AppContext} from "../../../../context/Context";
import useIsMobile from "../../../../context/useIsMobile";

const UserDashboard = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileDashboard /> : <DesktopDashboard />
}

export default UserDashboard