import React from 'react';

const Category = ({value}) => {
    return (
            <li className="w-2/5  mr-[62px] ">
                <button className={`flex justify-end items-center w-full`} >{value.title}</button>
            </li>
    );
};

export default Category;