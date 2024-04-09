import DownArrow from '../images/blue_arrow.svg'

export default function SplashScreen() {
    return <div className=" h-screen w-full flex flex-col justify-center items-center gap-20 bg-brand-blue-dark bg-opacity-95 bg-blend-darken bg-splash-background bg-cover">
        < h1 className=" text-brand-white text-4xl sm:text-6xl md:text-8xl" > we are <span className=" text-brand-blue-temp" > tubender</span></h1 >
        <div className=" absolute bottom-24">
            <a href="#why">
                <button className=" hover:bg-white-hover bg-brand-white w-24 h-24 lg:w-24 lg:h-24 rounded-full flex justify-center items-center"><img src={DownArrow} alt="" /></button>
            </a>
        </div>
    </div >
}