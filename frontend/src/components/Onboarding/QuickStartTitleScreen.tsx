import React, { useEffect, useState } from 'react';
import OnboardingButton from './Button';
import AnimatedChevrons from './AnimatedChevrons';

function QuickStartTitleScreen(props: { stateChanger: () => void }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [loaded])

    return (
        <div className=' w-full h-full'>
            <div className=' w-full h-full flex flex-col lg:flex-row justify-between items-center p-32'>
                <div className=' flex flex-col justify-center items-start gap-2'>
                    <h1 className=' text-7xl'><span className=' text-brand-blue-dark'>tu</span><span className=' text-brand-orange'>bender</span></h1>
                    <h2 className=' text-2xl text-brand-blue-light'>quickstart guide</h2>
                </div>
                <div className=' flex items-center justify-center'>
                    <OnboardingButton handleClick={props.stateChanger} />
                </div>
            </div>
            <AnimatedChevrons loaded={loaded} />
        </div>
    );
}

export default QuickStartTitleScreen;
