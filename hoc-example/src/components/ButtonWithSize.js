import React from 'react';

const ButtonWithSize = (WrappedComponent, size) => {
  const WithSquare = props => {
    return <WrappedComponent {...props} size={size} />;
  };
  return WithSquare;
};

export default ButtonWithSize;
