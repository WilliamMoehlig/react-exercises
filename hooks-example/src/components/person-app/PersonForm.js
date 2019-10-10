import React, { useRef, useEffect } from 'react';
import GenericForm from './GenericForm';
import PropTypes from 'prop-types';

const PersonForm = props => {
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef != null && nameRef.current !== null) {
      nameRef.current.focus();
    }
  }, [props.newPerson.name]);

  return (
    <>
      <form>
        <GenericForm
          type="text"
          name="name"
          value={props.newPerson.name}
          update={props.updateValue}
          reference={nameRef}
        />
        <div style={{ color: 'red', FontWeight: 'bold' }}>
          {props.errors && props.errors.newPerson && props.errors.newPerson.name}
        </div>
        <GenericForm type="email" name="email" value={props.newPerson.email} update={props.updateValue} />
        <div style={{ color: 'red', FontWeight: 'bold' }}>
          {props.errors && props.errors.newPerson && props.errors.newPerson.email}
        </div>
        <GenericForm type="number" name="age" value={props.newPerson.age} update={props.updateValue} />
        <div style={{ color: 'red', FontWeight: 'bold' }}>
          {props.errors && props.errors.newPerson && props.errors.newPerson.age}
        </div>
        <GenericForm type="date" name="birthday" value={props.newPerson.birthday} update={props.updateValue} />
        <div style={{ color: 'red', FontWeight: 'bold' }}>
          {props.errors && props.errors.newPerson && props.errors.newPerson.birthday}
        </div>
        <div className="form-group">
          <input type="checkbox" name="married" onChange={e => props.updateValue('married', e.target.checked)} />
          Married
        </div>
        <button type="submit" className="btn btn-default" onClick={props.submitNewUser}>
          Submit
        </button>
      </form>
    </>
  );
};

PersonForm.propTypes = {
  newPerson: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    married: PropTypes.bool,
  }).isRequired,
};

export default PersonForm;
