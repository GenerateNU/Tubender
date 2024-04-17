import React from 'react';
import BigCircle from '../../images/BigCircle';
import OnboardingButton from './Button';
import MediumCircle from '../../images/MediumCircle';
import Navbar from '../Navbar';

function PrepareTube(props: { stateChanger: () => void }) {
    return (
        <div className=' w-full lg:w-auto h-full flex flex-col lg:flex-row items-end justify-start bg-off-white'>
            <Navbar />
            <div className=' flex flex-col gap-4 text-left lg:pb-32 pl-8 pt-16 lg:pl-32 z-50 w-full lg:w-1/2'>
                <h1 className=' text-brand-blue-dark text-5xl pb-4'>Preparing the tubing</h1>
                <h2 className=' text-2xl text-brand-blue-light'>Straightening and Cutting the Tube</h2>
                <div className=' text-brand-teal text-lg text-balance'>
                    <h3>**Your tube will need to have an ending straight section of at least 10 inches to allow enough length to disengage and pull out the tube once all the bending is complete. Make sure to account for this prior to cutting your tube.</h3>
                    <h3>**If you already have your desired length of tube, you may skip this step:</h3>
                </div>
                <ul className=' text-brand-blue-light text-2xl text-balance'>
                    <li>1. If in a coil, unroll the desired length of tube</li>
                    <li>2. Use a tube straightener to straighten the tube</li>
                    <li>3. Mark where you will cut the tube at desired length</li>
                    <li>4. Use tube cutter to cut the tube at marking</li>
                    <li className=' pl-8'>To use a tube cutter, start by gently tightening the cutter until it makes contact with the tube and then make a couple rotations. Repeat this process until tube is cut.</li>
                    <li>5. Once straightened tube is cut to desired length, proceed to next steps:</li>
                    <li>6. Cleaning the Tube</li>
                    <li>7. Spray some Isopropyl Alcohol onto a paper towel and wipealong the full exterior of the tube to clean it. This may take a couple passes to fully clean.</li>
                </ul>
            </div>
            <div className=' w-full h-full lg:absolute top-0 bottom-0 flex justify-end items-end lg:items-center'>
                <div className=' pr-32 py-16 lg:py-0'>
                    <OnboardingButton handleClick={props.stateChanger} />
                </div>
            </div>
            <div className=' overflow-clip w-full h-full absolute'>
                <div className='flex justify-center absolute z-10 -bottom-36 -left-10'><BigCircle /></div>
                <div className='flex justify-center absolute z-10 -top-20 -right-8'><MediumCircle /></div>
            </div>
        </div>
    );
}

export default PrepareTube;