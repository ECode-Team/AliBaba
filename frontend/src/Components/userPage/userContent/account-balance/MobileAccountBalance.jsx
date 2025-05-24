import MobileContentHelper from "../common/mobileContentHelper/MobileContentHelper";
import {useState} from "react";
import TransactionTab from "./MobileTabs/TransactionTab";
import TransferRequestTab from "./MobileTabs/TransferRequestTab";

const MobileAccountBalance = () => {

    const [activeTab, setActiveTab] = useState(null)

    return (
        <div className="acc-balance-container">
            <MobileContentHelper title="موجودی و اعتبار من"/>
            <div className="acc-balance">
                <div className="my-account-balance-mobile-container">
                    <div className="account-balance-mobile">
                        <h3>موجودی حساب</h3>
                        <p><span>0</span>تومان</p>
                    </div>
                    <div className="transactions-transferRequest">
                        <div className="transactions" onClick={() => setActiveTab("transaction")}>
                            <h4>تراکنش ها</h4>
                            <img src="/icons/gray-chevron-left.png" alt=""/>
                        </div>
                        <div className="separator"></div>
                        <div className="transferRequest" onClick={() => setActiveTab("transfer")}>
                            <h4>درخواست انتقال های موجودی</h4>
                            <img src="/icons/gray-chevron-left.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`slide-panel ${activeTab === "transaction" || activeTab === "transfer" ? "active" : ""}`}>

                {activeTab === "transaction" && <TransactionTab
                    onClose={() => setActiveTab("account-balance")} />}

                {activeTab === "transfer" && <TransferRequestTab
                    onClose={() => setActiveTab("account-balance")} />}
            </div>
        </div>
    )
}

export default MobileAccountBalance;