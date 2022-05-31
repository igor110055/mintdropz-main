import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./Web3Header.module.scss";

const Web3Header = () => {
    const scrollToForm = () => {
        let hero = document.getElementById("contact-form");
        hero && hero.scrollIntoView();
    };

    return (
        <div className={styles.header_container}>
            <Row className="row">
                <Col
                    sm={12}
                    md={12}
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-delay="200"
                >
                    <section className={styles.content_sec}>
                        <div className=" m-auto">
                            <h1 className="pb-md-5">Build The Next Big Web3</h1>
                            <h1>Project With Ease</h1>
                        </div>

                        <div className={styles.header_text}>
                            <p className="mx-md-5 px-md-5 pb-md-4">
                                Create your own web3 projects with the Mintdropz
                                Creator Toolkit that allows you to fund your
                                ideas.
                            </p>
                            
                            <p className="mx-md-5 px-md-5">
                                Build the next big NFT project, a powerful dao,
                                or mint your governance token within seconds
                            </p>
                        </div>
                        
                        <button className="btn m-auto" onClick={scrollToForm}>Try mirror</button>
                    </section>
                </Col>
                {/* <Col
                    sm={12}
                    md={12}
                    data-aos="slide-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                >
                    <section className={styles.img_sec}>
                        <img
                            alt="rich"
                            src="/Assets/ArcherImage/ArcherHeader1.png"
                        />
                        <img
                            alt="rich"
                            className={styles.midimg}
                            src="/Assets/ArcherImage/ArcherHeader2.png"
                        />
                        <img
                            alt="rich"
                            src="/Assets/ArcherImage/ArcherHeader3.png"
                        />
                    </section>
                    <div className={styles.test_btn}>
                        <input
                            type="submit"
                            value="ACCEPT THE CHALLENGE"
                            className="btn text-white"
                        />
                    </div>
                </Col> */}
            </Row>
        </div>
    );
};

export default Web3Header;
