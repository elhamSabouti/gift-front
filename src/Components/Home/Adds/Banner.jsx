import React from 'react';
// import {Link} from "react-router-dom";

const Banner = ({props}) => {
    return (
        <div className= {`w-full h-[140px] cursor-pointer  rounded-[30px]  flex justify-between`} style={{backgroundImage:`linear-gradient(to right, ${props.color_from} , ${props.color_main} , ${props.color_to})`}}>
            <div className="w-[50%] h-full flex justify-center items-center ">
                <img src={props.logo} className="w-[290px] " alt={props.logo_name} title={props.logo_name}/>
            </div>
            <div className="w-[50%] h-full flex   justify-center items-center text-white ">
             <div className="  text-right  w-auto">
                 <p className="text-[35px] ">{props.title}</p>
                 <p className="text-[14px] ">{props.description}</p>
             </div>
            </div>
        </div>
    );
};

export default Banner;