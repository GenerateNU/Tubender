export default function SplashScreen() {
    return <div className=" h-screen w-full flex flex-col justify-center items-center gap-20 bg-brand-blue-dark bg-opacity-85 bg-blend-darken bg-splash-background bg-cover">
        < h1 className=" text-brand-white text-4xl sm:text-6xl md:text-8xl" > we are <span className=" text-brand-orange" > tubender</span></h1 >
        <div className=" absolute bottom-24">
            <a href="#why">
                <button className=" bg-white-hover hover:bg-brand-white w-16 h-16 lg:w-24 lg:h-24 rounded-full">v</button>
            </a>
        </div>
    </div >
}