import React, { useEffect, useRef } from 'react';
import UsePersonValidation from './UsePersonValidation';
import UsePersons from './UsePersons';
import PersonTable from './PersonTable';
import PersonForm from './PersonForm';

const PersonContainer = () => {
  const [persons, newPerson, updateValue, submitNewUser] = UsePersons();
  const [errors, validateForm] = UsePersonValidation(newPerson);
  const nameRef = useRef(null);
  useEffect(() => {
    document.title = `Persons: ${persons.length}`;
  }, [persons]);

  return (
    <>
      <PersonTable persons={persons} />
      <PersonForm
        errors={errors}
        updateValue={updateValue}
        newPerson={newPerson}
        submitNewUser={e => {
          e.preventDefault();
          if (validateForm()) {
            submitNewUser(e);
            if (nameRef !== null && nameRef.current !== null) {
              nameRef.current.focus();
            }
          }
        }}
      />
    </>
  );
};

export default PersonContainer;
