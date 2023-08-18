import React,{useEffect, useState} from 'react';
import FilterProduct from "./FilterProduct";
import API from "../../../Api/useApi";

const PeriodNav = () => {
    const [periodFlag,setPeriodFlag]=useState(false);
    const [periods,setPeriods]=useState(null);
    const  getPeriod =async () => {
        try {
            const period= await API.get("periods");
            setPeriods(period.data.data)
        }catch (e) {
        }
    }
    useEffect(()=>{
        getPeriod();
    },[]);

    return (
        <ul className="w-full mb-[20px]">
            <li className=" w-full flex flex-col justify-center items-center"><button className="text-[18px] mr-[45px] text-[#01C38E] flex justify-end w-3/5 " onClick={()=>(periodFlag===false?setPeriodFlag(true):setPeriodFlag(false))}>دوره زمانی</button></li>
            <ul className={`w-full h-auto list-none ${periodFlag?`flex`:`hidden`} flex-col items-center text-white text-[15px] gap-[15px] mt-[8px] `}>
                {periods && periods.map((value,k)=>(
                    <FilterProduct value={value.id} key={k} />
                ))}
            </ul>
        </ul>
    );
};

export default PeriodNav;