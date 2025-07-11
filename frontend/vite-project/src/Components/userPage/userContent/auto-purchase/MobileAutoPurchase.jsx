import MobileContentHelper from "../common/mobileContentHelper/MobileContentHelper";



const MobileAutoPurchase = () => (
    <>
        <MobileContentHelper title="خرید های خودکار" />
        <div className="no-auto-purchase">
                <div className="no-purchase">
                        <img src="/images/4/calendar01.svg" alt=""/>
                        <h4>هیچ خرید فعال خودکاری وجود ندارد</h4>
                </div>
        </div>
    </>    
)

export default MobileAutoPurchase;