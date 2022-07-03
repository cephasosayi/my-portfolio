import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import styles from './Intro.module.css';
import cephas3 from '../../assets/cep.png';
import Line from '../../assets/up.png';
import circle from '../../assets/circle.png';

import { motion } from 'framer-motion';
import Github from '@iconscout/react-unicons/icons/uil-github'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import { Link, ScrollLink } from 'react-scroll';





const Intro = () => {
  return (
      <Container fluid className={`${styles.intro} shadow-sm`}>
          <Container>
              <Row>
                  <Col lg={6} sm={12} md={6} xs={12} className={`${styles.introLeft}`}>
                  <div className={`${styles.introContent}`}>
                      <h2>I'M<span className={`${styles.text2} `}> Cephas Osayi</span></h2>
                  {/* <span> Cephas Osayi</span> */}
                  <span>Frontend Developer & WordPress Expert</span>
                  </div>                  
                <Link spy={true} to='Contact' activeClass='activeClass' smooth={true}><Button variant='outline-secondary' className={`${styles.button}`}>Contact Me</Button></Link>
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

                  <div className={`${styles.icon} ms-auto `}> <a href='https://github.com/cephasosayi' target='_blank'><Github color='white' /></a></div>
                  <div className={`${styles.icon}  ms-auto`}><a href='https://instagram.com/cephasosayi' target='_blank'><Instagram color='white'/></a></div>
                  <div className={`${styles.icon}  ms-auto`}><a href='https://twitter.com/cephasosayi' target='_blank'><Twitter color='white'/></a></div>
                  <div className={`${styles.icon}  ms-auto`}><a href='https://www.linkedin.com/in/cephasosayi/' target='_blank'><Linkedin color='white'/></a></div>

              </div>
          </Container>          
    </Container>
  )
}

export default Intro


