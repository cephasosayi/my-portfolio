import React, {useState } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap';
import styles from './portfolioCard.module.css';
import arrow from '../../assets/arrow.png';
import { ScrollLink } from 'react-scroll';
import Github from '@iconscout/react-unicons/icons/uil-github'




const PortfolioCard = ({ img, title, github, link }) => {
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
                          <Card.Text className={`${styles.text}`}>
                              <div className='d-flex justify-content-between  w-100 d-flex-lg-row'>
                                  
                              <div  className='me-3 mt-sm-3 mt-lg-0'><a href={github} target='_blank'>
                                  <Button variant='Link' className={`mt-lg-0 `}>
                                          <Github color='black' size={35} /> 
                                  </Button>

                                  </a>
                                  </div>
                                  <div>
                                  <a href={link} target='_blank'>
                                  <Button variant='Link' className={`${styles.btn} mt-lg-2 mt-sm-2`}>Visit Site </Button>
                              </a>
                                  </div>
                                  
                              </div>
                          </Card.Text>
                          {/* {hover && 
                              <a href={link} target='_blank'>
                                  <Button variant='Link' className={`${styles.btn} mt-lg-2`}>Visit </Button>
                              </a>
                              
                      } */}
                  </Card.Body>
                  
                  

                  </Card>
                  </Col>
      </Container>

                    
    </Container>
  )
}

export default PortfolioCard