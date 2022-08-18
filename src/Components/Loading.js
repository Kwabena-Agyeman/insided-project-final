import React from 'react';
import { Container } from 'react-bootstrap';

export const Loading = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center my-5'>
      <div className='lds-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};
