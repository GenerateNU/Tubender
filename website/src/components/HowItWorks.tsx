import StockPhoto from '../images/image2.png'
import CustomButton from './GetInTouch';
import Timeline from './Timeline';
import LeftArrow from '../images/left_arrow.svg'
import RightArrow from '../images/right_arrow.svg'

export default function HowItWorks() {
    return <div className="  bg-gradient-to-br from-[#272932] via-[#353A4E] to-[#272932] text-brand-white flex flex-col justify-center items-center p-8 md:p-28 pb-40 w-full">
        <div className=' flex flex-col gap-5'>
            <h2 className=" text-4xl text-center font-semibold">How does Tubender work?</h2>
            <h3 className=" text-lg text-center text-off-white">Let's break down the process</h3>
        </div>
        <div className='pb-24 pt-16 w-4/5'>
            <Timeline />
        </div>
        <h1 className=' text-left w-full font-semibold text-5xl pb-10'>Starting in CAD</h1>
        <div className=' flex flex-row flex-wrap gap-12 w-full'>
            <img src={StockPhoto} alt="" className=' grow h-full' />
            <div className=' w-full xl:w-5/12 flex flex-col justify-between gap-12'>
                <div className=' flex flex-col gap-6'>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>Functionality</h1>
                        <p className=' text-white-hover text-lg'>Users leverage CAD software to develop intricate tube designs, specifying bends, angles, and dimensions. CAD software provides a powerful platform for precise design creation, allowing users to visualize and refine their designs before fabrication.</p>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <h1 className=' text-xl font-semibold'>Benefits</h1>
                        <p className=' text-white-hover text-lg'>This step ensures accuracy and reduces the likelihood of errors during the bending process. It empowers users to create custom tubes tailored to their specific needs, whether for functional or artistic purposes.</p>
                    </div>
                </div>
                <div className=' flex flex-col lg:flex-row items-center gap-16'>
                    <div className=' w-full lg:w-3/5'>
                        <CustomButton fullWidth label='View our product' link='/product-purchase' />
                    </div>
                    <div className=' flex flex-row gap-10'>
                        <a href="" className=' flex justify-center items-center w-14 h-14 bg-gray-300 rounded-full'><img src={LeftArrow} alt="" className=' w-5' /></a>
                        <a href="" className=' flex justify-center items-center w-14 h-14 bg-gray-300 rounded-full'><img src={RightArrow} alt="" className=' w-5' /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}