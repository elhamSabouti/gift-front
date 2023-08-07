import React from 'react';

const Product = ({text,id}) => {
    return (
        <li className="w-[160px]  h-[42px] bg-white flex justify-center items-center rounded-[17px] text-[16px]" id={id}>
            <button>{text}</button>
        </li>
    );
};

export default Product;