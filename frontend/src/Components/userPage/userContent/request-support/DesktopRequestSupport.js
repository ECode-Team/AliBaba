import UserContentHelperComponent from "../UserContentHelperComponent";

const DesktopRequestSupport = () => (
    <div className="Req-support-container">
        <UserContentHelperComponent
            title="درخواست پشتیبانی"
            icon="/icons/headphone.png"
            editIcon="/icons/blue-plus.png"
            editTitle="ایجاد درخواست جدید"
            isContent="no-content"
        >
            <div className="no-request-support">
                <img src="/images/4/empty-message.svg" alt="" />
                <div>
                    <h4>.صندوق درخواست‌های پشتیبانی شما خالی است</h4>
                    <p>
                        اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی
                        <br />
                        .در سریعترین زمان ممکن آن را پیگیری کنید
                    </p>
                </div>
                <button>
                    افزودن مسافر
                    <img src="/icons/user-add.png" alt="" />
                </button>
            </div>
        </UserContentHelperComponent>
    </div>
)

export default DesktopRequestSupport