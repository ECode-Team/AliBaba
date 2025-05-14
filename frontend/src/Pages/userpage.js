import "../styles/userpage/userpage.scss"
import UserContent from "../Components/userPage/userContent/UserContent";
import "../styles/general.scss"
import {use, useEffect, useState} from "react";
import {AppContext} from "../context/Context";
import DesktopSidebar from "../Components/userPage/userSidebar/DesktopSidebar";

export const Userpage = () => {

    const {isMobile} = use(AppContext)

    return (
        <div className={isMobile ? "userpage-mobile-container" : "userpage-container"}>
            <UserContent />
            {!isMobile && <DesktopSidebar />}
        </div>
    )
}