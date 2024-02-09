import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useWindowSize } from '../Utility/Function';
import { ReactComponent as ChevronDown } from '../Icon/chevronDown.svg';
import { ReactComponent as ImgIcon } from '../Icon/imgIcon.svg';
import { ReactComponent as TextIcon } from '../Icon/textIcon.svg';


const NavbarComponent = () => {
  // eslint-disable-next-line no-unused-vars
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
  
  const [openCategory, setOpenCategory] = useState(true)
    // console.log(windowSize)

  return (
    windowSize > 600 ? (
      // desktop
      <>
        <Navbar className='border-bottom border-dark justify-content-between navbarContainer'>
          <Nav >
            {navBarItem.map(item=>{
              return <Nav.Link key={item} className={`fw-bold text-dark navItem ${(currentPath === item) || (currentPath === "" && item === "Tutti i Temi") ? "selectNav" : ""}`} href={`${item}`}>{`${item}`}</Nav.Link>
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
        </Navbar>
        <div className='d-flex navbarContainerSecond justify-content-between'>
          <div className="d-flex">
            {navBarItem.map((item, index) => {
              return (currentPath === "") && (item === "Tutti i Temi" || currentPath === item) ? (
                <div key={index} className="actualNavSecond align-self-center">
                  {item}
                </div>
              ) : null;
            })}
          </div>
          <div className="d-flex">
          {navBarItem.map((item, index) => {
            const backgroundColor = item === "Ambiente" ? "#E2F1E8" : item === "Mondo" ? "#F1DADA" : item === "Politica" ? "#F1F1E2" : "#FFFFFF"; 
            return (item !== "Tutti i Temi" && currentPath === "") || (currentPath !== item  && currentPath !== "" ) ? (
              <a key={item} href={`${item}`} className="cardNavBar cardNavBarSecond text-black text-decoration-none align-self-center" style={{ backgroundColor }}>
                {item}
              </a>
            ) : null;
          })}
          </div>
        </div>
      </>
    ) :(
      // Mobile 
      <div className="container containerMobileNav">
        {navBarItem.map((item, index) => (
          (currentPath === "" && item === "Tutti i Temi") || currentPath === item ? (
            <div key={index} className="actualNav">
              {item}
              <ChevronDown style={{transform: !openCategory && "rotate(180deg)"}} onClick={()=>{
                setOpenCategory(!openCategory)
              }} />
            </div>
          ) : null
        ))}
      {openCategory&& (
        <div className="d-flex gap-3 flex-wrap">
          {navBarItem.map((item, index) => (
            (item !== "Tutti i Temi" && currentPath === "") || (currentPath !== item  && currentPath !== "" ) ? (
              <a key={item} href={`${item}`} className="cardNavBar text-black text-decoration-none">
                {item}
              </a>
            ) : null
          ))}
        </div>
      )} 
      </div>    
    )
  )
}

export default NavbarComponent