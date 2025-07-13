import "../styles/userpage/userpage.scss"
import UserContent from "../Components/userPage/userContent/UserContent";
import "../styles/general.scss"
import DesktopSidebar from "../Components/userPage/userSidebar/DesktopSidebar";
import useIsMobile from "../context/useIsMobile";

export const Userpage = () => {

    const isMobile = useIsMobile()

    return (
        <div className={isMobile ? "userpage-mobile-container" : "userpage-container"}>
            <UserContent />
            {!isMobile && <DesktopSidebar />}
        </div>
    )
}