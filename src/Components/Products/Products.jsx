import React from 'react';
import ProductCard from "./ProductCard";
import netflix from "../../images/48967 1 (2).png";

const Products = () => {
    const data=[
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },
        {
            "title": "نتفیلیکس",
            "description": "استریم فیلم",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "borderColor":"#D51F26" ,
            "logoName": "netflix-text-logo",
            "logo":netflix,
            "price":"۲۰۰,۰۰۰ تومان ",
            "textColor":"#FF4148",
        },];
    return (
        <div className="w-auto h-auto flex gap-[20px] flex-wrap mt-[30px] justify-center mt-[50px] ">
            {data.map((value )=>(
                <ProductCard props={value}/>
            ))}
        </div>
    );
};

export default Products;