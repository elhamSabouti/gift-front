import React from 'react';
import CategoryBtn from "./CategoryBtn";

const Categories = () => {
    const data=[
        {
            "title": "همه",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
         },
        {
            "title": "موزیک",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
   },
        {
            "title": "فیلم و سریال",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
      },
        {
            "title": "آموزشی",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
       },
        {
            "title": "ابزار",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
    }];
    return (
        <div  className="flex-col items-between justify-center flex-wrap h-auto  mt-[16px] max-w-[89%]">
            <p className="text-[#01C38E] text-[34px] h-[53px] ">محصولات</p>
            <ul className="flex w-auto flex-wrap justify-center items-center gap-[22px] h-[48px] mt-[12px] flex-row-reverse">
                {data.map((value,index)=>(
                        <CategoryBtn props={value} id={index}/>
                    ))}
            </ul>
        </div>
    );
};

export default Categories;