import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './About.module.css';
import line from '../../assets/down.png';


const About = () => {
  return (
      <Container fluid className={`${styles.about}`} id='About'>
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
                My name is Cephas Osayi.
                 I am a frontend developer based in Nigeria, focused on creating scalable frontend products with great user experiences.. 
                      </p>

                      </div>
                  </Col>
                </Row>
          </Container>          
    </Container>
  )
}

export default About