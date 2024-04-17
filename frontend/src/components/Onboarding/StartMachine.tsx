import React from 'react';
import DoubleCircle from '../../images/DoubleCircle';
import OnboardingButton from './Button';
import Navbar from '../Navbar';

function StartMachine(props: { stateChanger: () => void }) {
    return (
        <div className=' w-full h-full flex items-end justify-center bg-off-white'>
            <Navbar />
            <div className=' flex flex-col gap-4 text-left pb-64 lg:pb-32 z-50'>
                <h1 className=' text-brand-blue-dark text-5xl'>1 Powering on the machine</h1>
                <div>
                    <h3 className=' text-brand-teal text-lg'>**Make sure to hit "Park" before powering off the machine.</h3>
                    <h3 className=' text-brand-teal text-lg'>**Make sure everything is powerered off before proceeding.</h3>
                </div>
                <ul>
                    <li className=' text-brand-blue-light text-2xl'><span className=' text-brand-blue-dark'>1</span> Plug your machine into an outlet.</li>
                    <li className=' text-brand-blue-light text-2xl'><span className=' text-brand-blue-dark'>2</span> Turn on the power strip inside the machine.</li>
                    <li className=' text-brand-blue-light text-2xl'><span className=' text-brand-blue-dark'>3</span> Connect the Ethernet to the laptop.</li>
                    <li className=' text-brand-blue-light text-2xl'><span className=' text-brand-blue-dark'>4</span> Open the Acorn CNC software on the connected laptop.</li>
                    <li className=' text-brand-blue-light text-2xl'><span className=' text-brand-blue-dark'>6</span> Hit "Reset Axes" to zero out the axes.</li>
                    <li className=' text-brand-blue-light text-2xl'><span className=' text-brand-blue-dark'>5</span> Hit the "Park" button to reset the machine to home.</li>
                </ul>
            </div>
            <div className=' w-full h-full absolute top-0 bottom-0 flex justify-end items-end lg:items-center'>
                <div className=' pr-32 pb-16 lg:pb-0'>
                    <OnboardingButton handleClick={props.stateChanger} />
                </div>
            </div>
            <div className='overflow-clip flex justify-center absolute z-10 top-32 left-0 right-0 bottom-0'><DoubleCircle /></div>
        </div>
    );
}

export default StartMachine;