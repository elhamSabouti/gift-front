import React,{useEffect, useState} from 'react';
import API from "../../../Api/useApi";
import FilterProduct from "./FilterProduct";

const BrandNav = () => {
    const [brands,setBrands]=useState(null);
    const [brandFlag,setBrandFlag]=useState(false);

    const  getBrand =async () => {
        try {
            const brand= await API.get("brand");
            setBrands(brand.data.data)
        }catch (e) {
        }
    }
    useEffect(()=>{
        getBrand();
    },[]);
    return (
        <ul className="w-full ">
            <li className="w-full flex flex-col justify-center items-center "><button className={` text-[18px] pr-[40px] text-[#01C38E] flex justify-end w-3/5 `} onClick={()=>(brandFlag===false?setBrandFlag(true):setBrandFlag(false))}>برند</button></li>
            <ul className={`w-full h-auto list-none  ${brandFlag?`flex`:`hidden`} flex-col items-center mt-[8px]  text-white text-[15px] gap-[15px] `}>
                {brands && brands.map((value,k)=>(
                    <FilterProduct value={value.title} key={k}/>
                ))}
            </ul>
        </ul>
    );
};

export default BrandNav;