import React, { Component } from 'react';

class PayPalLauncher extends Component {
  launchPayPal = () => {
    alert('Pay with payPal');
  };

  render() {
    return this.props.children(this.launchPayPal);
  }
}

export default PayPalLauncher;
