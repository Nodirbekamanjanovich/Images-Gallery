import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  ///const Header = (props) => {
  ///const {title} = props;
  return (
    <Navbar expand="lg" variant="light" style={navbarStyle}>
      <Container>
        <Logo style={{ maxWidth: '14rem', maxHeight: '2.5rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
