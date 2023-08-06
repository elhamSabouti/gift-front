import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="h-[41px] w-[700px] bg-rose-800 text-white">
            <ul>
                <li><Link to="/">صفحه اصلی</Link></li>
                <li><Link to="#">سبد خرید</Link></li>
                <li><Link to="#">محصولات</Link></li>
                <li><Link to="#">درباره ما</Link></li>
                <li><Link to="#">سوالات متداول</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;