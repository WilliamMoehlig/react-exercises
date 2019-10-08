import React, { Component } from 'react';
import PersonTable from './PersonTable';
import PersonForm from './PersonForm';

class PersonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: 'Frederik',
          email: 'frederik.bouillon@euri.com',
          age: 28,
          birthday: '16/04/1987',
          married: false,
        },
        {
          id: 2,
          name: 'Peter',
          email: 'peter.cosemans@euri.com',
          age: 51,
          birthday: '06/10/1964',
          married: true,
        },
      ],
      newPerson: {
        id: null,
        name: '',
        email: '',
        age: 0,
        birthday: '',
        married: false,
      },
      errors: {},
    };
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    document.title = `Persons: ${this.state.persons.length}`;
    this.nameRef.current._FocusName();
  }

  componentDidUpdate(PrevState) {
    if (this.state.persons !== PrevState.persons) {
      document.title = `Persons: ${this.state.persons.length}`;
    }
  }

  _validUserInput() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let isValid = true;
    const errors = {
      newPerson: {},
    };

    if (this.state.newPerson.name.length < 3) {
      isValid = false;
      errors.newPerson.name = 'Name must be at least 3 characters';
    }

    if (!emailRegex.test(this.state.newPerson.email)) {
      isValid = false;
      errors.newPerson.email = 'Invalid email';
    }

    if (this.state.newPerson.age < 18) {
      isValid = false;
      errors.newPerson.age = 'Age cannot be smaller than 18';
    }

    if (this.state.newPerson.birthday === '') {
      isValid = false;
      errors.newPerson.birthday = 'You left the field blank';
    }

    this.setState({
      errors,
    });

    return isValid;
  }

  _UpdateValue = (entity, value) => {
    const person = { ...this.state.newPerson };
    if (entity === 'age') {
      person[entity] = Number(value);
    } else {
      person[entity] = value;
    }

    this.setState({ newPerson: person });
  };

  _submitNewUser = e => {
    e.preventDefault();
    const { persons, newPerson } = this.state;
    newPerson.id = this._generateUserId(persons);

    if (this._validUserInput()) {
      this.setState({
        persons: persons.concat(newPerson),
        newPerson: {
          id: null,
          name: '',
          email: '',
          age: 0,
          birthday: new Date(),
          married: false,
        },
      });
    }

    this.nameRef.current._FocusName();
  };

  _generateUserId(users) {
    if (users.length > 0) {
      var lastUser = users[users.length - 1];
      return lastUser.id + 1;
    }
    return 1;
  }

  render() {
    const { persons, newPerson, errors } = this.state;
    return (
      <>
        <PersonTable persons={persons} />
        <PersonForm
          errors={errors}
          updateValue={this._UpdateValue}
          newPerson={newPerson}
          submitNewUser={this._submitNewUser}
          ref={this.nameRef}
        />
      </>
    );
  }
}

export default PersonContainer;
