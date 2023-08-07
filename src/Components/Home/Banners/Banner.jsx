import React from 'react';
// import {Link} from "react-router-dom";

const Banner = ({cMain,cFrom,cTo,logo,description,title}) => {
    console.log(cFrom)
    return (
        <div className= {`w-full h-[140px] bg-gradient-to-r from-[${cFrom}] via-[${cMain}] to-[${cTo}] rounded-[30px]  flex justify-between`}>
            <div className="w-2/5 h-full flex justify-center items-center">
                <img src={logo} className="w-[50px"/>
            </div>
            <div className="w-2/5 h-full flex   justify-center items-center text-white ">
             <div className="  text-right  w-auto">
                 <p className="text-[37px] ">{title}</p>
                 <p className="text-[14px] ">{description}</p>
             </div>
            </div>


        </div>
    );
};

export default Banner;