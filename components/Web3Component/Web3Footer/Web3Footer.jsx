import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./Web3Footer.module.scss";

const Web3Footer = () => {
    const scrollToForm = () => {
        let hero = document.getElementById("contact-form");
        hero && hero.scrollIntoView();
    };
    return (
        <div className={styles.footer_container}>
            <section className={styles.top_sec}>
                <Row className="d-flex">
                    {/* <Col sm={12} md={4}> */}
                    <Col>
                        <div
                            className={styles.links_container}
                            id={styles.first_link_container}
                        >
                            <h6>SOCIALS</h6>
                            <p>
                                <a
                                    href="https://www.instagram.com/mintdropzofficial/"
                                    target="_blank"
                                >
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a href="#" target="_blank">
                                    Discord
                                </a>
                            </p>
                            <p>
                                <a href="#" target="_blank">
                                    Reddit
                                </a>
                            </p>
                            <p>
                                <a
                                    href="https://twitter.com/Mintdropz1"
                                    target="_blank"
                                >
                                    Twitter
                                </a>
                            </p>
                            {/* <p><a href="https://www.linkedin.com/company/mintdropz/mycompany/?viewAsMember=true" target="_blank">Linkedin</a></p> */}
                        </div>
                    </Col>
                    {/* <Col sm={12} md={4}> */}
                    <Col>
                        <div
                            className={styles.links_container}
                            id={styles.second_link_container}
                        >
                            <h6>OTHER</h6>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                            <p>Community Guidelines</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className={styles.btn_container}>
                            <button className="btn" onClick={scrollToForm}>
                                GET STARTED
                            </button>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className={styles.bottom_sec}>
                <p>2022 MetaNifty All rights reserved</p>
            </section>
        </div>
    );
};

export default Web3Footer;
