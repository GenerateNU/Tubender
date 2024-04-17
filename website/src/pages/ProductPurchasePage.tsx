import PersonalInfoForm from '../components/PersonalInfoForm';
import BigGrayWordmark from '../components/BigGrayWordmarkSVG';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Affordable from '../images/affordable_feature.svg'
import Automatic from '../images/automatic_feature.svg'
import Complex from '../images/complex_feature.svg'
import Portable from '../images/portable_feature.svg'


function ProductPurchasePage() {
  return (
    <div>
      <div className='bgAnvil'>
      <div className=' pt-14 px-9 drop-shadow-md'>
            <Navbar />
        </div>
        <div className='container'>
          <div className='formContainer'>ˆ
            <div className='bigWordmark'>
              <BigGrayWordmark />
            </div>
              <PersonalInfoForm/>
          </div>
        </div>
      </div>
      <div className='bg-off-white py-10 flex flex-col items-center'>
  <h1 className='mb-8 text-4xl font-bold'>Our Main Features</h1>
    <div className='flex flex-col items-center'>
      <img src={Complex} alt="" className='my-4'/>
      <img src={Automatic} alt="" className='my-4'/>
      <img src={Portable} alt="" className='my-4'/>
      <img src={Affordable} alt="" className='my-4'/>
    </div>
    </div>
        <Footer/>
  </div>
  );
}

export default ProductPurchasePage;
