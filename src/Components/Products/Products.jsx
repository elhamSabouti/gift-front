import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import netflix from "../../images/48967 1 (2).png";
import API from "../../Api/useApi";
const Products = () => {
    const [products,setProducts]=useState(null);
    const  getProducts =async () => {
        try {
            const product= await API.get("product");
            setProducts(product.data.data)
        }catch (e) {
        }
    }
    useEffect(()=>{
        getProducts();
    },[]);

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
            {products && products.map((value )=>(
                <ProductCard props={value}/>
            ))}
        </div>
    );
};

export default Products;