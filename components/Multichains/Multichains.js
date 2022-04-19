import Image from 'next/image';
import React from "react";
import {
  Algorand,
  Avalanche,
  Binance,
  Cardano,
  Celo, Ethereum,
  Near,
  Polygon,
  Solana
} from '../../images/HomeSectionThree';
import styles from "./m-chain.module.scss";

const Multichains = () => {
  const scrollToForm = () => {
    let hero = document.getElementById("contact-form");
    hero && hero.scrollIntoView();
  }

  return (
    <div className={styles.multichain_container} data-aos='fade-up' data-aos-duration='1000'>
      <div className={styles.top_header}>
        <h1>THE MULTI CHAIN NFT STANDARD</h1>
      </div>
      <div className={styles.chains_list_container}>
        <div className={styles.logo}>
          <Image alt="" src={Avalanche} />
        </div>
        <div className={styles.logo}>
          <Image alt="" src={Polygon} />
        </div>
        <div className={`${styles.logo} ${styles.logoEthereum}`}>
          <Image alt="" src={Ethereum} />
        </div>
        <div className={styles.logo}>
          <Image alt="" src={Solana} />
        </div>
        <div className={styles.logo}>
          <Image alt="" src={Near} />
        </div>
  
      </div>
      <div className={`${styles.chains_list_container} ${styles.chains_list_container1}`}>
        <div className={styles.logo}>
        <Image alt="" src={Algorand} />
        </div>
        <div className={styles.logo}>
        <Image alt="" src={Celo} />
        </div>
        <div className={styles.logo}>
        <Image alt="" src={Binance} />
        </div>
        <div className={styles.logo}>
        <Image alt="" src={Cardano} />
        </div>
      </div>
      <div className={styles.btn_container} >
      <button className="btn" onClick={scrollToForm}>GET STARTED</button>
      </div>
    </div>
  );
};

export default Multichains;
