import CustomButton from './GetInTouch';
import TubenderLogo from '../images/new_logo.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <div className=" w-full p-6 pl-8 rounded-3xl bg-white flex flex-col gap-6 lg:flex-row justify-between items-center">
        <div className=' flex flex-row gap-14'>
            <div className=' flex flex-row items-center gap-2'>
                <img src={TubenderLogo} alt="" className=' h-7' />
                <Link to="/" className='text-brand-blue text-2xl'>
                    <h1>tubender</h1>
                </Link>
            </div>
            <div className=' hidden lg:flex flex-row gap-3'>
            <Link to="/" className='text-brand-blue-light text-lg font-semibold px-5'>
                    <h1>About Us</h1>
                </Link>
                <Link to="/product-purchase" className='text-brand-blue-light text-lg font-semibold px-5'>
                    <h1>Products</h1>
                </Link>
                <Link to="/projects" className='text-brand-blue-light text-lg font-semibold px-5'>
                    <h1>Projects</h1>
                </Link>
            </div>
        </div>
        <CustomButton label='Get in touch' link='' />
    </div>
}