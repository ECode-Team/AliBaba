import "./UserSidebar.scss"
import {use} from "react";
import {AppContext} from "../../../context/Context";

const mobileSidebarItems = [
    {text: "خرید خودکار" , icon: "/icons/calendar.png" , link: "auto-purchase"},
    {text: "لیست مسافران" , icon: "/icons/users.png" , link: "passengers-list"},
    {text: "علاقه مندی ها" , icon: "/icons/star.png" , link: "favorites"},
    {text: "مرکز پشتیبانی" , icon: "/icons/question-mark.png" , link: "support-center"},
    {text: "درخواست پشتیبانی" , icon: "/icons/headphone.png" , link: "request-support"},
]

const MobileSidebar = () => {

    const {setActiveSection} = use(AppContext)

    return (
        <div className="mobile-sidebar">
            <ul>
                {
                    mobileSidebarItems.map(({text, icon, link}) => (
                        <li key={text} className="sidebar-item">
                        <span
                            className="sidebar-link"
                            onClick={() => setActiveSection(link)}>{text}</span>
                            <img src={icon} alt=""/>
                        </li>
                    ))
                }
                <li className="sidebar-item">
                        <span
                            className="sidebar-link"
                            style={{color: "#FA5252"}}
                        >خروج از حساب کاربری</span>
                    <img src="/icons/logout.png" alt=""/>
                </li>
            </ul>
        </div>
    )
}

export default MobileSidebar;