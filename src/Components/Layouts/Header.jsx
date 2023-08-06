import React from 'react';
import Navigation from "./Navigation";
import { ReactComponent as ReactLogo} from "../../images/Logo (1).svg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="h-[103px] w-4/5 flex justify-between items-center  mt-[40px] ">
            <Link className="py-[8px] px-[26px]  rounded-[20px] bg-[#132D46] flex justify-center items-center text-[#01C38E] text-[18px]" to="/" >ورود / ثبت نام</Link>

            <Navigation/>
            <ReactLogo className="w-[100px]"/>
        </header>
    );
};

export default Header;