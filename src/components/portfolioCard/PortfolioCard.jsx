import React, {useState } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap';
import styles from './portfolioCard.module.css';
import arrow from '../../assets/arrow.png';
import { ScrollLink } from 'react-scroll';



const PortfolioCard = ({ img, title, detail, link }) => {
    const [hover, setHover] = useState(false);

    const onHover= ()=>{
        setHover(!hover);
    }
  return (
      <Container fluid>
          <Container className={`${styles.pCard}`}>
              <Col className=''>
              <Card className={`${styles.card} shadow  mb-2 mt-4`}
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
              >
                  <div >
                      <Card.Img src={img} alt='' className={`${styles.img}`} />
                  </div>
                  
                      <Card.Body className={`${styles.body} ms-auto me-auto`}>
                          <Card.Title className={`${styles.title}`}>{title}</Card.Title>
                      <Card.Text className={`${styles.text}`}>{detail}</Card.Text>
                          {hover && 
                              <a href={link} target='_blank'>
                                  <Button variant='Link' className={`${styles.btn} mt-lg-2`}>Visit </Button>
                              </a>
                              
                      }
                  </Card.Body>
                  
                  

                  </Card>
                  </Col>
      </Container>

                    
    </Container>
  )
}

export default PortfolioCard