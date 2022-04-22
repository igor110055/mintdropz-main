import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./ArcherHeader.module.scss";

const ArcherHeader = () => {
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
                        <div className="text-center m-auto">
                            <h1 className="pb-2">THE ARCHER</h1>
                            <h2>CHALLENGE</h2>
                        </div>

                        <div className="mx-3">
                            <p className="mx-md-5">
                                "The Archer" Challenge is a 6-week training
                                program created for you by Houston Texans’ Wide
                                Receiver Brandin Cooks!
                            </p>
                            <p className="mx-md-5">
                                Over the next six weeks Brandin will challenge
                                you to complete the same workouts and recovery
                                routine he does to take his game to the next
                                level!
                            </p>
                        </div>
                        {/* <button className="btn" onClick={scrollToForm}>GET STARTED</button> */}
                    </section>
                </Col>
                <Col
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
                </Col>
            </Row>
        </div>
    );
};

export default ArcherHeader;
