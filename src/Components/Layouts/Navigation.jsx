import React from 'react';
import {Link, NavLink} from "react-router-dom";
const Navigation = () => {
    const checkActive = ({ isActive }) => {return isActive?"px-1 py-2.5 border-b border-b-[#01C38E] text-[#01C38E]":"px-1 py-2.5"}
    return (
        <nav className="h-[41px] w-[718px]  text-white ml-[30px]">
            <ul className="flex flex items-center justify-between flex-row-reverse w-full h-full text-[20px] ">
                <li><NavLink className={(data)=>checkActive(data) } to="/" >صفحه اصلی</NavLink></li>
                <li><NavLink className={(data)=>checkActive(data)} to="/about">سبد خرید</NavLink></li>
                <li><NavLink className={(data)=>checkActive(data)} to="/about">محصولات</NavLink></li>
                <li><NavLink className={(data)=>checkActive(data)} to="/about">درباره ما</NavLink></li>
                <li><NavLink className={(data)=>checkActive(data)} to="/about">سوالات متداول</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;