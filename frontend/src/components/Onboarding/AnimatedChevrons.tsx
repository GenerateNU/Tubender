import React from "react";
import TubenderChevron from "../../images/Chevron";

const AnimatedChevrons = (props: { loaded: boolean }) =>
    <div className=' overflow-clip w-full h-full absolute top-0 bottom-0' >
        <div className={` overflow-clip absolute -z-10 right-[-175px] delay-500 duration-700 ${props.loaded ? "opacity-100" : "opacity-0"}`}><TubenderChevron /></div>
        <div className={` overflow-clip absolute -z-20 right-0 delay-500 duration-700 ${props.loaded ? "opacity-100" : "opacity-0"}`}><TubenderChevron /></div>
        <div className={` overflow-clip absolute -z-30 right-[175px] delay-300 duration-700 ${props.loaded ? "opacity-75" : "opacity-0"}`}><TubenderChevron /></div>
        <div className={` overflow-clip absolute -z-40 right-[350px] delay-150 duration-700 ${props.loaded ? "opacity-50" : "opacity-0"}`}><TubenderChevron /></div>
        <div className={` overflow-clip absolute -z-50 right-[525px] delay-0 duration-700 ${props.loaded ? "opacity-25" : "opacity-0"}`}><TubenderChevron /></div>
    </div>

export default AnimatedChevrons