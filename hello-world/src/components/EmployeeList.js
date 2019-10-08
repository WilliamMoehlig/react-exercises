import React, { Component } from 'react';

class EmployeeList extends Component {
  componentDidMount() {
    console.log('EmployeeList mount!');
  }

  componentWillUpdate() {
    console.log('EmployeeList update');
  }

  render() {
    const props = this.props;
    return (
      <>
        <h3>Employees</h3>
        <ul>
          {props.employees.map(employee => (
            <li onClick={() => props.ToggleAvailability(employee)}>
              <p className={employee.isAvailable ? 'employee-available' : 'employee-unavailable'}>{employee.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default EmployeeList;
