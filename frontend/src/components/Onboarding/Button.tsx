import React from "react";
import RightArrow from "../../images/Arrow";

const OnboardingButton = (props: { handleClick: () => void, label?: string }) =>
    <div onClick={props.handleClick} className=' relative bg-brand-teal rounded-3xl z-50 opacity-100' >
        <div className=" w-fit py-5 px-10 flex flex-row items-center justify-center gap-4 place-items-center">
            {props.label && <p className=" text-brand-white text-xl font-bold">{props.label}</p>}
            <RightArrow />
        </div>
    </div >

export default OnboardingButton