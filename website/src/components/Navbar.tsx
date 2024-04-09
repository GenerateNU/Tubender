import GetInTouch from './GetInTouch';
import TubenderLogo from '../images/new_logo.svg'

export default function Navbar() {
    return <div className=" w-full h-28 px-6 pl-8 rounded-3xl bg-white flex flex-row justify-between items-center">
        <div className=' flex flex-row gap-14'>
            <div className=' flex flex-row items-center gap-2'>
                <img src={TubenderLogo} alt="" className=' h-7' />
                <h1 className=' text-brand-blue text-2xl'>tubender</h1>
            </div>
            <div className=' flex flex-row gap-3'>
                <a href="" className=' text-brand-blue-light text-lg font-semibold px-5'>Company</a>
                <a href="" className=' text-brand-blue-light text-lg font-semibold px-5'>Products</a>
                <a href="" className=' text-brand-blue-light text-lg font-semibold px-5'>Projects</a>
            </div>
        </div>
        <GetInTouch label='Get in touch' link='' />
    </div>
}