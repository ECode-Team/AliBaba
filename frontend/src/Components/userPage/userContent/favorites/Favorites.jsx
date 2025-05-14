import "./Favorites.scss"
import UserContentHelperComponent from "../UserContentHelperComponent";
import DesktopFavorites from "./DesktopFavorites";
import MobileFavorites from "./MobileFavorites";
import useIsMobile from "../../../../context/useIsMobile";
const Favorites = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileFavorites /> : <DesktopFavorites />
}

export default Favorites