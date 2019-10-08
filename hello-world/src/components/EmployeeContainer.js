import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Euricom',
      employees: [
        { name: 'Peter', isAvailable: true },
        { name: 'Niels', isAvailable: false },
        { name: 'Kevin', isAvailable: true },
      ],
      newEmployee: '',
      errors: {},
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log('EmployeeContainer mount!');
    this.textInput.current._focusTextInput();
  }

  _inputValid = newEmployee => {
    let isValid = true;
    const errors = {};

    if (newEmployee.length < 3) {
      isValid = false;
      errors.newEmployee = 'New employee must be at least 3 characters';
    }

    this.setState({
      errors,
    });

    return isValid;
  };

  _addNewEmployee = newEmployee => {
    if (this._inputValid(newEmployee)) {
      const { employees } = this.state;
      this.setState({ employees: employees.concat({ name: newEmployee, isAvailable: true }), newEmployee: '' });
    }
  };

  _toggleAvailability = employee => {
    this.setState({
      employees: this.state.employees.map(emp => {
        if (employee.name === emp.name) {
          emp.isAvailable = !emp.isAvailable;
        }
        return emp;
      }),
    });
  };

  render() {
    const { company, employees, newEmployee, errors } = this.state;
    return (
      <>
        <h1>{company}</h1>
        <EmployeeList employees={employees} ToggleAvailability={this._toggleAvailability} />
        <AddEmployee
          newEmployee={newEmployee}
          AddNewEmployee={this._addNewEmployee}
          errors={errors}
          ref={this.textInput}
        />
      </>
    );
  }
}

export default EmployeeContainer;
