import React from 'react';
import Product from "./Product";

const Products = () => {
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
        <div  className="flex-col items-between justify-center flex-wrap h-auto  mt-[10px] max-w-[85%]">
            <p className="text-[#01C38E] text-[29px]">محصولات</p>
            <ul className="flex w-auto flex-wrap justify-center items-center gap-[22px] h-[70px] mt-[5px] flex-row-reverse">
                {data.map((value,index)=>(
                        <Product text={value.title} id={index}/>
                    ))}
            </ul>
        </div>
    );
};

export default Products;