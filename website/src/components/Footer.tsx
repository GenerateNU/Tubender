import Twitter from '../images/twitter.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Logo from '../images/logo.svg'

export default function Footer() {
    return <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between p-12 lg:p-24 gap-32 text-brand-white bg-brand-blue-dark bg-opacity-85 bg-blend-darken bg-splash-background bg-cover'>
        <div className=' flex flex-col gap-10'>
            <div className=' flex flex-row gap-4'>
                <img src={Logo} alt="" />
                <h1 className=' text-5xl font-semibold'>tubender</h1>
            </div>
            <div className='flex flex-row gap-6'>
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div>
            <h3 className=' text-2xl font-semibold'>Company</h3>
            <ul className=' flex flex-col gap-3 pt-6'>
                <li className=' text-lg text-off-white'><a href="">About us</a></li>
                <li className=' text-lg text-off-white'><a href="">Brand values</a></li>
                <li className=' text-lg text-off-white'><a href="">Privacy policy</a></li>
                <li className=' text-lg text-off-white'><a href="">Terms & conditions</a></li>
            </ul>
        </div>
        <div>
            <h3 className=' text-2xl font-semibold'>Products</h3>
            <ul className=' flex flex-col gap-3 pt-6'>
                <li className=' text-lg text-off-white'><a href="">Machinery</a></li>
                <li className=' text-lg text-off-white'><a href="">Software</a></li>
                <li className=' text-lg text-off-white'><a href="">Web application</a></li>
                <li className=' text-lg text-off-white'><a href="">Testimonials</a></li>
                <li className=' text-lg text-off-white'><a href="">Competitors</a></li>
            </ul>
        </div>
        <div>
            <h3 className=' text-2xl font-semibold'>Resources</h3>
            <ul className=' flex flex-col gap-3 pt-6'>
                <li className=' text-lg text-off-white'><a href="">Download Tubender app</a></li>
                <li className=' text-lg text-off-white'><a href="">Download Tubender software</a></li>
                <li className=' text-lg text-off-white'><a href="">Download Tubender manual</a></li>
            </ul>
        </div>
    </div>
}