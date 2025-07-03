import "../styles/mainpage/navbar.scss";
import "../styles/mainpage/toggle.scss";
import userIcon from "../assets/icons/user.png";
import travelsIcon from "../assets/icons/luggage.png";
import supportIcon from "../assets/icons/question.png";
import dropdownIcon from "../assets/icons/down-arrow.png";
import logo from "../assets/icons/logo.png";
import { useState } from "react";
import Dropdown from "./mainpage/dropdown";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [persian, setPersian] = useState(false);
    const { t } = useTranslation();
    const languageDropdown = ['en', 'de', 'fr', 'es', 'fa', 'ar', 'zh'];

    return (
        <div className="header">
            <div className="navbar-container" style={{ flexDirection: persian ? 'row-reverse' : 'row' }}>
                <div className="navbar-left" dir={persian ? 'rtl' : 'ltr'}>
                    <div className={persian ? 'navbar-logo fa' : 'navbar-logo'} dir={persian ? 'rtl' : 'rtl'}>
                        <span className="logo-text">alibaba</span>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className={persian ? "navbar-left-items fa" : "navbar-left-items"}>
                        <div className="navbar-left-item ticket">
                            <span>{t('ticket')}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                        <div className="navbar-left-item residence">
                            <span>{t('residence')}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                        <div className="navbar-left-item tour">
                            <span>{t('tour')}</span>
                        </div>
                        <div className="navbar-left-item visa">
                            <span>{t('visa')}</span>
                        </div>
                        <div className="navbar-left-item agency">
                            <span>{t('agency_panel')}</span>
                        </div>
                        <div className="navbar-left-item more"> 
                            <span>{t('more')}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                        </div>
                    </div>
                </div>
                <div className="navbar-right" dir={persian ? 'rtl' : 'ltr'}>
                    <div className="navbar-right-items" >
                        <div className="navbar-right-item support" >
                            <span>{t('support_center')}</span>
                            <img className="icon support" src={supportIcon} alt="support" />
                        </div>
                        <div className="navbar-right-item my-travels" >
                            <span>{t('my_travels')}</span>
                            <img className="icon travels" src={travelsIcon} alt="travels" />
                        </div>
                        <div className="navbar-right-item user" >
                            <span>{t('login_or_register')}</span>
                            <img className="icon user" src={userIcon} alt="user" />
                        </div>
                        <div className="navbar-right-item toggle" style={{ marginRight: persian ? '-20px' : '2px', marginLeft: persian ? '2px' : '-20px' }}>
                            <div className="darkmode-toggle">
                                <input type="checkbox" id="checkboxInput1" />
                                <label htmlFor="checkboxInput1" className="toggleSwitch1"></label>
                            </div>
                            {/* <Dropdown items={languageDropdown} /> */}
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