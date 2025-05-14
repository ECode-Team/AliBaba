import MobileSidebar from "../../userSidebar/MobileSidebar";
import {useGlobalContext} from "../../../../context/Context";

const MobileDashboard = () => {

    const {setActiveSection} = useGlobalContext()

    return (
        <div className="mobile-dashboard">
            <div className="user-card">
                <div className="user-phone">
                    <img src="/images/4/avatar.svg" alt=""/>
                    <p>09123456789</p>
                </div>
                <div className="edit-details">
                    <a href="">ویرایش اطلاعات</a>
                    <img width={20} height={20} src="/icons/chevron-left.png" alt=""/>
                </div>
            </div>

            <div className="account-balance-card">
                <div className="balance">
                    <p className="label">موجودی حساب</p>
                    <p className="amount"><span>0</span> تومان</p>
                </div>
                <div className="balance-item">
                    <img src="/icons/dollar-sign.png" alt=""/>
                    <p onClick={() => setActiveSection("account-balance")}>موجودی و اعتبار من</p>
                </div>
            </div>

            <div className="plus-card">
                <img src="/icons/gray-plus.png" alt=""/>
                <p>حساب کاربری علی بابا پلاس</p>
            </div>

            <MobileSidebar />
        </div>
    )
}

export default MobileDashboard;
