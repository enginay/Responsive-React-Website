import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    //Updating the States
    // fas are from frontawesom.com to get beautiful fonts the CDN link is written in the index.html file
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    // with !click we reverse the fals in useState (false, true, false, true, ....)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)


    const showButton = () => {
    if (window.innerWidth <= 960)
        setButton(false);
    else
        setButton(true);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
              <div className="navbar-container">
                  
                  <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                      E.A Dev <i className='fab fa-typo3'/>
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign-up
                        </Link>
                    </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
              </div>
        </nav> 
    </>
    )
}

export default Navbar
