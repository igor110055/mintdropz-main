import React from "react";
import styles from "./Web3ContentOne.module.scss";
import { Col, Row } from "reactstrap";

const Web3ContentOne = () => {
    return (
        <div className={styles.web3_content_one_container}>
            <Row className="row">
                <Col
                    sm={12}
                    md={12}
                    // data-aos="fade-right"
                    // data-aos-duration="500"
                    // data-aos-delay="200"
                >
                    <section className={styles.web3_content_one_section}>
                        <div className={styles.web3_content_text}>
                            <h1>Creator Highlights</h1>
                            <h5>Projects built with Mintdropz recently</h5>
                        </div>

                        <div className={styles.card_container}>
                            <div
                                className={styles.web3_content_one_card}
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-delay="200"
                            >
                                <div className="card">
                                    <img
                                        src="/Assets/Web3Image/content_one_card.png"
                                        className=""
                                        alt="..."
                                    />
                                    <span className="px-4">EDITION</span>
                                    <div className="card-body px-4">
                                        <h5 className="card-title text-light">
                                            A beginner's guide to NFTs
                                        </h5>

                                        <div className={styles.img_box}>
                                            <img
                                                src="/Assets/Web3Image/nft_logo.png"
                                                alt=""
                                            />
                                            <button className="btn ms-3">
                                                2.30 ETH
                                            </button>
                                        </div>

                                        <p className={styles.card_des}>
                                            Non-fungible token (NFT) is a term
                                            used to describe a unique digital
                                            asset whose ownership is tracked on
                                            a blockchain, such as Ethereum.
                                        </p>

                                        <div className={styles.lower_card_text}>
                                            <h5>Linda Xie</h5>
                                            <div
                                                className={
                                                    styles.lower_img_contract
                                                }
                                            >
                                                <img
                                                    src="/Assets/Web3Image/contract_img.png"
                                                    alt=""
                                                />
                                                <p
                                                    className={
                                                        styles.lower_text
                                                    }
                                                >
                                                    0xB219...0b9f
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div
                                className={styles.web3_content_one_card}
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="200"
                            >
                                <div className="card">
                                    <img
                                        src="/Assets/Web3Image/content_one_card.png"
                                        className=""
                                        alt="..."
                                    />
                                    <span className="px-4">EDITION</span>
                                    <div className="card-body px-4">
                                        <h5 className="card-title text-light">
                                            A beginner's guide to NFTs
                                        </h5>

                                        <div className={styles.img_box}>
                                            <img
                                                src="/Assets/Web3Image/nft_logo.png"
                                                alt=""
                                            />
                                            <button className="btn ms-3">
                                                2.30 ETH
                                            </button>
                                        </div>

                                        <p className={styles.card_des}>
                                            Non-fungible token (NFT) is a term
                                            used to describe a unique digital
                                            asset whose ownership is tracked on
                                            a blockchain, such as Ethereum.
                                        </p>

                                        <div className={styles.lower_card_text}>
                                            <h5>Linda Xie</h5>
                                            <div
                                                className={
                                                    styles.lower_img_contract
                                                }
                                            >
                                                <img
                                                    src="/Assets/Web3Image/contract_img.png"
                                                    alt=""
                                                />
                                                <p
                                                    className={
                                                        styles.lower_text
                                                    }
                                                >
                                                    0xB219...0b9f
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* card 3 */}
                            <div
                                className={styles.web3_content_one_card}
                                data-aos="fade-down"
                                data-aos-duration="500"
                                data-aos-delay="200"
                            >
                                <div className="card">
                                    <img
                                        src="/Assets/Web3Image/content_one_card.png"
                                        className=""
                                        alt="..."
                                    />
                                    <span className="px-4">EDITION</span>
                                    <div className="card-body px-4">
                                        <h5 className="card-title text-light">
                                            A beginner's guide to NFTs
                                        </h5>

                                        <div className={styles.img_box}>
                                            <img
                                                src="/Assets/Web3Image/nft_logo.png"
                                                alt=""
                                            />
                                            <button className="btn ms-3">
                                                2.30 ETH
                                            </button>
                                        </div>

                                        <p className={styles.card_des}>
                                            Non-fungible token (NFT) is a term
                                            used to describe a unique digital
                                            asset whose ownership is tracked on
                                            a blockchain, such as Ethereum.
                                        </p>

                                        <div className={styles.lower_card_text}>
                                            <h5>Linda Xie</h5>
                                            <div
                                                className={
                                                    styles.lower_img_contract
                                                }
                                            >
                                                <img
                                                    src="/Assets/Web3Image/contract_img.png"
                                                    alt=""
                                                />
                                                <p
                                                    className={
                                                        styles.lower_text
                                                    }
                                                >
                                                    0xB219...0b9f
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.lower_btn}>
                            <button className={styles.btn1}>
                                Start a Trial
                            </button>
                            <button className={styles.btn2}>
                                Launch a Project
                            </button>
                        </div>
                    </section>
                </Col>
            </Row>
        </div>
    );
};

export default Web3ContentOne;
