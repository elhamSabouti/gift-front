import React from 'react';

const CategoryBtn = ({props,setActiveCategoryId,activeCategoryId}) => {
    return (
        <li>
            <button onClick={()=>setActiveCategoryId(props.id)} className={`w-[170px] h-[47px]  flex justify-center items-center  rounded-[20px] text-[20px] ${activeCategoryId===props.id?`bg-[#132D46] border-2 border-[#01C38E] text-white `:`bg-white text-[#1A1E29]`} ` } >{props.title}</button>
        </li>
    );
};

export default CategoryBtn;