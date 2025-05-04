import "../styles/mainpage/navbar.scss";
import "../styles/mainpage/toggle.scss";
import userIcon from "../assets/icons/user.png";
import travelsIcon from "../assets/icons/luggage.png";
import supportIcon from "../assets/icons/question.png";
import dropdownIcon from "../assets/icons/down-arrow.png";
import logo from "../assets/icons/logo.png";

export const Navbar = () => {
    return (
        <div className="header">
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-left-item toggle" dir="rtl">
                        <div className="darkmode-toggle">
                            <input type="checkbox" id="checkboxInput1" />
                            <label for="checkboxInput1" className="toggleSwitch1"></label>
                        </div>
                        <div className="language-toggle">
                            <input type="checkbox" id="checkboxInput2" />
                            <label for="checkboxInput2" className="toggleSwitch2"></label>
                        </div>
                    </div>
                    <div className="navbar-left-item user" dir="rtl">
                        <span>ورود یا ثبت نام</span>
                        <img className="icon user" src={userIcon} alt="user" />
                    </div>
                    <div className="navbar-left-item my-travels" dir="rtl">
                        <span>سفر های من</span>
                        <img className="icon travels" src={travelsIcon} alt="travels" />
                    </div>
                    <div className="navbar-left-item support" dir="rtl">
                        <span>مرکز پشتیبانی آنلاین</span>
                        <img className="icon support" src={supportIcon} alt="support" />
                    </div>
                </div>
                <div className="navbar-right" dir="rtl">
                    <div className="navbar-logo">
                        <span className="logo-text">alibaba</span>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="navbar-right-items">
                        <div className="navbar-right-item ticket">
                            <span>بلیط</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                        <div className="navbar-right-item residence">
                            <span>اقامت</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                        <div className="navbar-right-item tour">
                            <span>تور</span>
                        </div>
                        <div className="navbar-right-item ticket">
                            <span>ویزا</span>
                        </div>
                        <div className="navbar-right-item residence">
                            <span>پنل آژانسی</span>
                        </div>
                        <div className="navbar-right-item tour">
                            <span>بیشتر</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}