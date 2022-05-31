import Image from 'next/image';
import React from "react";
import { Col, Row } from "reactstrap";
import { Avalanche2, Cardano, Celo, Emurgo, Shopify } from '../../images/HomeSectionThree';
import styles from "./partners.module.scss";

const Partners = () => {
  const scrollToForm = () => {
    let hero = document.getElementById("contact-form");
    hero && hero.scrollIntoView();
  }
  return (
    <div className={styles.partners_container} data-aos='fade-up' data-aos-duration='1000'>
      <div className={styles.top_header}>
        <h1>PARTNERS</h1>
      </div>
      <section className={styles.testimonial_container}>
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.testimonial_item_container}>
              <img src="/Assets/polygon_test.png" />
              <div className={styles.content_sec}>
                <p>
                  Community-driven #NFT platform Mintdropz is bringing a no-code
                  solution to bringing your NFT project dreams to life!🤯
                </p>
                <p>
                  Polygon Studios has partnered with them to help make NFT
                  creation for all a reality!
                </p>
                <p>- Polygon Studios</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className={styles.testimonial_item_container}>
              <img src="/Assets/algo_test.png" />
              <div className={styles.content_sec}>
                <p>
                  “We are excited to welcome Mintdropz as part of the
                  ever-growing NFT ecosystem being built on the Algorand
                  network. Mintdropz is a unique use case as it will broaden the
                  reach, awareness, and adoption of NFT’s, as anyone will be
                  able to launch their own NFT storefront or marketplace with no
                  code”
                </p>
                <p>
                  - Addie Wagenknecht, Head of Global Ecosystems and Technical
                  Operations
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className={styles.partner_logo_container}>
        <div className={styles.logo}>
          <Image alt="" src={Celo} />
        </div>
        <div className={styles.logo}>
          <Image alt="" src={Emurgo} />
        </div>
        <div className={styles.logo}>
          <Image alt="" src={Cardano} />
        </div>
      </section>
      <section className={styles.partner_logo_container}>
        <div className={styles.logo}>
          <Image alt="" src={Avalanche2} />
        </div>
        <div className={styles.logo}>
          <Image alt="" src={Shopify} />
        </div>
      </section>
      <div className={styles.btn_container} >
        <button className="btn" onClick={scrollToForm}>GET STARTED</button>
      </div>
    </div>
  );
};

export default Partners;
