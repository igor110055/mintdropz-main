import React from "react";
import styles from "./Web3ContentThree.module.scss";

const Web3ContentThree = () => {
    return (
        <div
            className={styles.Web3ContentThree}
            // data-aos="fade-left"
            // data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                {/* <h1>You deserve to be recognized for your hard work!</h1> */}
            </div>

            <div className={styles.content_container}>
                <div className={styles.img_container}>
                    <img
                        // src="/Assets/ArcherImage/ArcherContentFive.png"
                        src="/Assets/Web3Image/smart_contact.png"
                        alt=""
                    />
                    <input type="button" value="GET STARTED" className="btn" />
                </div>
                <div className={styles.content_inner}>
                    <h1>Launch Smart Contracts, On Any Chain</h1>
                    <h4 className="py-4">
                        When you own your keys, you own your Contract.
                    </h4>
                    <h4>
                        Plug & play contracts on all major blockchains give you
                        the power to build powerful Web3 applications, with ease
                    </h4>
                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default Web3ContentThree;
