import React, { useState } from 'react'
import { ReactComponent as User } from '../Icon/User.svg';
import { ReactComponent as Hamburger } from '../Icon/Hamburger.svg';
import { ReactComponent as Close } from '../Icon/Close.svg';
import { ReactComponent as Search } from '../Icon/Search.svg';
import { useWindowSize } from '../Utility/Function';


const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const windowSize = useWindowSize();

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
        <div className="search border-start-0 border-end-0">
          <Search/>
        </div>
      </div>
    </>
  )
}

export default Header