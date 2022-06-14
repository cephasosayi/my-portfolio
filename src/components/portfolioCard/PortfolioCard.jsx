import React, {useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import styles from './portfolioCard.module.css';
import arrow from '../../assets/arrow.png';



const PortfolioCard = ({ img, title, detail }) => {
    const [hover, setHover] = useState(false);

    const onHover= ()=>{
        setHover(!hover);
    }
  return (
      <Container fluid>
          <Container>
              <Card className={`${styles.card} shadow mb-2 mt-5`}
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
                          <Button variant='Link' className={`${styles.btn}`}>See More <img src={arrow} alt='' className={`${styles.icon}`} />  </Button>
                      }
                  </Card.Body>
                  
                  

              </Card>
      </Container>

                    
    </Container>
  )
}

export default PortfolioCard