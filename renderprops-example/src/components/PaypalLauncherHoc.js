import React, { Component } from 'react';

const PaypalLauncherHoc = WrappedComponent =>
  class PaypalLauncher extends Component {
    launchPayPal = () => {
      alert('Pay with payPal');
    };
    render() {
      return <WrappedComponent onClick={this.launchPayPal} />;
    }
  };

export default PaypalLauncherHoc;
