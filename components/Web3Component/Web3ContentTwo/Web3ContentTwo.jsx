import React from "react";
import styles from "./Web3ContentTwo.module.scss";
import { Col, Row } from "reactstrap";

const Web3ContentTwo = () => {
    return (
        <div className={styles.web3_content_two_container}>
            <Row className="row">
                <Col
                    sm={12}
                    md={12}
                    // data-aos="fade-right"
                    // data-aos-duration="500"
                    // data-aos-delay="200"
                >
                    <section className={styles.web3_content_two_section}>
                        <div className={styles.web3_content_text}>
                            <h1>Mint and Drop.</h1>
                            <h1>Drop A Collection. Drop A Token.</h1>
                            <h1>Drop a Dao. Drop A Fundraiser.</h1>
                            <h5 className="mt-5">
                                Mirror’s robust plugin ecosystem supercharges
                                your
                            </h5>
                            <h5 className="mb-3">
                                ideas and projects. The possibilities are
                                endless.
                            </h5>
                        </div>
                        <div className={styles.btn_group}>
                            <button className={styles.btn_pub}>
                                Publishing
                            </button>
                            <button className={styles.btn_fund}>Funding</button>
                            <button className={styles.btn_comm}>
                                Community
                            </button>
                        </div>
                    </section>
                </Col>
            </Row>
        </div>
    );
};

export default Web3ContentTwo;
