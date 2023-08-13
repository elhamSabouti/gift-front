import React,{useEffect, useState} from 'react';
import CategoryBtn from "./CategoryBtn";
import API from "../../../Api/useApi";

const Categories = () => {
    const [categories,setCategories]=useState(null);
    const [activeCategoryId,setActiveCategoryId]=useState(0);
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
        <div  className="flex-col items-between justify-center flex-wrap h-auto  mt-[16px] max-w-[89%]">
            <p className="text-[#01C38E] text-[34px] h-[53px] ">محصولات</p>
            <ul className="flex w-auto flex-wrap justify-center items-center gap-[22px] h-[48px] mt-[12px] flex-row-reverse">
                <li>
                    <button className={`w-[170px] h-[47px]  flex justify-center items-center ${activeCategoryId===0?`bg-[#132D46] border-2 border-[#01C38E] text-white `:`bg-white text-[#1A1E29]`} rounded-[20px] text-[20px] `} onClick={()=>setActiveCategoryId(0)}>همه</button>
                </li>
                {categories && categories.map((value,k)=>(
                        <CategoryBtn props={value} key={k} setActiveCategoryId={setActiveCategoryId} activeCategoryId={activeCategoryId}/>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;