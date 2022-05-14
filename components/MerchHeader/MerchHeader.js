import React from 'react';
import { Col, Row } from "reactstrap";
import styles from "./MerchHeader.module.scss";

const MerchHeader = () => {
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
                            Make Your Own Merch Line Using Your NFTs!
                            {/* <img src="/Assets/smile.png" /> */}
                        </h1>
                        <p>
                        Put your Bored Ape, Mutant, Doodle, CloneX, Moonbird or any NFT onto a T shirt and Hoodie for your own NFT merch line!
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

export default MerchHeader;