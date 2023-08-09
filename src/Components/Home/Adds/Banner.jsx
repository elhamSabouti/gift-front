import React from 'react';

const Banner = ({props}) => {
    return (
        <div className= {`w-full h-[159px] cursor-pointer  rounded-[38px]  flex justify-between`} style={{backgroundImage:`linear-gradient(to right, ${props.color_from} , ${props.color_main} , ${props.color_to})`}}>
            <div className="w-[50%] h-full flex justify-center items-center ">
                <img src={props.logo} className="w-[318px] " alt={props.logo_name} title={props.logo_name}/>
            </div>
            <div className="w-[50%] h-full flex   justify-center items-center text-white ">
             <div className="  text-right  w-auto">
                 <p className="text-[38px] ">{props.title}</p>
                 <p className="text-[20px] ">{props.description}</p>
             </div>
            </div>
        </div>
    );
};

export default Banner;