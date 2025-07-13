import MobileContentHelper from "../../common/mobileContentHelper/MobileContentHelper";
import {useEffect, useRef, useState} from "react";

const TransferRequestTab = ({onClose}) => {

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
        <>
            <MobileContentHelper
                title="درخواست های انتقال موجودی"
                extraButtons={
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
                }/>
            <div className="no-transaction-mobile">
                <img src="/images/4/payment-error.svg" alt=""/>
                <h4>هیچ تراکنشی یافت نشد</h4>
            </div>
        </>
    );
}

export default TransferRequestTab;