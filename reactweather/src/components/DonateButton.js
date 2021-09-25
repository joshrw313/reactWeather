import PayPalButton from 'react-paypal-smart-button'

function DonateButton() {
  return (
      <PayPalButton 
        price={1}
        description="One Dollar Donation"
        clientId=""
        currency="USD"
        paySubmit={() => console.log('payment successful')}
       />
  );
}

export default DonateButton;