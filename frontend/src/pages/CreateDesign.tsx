import React from 'react';
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FileUploader from "../components/FileUploader";
import StepWrapper from "../components/StepWrapper";
import Navbar from "../components/Navbar";

function CreateDesign() {
    return (
        <>
        <Navbar/>
        <div className='w-full h-screen bg-off-white flex flex-col justify-center items-center gap-4'>
            <StepWrapper title="Welcome">
                <Link to="/create/custom">
                    <Button label='Create Custom Bend'
                     handleClick={() => console.log('button')}
                     customColors='bg-brand-temp-teal text-brand-white hover:bg-opacity-75' />
                </Link>
                    <FileUploader />
                <Link to="/onboarding">
                    <Button label='Help'
                        handleClick={() => console.log('button')}
                        customColors='bg-brand-temp-teal text-brand-white hover:bg-opacity-75' />
                </Link>
            </StepWrapper>
        </div>
        </>
    );
}

export default CreateDesign;
