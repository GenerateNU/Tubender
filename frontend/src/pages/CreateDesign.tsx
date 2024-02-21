import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FileUploader from "../components/FileUploader";
import StepWrapper from "../components/StepWrapper";

function CreateDesign() {
    return (
        <div className='w-full h-screen bg-off-white flex flex-col justify-center items-center gap-4'>
            <StepWrapper title="Welcome">
                <Link to="/create/custom">
                    <Button label='Create Custom Bend' handleClick={() => console.log('button')} />
                </Link>
                    <FileUploader />
            </StepWrapper>
        </div>
    );
}

export default CreateDesign;
