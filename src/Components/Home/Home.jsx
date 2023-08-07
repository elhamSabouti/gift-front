import React from 'react';
import Header from "../Layouts/Header";
import Slider from "react-slick";
import Banners from "./Banners/Banners";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div className="w-full h-[100vh] bg-[#1A1E29] flex items-center justify-start flex-col">
            <Header/>
            <Banners/>
            <Products/>

        </div>
    );
};

export default Home;