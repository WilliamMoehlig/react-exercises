import React, { Component } from 'react';

class KitchenTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
    this.timer = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.interval === this.props.interval) {
      return false;
    }
    clearInterval(this.timer);
    this.setState({
      secondsElapsed: 0,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _SetTimer = timeout => {
    this.timer = setInterval(() => {
      console.log(this.state.secondsElapsed + timeout / 1000);
      this.setState({
        secondsElapsed: this.state.secondsElapsed + timeout / 1000,
      });
    }, timeout);
  };

  _StopTimer = () => {
    clearInterval(this.timer);
  };

  _ClearTimer = () => {
    this.setState({
      secondsElapsed: 0,
    });
  };

  render() {
    console.log('render');
    return (
      <>
        <div className="timer">
          <h1>{this.state.secondsElapsed}</h1>
          <button type="button" onClick={() => this._SetTimer(this.props.interval)}>
            Start
          </button>
          <button type="button" onClick={this._StopTimer}>
            Stop
          </button>
          <button type="button" onClick={this._ClearTimer}>
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default KitchenTimer;
