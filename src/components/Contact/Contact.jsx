import React, { useRef, useState }  from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import styles from './Contact.module.css';
// import cep from '../../assets/cep2.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp-alt'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [hide, setHide] = useState(false);
    const [done, setDone] = useState(false);
    
      
    const sendEmail = (e) => {
    e.preventDefault();    

    emailjs.sendForm('service_bu6v1t3', 'template_ao6bku1', form.current, '8rw8VF9yvHWgGeQ1G')
      .then((result) => {
          console.log(result.text);
          setHide(true)
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
      <Container fluid className={`${styles.contact}`}>        
          <Container>
        <h1 className={`${styles.title}`}>Contact Me</h1>

              <Row className={`${styles.cRow}`}>
                  <Col lg={6} sm={12} xs={12} md={6} className={`${styles.colRight}`}>
                  <div className={`${styles.info}`}>
                          <p className={`${styles.icons}`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                              ea commodo consequat. Duis aute irure dolor in reprehenderit
                              in.
                          </p>      
                          <p className={`${styles.ico} fw-bold`}>
                              Email: cephasosayi@gmail.com
                          </p>
                    <div className={`${styles.icons}`}>
                                <div className={`${styles.icon}`}><Github /></div>                          
                                <div className={`${styles.icon}`}><Whatsapp /></div>                          
                                <div className={`${styles.icon}`}><Linkedin /></div>                          
                                <div className={`${styles.icon}`}><Twitter /></div>                          

                          </div>
                    </div>
                  </Col>

                  <Col lg={6} sm={12} xs={12} md={6} className={`${styles.colLeft}`}>
                      <div className={`${ hide && styles.hideform}`}>
                      <Form ref={form} onSubmit={sendEmail} className={`${styles.form}`}>
                          <Form.Control name='name' type='text' placeholder='Your Name'className={`${styles.input}`} required/>
                          <Form.Control name='email' type='email' placeholder='Your Email' className={`${styles.input}`} required/>
                          <Form.Control name='message' type='textarea' placeholder='Your Message' rows={5} className={`${styles.input}`} required/>
                          <Form.Control value='Send' type='submit' className={`${styles.btn} mt-3 fw-bold`}/>
                          </Form>
                        </div>
                  <span style={{ marginTop: '70px', marginLeft: '60px'}}>{ done && " Thanks for contacting me. I will get back to you soon"}</span>
                  </Col>

              </Row>
          </Container>          
      </Container>
        
  )
}

export default Contact