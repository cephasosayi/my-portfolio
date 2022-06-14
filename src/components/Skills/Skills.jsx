import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Card from '../Card/Card'
import styles from './Skills.module.css'
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import wp from '../../assets/wp.png';
import strapi from '../../assets/strapi.svg';
import git from '../../assets/git.png';
import sass from '../../assets/sass.png';
import xd from '../../assets/xd.png';
import boostrap from '../../assets/bootstrap.png';
import js from '../../assets/js.png';
import next from '../../assets/next.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';





const Skills = () => {
  return (
      <Container fluid className={`${styles.skills} `}>
          <Container className={`${styles.skill} `}>
              <h1 className={`${styles.title} ms-auto me-auto mb-4`}>My Skills</h1>
              <Row lg={4} md={3} sm={1} xs={1} className='py-2 g-4'>
              <Card icon={react} skill='REACT' />

              <Card icon={html} skill='HTML5' />
              <Card icon={css} skill='CSS3' />
              <Card icon={js} skill='JAVASCRIP' />
              <Card icon={sass} skill='SASS' />
              <Card icon={next} skill='NEXTJS'  />
             <Card icon={boostrap} skill='BOOTSTRAP' />
              <Card icon={strapi} skill='HEADLESS CMS' />
              <Card icon={xd} skill='ADOBE XD' />
              <Card icon={wp} skill='WORDPRESS' />
              <Card icon={redux} skill='REDUX' />
              <Card icon={git} skill='SOURCE CONTROL' />                
                  


              </Row>
              

          </Container>          
    </Container>
  )
}

export default Skills