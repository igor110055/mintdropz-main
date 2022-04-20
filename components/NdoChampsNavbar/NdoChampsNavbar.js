import React from 'react';
import styles from './NdoChampsNavbar.module.scss';

const NdoChampsNavbar = () => {
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
            <button className="btn" onClick={scrollToForm}>Sign Up For Early Access</button>
          </div>
        </div>
      );
};

export default NdoChampsNavbar;