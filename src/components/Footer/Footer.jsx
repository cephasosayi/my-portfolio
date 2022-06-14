import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
  return (
      <Container fluid className={`${styles.footer}`}>
          <Container>
              <Row>
                  <Col className={`${styles.text}`} lg={12} sm={12} xs={12} md={12}>
                        <p className='me-auto ms-auto'>Thank you for your Time. </p>                                        
                  </Col>
              </Row>
          </Container>
          
    </Container>
  )
}

export default Footer