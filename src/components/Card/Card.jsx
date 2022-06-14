import React from 'react'
import { Card, Container } from 'react-bootstrap';
import styles from './Card.module.css';



const Cards = ({skill, icon }) => {
  return (
      <Container fluid>
          <Container>
              <Card className={`${styles.card} shadow-md`}>
                  <div className={`${styles.icon}`}>
                      <Card.Img src={icon} alt='' />
                  </div>
                  <Card.Body className={`${styles.text} ms-auto me-auto`}>
                      <Card.Title className={`${styles.title}`}>{ skill}</Card.Title>
                  </Card.Body>

              </Card>
      </Container>

                    
    </Container>
  )
}

export default Cards