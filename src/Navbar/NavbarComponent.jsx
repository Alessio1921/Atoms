import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useWindowSize } from '../Utility/Function';
import { ReactComponent as ChevronDown } from '../Icon/chevronDown.svg';
import { ReactComponent as ImgIcon } from '../Icon/imgIcon.svg';
import { ReactComponent as TextIcon } from '../Icon/textIcon.svg';


const NavbarComponent = () => {
  const [navBarItem, setNavBarItem] = useState([
    "Tutti i Temi",
    "Ambiente",
    "Economia",
    "Mondo",
    "Non Profit",
    "Politica",
    "Società",
    "Welfare"
  ]);
  const currentPath = decodeURIComponent(window.location.pathname.substring(1));
  // console.log(decodeURIComponent(currentPath.substring(1)));
  // console.log(currentPath)
  const windowSize = useWindowSize();
  console.log(windowSize)

  return (
    windowSize > 600 ? (
      // desktop
      <Navbar className='border-bottom border-dark justify-content-between navbarContainer'>
        {/* <Container> */}
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav >
            {navBarItem.map(item=>{
              return <Nav.Link key={item} className={`fw-bold text-dark navItem ${(currentPath === item || currentPath === "" && item === "Tutti i Temi") && "selectNav"}`} href={`${item}`}>{`${item}`}</Nav.Link>
            })}
          </Nav>
          <div className='d-flex iconView'>
            <div>
              <TextIcon />
            </div>
            <div className='activeView'>
              <ImgIcon/>
            </div>
          </div>
        {/* </Container> */}
      </Navbar>
    ) :(
      // Mobile 
      <div className="container">
        {navBarItem.map((item, index) => (
          (currentPath === "" && item === "Tutti i Temi") || currentPath === item ? (
            <div key={index} className="actualNav">
              {item}
              <ChevronDown />
            </div>
          ) : null
        ))}
        <div className="d-flex gap-3 flex-wrap">
          {navBarItem.map((item, index) => (
            (currentPath !== "" && item !== "Tutti i Temi") || currentPath !== item ? (
              <a key={item} href={`${item}`} className="cardNavBar text-black text-decoration-none">
                {item}
              </a>
            ) : null
          ))}
        </div>
      </div>    
    )
  )
}

export default NavbarComponent