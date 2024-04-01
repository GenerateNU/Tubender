import Anvil from '../images/anvil_close_bg.svg'
import Cube from '../images/cube.svg'
import Diamond from '../images/diamond.svg'
import Rhombus from '../images/rhombus.svg'
import Sphere from '../images/sphere.svg'
import GetInTouch from './GetInTouch';

export default function WhyTubender() {
    return <div className=" flex flex-col p-8 md:px-40 py-32 gap-28" id='why'>
        <div className=" flex flex-row flex-wrap gap-32 justify-between">
            <div className=' w-full xl:w-1/3 flex flex-col gap-11'>
                <h2 className=' text-5xl font-semibold'>We Really Really Love Bending Tubes</h2>
                <p className=' text-lg text-brand-blue-light'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
                <GetInTouch />
            </div>
            <div className=' grid grid-cols-2 w-1/2 gap-28'>
                <div>
                    <img src={Cube} alt="" className=' pb-10' />
                    <h2 className=' text-2xl pb-6 font-medium'>Portability</h2>
                    <p className=' text-brand-blue-light'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </div>
                <div>
                    <img src={Diamond} alt="" className=' pb-10' />
                    <h2 className=' text-2xl pb-6 font-medium'>Affordability</h2>
                    <p className=' text-brand-blue-light'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </div>
                <div>
                    <img src={Sphere} alt="" className=' pb-10' />
                    <h2 className=' text-2xl pb-6 font-medium'>Precision</h2>
                    <p className=' text-brand-blue-light'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </div>
                <div>
                    <img src={Rhombus} alt="" className=' pb-10' />
                    <h2 className=' text-2xl pb-6 font-medium'>Simplicity</h2>
                    <p className=' text-brand-blue-light'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                </div>
            </div>
        </div>
        <div className=" flex flex-row flex-wrap xl:flex-nowrap gap-36">
            <img src={Anvil} className=" w-full h-full" />
            <div className=" flex flex-col gap-11">
                <h2 className=' text-5xl font-semibold'>Bending tubes means so much to us</h2>
                <p className=' text-lg text-brand-blue-light'>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blah</p></div>
        </div>
    </div>
}