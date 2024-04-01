import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import OnboardingButton from './Button';
import AnimatedChevrons from './AnimatedChevrons';

function QuickStartEndScreen(props: { stateChanger: () => void }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [loaded])

    return (
        <div className=' w-full h-full'>
            <div className=' w-full h-screen flex flex-col lg:flex-row justify-between items-center p-32'>
                <div className=' flex flex-col justify-center items-start gap-2'>
                    <h1 className=' text-7xl'><span className=' text-brand-blue-dark'>tu</span><span className=' text-brand-orange'>bender</span></h1>
                    <h2 className=' text-2xl text-brand-blue-light'>end of quickstart guide</h2>
                </div>
                <Link className=' flex items-center justify-center' to="/create">
                    <OnboardingButton handleClick={() => console.log("to create page")} label='open tubender' />
                </Link>
            </div>
            <div className=' absolute bottom-32 left-32 text-xl text-brand-blue'>
                <p>Access the Quickstart Guide at</p>
                <p>anytime from your profile page.</p>
            </div>
            <AnimatedChevrons loaded={loaded} />
        </div>
    );
}

export default QuickStartEndScreen;
