import "../styles/mainpage/navbar.scss";
import "../styles/mainpage/toggle.scss";
import userIcon from "../assets/icons/user.png";
import travelsIcon from "../assets/icons/luggage.png";
import supportIcon from "../assets/icons/question.png";
import dropdownIcon from "../assets/icons/down-arrow.png";
import logo from "../assets/icons/logo.png";
import { useState } from "react";
import Dropdown from "./mainpage/dropdown";

export const Navbar = () => {
    const [persian, setPersian] = useState(false);
    const ticketDropdownEn = ["Domestic flight", "Foreign flight", "Train", "Bus"];
    const ticketDropdownFa = ["پرواز داخلی", "پرواز خارجی", "قطار", "اتوبوس"]; 
    const residenceDropdown = [
        { en: "Hotel", fa: "هتل" },
        { en: "Villa and residence", fa: "ویلا و اقامتگاه" }
    ];
    const moreDropdown = [
        { en: "Alibaba plus", fa: "علی‌بابا پلاس" },
        { en: "Alibaba Magazine", fa: "مجله علی‌بابا" },
        { en: "Travel insurance", fa: "بیمه مسافرتی" },
        { en: "Installment travel", fa: "سفر اقساطی" }
    ];

    return (
        <div className="header">
            <Dropdown items={persian ? ticketDropdownFa : ticketDropdownEn} />
            <div className="navbar-container" style={{ flexDirection: persian ? 'row-reverse' : 'row' }}>
                <div className="navbar-left" dir={persian ? 'rtl' : 'ltr'}>
                    <div className={persian ? 'navbar-logo fa' : 'navbar-logo'} dir={persian ? 'rtl' : 'rtl'}>
                        <span className="logo-text">alibaba</span>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className={persian ? "navbar-left-items fa" : "navbar-left-items"}>
                        <div className="navbar-left-item ticket">
                            <span>{persian ? 'بلیط' : 'Ticket'}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                        <div className="navbar-left-item residence">
                            <span>{persian ? 'اقامت' : 'Residence'}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                        <div className="navbar-left-item tour">
                            <span>{persian ? 'تور' : 'Tour'}</span>
                        </div>
                        <div className="navbar-left-item visa">
                            <span>{persian ? 'ویزا' : 'Visa'}</span>
                        </div>
                        <div className="navbar-left-item agency">
                            <span>{persian ? 'پنل آژانسی' : 'Agency Panel'}</span>
                        </div>
                        <div className="navbar-left-item more">
                            <span>{persian ? 'بیشتر' : 'More'}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                    </div>
                </div>
                <div className="navbar-right" dir={persian ? 'rtl' : 'ltr'}>
                    <div className="navbar-right-items" >
                        <div className="navbar-right-item support" >
                            <span>{persian ? 'مرکز پشتیبانی آنلاین' : 'Support Center'}</span>
                            <img className="icon support" src={supportIcon} alt="support" />
                        </div>
                        <div className="navbar-right-item my-travels" >
                            <span>{persian ? 'سفر های من' : 'My Travels'}</span>
                            <img className="icon travels" src={travelsIcon} alt="travels" />
                        </div>
                        <div className="navbar-right-item user" >
                            <span>{persian ? 'ورود یا ثبت نام' : 'Login or Register'}</span>
                            <img className="icon user" src={userIcon} alt="user" />
                        </div>
                        <div className="navbar-right-item toggle" style={{ marginRight: persian ? '-20px' : '2px', marginLeft: persian ? '2px' : '-20px' }}>
                            <div className="darkmode-toggle">
                                <input type="checkbox" id="checkboxInput1" />
                                <label htmlFor="checkboxInput1" className="toggleSwitch1"></label>
                            </div>
                            <div className="language-toggle">
                                <input type="checkbox" id="checkboxInput2" onChange={() => setPersian(!persian)} />
                                <label htmlFor="checkboxInput2" className="toggleSwitch2"></label>
                            </div>
                        </div>
                    </div>
                    {/* <div className="language-toggle">
                        <span>light/dark</span>
                        <span>en/fa</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}