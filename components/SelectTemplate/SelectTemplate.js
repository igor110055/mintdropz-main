import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./s-temp.module.scss";
const SelectTemplate = () => {
  const data = [
    "/Assets/temp_1.png",
    "/Assets/temp_2.png",
    "/Assets/temp_3.png",
    "/Assets/temp_4.png",
    "/Assets/temp_5.png",
    "/Assets/temp_6.png"
  ];
  const scrollToForm = () => {
    let hero = document.getElementById("contact-form");
    hero && hero.scrollIntoView();
  }
  return (
    <div className={styles.select_temp_container}>
      <div className={styles.header_sec}>
        <h1>SELECT YOUR TEMPLATE</h1>
      </div>
      <div className={styles.template_list}>
        <Row className={styles.custom_mob_row}>
          {data.map((item, i) => {
            return (
              <Col key={i} sm={3} md={4} className={styles.custom_mob_col} data-aos={`fade-${i % 2 === 0 ? 'down' : 'up'}`} data-aos-duration='1000'>
                <div className={styles.template_item_container}>
                  <img src={item} alt="" />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <h2>DYNAMIC TEMPLATES FOR ALL PROJECT TYPES</h2>
      <div className={styles.btn_container}>
        <button className="btn" onClick={scrollToForm}>GET STARTED</button>
      </div>
    </div>
  );
};

export default SelectTemplate;
