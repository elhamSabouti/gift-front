import React from 'react';

const Category = ({text,id,link}) => {
    return (
        <li className="" key={id}>
            <button className={`w-[160px] h-[42px]  flex justify-center items-center ${id===0 ?`bg-[#132D46] border-2 border-[#01C38E] text-white`:`bg-white`} rounded-[17px] text-[16px]`}>{text}</button>
        </li>
    );
};

export default Category;