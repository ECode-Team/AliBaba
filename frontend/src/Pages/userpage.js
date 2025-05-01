import UserSidebar from "../Components/userPage/userSidebar/UserSidebar";
import "../styles/userpage/userpage.scss"
import UserContent from "../Components/userPage/userContent/UserContent";
import "../styles/general.scss"
import {useState} from "react";

export const Userpage = () => {

    const [activeSection, setActiveSection] = useState("user-dashboard")

    return (
        <div className="userpage-container">
            <UserContent activeSection={activeSection} />
            <UserSidebar setActiveSection={setActiveSection} />
        </div>
    )
}
