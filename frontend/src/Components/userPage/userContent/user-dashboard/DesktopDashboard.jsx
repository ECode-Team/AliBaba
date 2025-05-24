import { useState } from "react";
import InputGroup from "../../../InputGroup";
import DesktopModal from "../common/desktopModal/DesktopModal";
import UserContentHelperComponent from "../common/userContentHelper/UserContentHelperComponent";

const ModalTriggerButton = ({ icon, label, onClick, className }) => (
    <button
        className={className}
        style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center" }}
        onClick={onClick}
    >
        <img width={15} height={15} src={icon} alt="" style={{ margin: "0 5px" }} />
        {label}
    </button>
);

const PasswordEditButton = ({ onClick }) => (
    <button type="button" className="password-edit-btn" onClick={onClick}>
        ویرایش رمز عبور <img width={15} height={15} src="/icons/key.png" alt="" />
    </button>
);

const getModalContent = (type) => {
    switch (type) {
        case "changePassword":
            return {
                title: "تغییر کلمه عبور",
                description: "رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.",
                buttonText: "تغییر رمز عبور",
                content: (
                    <>
                        <InputGroup type="password" label="رمز عبور فعلی" />
                        <div className="password-fields">
                            <InputGroup type="password" label="رمز عبور جدید" />
                            <InputGroup type="password" label="تکرار رمز عبور جدید" />
                        </div>
                    </>
                )
            }
        case "editPhone":
            return {
                title: "ویرایش شماره موبایل",
                description: "برای ویرایش، شماره موبایل جدید خود را وارد کنید.",
                buttonText: "تایید و دریافت کد",
                content: <InputGroup label="شماره موبایل" />
            }
        case "editEmail":
            return {
                title: "ویرایش آدرس ایمیل",
                description: "برای ویرایش، آدرس ایمیل جدید خود را وارد کنید.",
                buttonText: "تایید",
                content: <InputGroup label="آدرس ایمیل" />
            }
        default: return {}
    }
};

const sections = [
    {
        key: "personal",
        title: "اطلاعات شخصی",
        icon: "/icons/user.png",
        editIcon: "/icons/editIcon.png",
        renderView: () => (
            <div className="section">
                <div>
                    <div className="detail"><p>نام و نام خانوادگی</p><span>--</span></div>
                    <div className="detail"><p>شماره تماس ضروری</p><span>--</span></div>
                </div>
                <div>
                    <div className="detail"><p>کدملی</p><span>--</span></div>
                    <div className="detail"><p>تاریخ تولد</p><span>--</span></div>
                </div>
            </div>
        ),
        renderEdit: (isCancel, gender, setGender) => (
            <form className="personal-edit-form">
                <div className="edit-personal-inputs">
                    <InputGroup label="نام" />
                    <InputGroup label="نام خانوادگی" />
                    <div className="date-inputs">
                        <InputGroup label="سال" width="60px" />
                        <InputGroup label="ماه" width="120px" />
                        <InputGroup label="روز" width="60px" />
                    </div>
                </div>
                <div className="edit-personal-inputs">
                    <InputGroup
                        label="جنسیت"
                        readOnly={true}
                        value={gender}
                        onChange={(val) => setGender(val)}
                        options={["زن", "مرد"]}
                        isDropdown={true}
                    />
                    <InputGroup label="کد ملی" />
                    <div className="emergency-number">
                        <InputGroup label="شماره تماس ضروری" />
                        <span>این شماره فقط برای زمان‌های ضروری استفاده می‌شود.</span>
                    </div>
                </div>
                <div className="edit-footer">
                    <button type="button" className="confirm-edit">تایید</button>
                    <button type="button" onClick={isCancel} className="cancel-edit">انصراف</button>
                </div>
            </form>
        )
    },
    {
        key: "bank",
        title: "اطلاعات حساب بانکی",
        icon: "/icons/money.png",
        editIcon: "/icons/editIcon.png",
        renderView: () => (
            <div className="section">
                <div>
                    <div className="detail"><p>شماره شبا</p><span>--</span></div>
                    <div className="detail"><p>شماره حساب</p><span>--</span></div>
                </div>
                <div>
                    <div className="detail"><p>شماره کارت</p><span>--</span></div>
                </div>
            </div>
        ),
        renderEdit: (isCancel) => (
            <form className="bank-edit-form">
                <p>اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت می‌شود.</p>
                <div className="bank-edit-inputs">
                    <InputGroup label="شماره شبا" maxLength={26} />
                    <InputGroup label="شماره حساب" />
                    <InputGroup label="شماره کارت" maxLength={16} />
                </div>
                <div className="edit-footer">
                    <button type="button" className="confirm-edit">تایید</button>
                    <button type="button" onClick={isCancel} className="cancel-edit">انصراف</button>
                </div>
            </form>
        )
    }
];

