import React from 'react';

const ProductCard = ({value}) => {
    return (
        <div className={`w-[399px] h-[109px] bg-[#132D46] rounded-[17px] border-b-2  flex justify-center items-center`} style={{borderBottomColor:value.brand.color}}>
            <div className="text-white flex flex-col w-[50%] h-full text-[14px] gap-[18px] justify-center items-center">
                <p className="ltr" >تومان  {value.price} </p>
                <button className="bg-[#00A678] w-[140px] h-[35px]  rounded-[17px] flex items-center justify-center border border-[#1A1E29] border-solid "> سفارش / مشاهده</button>
            </div>
            <div className="w-[25%] h-full flex flex-col justify-center bg- text-right gap-1">
                <p className={` text-[20px]`} style={{color:value.brand.color}}>{value.brand.title}</p>
                <p className="text-[12px] text-white"> گیفت کارت {value.period_title}</p>
                <p className="text-[#6A6E79] text-[11px]">{value.brand.title}</p>
            </div>
            <div className="w-[25%]  h-full flex justify-center items-center ">
                <img src={value.brand.logo} alt={value.brand.title_en} title={value.brand.title_en} className="w-[50px]"/>
            </div>
        </div>
    );
};

export default ProductCard;