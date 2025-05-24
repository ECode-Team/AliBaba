import "./PassengersList.scss"
import MobilePassengersList from "./MobilePassengersList";
import DesktopPassengersList from "./DesktopPassengersList";
import useIsMobile from "../../../../context/useIsMobile";

const PassengersList = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobilePassengersList /> : <DesktopPassengersList />
}

export default PassengersList