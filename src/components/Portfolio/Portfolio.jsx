import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PortfolioCard from '../portfolioCard/PortfolioCard';
import styles from './Portfolio.module.css';
import netflix from '../../assets/porfolio/netflix.png';
import airbnb from '../../assets/porfolio/airbnb.png';
import notapp from '../../assets/porfolio/noteapp.png';
import pizzaapp from '../../assets/porfolio/pizzaapp.png';
import ullweb from '../../assets/porfolio/ullweb.png';
import portfolio from '../../assets/porfolio/portfolio.png';
// import netflix from '../../assets/portfolio/netflix.png';



const Portfolio = () => {
  return (
      <Container fluid className={`${styles.portfolio} p-sm-3`} id='Portfolio'>
          <Container className={`${styles.portf}`}>
          <h1 className={`${styles.title} ms-auto me-auto mb-4`}>Portfolio</h1>

              <Row lg={3} sm={1} md={2} xs={1}>
                  
                  {/* <PortfolioCard
                      img={netflix}
                      title='Netflix v2.0 Website Clone'
                    //   detail='This clone . '
                  /> */}
                  <PortfolioCard
                      img={notapp}
                      title='Web Note Application'
                      link='https://mywebnote.netlify.app/'
                    //   detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    //           sed do eiusmod tempor incididunt ut labore et dolore magna
                    //           aliqua. '
                  />
                  <PortfolioCard
                      img={pizzaapp}
                      title='Food Ordering App'
                      link='https://food-ordering-app-theta.vercel.app/'
                    //   detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    //           sed do eiusmod tempor incididunt ut labore et dolore magna
                    //           aliqua. '
                  />
                   <PortfolioCard
                      img={airbnb}
                      title='Airbnb v2.0 Website Clone'
                      link='https://letscloneairbnb.netlify.app'
                    //   detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    //           sed do eiusmod tempor incididunt ut labore et dolore magna
                    //           aliqua. '
                  />
                   <PortfolioCard
                      img={ullweb}
                      title='Ullweb Landing Page'
                      link='https://ullweb.netlify.app/'
                    //   detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    //           sed do eiusmod tempor incididunt ut labore et dolore magna
                    //           aliqua. '
                  />
                  <PortfolioCard
                      img={portfolio}
                      title='Portfolio Website'
                      link='https://andrewportfoliowebsite.netlify.app/'
                    //   detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    //           sed do eiusmod tempor incididunt ut labore et dolore magna
                    //           aliqua. '
                  />
              </Row>

          </Container>
    </Container>
  )
}

export default Portfolio