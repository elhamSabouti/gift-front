import React,{useEffect, useState} from 'react';
import Banner from "./Banner";
import  netflix from "./../../../images/logos (1).png";
import  soundCloud from "./../../../images/logos (2).png";
import  spotify from "./../../../images/logos (3).png";
import  left from "./../../../images/arrow-left.png";
import  right from "./../../../images/arrow-right (1).png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import API from "../../../Api/useApi";

const Adds = () => {
    const [banners,setBanners]=useState(null);
    const  getBanners =async () => {
        try {
            const banner= await API.get("banner");
            setBanners(banner.data.data)
        }catch (e) {

        }
    }
    useEffect(()=>{
        getBanners();
    },[]);
    function SampleNextArrow(props) {
        return (
              <img src={left}  {...props} className={'prev absolute left-[30px] top-[38%] z-40 w-[22px] cursor-pointer' }/>
        );
    }
    function SamplePrevArrow(props) {
        return (
            <img src={right}  {...props} className={'next absolute right-[30px] top-[38%] z-40 w-[22px] cursor-pointer' }/>
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
        rtl:true,
        autoplay: true,
        autoplaySpeed: 5000,

    };
    return (
        <div className="w-[89%] mt-[30px] flex items-center justify-center ">
            <Slider {...settings} className=" w-full  flex ">
            {banners && banners.map((value)=>(
            <Banner props={value}/>
            ))}
            </Slider>
        </div>
    );
};

export default Adds;