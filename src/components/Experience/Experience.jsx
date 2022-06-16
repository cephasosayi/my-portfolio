import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Experience.module.css';
import round from '../../assets/round.png';

const Experience = ({ year, desc, location, jobTitle, company}) => {
  return (
      <Container fluid id='Experience'>
        <Container>
          <Row className={`${styles.row}`}>
            <Col className={`${styles.row}`}>
           
            <div className={`${styles.eLeft}`}>
              <span className={`${styles.dates} shadow-md`}>
                {year}
              </span>
              <div className={`${styles.icons}`}>
                <img src={round} alt='' className={`${styles.round}`}/>
              </div>
              <div className={`${styles.border}`}></div>
              
              </div>

            <div className={`${styles.eRight}`}>
              <div className={`${styles.details}`}>
                <h2 className={`${styles.work}`} >{jobTitle}</h2>
                <h6 className={`${styles.comp}`} > @ {company}</h6>
                <p className={`${styles.loc}`} >{location}</p>
                <p className={`${styles.desc}`} >{desc}</p>
            </div>
              
              </div>

            </Col>          
          </Row>
        </Container>      
      </Container>
  )
}

export default Experience