import SplashScreen from '../components/SplashScreen';
import WhyTubender from '../components/WhyTubender';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import MailingList from '../components/MailingList';

export default function MainPage() {
    return <div className=' w-full h-full'>
        <SplashScreen />
        <WhyTubender />
        <HowItWorks />
        <MailingList />
        <Footer />
    </div>
}