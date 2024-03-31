import PersonalInfoForm from './PersonalInfoForm';
import BigGrayWordmark from './BigGrayWordmarkSVG';

function ProductPurchasePage() {
  return (
    <div className='bg'>
    <div className='container'>
        <div className='formContainer'>ˆ
        <div className='bigWordmark'>
          <BigGrayWordmark />
        </div>
        <PersonalInfoForm/>
    </div>
    </div>
    </div>
  );
}

export default ProductPurchasePage;
