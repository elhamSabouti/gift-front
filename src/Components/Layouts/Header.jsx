import React from 'react';
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className="w-full h-[100vh] bg-[#1A1E29] flex items-center justify-center">
            <Navigation/>
        </div>
    );
};

export default Header;