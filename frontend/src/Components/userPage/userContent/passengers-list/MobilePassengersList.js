import MobileContentHelper from "../MobileContentHelper";

const Button = ({children = "افزودن مسافر جدید"}) => (
    <div className="add-passenger-btn">
        <img src="/icons/user-add-mobile.png" alt=""/>
        {children}
    </div>
)

const MobilePassengersList = () => (
    <>
        <MobileContentHelper title="لیست مسافران" btn={Button} />
        <div className="no-passenger-mobile">
            <img src="/images/4/no-passengers-mobile.svg" alt=""/>
            <h4>لیست مسافران شما خالی است</h4>
            <p style={{textWrap: "nowrap" , fontSize: "15px"}}>
                برای دسترسی راحت‌تر به اطلاعات مسافران خود در هنگام خرید،
                <br />
                مسافران خود را اضافه کنید.
            </p>
            <Button>افزودن مسافر</Button>
        </div>
    </>
)

export default MobilePassengersList;