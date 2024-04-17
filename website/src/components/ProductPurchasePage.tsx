import PersonalInfoForm from '../PersonalInfoForm';
import BigGrayWordmark from '../BigGrayWordmarkSVG';
import Footer from './Footer';
import MailingList from './MailingList';

function ProductPurchasePage() {
  return (
    <div>
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
        <div className='horizontal-container bg-white text-left-align'>
          <div className='textbox-col'>
            <div className='gray-rounded-rectangle'>
              <h2 className='text-header'>Complex Bending</h2>
              <p className='text-par'>Because Tubender is free form, it can create complex shapes using software. The user can also develop CAD schematics to create a custom pipe to bend. This offers a much wider variety of possibilities, one that would not be possible with a regular manual bender.</p>
            </div>
            <div className='gray-rounded-rectangle'>
              <h2 className='text-header'>Automatic Bending</h2>
              <p className='text-par'>Tubender is controlled by software, which allows the user to simply set out the required steps for bending, and press play. There is no manual labor when creating the pipes. This also allows for pipes to be repeated, so if a user needed many of a certain shape, it would be easy to reuse old designs. This drastically increases Tubender’s accessibility and reduces the physical requirements of creating bent tubes.</p>
            </div>
          </div>
          <div className='textbox-col'>
            <div className='gray-rounded-rectangle'>
              <h2 className='text-header'>Portable</h2>
              <p className='text-par'>This machine is incredibly large, around 2040 feet in length, and weighs about 2 tons. It is not portable or easy to store. Tubender however, is very easy to move and store, with a max length of about 5 feet and weight under 400 pounds. This is another key feature that opens up the accessibility of Tubender, making it a more attractive option for those looking for a tube bending solution.</p>
          </div>
          <div className='gray-rounded-rectangle'>
            <h2 className='text-header'>Affordability</h2>
            <p className='text-par'>This machine comes in at around $100,000, which is an incredible request for smaller businesses and hobbyists. When creating Tubender, it was incredibly important to keep under budget, to show that a free form tube bender could be built for a fraction of the cost of the other. This also opens the customer base drastically, as there is a much smaller investment needed to purchase Tubender’s machine.</p>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
  );
}

export default ProductPurchasePage;
