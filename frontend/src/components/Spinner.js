import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';

const Spinner = () => {
  const spinnerStyle = {
    position: 'fixed',
    top: 'calc(50% - 1rem)',
    left: 'calc(50% - 1rem)',
    transform: 'translate(-50% -50%)',
  };
  return <Loader style={spinnerStyle} animation="border" />;
};

export default Spinner;
