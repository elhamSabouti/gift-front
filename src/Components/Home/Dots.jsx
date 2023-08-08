import React from 'react';

const Dots = () => {
    return (
        <ul className="flex h-[50px] w-auto gap-2 mt-[40px] justify-center items-center">
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full bg-[#01C38E]"></button></li>
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full"></button></li>
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full"></button></li>
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full"></button></li>
        </ul>
    );
};

export default Dots;