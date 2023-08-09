import React from 'react';
import Navigation from "./Navigation";
import { ReactComponent as ReactLogo} from "../../images/Logo (1).svg"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="h-[75px] w-[89%] flex justify-between items-center  mt-[50px] ">
            <Link className="w-[170px] h-[47px] rounded-[20px] bg-[#132D46] flex justify-center items-center text-[#01C38E] text-[20px]" to="/" >ورود / ثبت نام</Link>
            <Navigation/>
            <ReactLogo className="w-[82px]"/>
        </header>
    );
};

export default Header;