import React from 'react';
import category from '../../../images/category-icon.png';
import filter from '../../../images/filter-icon.png';
import {useEffect, useState} from "react";
import API from "../../../Api/useApi";

import Category from "./Category";
import PeriodNav from "./PeriodNav";
import BrandNav from "./BrandNav";

const Navigation = () => {
    const [categories,setCategories]=useState(null);
    const  getCategories =async () => {
        try {
            const category= await API.get("category");
            setCategories(category.data.data)
        }catch (e) {
        }
    }
    useEffect(()=>{
        getCategories();
    },[]);
    return (
        <div className="w-[305px] h-[513px] bg-[#132D4675] flex rounded-s-[40px] flex items-center justify-start flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-[#132D46] scrollbar-[#132D46] ">
             <nav className=" h-auto w-full flex flex-col items-center justify-center gap-[17px] mt-[50px] ">
                 <div className="flex gap-[10px] w-3/5  justify-center items-center  ">
                     <p className="text-[20px] text-[#01C38E]   flex justify-end">دسته بندی</p>
                     <img src={category} className="h-[30px]"/>
                 </div>
                 <ul className=" w-full h-auto list-none flex flex-col items-center  text-white text-[15px] gap-[15px] ">
                     <li className="w-2/5  mr-[62px] ">
                         <button className={` flex justify-end items-center w-full `}>همه</button>
                     </li>
                     {categories && categories.map((value,k)=>(
                         <Category value={value} key={k} />
                     ))}
                 </ul>
             </nav>
              <nav className="mt-[45px] h-auto w-full flex flex-col items-center justify-center gap-[17px] ">
                  <div className="flex gap-[10px]  w-3/5 justify-end ">
                      <p className="text-[20px] text-[#01C38E] ">فیلتر</p>
                      <img src={filter}/>
                  </div>
                 <BrandNav/>
                 <PeriodNav />
              </nav>
        </div>
    );
};

export default Navigation;