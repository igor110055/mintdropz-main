import React from "react";
import styles from "./Web3ContentSeven.module.scss";

const Web3ContentSeven = () => {
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
                    <img src="/Assets/Web3Image/shopify.png" alt="" />

                    <input type="button" value="GET STARTED" className="btn" />
                </div>
                <div className={styles.content_inner}>
                    <h1>Your Own E-Commerce Platform For Your Designs</h1>
                    <h4 className="py-4">
                        Simple way to take crypto or credit card <br /> payments
                        for your merch! Put your NFT <br /> design on T-Shirts,
                        Hoodies, Tanks, or even<br />posters!
                    </h4>
                    {/* <h4>
                        Creator splits allow you to split the funds between
                        multiple creators with dynamic percentages.
                    </h4> */}
                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default Web3ContentSeven;
