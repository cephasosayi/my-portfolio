import React from 'react'
import { Button, Container, Nav, Navbar, Image } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className={`${styles.navbar} p-0`}>
        <Container>
          <Navbar.Brand href='#home' className=' text-white fw-bold fs-3 me-auto ms-0'>
            {/* <img src={logo} alt='' className={`${styles.logo}`} /> */}
            Cephas
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbarscroll' className={`${styles.toggle}`} />
          <Navbar.Collapse id='navbarscroll' className={`${styles.navscroll}`}>
            <Nav className={`me-auto ms-auto ${styles.nav}`}>
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