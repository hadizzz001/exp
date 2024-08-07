"use client"
import React from 'react'
import { useMenu } from '../_context/MenuContext';

const Footer = () => {
  const { menuOpen, closeMenu } = useMenu();

  const currentYear = new Date().getFullYear();


  return (
    <>
      <footer className="site-footer" id='myFoot'>

        {/* /.site-footer__upper */}
        <div className="site-footer__bottom">
          <div className="container">
            <div className="inner-container">
              <p />
              <a href="index.php" className="site-footer__bottom-logo fresp">
                <img src="assets/images/logo.jpg" alt="" />
              </a>
              <div className="site-footer__bottom-links">
                {/* <a href="#">Contact Info</a> */}
              </div>
              {/* /.site-footer__bottom-links */}
            </div>
            {/* /.inner-container */}
            <div className="flex flex-col items-center text-center p-6">
      <p className="mb-2">© Copyright {currentYear} Exhibition. All Rights Reserved</p>
      {/* <a href="index.php" className="mb-2">
        <img src="assets/images/logo.jpg" alt="Logo" className="h-12" />
      </a> */}
      <div className="flex flex-col items-center space-y-2">
        <a href="#" className="mb-2">
          <b>Email :</b> exhibition@gmail.com
        </a>
        <a href="#" className="mb-2">
          <b>Mob :</b> +91-9874785874
        </a>
        <a href="#" className="mb-2">
          <b>Add :</b> Rock St 12, New York City, USA
        </a>
      </div>
    </div>
            {/* /.inner-container */}
          </div>
          {/* /.container */}
        </div>
        {/* /.site-footer__bottom */}
      </footer>
      {/* /.site-footer */}
      {/* /.page-wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay">
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        {/* /.search-popup__inner */}
      </div>
      {/* /.search-popup */}
      <div className="side-content__block">
        <div className="side-content__block-overlay custom-cursor__overlay">
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
        {/* /.side-content__block-overlay */}
        <div className="side-content__block-inner ">
          <a href="index.html">
            <img src="assets/images/logo.jpg" alt="" width={143} />
          </a>
          <div className="side-content__block-about">
            <h3 className="side-content__block__title">About Us</h3>
            {/* /.side-content__block__title */}
            <p className="side-content__block-about__text">
              We must explain to you how all seds this mistakens idea off denouncing
              pleasures and praising pain was born and I will give you a completed
              accounts off the system and{" "}
            </p>
            {/* /.side-content__block-about__text */}
            <a href="#" className="thm-btn side-content__block-about__btn">
              Get Consultation
            </a>
          </div>
          {/* /.side-content__block-about */}
          <hr className="side-content__block-line" />
          <div className="side-content__block-contact">
            <h3 className="side-content__block__title">Contact Us</h3>
            {/* /.side-content__block__title */}
            <ul className="side-content__block-contact__list">
              <li className="side-content__block-contact__list-item">
                <i className="fa fa-map-marker" />
                Rock St 12, Newyork City, USA
              </li>
              {/* /.side-content__block-contact__list-item */}
              <li className="side-content__block-contact__list-item">
                <i className="fa fa-phone" />
                <a href="tel:526-236-895-4732">+91-9874785896</a>
              </li>
              {/* /.side-content__block-contact__list-item */}
              <li className="side-content__block-contact__list-item">
                <i className="fa fa-envelope" />
                <a href="mailto:example@mail.com">exibition@mail.com</a>
              </li>
              {/* /.side-content__block-contact__list-item */}
              <li className="side-content__block-contact__list-item">
                <i className="fa fa-clock" />
                Week Days: 09.00 to 18.00 Sunday: Closed
              </li>
              {/* /.side-content__block-contact__list-item */}
            </ul>
            {/* /.side-content__block-contact__list */}
          </div>
          {/* /.side-content__block-contact */}
          <p className="side-content__block__text site-footer__copy-text">
            <a href="#">Exhibition Travelling</a> <i className="fa fa-copyright" />{" "}
            {currentYear} All Right Reserved
          </p>
        </div>
        {/* /.side-content__block-inner */}
      </div>










      <div className={`side-menu__block ${menuOpen ? 'active' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <a href="#" className="side-menu__toggler side-menu__close-btn" onClick={closeMenu} style={{ alignSelf: 'flex-end' }}>
    <i className="fa fa-times" />
  </a>
  <div className="side-menu__block-overlay custom-cursor__overlay">
    <div className="cursor" style={{ top: 52, left: 314 }} />
    <div className="cursor-follower" style={{ top: 30, left: 292 }} />
  </div>
  <div className="side-menu__block-inner mCustomScrollbar _mCS_1 mCS_no_scrollbar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      id="mCSB_1"
      className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
      style={{ maxHeight: 'none' }}
      tabIndex={0}
    >
      <div
        id="mCSB_1_container"
        className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
        style={{ position: 'relative', top: 0, left: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        dir="ltr"
      >
        <a href="/" className="side-menu__logo" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img
            src="assets/images/logo.jpg"
            alt=""
            width={143}
            className="mCS_img_loaded"
          />
        </a>
        <nav className="mobile-nav__container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ul className="main-nav__navigation-box" style={{ padding: 0, margin: 0, listStyleType: 'none' }}>
            <li className="dropdown1 current" style={{ marginBottom: '-7px' }}>
              <a href="/art" style={{ textAlign: 'center' }}>
                Art Exhibitions
              </a>
            </li>
            <li className="dropdown1" style={{ marginBottom: '-7px' }}>
              <a href="/photo" style={{ textAlign: 'center' }}>
                Photography Exhibitions
              </a>
            </li>
            <li className="dropdown1" style={{ marginBottom: '-7px' }}>
              <a href="/service" style={{ textAlign: 'center' }}>
                Exhibition Services
              </a>
            </li>
            <li className="dropdown1" style={{ marginBottom: '-7px' }}>
              <a href="/about" style={{ textAlign: 'center' }}>
                About LTE
              </a>
            </li>
            <li className="dropdown1" style={{ marginBottom: '-7px' }}>
              <a href="#contact" style={{ textAlign: 'center' }}>
                Contact Mailinglist
              </a>
            </li>
          </ul>
        </nav>
        <p className="side-menu__block__copy" style={{ textAlign: 'center', marginTop: '20px' }}>
          (c) {currentYear} <a href="#">Landan Traveling Exhibition</a> - All rights reserved.
        </p>
        <div className="side-menu__social" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <a href="#" style={{ margin: '0 5px' }}>
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" style={{ margin: '0 5px' }}>
            <i className="fab fa-google-plus" />
          </a>
          <a href="#" style={{ margin: '0 5px' }}>
            <i className="fab fa-twitter" />
          </a>
          <a href="#" style={{ margin: '0 5px' }}>
            <i className="fab fa-instagram" />
          </a>
          <a href="#" style={{ margin: '0 5px' }}>
            <i className="fab fa-pinterest-p" />
          </a>
        </div>
      </div>
      <div
        id="mCSB_1_scrollbar_vertical"
        className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
        style={{ display: 'none' }}
      >
        <div className="mCSB_draggerContainer">
          <div
            id="mCSB_1_dragger_vertical"
            className="mCSB_dragger"
            style={{
              position: 'absolute',
              minHeight: 30,
              height: 0,
              top: 0,
              display: 'block',
              maxHeight: 175
            }}
          >
            <div className="mCSB_dragger_bar" style={{ lineHeight: 30 }} />
          </div>
          <div className="mCSB_draggerRail" />
        </div>
      </div>
    </div>
  </div>
</div>









      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up" />
      </a>
      {/* Template JS */}
      {/* Custom Scripts */}
    </>

  )
}

export default Footer