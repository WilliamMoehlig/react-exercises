import React from 'react';
import { node } from 'prop-types';
import AlertButton from './AlertButton';

function UserCounterBadge({ children }) {
  return (
    <AlertButton variant="primary" event={() => {}}>
      Users
      <span role="note" className="badge badge-light">
        {children}
      </span>
    </AlertButton>
  );
}

UserCounterBadge.propTypes = {
  children: node.isRequired,
};

export default UserCounterBadge;