const RenderSections = ({ sections, editStates, toggleEdit, gender, setGender }) => (
    <>
        {sections.map(({ key, title, icon, editIcon, renderEdit, renderView }) => (
            <UserContentHelperComponent
                key={key}
                title={title}
                icon={icon}
                editIcon={editIcon}
                isContent="content"
                isEdit={() => toggleEdit(key)}
                isEditing={editStates[key]}
            >
                {editStates[key] ? renderEdit(() => toggleEdit(key), gender, setGender) : renderView()}
            </UserContentHelperComponent>
        ))}
    </>
);

const DesktopDashboard = () => {
    const [editStates, setEditStates] = useState({});
    const [gender, setGender] = useState("مرد");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({ 
        title: "",
        description: "",
        buttonText: "",
        content: null 
    });

    const toggleEdit = (key) => {
        setEditStates((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const openModal = (config) => {
        setModalContent(config);
        setModalVisible(true);
    };

    return (
        <>
            <div className="user-content-container">
                <div className="user-detail">
                    <div className="account-balance">
                        <p>موجودی حساب</p>
                        <div className="balance-value">
                            <p>تومان</p><strong>0</strong>
                        </div>
                        <a href="">افزایش موجودی</a>
                    </div>
                    <div className="avatar">
                        <h4>09123345678</h4>
                        <img width={10} height={10} src="/images/4/avatar.svg" alt="" />
                    </div>
                </div>

                <UserContentHelperComponent
                    title="اطلاعات حساب کاربری"
                    icon="/icons/userCheck.png"
                    editPasswordBtn={() => <PasswordEditButton onClick={() =>
                        openModal(getModalContent("changePassword"))} />}
                    editIcon="/icons/plus.png"
                    editTitle="حساب کاربری علی بابا پلاس"
                    isContent="content"
                >
                    <div className="user-detail-container">
                        <div className="user-number">
                            <p>شماره موبایل</p>
                            <strong>09123456789</strong>
                            <span className="verified"><img width={15} height={15} src="/icons/check.png" alt="" />تایید شده</span>
                            <ModalTriggerButton
                                className="number-edit-add"
                                icon="/icons/editIcon.png"
                                label="ویرایش"
                                onClick={() => openModal(getModalContent("editPhone"))}
                            />
                        </div>
                        <div className="user-email">
                            <p>ایمیل</p>
                            <ModalTriggerButton
                                className="email-edit-add"
                                icon="/icons/editIcon.png"
                                label="افزودن"
                                onClick={() => openModal(getModalContent("editEmail"))}
                            />
                        </div>
                    </div>
                </UserContentHelperComponent>

                <RenderSections
                    sections={sections}
                    editStates={editStates}
                    toggleEdit={toggleEdit}
                    gender={gender}
                    setGender={setGender}
                />
            </div>

            {modalVisible && (
                <DesktopModal
                    title={modalContent.title}
                    description={modalContent.description}
                    buttonText={modalContent.buttonText}
                    onClose={() => setModalVisible(false)}
                >
                    {modalContent.content}
                </DesktopModal>
            )}
        </>
    );
};

export default DesktopDashboard;

