import React from 'react';

const FilterProduct = ({value}) => {
    return (
        <li className=" w-2/5 ">
            <button className="flex justify-end items-center w-full pr-[50px]">{value}</button>
        </li>
    );
};

export default FilterProduct;