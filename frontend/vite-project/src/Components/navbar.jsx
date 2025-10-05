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
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

export const Navbar = () => {
    const { rtlLang } = useGlobalContext();
    const { t } = useTranslation();
    const languageDropdown = ['en', 'de', 'fr', 'es', 'zh', 'fa', 'ar'];
    const [showDropdown, setShowDropdown] = useState(null);
    const navigate = useNavigate();

    // Route path for dropdown items
    const englishTicketItems = ["info/Innerflight", "info/Foreignflight", "info/train", "info/Bus"];
    const englishResidenceItems = ["info/Hotel", "Booking/Vila"];
    const englishMoreItems = ["AlibabaMagazine", "TravelInsurance"];
    const englishUserItems = ["Account Information", "Notifications", "Request Support", "Log Out of Account"];

    // Hide the dropdown when clicking anywhere
    useEffect(() => {
        if (showDropdown === null) return;

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
                        <div>
                            <div className="navbar-left-item ticket" onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(showDropdown === 'ticket' ? null : 'ticket')
                            }}>
                                <span>{t('ticket')}</span>
                                <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                            </div>
                            <Dropdown items={t('dropdown:ticketDropdown', { returnObjects: true })} path={englishTicketItems} open={showDropdown === 'ticket'} />
                        </div>
                        <div>
                            <div className="navbar-left-item residence" onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(showDropdown === 'residence' ? null : 'residence')
                            }}>
                                <span>{t('residence')}</span>
                                <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                            </div>
                            <Dropdown items={t('dropdown:residence', { returnObjects: true })} path={englishResidenceItems} open={showDropdown === 'residence'} />
                        </div>
                        <div className="navbar-left-item tour" onClick={() => {
                            navigate('/tour');
                        }}>
                            <span>{t('tour')}</span>
                        </div>
                        <div className="navbar-left-item visa" onClick={() => {
                            navigate('/visa');
                        }}>
                            <span>{t('visa')}</span>
                        </div>
                        <div className="navbar-left-item agency">
                            <span>{t('agency_panel')}</span>
                        </div>
                        <div>
                            <div className="navbar-left-item more" onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(showDropdown === 'more' ? null : 'more')
                            }}>
                                <span>{t('more')}</span>
                                <img className="icon dropdown" src={dropdownIcon} alt="dropdown" />
                            </div>
                            <Dropdown items={t('dropdown:more', { returnObjects: true })} path={englishMoreItems} open={showDropdown === 'more'} />
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
                        <div>
                            <div className="navbar-right-item user" onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(showDropdown === 'user' ? null : 'user')
                            }}>
                                <span>{t('login_or_register')}</span>
                                <img className="icon user" src={userIcon} alt="user" />
                            </div>
                            <Dropdown items={t('dropdown:user', { returnObjects: true })} path={englishUserItems} open={showDropdown === 'user'} />
                        </div>
                        <div>
                            <div className="navbar-right-item language" onClick={(e) => {
                                e.stopPropagation();
                                setShowDropdown(showDropdown === 'language' ? null : 'language')
                            }}>
                                <Languages size={20} />
                                <ChevronDown size={20} />
                            </div>
                            <Dropdown items={languageDropdown} open={showDropdown === 'language'} isLangDropdown={true} />
                        </div>
                        <div className="navbar-right-item toggle">
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