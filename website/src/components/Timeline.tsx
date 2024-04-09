import ComputerIcon from '../images/computer.svg'

export default function Timeline() {
    const TimelineStep = (props: { text: string }) => {
        return <div className=" relative h-20 lg:h-48 flex justify-center" >
            <div className=" flex justify-center items-baseline lg:items-center">
                <div className=" w-10 h-10 bg-off-white rounded-full flex justify-center" />
            </div>
            <h3 className=" absolute bottom-0 text-nowrap text-off-white">{props.text}</h3>
        </div>
    }

    const ConnectingLine = () => {
        return <div className=" grow self-center border-dashed border-l-[1px] lg:border-l-0 lg:border-t-[1px]" />
    }


    return <div className=" w-full h-screen lg:h-auto">
        <div className=" w-full h-5/6 lg:h-auto flex flex-col lg:flex-row justify-evenly items-center gap-4">
            <div className=" relative h-36 lg:h-48 flex justify-center" >
                <div className=" flex justify-center items-baseline lg:items-center">
                    <div className=" w-24 h-24 bg-white drop-shadow-2xl rounded-full flex justify-center" />
                </div>
                <img src={ComputerIcon} alt="" className=' w-12 h-12 absolute top-[72px]' />
                <h3 className=" absolute bottom-0 text-nowrap text-lg text-brand-white font-bold">Starting in CAD</h3>
            </div>
            <ConnectingLine />
            <TimelineStep text='G-Code' />
            <ConnectingLine />
            <TimelineStep text='Machine Setup' />
            <ConnectingLine />
            <TimelineStep text='Precision Bending' />
        </div>
    </div>
}