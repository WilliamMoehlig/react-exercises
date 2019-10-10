import React from 'react';

const ButtonWithColor = (WrappedComponent, color) => {
  const WithSquare = props => {
    return <WrappedComponent {...props} color={color} />;
  };
  return WithSquare;
};

export default ButtonWithColor;
