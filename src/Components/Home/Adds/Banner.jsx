import React from 'react';
// import {Link} from "react-router-dom";

const Banner = ({props}) => {
    return (
        <div className= {`w-full h-[140px] bg-gradient-to-r cursor-pointer from-[${props.colorFrom}] via-[${props.colorMain}] to-[${props.colorTo}] rounded-[30px]  flex justify-between`}>
            <div className="w-[50%] h-full flex justify-center items-center ">
                <img src={props.logo} className="w-[290px] " alt={props.logoName} title={props.logoName}/>
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