import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as AuthorPic } from '../Icon/AuthorPic.svg';
import { ReactComponent as ArrowRight } from '../Icon/arrowRight.svg';
import { ReactComponent as Podcast } from '../Icon/Podcast.svg';
import { useWindowSize } from '../Utility/Function';



const Home = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <div>
        <div className="bg-image position-relative">
        <div className='opacity opacityMobile'></div>
          <CustomComponent
            tag="MIGRANTI"
            title="Roccella Jonica, la Lampedusa che l'Italia ignora"
            author="Alessandro Puglia"
            date="29 Giugno 2022"
          />
        </div>
        <Container fluid>
          <Row>
            {/* Left */}
            <Col sm={12} md={6} className="border-bottom border-dark" style={windowSize > 600 ?{  padding:" 3px 3px 0 0"} :{ height:  600, padding: 0, position:"relative" }}>
              <div className={`square bg-secondImage ${windowSize > 600 ? "position-relative" : "450px"}` }>
                <div className='opacity'></div>
                <CustomComponent
                  tag="MIGRANTI"
                  title="Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura"
                  author="Alessandro Puglia"
                  date="29 Giugno 2022"
                  arrow
                  colorTag="#E2F0F1"
                />
              </div>
            </Col>

            {/* right */}
            <Col sm={12} md={6} >
              <Row className="border-bottom border-dark" style={{ height: windowSize > 600 ? '55%' : "450px", padding:windowSize > 600 ? "3px 0 3px" : 0 }}>
                <div className={`rectangle ${ windowSize > 600 ? "bg-thirdImage" : ""} position-relative`}>
                <div className='opacity'></div>
                  <CustomComponent
                    tag="MIGRANTI"
                    title="Gli startupper? Li trovi al bistrot.
                    Così il DumBo incuba relazioni"
                    author="Alessandro Puglia"
                    date="29 Giugno 2022"
                    arrow
                    song
                  />
                </div>
              </Row>
              <Row className="border-bottom border-dark" style={{ height:  windowSize > 600 ? '45%' : "300px" }}>
                <div className={`rectangle position-relative ${ windowSize > 600 ? "bg-fourthImage" : ""}`} style={{ width: '100%', height: '100%' }}>
                  <div className='opacity'></div>
                  <CustomComponent
                    tag="MIGRANTI"
                    title="Nelle città italiane tutti in piazza per e con Kiev"
                    author="Alessandro Puglia"
                    date="29 Giugno 2022"
                    arrow
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='separator'>
        <div>
          Il tuo supporto è fondamentale
        </div>
        <div>
          Dai il tuo contributo
          <ArrowRight/>
        </div>
      </div>
    </div>
  )
}
function CustomComponent({ tag, title, author, date, arrow, song, colorTag }) {
  const windowSize = useWindowSize();
  return (
    <div className={`containerText ${arrow && windowSize > 600 ? "containerBiggerText" : " " } ${arrow && windowSize <= 600 ? " text-black containerFullText" : "text-white"} ${windowSize <= 600  ? "containerFullText" : ""}`}>
      <div className='tagContainer' style={{backgroundColor: colorTag ? colorTag : "" }}>
        {tag}
      </div>
      {song && 
        <Podcast style={{marginBottom:10, width: windowSize <= 600  ? "100%" :""}}/>
      }
      <div className='titleComponentCustom'>
        {title}
      </div>
      <div className={`${!arrow || windowSize <= 600 ? "d-flex": ""}`}>
        <AuthorPic />
        <div className='authorDescription' style={arrow && windowSize > 600 ?{marginLeft:0, marginTop:10}: {}}>
          <div>
            Di {author}
          </div>
          <div>
            {date}
          </div>
        </div>
      </div>
      {arrow && windowSize > 600 &&
        <ArrowRight style={{marginTop:20}}/>
      }
    </div>
  );
}

export default Home