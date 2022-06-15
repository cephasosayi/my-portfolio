import React from 'react'
import { Container, Col } from 'react-bootstrap'
import styles from './Experiences.module.css';
import Experience from '../Experience/Experience'

const Experiences = () => {
  return (
    <Container fluid className={`${styles.experience}`}>
          <Container>
       <div className={`${styles.eTitle}`}>
              <h1 className={`${styles.title}`}>
              Experiences
              </h1>           
        </div> 
        <Col className={`${styles.col} me-auto me-auto`}>
          <div className={`${styles.worksc}`}>
        <Experience
          year='2021'
          company='Easydrop Web Services'
          jobTitle='Frontend Developer'
          location='Abuja, Nigeria'
          desc='                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est
          laborum.'
            />
          </div>
          
          <div className={`${styles.worksec}`}>
            <Experience
          year='2020'
          company='Ullweb Technology'
          jobTitle='Frontend Developer'
          location='Abuja, Nigeria'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est
          laborum.'
            />
          </div>
          </Col>
          </Container>          
    </Container>
  )
}

export default Experiences