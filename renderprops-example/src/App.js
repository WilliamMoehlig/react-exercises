import React from 'react';
import './App.css';
// import PayPalLauncher from './components/PaypalLauncher';
import PayPalButton from './components/PaypalButton';
import PayPalLink from './components/PaypalLink';
import PaypalLauncherHoc from './components/PaypalLauncherHoc';

const LauncherButton = PaypalLauncherHoc(PayPalButton);
const LauncherLink = PaypalLauncherHoc(PayPalLink);

function App() {
  return (
    <div className="App">
      <LauncherButton />
      <LauncherLink />
      {/* <PayPalLauncher>
        {launchPayPal => [<PayPalButton onClick={launchPayPal} />, <PayPalLink onClick={launchPayPal} />]}
      </PayPalLauncher> */}
    </div>
  );
}

export default App;
