import React from 'react';
import styles from './PricingNavbar.module.scss';

const PricingNavbar = () => {
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
            <img src="/Assets/hamburger.png" />
          </div>
          <div className={styles.nav_items}>
            <button className="btn" onClick={scrollToForm}>Home</button>
            <button className="btn" onClick={scrollToForm}>Pricing</button>
            <button className="btn" onClick={scrollToForm}>Resources</button>
            <button className="btn" id={styles.get_started_btn} onClick={scrollToForm}>GET STARTED</button>
          </div>
        </div>
      );
};

export default PricingNavbar;