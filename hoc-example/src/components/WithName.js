import React from 'react';

const withName = WrappedComponent => {
  const WithName = props => {
    return <WrappedComponent {...props} />;
  };
  return WithName;
};

export default withName;
