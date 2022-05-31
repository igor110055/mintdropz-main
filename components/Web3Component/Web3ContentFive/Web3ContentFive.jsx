import React from "react";
import styles from "./Web3ContentFive.module.scss";

const Web3ContentFive = () => {
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
                    <img src="/Assets/Web3Image/creator.png" alt="" />

                    <input type="button" value="GET STARTED" className="btn" />
                </div>
                <div className={styles.content_inner}>
                    <h1>Split Creator Funds</h1>
                    <h4>Multiple creators building towards the same</h4>
                    <h4>vision? No problem.</h4>
                    <h4 className="py-3">
                        Creator splits allow you to split the funds <br />{" "}
                        between multiple creators with dynamic <br />{" "}
                        percentages.
                    </h4>

                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default Web3ContentFive;
