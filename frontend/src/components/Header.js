import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const navbarStyle = {
  backgroundColor: 'lightblue',
};

const Header = ({ title }) => {
  ///const Header = (props) => {
  ///const {title} = props;
  return (
    <Navbar expand="lg" variant="light" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
