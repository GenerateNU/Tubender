import React, { ReactNode } from "react";

function StepWrapper(props: { children?: ReactNode, title?: string }) {
    return <div className=' h-full w-1/3 flex flex-col justify-center items-center gap-6'>
        <h2 className=' font-semibold text-3xl text-brand-blue'>{props.title}</h2>{props.children}</div >
}

export default StepWrapper;