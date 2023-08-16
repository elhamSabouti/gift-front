import React from 'react';

const Dots = () => {
    return (
        <ul className="flex h-[50px] w-auto gap-2 justify-center items-center mt-[30px]">
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full bg-[#01C38E]"></button></li>
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full"></button></li>
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full"></button></li>
            <li><button className="w-[15px] h-[15px] border-2 border-[#01C38E] rounded-full"></button></li>
        </ul>
    );
};

export default Dots;