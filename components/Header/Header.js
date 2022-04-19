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
      <Row className="row">
        <Col sm={12} md={12} data-aos='fade-right' data-aos-duration='500' data-aos-delay='200'>
          <section className={styles.content_sec}>
            <div className="text-center m-auto">
              <h1>
                “THE NO DAYS OFF”
              </h1>
              <h1>CHALLENGE!</h1>
            </div>

            <div className="mx-5">
              <p>
                "The No Days Off" Challenge is a 6-week training experience created for you by world renown trainer NDO CHAMP!
              </p>
              <p>
                Over the next six weeks NDO CHAMP will challenge you to complete the same workouts and recovery routine he does as a Professional Bodybuilder and Lead Trainer of NDO Nation! Get Ready!
              </p>
            </div>
            {/* <button className="btn" onClick={scrollToForm}>GET STARTED</button> */}
          </section>
        </Col>
        <Col sm={12} md={12} data-aos='slide-up' data-aos-duration='500' data-aos-delay='300'>
          <section className={styles.img_sec}>
            <img alt="rich" src="/Assets/NewImage/Rectangle3.png" />
            <img alt="rich" className={styles.midimg} src="/Assets/NewImage/Rectangle2.png" />
            <img alt="rich" src="/Assets/NewImage/Rectangle1.png" />
          </section>
        </Col>
      </Row>
    </div>

  );
};

export default Header;
