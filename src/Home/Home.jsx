import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
  return (
    <div>
      <div>
      {/* Rettangolo in alto con immagine di sfondo */}
        <div className="bg-image position-relative" style={{ backgroundImage: "url('background.jpg')", width: '100%', height: '300px', backgroundSize: 'cover', backgroundColor:"red" }}>
          <div className='w-50 containerText'>
            <div className='tagContainer'>
              Migranti
            </div>
            Roccella Jonica, la Lampedusa che litalia ignora
          </div>
        </div>

        {/* Due rettangoli, uno a sinistra e uno a destra */}
        <Container fluid>
          <Row>
            {/* Rettangolo sinistro */}
            <Col md={6}>
              <div className="square bg-primary" style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Contenuto aggiuntivo all'interno del rettangolo sinistro */}
              </div>
            </Col>

            {/* Rettangolo destro diviso in due */}
            <Col md={6}>
              <Row style={{ height: '60%' }}>
                <div className="rectangle bg-secondary" style={{ width: '100%', height: '100%' }}>
                  {/* Contenuto aggiuntivo all'interno del rettangolo superiore destro */}
                </div>
              </Row>
              <Row style={{ height: '40%' }}>
                <div className="rectangle bg-info" style={{ width: '100%', height: '100%' }}>
                  {/* Contenuto aggiuntivo all'interno del rettangolo inferiore destro */}
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home