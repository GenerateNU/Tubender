import { useState } from 'react';
import React from 'react';
import SplashScreen from '../components/Onboarding/SplashScreen';
import QuickStartTitleScreen from '../components/Onboarding/QuickStartTitleScreen';
import StartMachine from '../components/Onboarding/StartMachine';
import QuickStartEndScreen from '../components/Onboarding/QuickStartEndScreen';
import PrepareTube from '../components/Onboarding/PrepareTube';

function Onboarding() {
    const [currentPage, setCurrentPage] = useState(0)

    const pages = [
        <SplashScreen stateChanger={() => setCurrentPage(currentPage + 1)} />,
        <QuickStartTitleScreen stateChanger={() => setCurrentPage(currentPage + 1)} />,
        <StartMachine stateChanger={() => setCurrentPage(currentPage + 1)} />,
        <PrepareTube stateChanger={() => setCurrentPage(currentPage + 1)} />,
        <QuickStartEndScreen stateChanger={() => setCurrentPage(currentPage + 1)} />,
    ]

    return (
        <div className=' w-screen h-screen flex'>
            {pages[currentPage]}
        </div>
    );
}

export default Onboarding;