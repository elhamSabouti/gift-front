import React from 'react';
import Banner from "./Banner";
import  netflix from "./../../../images/logos (1).png";
import  soundCloud from "./../../../images/logos (2).png";
import  spotify from "./../../../images/logos (3).png";
import  left from "./../../../images/arrow-left.png";
import  right from "./../../../images/arrow-right (1).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Adds = () => {
    const data=[
        {
            "title": "گیفت کارت نتفیلیکس",
            "description": "استریم موزیک",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "color_from":"#132D46" ,
            "color_main": "#1A1E29",
            "color_to":  "#E50914",
            "logo_name": "netflix-text-logo",
            "logo":netflix,
            },
        {
            "title": "گیفت کارت سوندکلود",
            "description": "استریم موزیک",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "color_from":"#132D46" ,
            "color_main": "#1A1E29",
            "color_to":  "#F9570E",
            "logo_name": "netflix-text-logo",
            "logo":soundCloud,
        },{
            "title": "گیفت کارت اسپاتیفای",
            "description": "استریم موزیک",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "color_from":"#132D46" ,
            "color_main": "#1A1E29",
            "color_to":  "#1ED760",
            "logo_name": "netflix-text-logo",
            "logo":spotify,
        }];
    function SampleNextArrow(props) {
        return (
              <img src={left}  {...props} className={'prev absolute left-[25px] top-[38%] z-40 w-[22px] cursor-pointer' }/>
        );
    }
    function SamplePrevArrow(props) {
        return (
            <img src={right}  {...props} className={'next absolute right-[25px] top-[38%] z-40 w-[22px] cursor-pointer' }/>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SampleNextArrow />,
        nextArrow: <SamplePrevArrow />,
    };
    return (
        <div className="w-[85%] mt-[10px]">
            <Slider {...settings} className=" w-full mt-[20px] flex relative">
            {data.map((value)=>(
            <Banner props={value}/>
            ))}
            </Slider>
        </div>
    );
};

export default Adds;