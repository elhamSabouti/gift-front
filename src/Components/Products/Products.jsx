import React from 'react';
import Header from "../Layouts/Header";
import ProductsBox from "./ProductsBox";

const Products = () => {
    return (
        <div className="w-full min-h-[100vh] bg-[#1A1E29] flex items-center justify-start flex-col">
            <Header/>
            <ProductsBox/>
        </div>
    );
};

export default Products;