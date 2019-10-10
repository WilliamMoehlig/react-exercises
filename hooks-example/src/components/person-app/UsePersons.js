import { useState } from 'react';

const UsePersons = () => {
  const [persons, setPersons] = useState([
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
  ]);

  const [newPerson, setNewPerson] = useState({
    id: null,
    name: '',
    email: '',
    age: 0,
    birthday: '',
    married: false,
  });

  const _GenerateUserId = users => {
    if (users.length > 0) {
      var lastUser = users[users.length - 1];
      return lastUser.id + 1;
    }
    return 1;
  };

  const UpdateValue = (entity, value) => {
    const updatedPerson = { ...newPerson };
    if (entity === 'age') {
      updatedPerson[entity] = Number(value);
    } else {
      updatedPerson[entity] = value;
    }

    setNewPerson(updatedPerson);
  };

  const submitNewUser = e => {
    newPerson.id = _GenerateUserId(persons);

    setPersons(persons.concat(newPerson));
    setNewPerson({
      id: null,
      name: '',
      email: '',
      age: 0,
      birthday: new Date(),
      married: false,
    });
  };

  return [persons, newPerson, UpdateValue, submitNewUser];
};

export default UsePersons;
