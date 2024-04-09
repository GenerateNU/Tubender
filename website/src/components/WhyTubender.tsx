import Anvil from '../images/anvil_close_bg.svg'
import Complex from '../images/complex_symbol.svg'
import Automatic from '../images/automatic_symbol.svg'
import Portable from '../images/portable_symbol.svg'
import Affordable from '../images/affordable_symbol.svg'
import GetInTouch from './GetInTouch';
import Navbar from './Navbar'

export default function WhyTubender() {
    const InfoCell = (props: { symbol: string, title: string, body: string }) => {
        return <div className=' flex flex-col gap-5'>
            <div className=' bg-brand-blue-baby rounded-full w-24 h-24 flex justify-center items-center'>
                <img src={props.symbol} alt="" className=' w-16 h-16' />
            </div>
            <h2 className=' text-2xl pb-6 font-medium text-brand-blue-dark'>{props.title}</h2>
            <p className=' text-brand-blue text-lg'>{props.body}</p>
            <a href="" className=' text-sm text-brand-blue-temp'>Learn more →</a>
        </div>
    }

    return <div className=' flex flex-col bg-off-white'>
        <div className=' pt-14 px-9 drop-shadow-md'>
            <Navbar />
        </div>
        <div className=" flex flex-col p-8 md:px-40 py-32 gap-28 " id='why'>
            <div className=" flex flex-row flex-wrap gap-32 justify-between">
                <div className=' w-full xl:w-1/3 flex flex-col gap-11'>
                    <h2 className=' text-5xl font-semibold text-brand-blue-dark'>What we do</h2>
                    <p className=' text-2xl text-brand-blue'>Our mission at Tubender is to democratize manufacturing by making automatic metal tube bending machines smaller, more affordable, and easier to use. We empower makers of all experience levels to create incredible products with precision and accessibility, ensuring that technical expertise is never a barrier.</p>
                    <GetInTouch label='Our projects' link='' />
                </div>
                <div className=' grid grid-cols-2 w-full xl:w-1/2 gap-28'>
                    <InfoCell symbol={Complex} title="Complex" body="Tubender allows complex shapes via software-controlled freeform bending with CAD." />
                    <InfoCell symbol={Automatic} title="Automatic" body="Automated bending streamlines production, reducing labor with software control." />
                    <InfoCell symbol={Portable} title="Portable" body="Our portability empowers users to bend tubes anywhere, optimizing workspace flexibility and convenience." />
                    <InfoCell symbol={Affordable} title="Affordable" body="Tubender's affordability democratizes tube bending, making CNC technology accessible to small businesses and hobbyists." />

                </div>
            </div>
            <div className=" flex flex-row flex-wrap xl:flex-nowrap gap-36">
                <img src={Anvil} className=" w-full h-full rounded-2xl" />
                <div className=" flex flex-col gap-11">
                    <h2 className=' text-5xl font-semibold'>Why Tubender?</h2>
                    <p className=' text-lg text-brand-blue'>Tubender offers an innovative solution for precision metal tube bending, catering to small businesses, contractors, and hobbyists. Our portable CNC machines eliminate the need for specialized tooling, providing unparalleled flexibility at a fraction of the cost. Tubender empowers workshops to produce custom tubes in-house.</p>
                    <GetInTouch label='View product' link='' />
                </div>
            </div>
        </div>
    </div>
}