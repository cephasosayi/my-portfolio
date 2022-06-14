import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className={`${styles.navbar}`}>
        <Container>
          <Navbar.Brand className={`${styles.brand}`} >Cephas</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarscroll' className={`${styles.toggle}`} />
          <Navbar.Collapse id='navbarscroll' className={`${styles.navscroll}`}>
            <Nav className={`ms-auto me-auto ${styles.nav}`}>
              <Nav.Link className={`${styles.navLink}`}>About</Nav.Link>
              <Nav.Link className={`${styles.navLink}`}>Portfolio</Nav.Link>
              <Nav.Link className={`${styles.navLink}`}>Skills</Nav.Link>
              <Nav.Link className={`${styles.navLink}`}>Contact</Nav.Link>
            </Nav>
            <div className="ms-auto">
                <Button className='button' variant='primary' download>Download CV</Button>
              </div>

          </Navbar.Collapse>
        </Container>
        

      </Navbar>
      
    </>
  )
}

export default Header