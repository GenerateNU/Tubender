import StepWrapper from "../components/StepWrapper";
import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";

function CreateDesign() {
    return (
        <div className=' w-full h-screen bg-off-white flex flex-col justify-center items-center gap-4'>
            <StepWrapper title="Welcome">
                <Link to="/create/custom">
                    <Button label='Create Custom Bend' handleClick={() => console.log('button')}></Button></Link>
                <Link to="/create/upload"><Button label='Upload Bend Design' handleClick={() => console.log('button')}></Button></Link>
            </StepWrapper>
        </div>
    );
}

export default CreateDesign;