import React from 'react';
import Navigation from "./Navigation";
import { ReactComponent as ReactLogo} from "../../images/Logo (1).svg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="h-[90px] w-[85%] flex justify-between items-center  mt-[20px] ">
            <Link className="py-[8px] px-[26px] rounded-[17px] bg-[#132D46] flex justify-center items-center text-[#01C38E] text-[16px]" to="/" >ورود / ثبت نام</Link>
            <Navigation/>
            <ReactLogo className="w-[80px]"/>
        </header>
    );
};

export default Header;