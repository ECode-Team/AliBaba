import "./AutoPurchase.scss"
import MobileAutoPurchase from "./MobileAutoPurchase";
import DesktopAutoPurchase from "./DesktopAutoPurchase";
import useIsMobile from "../../../../context/useIsMobile";

const AutoPurchase = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileAutoPurchase /> : <DesktopAutoPurchase />
}

export default AutoPurchase;