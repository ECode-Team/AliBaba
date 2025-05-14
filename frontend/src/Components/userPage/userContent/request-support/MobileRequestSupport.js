import MobileContentHelper from "../MobileContentHelper";


const Button = () => (
    <button className="request-btn">
        <img src="/icons/blue-plus.png" alt=""/>
        درخواست جدید
    </button>
)

const MobileRequestSupport = () => (
    <>
        <MobileContentHelper title="پشتیبانی آنلاین" btn={Button} />
        <div className="empty-message-box">
            <img src="/images/4/empty-message.svg" alt=""/>
            <h4>صندوق درخواست‌های پشتیبانی شما خالی است.</h4>
            <p>اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی <br /> در سریعترین زمان ممکن آن را پیگیری کنید.</p>
        </div>
    </>
)

export default MobileRequestSupport;