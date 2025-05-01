import UserContentHelperComponent from "../UserContentHelperComponent";

const Button = () => (
    <button type="button" className="password-edit-btn">
        ویرایش رمز عبور <img width={15} height={15} src="/icons/key.png" alt=""/>
    </button>
)


const UserDashboard = () => (
    <div className="user-content-container">
        <div className="user-detail">
            <div className="account-balance">
                <p>موجودی حساب</p>
                <div style={{display: "flex",alignItems: "center" , gap: "5px"}}>
                    <p>تومان</p><strong>0</strong>
                </div>
                <a href="">افزایش موجودی</a>
            </div>
            <div className="avatar">
                <h4>09123345678</h4>
                <img width={10} height={10} src="/images/4/avatar.svg" alt=""/>
            </div>
        </div>

        <UserContentHelperComponent
            title="اطلاعات حساب کاربری"
            icon="/icons/userCheck.png"
            editPasswordBtn={Button}
            editIcon="/icons/plus.png"
            editTitle="حساب کاربری علی بابا پلاس">
            <div className="user-number">
                <p style={{whiteSpace: "noWrap"}}>شماره موبایل</p>
                <strong>09123456789</strong>
                <span style={{display: "flex" , flexDirection: "row-reverse" , alignItems: "center" , whiteSpace: "noWrap"}}>
                      <img width={15} height={15} src="/icons/check.png" alt=""/>
                      تایید شده
                  </span>
                <a href=""
                   className="number-edit-add"
                   style={{display: "flex" , flexDirection: "row-reverse" , alignItems: "center"}}>
                    <img width={15} height={15} src="/icons/editIcon.png" alt="" style={{margin: "0 5px"}}/>
                    ویرایش
                </a>
            </div>
            <div className="user-email">
                <p>ایمیل</p>
                <a href=""
                   className="email-edit-add"
                   style={{display: "flex" , flexDirection: "row-reverse" , alignItems: "center" , margin: "0 ,"}}>
                    <img width={15} height={15} src="/icons/editIcon.png" alt=""/>
                    افزودن
                </a>
            </div>
        </UserContentHelperComponent>

        <UserContentHelperComponent
            title="اطلاعات شخصی"
            icon="/icons/user.png"
            editIcon="/icons/editIcon.png">
            <div className="section">
                <div>
                    <div className="detail">
                        <p>نام و نام خانوادگی</p>
                        <span>--</span>
                    </div>
                    <div className="detail">
                        <p>شماره تماس ضروری</p>
                        <span>--</span>
                    </div>
                </div>
                <div>
                    <div className="detail">
                        <p>کدملی</p>
                        <span>--</span>
                    </div>
                    <div className="detail">
                        <p>تاریخ تولد</p>
                        <span>--</span>
                    </div>
                </div>
            </div>
        </UserContentHelperComponent>

        <UserContentHelperComponent
            title="اطلاعات حساب بانکی"
            icon="/icons/money.png"
            editIcon="/icons/editIcon.png">
            <div className="section">
                <div>
                    <div className="detail">
                        <p>شماره شبا</p>
                        <span>--</span>
                    </div>
                    <div className="detail">
                        <p>شماره حساب</p>
                        <span>--</span>
                    </div>
                </div>
                <div>
                    <div className="detail">
                        <p>شماره کارت</p>
                        <span>--</span>
                    </div>

                </div>
            </div>
        </UserContentHelperComponent>
    </div>
)

export default UserDashboard