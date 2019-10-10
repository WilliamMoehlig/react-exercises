import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const PersonTable = props => {
  const { persons } = props;
  useEffect(() => {
    console.log('PersonTable did update');
  }, [persons]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {Object.getOwnPropertyNames(persons[0]).map(element => {
              return (
                <th key={element} style={{ textTransform: 'capitalize' }}>
                  {element}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {persons.map(person => {
            return (
              <tr key={person.id}>
                {Object.values(person).map(p => {
                  if (typeof p === 'boolean') {
                    return (
                      <td key={`${p}${person.id}`}>
                        <span className={p ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}></span>
                      </td>
                    );
                  }
                  return <td key={`${p}${person.id}`}>{p}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

PersonTable.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      birthday: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
      married: PropTypes.bool,
    }),
  ),
};

export default PersonTable;
