import "./UserSidebar.scss"
import "../../../styles/general.scss"

const sideBarData = [
    {text: "حساب کاربری" , icon: "/icons/user01.png" , link: "user-dashboard"},
    {text: "خرید خودکار" , icon: "/icons/calendar.png" , link: "auto-purchase"},
    {text: "سفرهای من" , icon: "/icons/trip.png" , link: "my-trips"},
    {text: "لیست مسافران" , icon: "/icons/users.png" , link: "passengers-list"},
    {text: "علاقه مندی ها" , icon: "/icons/star.png" , link: "favorites"},
    {text: "درخواست پشتیبانی" , icon: "/icons/headphone.png" , link: "request-support"},
    {text: "موجودی و اعتبار من" , icon: "/icons/dollar-sign.png" , link: "account-balance"},
]

const UserSidebar = ({ setActiveSection }) => (
    <>
        <ul className="parent-sidebar">
            {
                sideBarData.map(({text , icon , link}) => (
                    <li key={text} className="sidebar-item">
                        <span
                           className="sidebar-link"
                           onClick={() => setActiveSection(link)}>{text}</span>
                        <img src={icon} alt=""/>
                    </li>
                ))
            }
        </ul>
    </>
)
export default UserSidebar;