import React, { useEffect, useState } from 'react';
import HifiLogo from '../../images/HifiLogo';

function SplashScreen(props: { stateChanger: () => void }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [loaded])

    return (
        <div onClick={props.stateChanger} className=' w-full h-full flex flex-col items-center justify-center gap-8'>
            <HifiLogo></HifiLogo>
            <h1 className={` text-7xl  duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}><span className=' text-brand-blue-dark'>tu</span><span className=' text-brand-orange'>bender</span></h1>
        </div>
    );
}

export default SplashScreen;