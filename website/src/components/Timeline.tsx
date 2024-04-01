export default function Timeline() {
    return <div className=" w-full h-screen lg:h-auto">
        <div className=" w-full h-5/6 lg:h-auto flex flex-col lg:flex-row justify-evenly items-center gap-4">
            <div className=" relative h-36 lg:h-48 flex justify-center" >
                <div className=" flex justify-center items-baseline lg:items-center">
                    <div className=" w-24 h-24 bg-off-white rounded-full flex justify-center" />
                </div>
                <h3 className=" absolute bottom-0 text-nowrap text-lg text-brand-white font-bold">software -&gt; gcode</h3>
            </div>
            <div className=" grow self-center border-dashed border-l-[1px] lg:border-l-0 lg:border-t-[1px]" />
            <div className=" relative h-20 lg:h-48 flex justify-center" >
                <div className=" flex justify-center items-baseline lg:items-center">
                    <div className=" w-10 h-10 bg-off-white rounded-full flex justify-center" />
                </div>
                <h3 className=" absolute bottom-0 text-nowrap text-off-white">seamless integration</h3>
            </div>
            <div className=" grow self-center border-dashed border-l-[1px] lg:border-l-0 lg:border-t-[1px]" />

            <div className=" relative h-20 lg:h-48 flex justify-center" >
                <div className=" flex justify-center items-baseline lg:items-center">
                    <div className=" w-10 h-10 bg-off-white rounded-full flex justify-center" />
                </div>
                <h3 className=" absolute bottom-0 text-nowrap text-off-white">automatic tube bending</h3>
            </div>
            <div className=" grow self-center border-dashed border-l-[1px] lg:border-l-0 lg:border-t-[1px]" />
            <div className=" relative h-20 lg:h-48 flex justify-center" >
                <div className=" flex justify-center items-baseline lg:items-center">
                    <div className=" w-10 h-10 bg-off-white rounded-full flex justify-center" />
                </div>
                <h3 className=" absolute bottom-0 text-nowrap text-off-white">anywhere, anytime</h3>
            </div>
        </div>
    </div>




    return <div className=" w-full flex flex-row justify-evenly">
        <div>
            <h3 className=" text-lg text-brand-white font-bold">software -&gt; gcode</h3>
        </div>
        <div>
            <h3 className=" text-off-white">seamless integration</h3>
        </div>
        <div>
            <h3 className=" text-off-white">automatic tube bending</h3>
        </div>
        <div>
            <h3 className=" text-off-white">anywhere, anytime</h3>
        </div>
    </div>
}