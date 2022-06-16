import React from 'react'
import { Button, Container, Nav, Navbar, Image } from 'react-bootstrap';
import styles from './Header.module.css';
import logo from '../../assets/logo1.png';
import resume from '../../assets/resume.pdf';

import { Link } from 'react-scroll';
const Header = () => {
  return (
    <>
      <Navbar expand='lg' className={`${styles.navbar}`}>
        <Container>
          <Navbar.Brand href='#home' className=' text-white fw-bold fs-2 me-auto ms-0'>
            {/* <img src={logo} alt='' className={`${styles.logo}`} /> */}
            C.O
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbarscroll' className={`${styles.toggle}`} />
          <Navbar.Collapse id='navbarscroll' className={`${styles.navscroll}`}>
            <Nav className={`me-auto ms-auto ${styles.nav}`}>
              <Link spy={true} to='About' smooth={true} activeClass='activeClass'>
                 <Nav.Link className={`${styles.navLink}`}>About</Nav.Link>
              </Link>
              <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>              
                <Nav.Link className={`${styles.navLink}`}>Portfolio</Nav.Link>
              </Link>
              <Link spy={true} to='Skills' smooth={true} activeClass='activeClass'>
                <Nav.Link className={`${styles.navLink}`}>Skills</Nav.Link>
              </Link>
              <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                <Nav.Link className={`${styles.navLink}`}>Experience</Nav.Link>
              </Link>
              <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                <Nav.Link className={`${styles.navLink}`}>Contact</Nav.Link>
              </Link>
            </Nav>
            <div className="ms-auto">
            <a href={resume} download>
                <Button className='button' variant='primary'>Download CV</Button>
            </a>
              </div>

          </Navbar.Collapse>
        </Container>
        

      </Navbar>
      
    </>
  )
}

export default Header