import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import netflix from "../../images/48967 1 (2).png";
const Products = () => {

    const data=[
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "border_color":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "text_color":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "border_color":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "text_color":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "border_color":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "text_color":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "border_color":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "text_color":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "border_color":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "text_color":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "border_color":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "text_color":"#FF4148",
        },
  ];
    return (
        <div className="w-auto h-auto flex gap-[23px] flex-wrap mt-[27px] justify-center  ">
            {data.map((value )=>(
                <ProductCard props={value}/>
            ))}
        </div>
    );
};

export default Products;