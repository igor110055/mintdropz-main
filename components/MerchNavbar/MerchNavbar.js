import React from 'react';
import styles from './MerchNavbar.module.scss';

const MerchNavbar = () => {
    const scrollToForm = () => {
        let hero = document.getElementById("contact-form");
        hero && hero.scrollIntoView();
      }
    
      return (
        <div className={styles.nav_container}>
          <section className={styles.logo_sec}>
            <img src="/Assets/logo.png" />
          </section>
          <div className={styles.hamburger_container}>
            <img src="/Assets/hamburger.png" alt="test"/>
          </div>
          <div className={styles.nav_items}>
            <button className="btn btn1 mx-3">Download now</button>
            <button className="btn btn2" onClick={scrollToForm}>Log In</button>
          </div>
        </div>
      );
};

export default MerchNavbar;