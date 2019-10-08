import React, { Component } from 'react';

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmployee: undefined,
    };
  }

  componentDidMount() {
    console.log('AddEmployee mount!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('AddEmployee update', prevProps, prevState);
  }

  _onHandleChangeEmployee = e => {
    this.setState({ newEmployee: e.target.value });
  };

  render() {
    const props = this.props;
    return (
      <>
        <h3>Add new employee</h3>
        <input type="text" value={this.state.newEmployee} onChange={this._onHandleChangeEmployee} />
        <button onClick={() => props.AddNewEmployee(this.state.newEmployee)}>Add new</button>
        <div style={{ color: 'red' }}>{props.errors.newEmployee}</div>
      </>
    );
  }
}

export default AddEmployee;
