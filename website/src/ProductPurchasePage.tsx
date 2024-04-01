import PersonalInfoForm from './PersonalInfoForm';
import BigGrayWordmark from './BigGrayWordmarkSVG';

function ProductPurchasePage() {
  return (
    <div className='bgAnvil'>
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
