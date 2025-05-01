import "./MyTrips.scss"
import { useState } from "react";

const selectOptions = [
    {id: 1 , text: "همه"},
    {id: 2 , text: "پرواز داخلی"},
    {id: 3 , text: "پرواز خارجی"},
    {id: 4 , text: "هتل"},
    {id: 5 , text: "تور"},
    {id: 6 , text: "ویلا و اقامتگاه"},
    {id: 7 , text: "قطار"},
    {id: 8 , text: "اتوبوس"},
    {id: 9 , text: "بیمه"},
]

const MyTrips = () => {
    return (
        <div className="my-trips-container">
            <div className="trip-inputs">
                <div className="inputs">
                    <label htmlFor="">جستجوی سفارش</label>
                    <input type="text" placeholder="شماره سفارش"/>
                </div>
                <div className="inputs">
                    <label htmlFor="">نوع سفارش</label>
                    <select name="" id="">
                        {selectOptions.map(({id , text}) => <option value={text}>{text}</option>)}
                    </select>
                </div>
                <div className="inputs">
                    <label htmlFor="">تاریخ ثبت سفارش</label>
                    <div>
                        <input type="text" readOnly placeholder="از" />
                        <input type="text" readOnly placeholder="تا" />
                    </div>
                </div>
            </div>
            <div className="orders">
                <div className="no-ticket">
                    <img src="/images/4/no-ticket.svg" alt=""/>
                    <h4>!سفارشی یافت نشد</h4>
                    <button type="button" className="delete-filter-btn">حذف فیلترها</button>
                </div>
            </div>
        </div>
    );
};

export default MyTrips;
