import "../styles/mainpage/navbar.scss";
import "../styles/mainpage/toggle.scss";
import userIcon from "../assets/icons/user.png";
import travelsIcon from "../assets/icons/luggage.png";
import supportIcon from "../assets/icons/question.png";
import dropdownIcon from "../assets/icons/down-arrow.png";
import logo from "../assets/icons/logo.png";
import { useEffect, useState } from "react";
import Dropdown from "./mainpage/dropdown";
import { useTranslation } from "react-i18next";
import { Languages, ChevronDown } from "lucide-react";

export const Navbar = () => {
    const [rtlLang, setRtl] = useState(true);
    const { t } = useTranslation();
    const languageDropdown = ['en', 'de', 'fr', 'es', 'fa', 'ar', 'zh'];
    const [showDropdown, setShowDropdown] = useState(null);

    useEffect(() => {
        if (showDropdown === null) return;
        console.log('bug');

        const handleClickAnywhere = () => {
            setShowDropdown(null);
        }
        window.addEventListener('click', handleClickAnywhere);
        return () => {
            window.removeEventListener('click', handleClickAnywhere);
        }
    }, [showDropdown]);

    return (
        <div className="header">
            <div className="navbar-container" style={{ flexDirection: rtlLang ? 'row' : 'row-reverse' }}>
                <div className="navbar-left" dir={rtlLang ? 'rtl' : 'ltr'}>
                    <div className="navbar-logo">
                        <span className="logo-text">alibaba</span>
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className={rtlLang ? "navbar-left-items fa" : "navbar-left-items"}>
                        <div className="navbar-left-item ticket" onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(showDropdown === 'ticket' ? null : 'ticket')
                        }}>
                            <span>{t('ticket')}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                            <Dropdown items={t('dropdown:ticketDropdown', { returnObjects: true })} open={showDropdown === 'ticket'} marginTop={'195px'} />
                        </div>
                        <div className="navbar-left-item residence" onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(showDropdown === 'residence' ? null : 'residence')
                        }}>
                            <span>{t('residence')}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                            <Dropdown items={t('dropdown:residence', { returnObjects: true })} open={showDropdown === 'residence'} marginTop={'122px'} />
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
                        <div className="navbar-left-item more" onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(showDropdown === 'more' ? null : 'more')
                        }}>
                            <span>{t('more')}</span>
                            <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                            <Dropdown items={t('dropdown:more', { returnObjects: true })} open={showDropdown === 'more'} marginTop={'195px'} />
                        </div>
                    </div>
                </div>
                <div className="navbar-right" dir={rtlLang ? 'rtl' : 'ltr'}>
                    <div className="navbar-right-items" >
                        <div className="navbar-right-item support" >
                            <span>{t('support_center')}</span>
                            <img className="icon support" src={supportIcon} alt="support" />
                        </div>
                        <div className="navbar-right-item my-travels" >
                            <span>{t('my_travels')}</span>
                            <img className="icon travels" src={travelsIcon} alt="travels" />
                        </div>
                        <div className="navbar-right-item user" onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(showDropdown === 'user' ? null : 'user')
                        }}>
                            <span>{t('login_or_register')}</span>
                            <img className="icon user" src={userIcon} alt="user" />
                            <Dropdown items={t('dropdown:user', { returnObjects: true })} open={showDropdown === 'user'} marginTop={'195px'} />
                        </div>
                            <div className="navbar-right-item language" onClick={(e) => {
                            e.stopPropagation();
                            setShowDropdown(showDropdown === 'language' ? null : 'language')
                        }}>
                            <Languages size={20} />
                            <ChevronDown size={20} />
                            <Dropdown items={languageDropdown} open={showDropdown === 'language'} marginTop={'302px'} />
                        </div>
                        <div className="navbar-right-item toggle" style={{ marginRight: rtlLang ? '-20px' : '2px', marginLeft: rtlLang ? '2px' : '-20px' }}>
                            <div className="darkmode-toggle">
                                <input type="checkbox" id="checkboxInput1" />
                                <label htmlFor="checkboxInput1" className="toggleSwitch1"></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}