import React from 'react';

const ProductCard = ({props}) => {
    return (
        <div className={`w-[399px] h-[109px] bg-[#132D46] rounded-[17px] border-b-2  flex justify-center items-center`} style={{borderBottomColor:props.border_color}}>
            <div className="text-white flex flex-col w-[50%] h-full text-[14px] gap-[18px] justify-center items-center">
                <p>{props.price}</p>
                <button className="bg-[#00A678] w-[140px] h-[35px]  rounded-[17px] flex items-center justify-center"> سفارش / مشاهده</button>
            </div>
            <div className="w-[25%] h-full flex flex-col justify-center bg- text-right gap-1">
                <p className={` text-[20px]`} style={{color:props.text_color}}>{props.title}</p>
                <p className="text-[12px] text-white">گیفت کارت ۹ ماهه</p>
                <p className="text-[#6A6E79] text-[11px]">{props.description}</p>
            </div>
            <img src={props.logo} alt={props.logo_name} title={props.logo_name} className="w-[25%]"/>
        </div>
    );
};

export default ProductCard;