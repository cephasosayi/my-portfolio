import React from 'react'
import { Container, Col } from 'react-bootstrap'
import styles from './Experiences.module.css';
import Experience from '../Experience/Experience'

const Experiences = () => {
  return (
    <Container fluid className={`${styles.experience}`}>
          <Container>
       <div className={`${styles.eTitle}`}>
              <h1 className={`${styles.title}`}>
              Experiences
              </h1>           
        </div> 
        <Col className={`${styles.col} me-auto me-auto`}>
          <div className={`${styles.worksc}`}>
        <Experience
          year='2021'
          company='UllWeb Technology'
          jobTitle='Frontend Developer'
          location='Abuja, Nigeria'
              desc='
              Write modern, performant, maintainable code for a diverse array of client and internal projects
              Work with a variety of different frontend tools, platforms, frameworks, and content management systems such as JavaScript, Nextjs, React, WordPress, Github, and Netlify.
              
              Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
          '
            />
          </div>
          
          <div className={`${styles.worksec}`}>
            <Experience
          year='2021'
          company='Easydrop Web Services'
          jobTitle='Frontend Developer &  Wordpress Designer'
          location='Abuja, Nigeria'
          desc='Worked with a team of three designers to build different websites, one which is an e-commerce platform for Lankified, a clothing company from Lagos'
            />
          </div>
          </Col>
          </Container>          
    </Container>
  )
}

export default Experiences