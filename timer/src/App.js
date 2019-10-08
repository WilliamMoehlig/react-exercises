import React, { Component } from 'react';
import KitchenTimer from './components/KitchenTimer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerVisibility: true,
      interval: 1000,
    };
  }

  _ToggleTimer = () => {
    this.state.timerVisibility
      ? this.setState({
          timerVisibility: false,
        })
      : this.setState({
          timerVisibility: true,
        });
  };

  _renderTimer = () => {
    return this.state.timerVisibility ? <KitchenTimer interval={this.state.interval} /> : '';
  };

  _changeInterval = interval => {
    this.setState({
      interval: interval,
    });
  };

  render() {
    return (
      <>
        <button type="button" onClick={this._ToggleTimer}>
          Show timer
        </button>
        <button type="button" onClick={() => this._changeInterval(2000)}>
          Manipulate Timer
        </button>
        <div className="App">{this._renderTimer()}</div>
      </>
    );
  }
}

export default App;
