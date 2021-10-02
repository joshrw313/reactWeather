import PayPalButton from 'react-paypal-smart-button'
import { keys }    from '../config/keys';

function DonateButton() {
  return (
      <PayPalButton 
        price={1}
        description="One Dollar Donation"
        clientId= {keys.paypalClientId}
        currency="USD"
        paySubmit={() => console.log('payment successful')}
       />
  );
}

export default DonateButton;