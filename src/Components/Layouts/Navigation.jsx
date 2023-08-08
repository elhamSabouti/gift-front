import React from 'react';
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <nav className="h-[41px] w-[650px]  text-white ml-[75px]">
            <ul className="flex flex items-center justify-between flex-row-reverse w-full h-full text-[16px] ">
                <li><Link className="px-1 text-[#01C38E] border-b border-b-[#01C38E] py-2.5" to="/">صفحه اصلی</Link></li>
                <li><Link className="px-1 py-2.5" to="/about">سبد خرید</Link></li>
                <li><Link className="px1 py-2.5" to="#">محصولات</Link></li>
                <li><Link className="px-1 py-2.5" to="#">درباره ما</Link></li>
                <li><Link className="px1 py-2.5" to="#">سوالات متداول</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;