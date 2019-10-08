import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }

  _handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <>
        <h1>Hello {name}</h1>
        <input type="text" name="txtName" value={name} onChange={e => this._handleChange(e)}></input>
      </>
    );
  }
}

export default HelloWorld;
