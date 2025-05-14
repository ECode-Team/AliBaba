import "./RequestSupport.scss"
import UserContentHelperComponent from "../UserContentHelperComponent";
import DesktopRequestSupport from "./DesktopRequestSupport";
import MobileRequestSupport from "./MobileRequestSupport";
import useIsMobile from "../../../../context/useIsMobile";

const RequestSupport = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileRequestSupport /> : <DesktopRequestSupport />
}

export default RequestSupport;