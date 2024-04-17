import { useState } from 'react';
import React from 'react';
import SplashScreen from '../components/Onboarding/SplashScreen';
import QuickStartTitleScreen from '../components/Onboarding/QuickStartTitleScreen';
import StartMachine from '../components/Onboarding/StartMachine';
import QuickStartEndScreen from '../components/Onboarding/QuickStartEndScreen';
import PrepareTube from '../components/Onboarding/PrepareTube';

function Onboarding() {
    const [currentPage, setCurrentPage] = useState(0)

    const incrementPage = () => setCurrentPage(currentPage + 1)

    const pages = [
        <SplashScreen stateChanger={incrementPage} />,
        <QuickStartTitleScreen stateChanger={incrementPage} />,
        <StartMachine stateChanger={incrementPage} />,
        <PrepareTube stateChanger={incrementPage} />,
        <QuickStartEndScreen stateChanger={incrementPage} />,
    ]

    return (
        <div className=' w-screen h-screen flex'>
            {pages[currentPage]}
        </div>
    );
}

export default Onboarding;