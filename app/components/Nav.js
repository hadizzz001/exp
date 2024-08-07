"use client"

import React from 'react' 
import { useMenu } from '../_context/MenuContext';

const Nav = () => {
  const { toggleMenu } = useMenu();
 
  return (
    <div className="page-wrapper">
    <nav
      className="main-nav-one stricky"
      style={{ marginTop: "-33px", marginBottom: "-33px" }}
    >
      <div className="container">
        <div style={{ marginTop: 30, textAlign: "center" }}>
          <a href="/"></a>
          <center>
            <a href="/">
              <img
                src="assets/images/logo.jpg"
                className="logo-resp"
                alt=""
                width={170}
                style={{ marginTop: 2 }}
              />
            </a>
            <a href="#" className="side-menu__toggler">
            <i className="muzex-icon-menu" onClick={toggleMenu} />
            </a>
          </center>
        </div>

        <div className="inner-container">
          <div className="logo-box">
            <a href="/"></a>
          </div> 
          <div className="main-nav__main-navigation">
            <ul className="main-nav__navigation-box">
              <li className="dropdown1">
                <a
                  href="art"
                  style={{
                    textAlign: "center", 
                    marginBottom: "-7px"
                  }}
                >
                  Art Exhibitions
                </a>
              </li>
              <li className="dropdown1"> 
                <a
                  href="photo"
                  style={{ textAlign: "center", marginBottom: "-7px" }}
                >
                  Photography Exhibitions
                </a> 
              </li>
              <li className="dropdown1">
                
                <a
                  href="service"
                  style={{ textAlign: "center", marginBottom: "-7px" }}
                >
                  Exhibition Services
                </a> 
              </li>
              <li className="dropdown1">
               
                <a
                  href="about"
                  style={{ textAlign: "center", marginBottom: "-7px" }}
                >
                  About LTE
                </a> 
              </li>
              <li className="dropdown1">
                
                <a
                  href="#myFoot"
                  style={{
                    textAlign: "center",
                    marginBottom: "-7px",
                    marginLeft: 10
                  }}
                >
                  Contact Mailinglist
                </a> 
              </li>
            </ul>
          
          </div> 
        </div> 


 

      </div> 
    </nav> 
  </div>
  )
}

export default Nav