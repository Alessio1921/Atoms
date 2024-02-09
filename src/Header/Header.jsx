import React, { useState } from 'react'
import { ReactComponent as User } from '../Icon/User.svg';
import { ReactComponent as Hamburger } from '../Icon/Hamburger.svg';
import { ReactComponent as Close } from '../Icon/Close.svg';
import { ReactComponent as Search } from '../Icon/Search.svg';
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const Section = ({ title, children }) => {
    return (
      <div className="mb-4">
        <h3>{title}</h3>
        {children}
      </div>
    );
  };
  return (
    <>
      <div className='d-flex justify-content-between align-items-center headerTop'>
      {/* {windowSize > 600 ? (
        <> */}
          <div className='d-flex'>
            <div>contribuisci</div>
            <div>abbonati</div>
          </div>
          <div className="d-flex align-items-center d-none d-md-block" role="button">
            <User/>
            accedi
          </div>
        {/* </> */}
      {/* ) : (
        <div className='d-flex w-100' style={{marginTop:20}}>
          <div className='border border-dark w-50'>contribuisci</div>
          <div className='border border-dark w-50'>abbonati</div>
        </div>
      )
    } */}
      </div>
      <div className="d-flex">
        <div className="menu border-start-0 border-end-0" role="button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {!menuIsOpen ?
            <Hamburger
            />
            :
            <Close
            />
          }
        </div>
        <div className="w-100 border border-dark" />
        {!menuIsOpen && (
          <div className="search border-start-0 border-end-0" role="button">
            <Search/>
          </div>
        )}
      </div>
      {menuIsOpen && (
        <div className='menuContainer'>
          <Container fluid>
            <Row>
              <Col xs={12} md={4}>
                <div>
                  <Section title="Articoli">
                    <p>Trend, dati e novità del Terzo settore.</p>
                  </Section>
                </div>
 
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <Section title="Storie">
                    <p>Letture ed approfondimenti dei fenomeni complessi</p>
                  </Section>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <Section title="Interviste">
                    <p>Racconti reali di persone ed organizzazioni.</p>
                  </Section>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <div>
                  <Section title="Opinioni">
                    <p>Riflessioni e confronti dei nostri opinionisti</p>
                  </Section>
                </div>
              </Col>
                <Col xs={12} md={4}>
                  <div>
                    <Section title="Podcast">
                      <p>Un luogo per dare voce ai protagonisti della sostenibilità.</p>
                    </Section>
                  </div>
                  </Col>
                <Col xs={12} md={4}>
                  <div>
                    <Section title="Bookazine">
                      <p>Una rivista da leggere e un libro da conservare.</p>
                    </Section>
                  </div>
                </Col>
            </Row>
            <Row>
              <Col xs={4} md={2}>
                <Section title="Chi siamo">
                </Section>
              </Col>
              <Col xs={4} md={2}>
                <Section title="Comitato editoriale">
                </Section>
              </Col>
              <Col xs={4} md={2}>
                <Section title="Servizi">
                </Section>
              </Col>
              <Col xs={4} md={2}>
                <Section title="Agenda/Eventi">
                </Section>
              </Col>
              <Col xs={4} md={2}>
                <Section title="Mappa dell'attivismo">
                </Section>
              </Col>
              <Col xs={4} md={2}>
                <Section title="Inchieste crowdfunding">
                </Section>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  )
}

export default Header