import React from 'react';
import styles from './Web3Navbar.module.scss';

const Web3Navbar = () => {
    const scrollToForm = () => {
        let hero = document.getElementById("contact-form");
        hero && hero.scrollIntoView();
      }
    
      return (
        <div className={styles.nav_container}>
          <section className={styles.logo_sec}>
            <img src="/Assets/logo.png" />
          </section>
          <section className={styles.mobile_logo_text}>
            <h6>WEALTHY APE</h6>
          </section>
          <div className={styles.hamburger_container}>
            <img src="/Assets/hamburger.png" alt="test"/>
          </div>
          <div className={styles.nav_items}>
            <button className="btn btn1 mx-3">Download now</button>
            <button className="btn2" id={styles.log_btn} onClick={scrollToForm}>Log In</button>
          </div>
        </div>
      );
};

export default Web3Navbar;