import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './About.module.css';
import line from '../../assets/down.png';


const About = () => {
  return (
      <Container fluid className={`${styles.about}`}>
          <Container >
              <Row>
                  <Col className={`styles.aboutcol`}>
                      <h1 className={`${styles.abouttitle}`}>About</h1>
                      <div className={`${styles.line}`}>
                          <div className={`${styles.lineImg}`}>
                              <img src={line} alt='' />
                        </div>
                      </div>
                      <div className={`${styles.abouttext}`}>
                          <p className={`${styles.text}`}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                              ea commodo consequat. Duis aute irure dolor in reprehenderit
                              in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id est
                              laborum.
                      </p>

                      </div>
                  </Col>
                </Row>
          </Container>          
    </Container>
  )
}

export default About