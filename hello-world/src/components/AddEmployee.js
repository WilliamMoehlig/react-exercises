import React, { Component } from 'react';

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmployee: undefined,
    };

    this.textInput = React.createRef();
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

  _focusTextInput = () => {
    this.textInput.current.focus();
  };

  render() {
    const props = this.props;
    return (
      <>
        <h3>Add new employee</h3>
        <input
          type="text"
          value={this.state.newEmployee}
          onChange={this._onHandleChangeEmployee}
          ref={this.textInput}
        />
        <button onClick={() => props.AddNewEmployee(this.state.newEmployee)}>Add new</button>
        <button onClick={this._focusTextInput}>Hocus Focus Pats</button>
        <div style={{ color: 'yellow' }}>{props.errors.newEmployee}</div>
      </>
    );
  }
}

export default AddEmployee;
