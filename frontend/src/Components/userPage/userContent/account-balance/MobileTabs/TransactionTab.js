import MobileContentHelper from "../../MobileContentHelper";
import {useEffect, useRef, useState} from "react";
import FilterTab from "./FilterTab";
import TransferRequestTab from "./TransferRequestTab";

const ExcelButton = () => (
    <button className="export-btn">
        <img src="/icons/export.png" alt=""/>
        خروجی اکسل
    </button>
)

const FilterButtons = ({ icon, children, onClick }) => (
    <button onClick={onClick}>
        <img src={icon} alt="" />
        {children}
    </button>
);

const TransactionTab = () => {

    const [showFilterTab, setShowFilterTab] = useState(false)
    const [showSortTab, setShowSortTab] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = e => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setShowSortTab(false)
            }
        }

        document.addEventListener("mousedown" , handleClickOutside)
        return () => document.removeEventListener("mousedown" , handleClickOutside)
    }, []);

    return (
            <div className="transaction-container">
                <MobileContentHelper
                    title="تراکنش ها"
                    btn={ExcelButton}
                    extraButtons={
                        <>
                            <div className="sort-dropdown-container" ref={dropdownRef}>
                                <button className="sort-button"
                                        onClick={() => setShowSortTab(prev => !prev)}>
                                    <img src="/icons/sort.png" alt="" />
                                    مرتب سازی
                                </button>

                                {showSortTab && (
                                    <ul className={`dropdown-menu ${showSortTab ? "show" : ""}`}>
                                        <li>بر اساس زمان</li>
                                        <li>کمترین تراکنش</li>
                                        <li>بیشترین تراکنش</li>
                                    </ul>
                                )}
                            </div>
                            <FilterButtons
                                icon="/icons/gray-filter.png"
                                onClick={() => setShowFilterTab(true)}>
                                فیلترها
                            </FilterButtons>
                        </>
                    }
                />
                <div className="no-transaction-mobile">
                    <img src="/images/4/payment-error.svg" alt=""/>
                    <h4>هیچ تراکنشی یافت نشد</h4>
                </div>
                <div className={`slide-panel ${showFilterTab ? "active" : ""}`}>
                    {showFilterTab && <FilterTab />}
                </div>
            </div>
    );
};

export default TransactionTab;
