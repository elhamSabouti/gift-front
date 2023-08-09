import React from 'react';

const CategoryBtn = ({props,id}) => {
    return (
        <li className="" key={id}>
            <button className={`w-[170px] h-[47px]  flex justify-center items-center ${id===0 ?`bg-[#132D46] border-2 border-[#01C38E] text-white`:`bg-white text-[#1A1E29]`} rounded-[20px] text-[20px] ;`}>{props.title}</button>
        </li>
    );
};

export default CategoryBtn;