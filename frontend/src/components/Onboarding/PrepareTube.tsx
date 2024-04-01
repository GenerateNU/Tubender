import React from 'react';
import BigCircle from '../../images/BigCircle';
import OnboardingButton from './Button';
import MediumCircle from '../../images/MediumCircle';

function PrepareTube(props: { stateChanger: () => void }) {
    return (
        <div className=' w-full h-full flex items-end justify-start bg-off-white'>
            <div className=' flex flex-col gap-4 text-left pb-32 pl-32 z-50'>
                <h1 className=' text-brand-blue-dark text-5xl pb-4'>Preparing the tubing</h1>
                <h2 className=' text-2xl text-brand-blue-light'>Straightening and Cutting the Tube</h2>
                <div>
                    <h3 className=' text-brand-orange text-lg'>**Your tube will need to have an ending straight section of at least 10 inches</h3>
                    <h3 className=' text-brand-orange text-lg'>to allow enough length to disengage and pull out the tube once all the bending</h3>
                    <h3 className=' text-brand-orange text-lg'>is complete. Make sure to account for this prior to cutting your tube.</h3>
                    <h3 className=' text-brand-orange text-lg'>**If you already have your desired length of tube, you may skip this step:</h3>
                </div>
                <ul>
                    <li className=' text-brand-blue-light text-2xl'>1. If in a coil, unroll the desired length of tube</li>
                    <li className=' text-brand-blue-light text-2xl'>2. Use a tube straightener to straighten the tube</li>
                    <li className=' text-brand-blue-light text-2xl'>3. Mark where you will cut the tube at desired length</li>
                    <li className=' text-brand-blue-light text-2xl'>4. Use tube cutter to cut the tube at marking</li>
                    <li className=' text-brand-blue-light text-2xl'>To use a tube cutter, start by gently tightening</li>
                    <li className=' text-brand-blue-light text-2xl'>the cutter until it makes contact with the tube and</li>
                    <li className=' text-brand-blue-light text-2xl'>then make a couple rotations. Repeat this process until</li>
                    <li className=' text-brand-blue-light text-2xl'>tube is cut.</li>
                    <li className=' text-brand-blue-light text-2xl'>5. Once straightened tube is cut to desired length, proceed to</li>
                    <li className=' text-brand-blue-light text-2xl'>next steps:</li>
                    <li className=' text-brand-blue-light text-2xl'>6. Cleaning the Tube</li>
                    <li className=' text-brand-blue-light text-2xl'>7. Spray some Isopropyl Alcohol onto a paper towel and wipe</li>
                    <li className=' text-brand-blue-light text-2xl'>along the full exterior of the tube to clean it. This may take a</li>
                    <li className=' text-brand-blue-light text-2xl'>couple passes to fully clean.</li>
                </ul>
            </div>
            <div className=' overflow-clip w-full h-full absolute top-0 bottom-0 flex justify-end items-center'>
                <div className=' pr-32'>
                    <OnboardingButton handleClick={props.stateChanger} />
                </div>
                <div className=' overflow-clip h-full flex justify-center absolute z-10 -bottom-36 -left-10'><BigCircle /></div>
                <div className=' overflow-clip h-full flex justify-center absolute z-10 -top-20 -right-8'><MediumCircle /></div>
            </div>
        </div>
    );
}

export default PrepareTube;