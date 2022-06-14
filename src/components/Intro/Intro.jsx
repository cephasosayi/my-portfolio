import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import styles from './Intro.module.css';
import cephas3 from '../../assets/cep.png';
import Line from '../../assets/up.png';
import circle from '../../assets/circle.png';


import Github from '@iconscout/react-unicons/icons/uil-github'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'






const Intro = () => {
  return (
      <Container fluid className={`${styles.intro} shadow-sm`}>
          <Container>
              <Row>
              <Col lg={6} sm={12} md={6} xs={12} className={`${styles.introLeft}`}>
                  <div className={`${styles.introContent}`}>
                      <h2>I'M  <span className={`${styles.text2} `}>  Cephas Osayi</span></h2>
                  {/* <span> Cephas Osayi</span> */}
                  <span>Frontend Developer & WordPress Expert</span>
                  </div>                  
                  <Button variant='outline-secondary' className={`${styles.button}`}>Contact Me</Button>
              </Col>
              <Col lg={6} sm={12} md={6} xs={12} className={`${styles.introRight}`}>
                  <Image src={cephas3} alt='' className={`${styles.img} img-fluid`}/>
                  </Col>
              </Row>
              <div className={`${styles.maincircle}`}>
                  <div className={`${styles.circle} shadow-sm`}>
                      <img src={circle} alt='' className={`${styles.cimg} img-fluid `} />
              </div>

              </div>
              <div className={`${styles.icons} d-flex ms-auto`} >
                  <div className={`${styles.ico} ms-auto `}><img src={Line} alt='' objectfit='contain' /></div>

                  <div className={`${styles.icon} ms-auto `}><Github color='white' /></div>
                  <div className={`${styles.icon}  ms-auto`}><Instagram color='white'/></div>
                  <div className={`${styles.icon}  ms-auto`}><Twitter color='white'/></div>
                  <div className={`${styles.icon}  ms-auto`}><Linkedin color='white'/></div>

              </div>
          </Container>          
    </Container>
  )
}

export default Intro


