import UserContentHelperComponent from "../common/userContentHelper/UserContentHelperComponent";

const DesktopPassengersList = () => (
    <div className="passenger-container">
        <UserContentHelperComponent
            editTitle=""
            title="جستجوی مسافران"
            icon="/icons/search.png"
        >
            <input className="search" type="text" placeholder="جستجوی نام , نام خانوادگی , کدملی , شماره پاسپورت"/>
        </UserContentHelperComponent>
        <UserContentHelperComponent
            title="لیست مسافران"
            icon="/icons/seat.png"
            editIcon="/icons/blue-plus.png"
            editTitle="افزودن مسافر جدید"
            isContent="no-content"
        >
            <div className="no-passenger">
                <img src="/images/4/no-passengers.svg" alt="" />
                <div>
                    <h4>لیست مسافران شما خالی است</h4>
                    <p>
                        ,برای دسترسی راحت‌تر به اطلاعات مسافران خود در هنگام خرید
                        <br />
                        .مسافران خود را اضافه کنید
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

export default DesktopPassengersList;