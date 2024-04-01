import React from "react";

function Button(props: { label: string, handleClick: () => void, disabled?: boolean, alt?: boolean, customColors?:string }) {
    const colors = props.customColors || (props.alt ? ' disabled:bg-error-red text-brand-blue hover:bg-brand-white' : 'bg-brand-blue disabled:bg-error-red text-brand-white hover:bg-brand-blue-light')
    return (
        <button disabled={props.disabled} onClick={props.handleClick} className={` ${colors} w-52 h-12 flex justify-center items-center rounded-xl`}><h3 className="text-center font-semibold text-sm">{props.label}</h3></button>
    );
}

export default Button;
