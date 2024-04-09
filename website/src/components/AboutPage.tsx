import SplashScreen from './SplashScreen';
import WhyTubender from './WhyTubender';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import MailingList from './MailingList';

export default function AboutPage() {
    return <div className=' w-full h-full'>
        <SplashScreen />
        <WhyTubender />
        <HowItWorks />
        <MailingList />
        <Footer />
    </div>
}