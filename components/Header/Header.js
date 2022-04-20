import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./header.module.scss";

const Header = () => {

  const scrollToForm = () => {
    let hero = document.getElementById("contact-form");
    hero && hero.scrollIntoView();
  }

  return (
    <div className={styles.header_container}>
      <Row className="row flex-column-reverse flex-lg-row">
        <Col sm={12} md={7} data-aos='fade-right' data-aos-duration='500' data-aos-delay='200'>
          <section className={styles.content_sec}>
            <h1>
              LAUNCH YOUR OWN NFT PLATFORM, CREATE EXCLUSIVE EXPERIENCES FOR
              YOUR FANS
              <img src="/Assets/smile.png" />
            </h1>
            <p>
              Start monetize your art and content without having to code. Simply
              plug and play and launch your NFT Platform and Smart contract!
            </p>
            <button className="btn" onClick={scrollToForm}>GET STARTED</button>
          </section>
        </Col>
        <Col sm={12} md={5} data-aos='slide-up' data-aos-duration='500' data-aos-delay='300'>
          <section className={styles.img_sec}>
            <img alt="rich" src="/Assets/rich.png" />
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
