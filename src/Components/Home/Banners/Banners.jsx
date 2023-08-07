import React from 'react';
import Banner from "./Banner";
const Banners = () => {
    const data=[
        {
            "title": "گیفت کارت نتفیلیکس",
            "description": "استریم موزیک",
            "link": "http://prohaska.biz/est-distinctio-occaecati-sed-animi-totam-dolor",
            "color_from":"#132D46" ,
            "color_main": "#1A1E29",
            "color_to":  "#E50914",
            "logo_name": "netflix-text-logo",
            "logo": "https://nimaheidari.storage.iran.liara.space/images/netflix-text-logo.png"}];
    return (
        <div className="w-[85%] mt-[20px]">
            {data.map((d)=>(
                <Banner  cMain={d.color_main} cFrom={d.color_from} cTo={d.color_to} logo={d.logo} title={d.title} description={d.description}/>
            ))}
    </div>


    );
};

export default Banners;