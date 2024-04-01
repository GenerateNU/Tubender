import StockPhoto from '../images/image2.png'
import GetInTouch from './GetInTouch';
import Timeline from './Timeline';

export default function HowItWorks() {
    return <div className=" bg-brand-blue text-brand-white flex flex-col justify-center items-center p-8 md:p-28 pb-40 w-full">
        <div className=' flex flex-col gap-5'>
            <h2 className=" text-4xl text-center font-semibold">How does Tubender work?</h2>
            <h3 className=" text-lg text-center text-off-white">Let's break down the process</h3>
        </div>
        <div className='pb-48 pt-16 w-4/5'>
            <Timeline />
        </div>
        <div className=' flex flex-row flex-wrap justify-between w-full'>
            <img src={StockPhoto} alt="" />
            <div className=' w-full xl:w-5/12 flex flex-col justify-between gap-20'>
                <div className=' py-14 flex flex-col gap-6'>
                    <h1 className=' text-5xl font-bold'>software -&gt; gcode</h1>
                    <p className=' text-white-hover'>Figma ipsum component variant main layer. Slice object variant share text project. Device mask object move star hand star frame. Strikethrough prototype outline underline figjam strikethrough italic invite. Pen rectangle boolean invite distribute.</p>
                </div>
                <GetInTouch />
            </div>
        </div>
    </div>
}