import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img
            src='/inSided_Logo.png'
            height='60'
            className='d-inline-block align-top'
            alt='inSided Logo'
          />
        </Navbar.Brand>
        <div>Project by Kwabena Agyeman</div>
      </Container>
    </Navbar>
  );
};

export default Nav;
