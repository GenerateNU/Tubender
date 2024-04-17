import CaseStudy from '../images/case_study.svg'
import GradientBackground from '../images/gradient_background.png'
import OurProjects from '../images/our_projects.svg'
import Navbar from './Navbar'
import Footer from './Footer'
import MailingList from './MailingList'

function Header() {
    return (
        <div className='relative flex justify-center w-full min-h-[75vh]'>
            <img src={GradientBackground} alt='Gradient Background' className='absolute w-full h-full' />
            <div className='absolute w-full pt-14 px-9'>
                <Navbar />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={OurProjects} alt='Our Projects' className='absolute pt-32'/>
            </div>
        </div>
    );
}

function Content() {
    return (
        <div className=' flex justify-center py-10 pb-32'>
            <img src={CaseStudy} alt='Case Study' />
        </div>
    )
}

export default function ProjectsPage() {
    return (
        <div className=' flex flex-col'>
            <Header />
            <Content />
            <MailingList />
            <Footer />
        </div>
    )
}