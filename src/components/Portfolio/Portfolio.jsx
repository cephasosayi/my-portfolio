import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PortfolioCard from '../portfolioCard/PortfolioCard';
import styles from './Portfolio.module.css';
import sc1 from '../../assets/sc1.png';
import sc2 from '../../assets/sc2.png';


const Portfolio = () => {
  return (
      <Container fluid className={`${styles.portfolio} p-sm-3`}>
          <Container className={`${styles.portf}`}>
          <h1 className={`${styles.title} ms-auto me-auto mb-4`}>Portfolio</h1>

              <Row lg={3} sm={1} md={3} xs={1}>
                  <PortfolioCard
                      img={sc1}
                      title='Ullweb Landing Page'
                      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. '
                  />
                  <PortfolioCard
                      img={sc2}
                      title='DHI Hub website'
                      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. '
                  />
                  <PortfolioCard
                      img={sc1}
                      title='Ullweb Landing Page'
                      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. '
                  />
                   <PortfolioCard
                      img={sc1}
                      title='Ullweb Landing Page'
                      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. '
                  />
                   <PortfolioCard
                      img={sc1}
                      title='Ullweb Landing Page'
                      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. '
                  />
                  <PortfolioCard
                      img={sc1}
                      title='Ullweb Landing Page'
                      detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. '
                  />
              </Row>

          </Container>
    </Container>
  )
}

export default Portfolio