// import "./UserContentHelper.scss"
//
// const UserContentHelperComponent = (
//     {
//         icon ,
//         title ,
//         editTitle = "ویرایش اطلاعات" ,
//         editPasswordBtn: Button = null ,
//         editIcon ,
//         children
//     }
// ) => (
//     <div className="user-content-template">
//         <div className="user-content">
//             <div className="edit-title">
//                 <div className="edit-title-icon">
//                     <a href="">{editTitle}</a>
//                     {editIcon && <img width={20} height={20} src={editIcon} alt={editIcon}/>}
//                 </div>
//                 {
//                     Button && <div><Button /></div>
//                 }
//             </div>
//             <div className="title">
//                 <div className="title-icon">
//                     <h3>{title}</h3>
//                     {icon && <img width={20} height={20} src={icon} alt={icon} />}
//                 </div>
//
//                     <div>
//                         {children}
//                     </div>
//             </div>
//         </div>
//     </div>
// )
//
// export default UserContentHelperComponent;

import "./UserContentHelper.scss"

const UserContentHelperComponent = (
    {
        icon ,
        title ,
        editTitle = "ویرایش اطلاعات" ,
        editPasswordBtn: Button = null ,
        editIcon ,
        children ,
        isContent = 'no-content',
        isEdit = null
    }
) => (
    <div className="user-content-template">
        <div className="titles">
            <div className="edit-title">
                <div className="edit-title-icon">
                    <h4 style={{color: "#0077cc" , cursor: "pointer"}}
                        onClick={() => isEdit && isEdit()}>{editTitle}</h4>
                    {editIcon && <img width={20} height={20} src={editIcon} alt={editIcon}/>}
                </div>
                {
                    Button && <div><Button /></div>
                }
            </div>
            <div className="title">
                <div className="title-icon">
                    <h3>{title}</h3>
                    {icon && <img width={20} height={20} src={icon} alt={icon} />}
                </div>
            </div>
        </div>
        <div className={isContent === "no-content" ? "no-content"  : "user-content" }>
                {children}
        </div>
    </div>
)

export default UserContentHelperComponent;