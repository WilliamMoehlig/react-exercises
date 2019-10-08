import React from 'react';
import PropTypes from 'prop-types';

function GenericForm({ type, name, value, update }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        placeholder={`Enter ${name}`}
        value={value === 0 ? '' : value}
        onChange={e => update(name, e.target.value)}
      />
    </div>
  );
}

GenericForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  update: PropTypes.func.isRequired,
};

export default GenericForm;
