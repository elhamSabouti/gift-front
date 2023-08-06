import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="h-[41px] w-[670px]  text-white ">
            <ul className="flex flex items-center justify-between flex-row-reverse w-full h-full text-[18px] ">
                <li><Link to="/">صفحه اصلی</Link></li>
                <li><Link to="/about">سبد خرید</Link></li>
                <li><Link to="#">محصولات</Link></li>
                <li><Link to="#">درباره ما</Link></li>
                <li><Link to="#">سوالات متداول</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;