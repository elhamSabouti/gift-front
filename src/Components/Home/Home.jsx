import React from 'react';
import Header from "../Layouts/Header";
import Slider from "react-slick";
import Adds from "./Adds/Adds";
import Categories from "./Categories/Categories";
import Products from "../Products/Products";
import Dots from "./Dots";

const Home = () => {
    return (
        <div className="w-full min-h-[100vh] bg-[#1A1E29] flex items-center justify-start flex-col">
            <Header/>
            <Adds/>
            <Categories/>
            <Products/>
            <Dots/>
        </div>
    );
};

export default Home;