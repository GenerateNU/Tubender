import CustomButton from './GetInTouch';
import TubenderLogo from '../images/new_logo.svg'

export default function Navbar() {
    return <div className=" w-full p-6 pl-8 rounded-3xl bg-white flex flex-col gap-6 lg:flex-row justify-between items-center">
        <div className=' flex flex-row gap-14'>
            <div className=' flex flex-row items-center gap-2'>
                <img src={TubenderLogo} alt="" className=' h-7' />
                <h1 className=' text-brand-blue text-2xl'>tubender</h1>
            </div>
            <div className=' hidden lg:flex flex-row gap-3'>
                <a href="" className=' text-brand-blue-light text-lg font-semibold px-5'>About Us</a>
                <a href="" className=' text-brand-blue-light text-lg font-semibold px-5'>Products</a>
                <a href="" className=' text-brand-blue-light text-lg font-semibold px-5'>Projects</a>
            </div>
        </div>
        <CustomButton label='Get in touch' link='' />
    </div>
}