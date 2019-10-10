import { useState } from 'react';

const UsePersonValidation = newPerson => {
  const [errors, setErrors] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const validateForm = () => {
    let isValid = true;
    const formErrors = { newPerson: {} };
    if (newPerson.name.length < 3) {
      isValid = false;
      formErrors.newPerson.name = 'Name must be at least 3 characters';
    }

    if (!emailRegex.test(newPerson.email)) {
      isValid = false;
      formErrors.newPerson.email = 'Invalid email';
    }

    if (newPerson.age < 18) {
      isValid = false;
      formErrors.newPerson.age = 'Age cannot be smaller than 18';
    }

    if (newPerson.birthday === '') {
      isValid = false;
      formErrors.newPerson.birthday = 'You left the field blank';
    }

    setErrors(formErrors);

    return isValid;
  };

  return [errors, validateForm];
};

export default UsePersonValidation;
