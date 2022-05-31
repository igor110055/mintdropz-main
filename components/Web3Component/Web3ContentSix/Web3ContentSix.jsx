import React from "react";
import styles from "./Web3ContentSix.module.scss";

const Web3ContentSix = () => {
    return (
        <div
            className={styles.Web3ContentFour}
            // data-aos="fade-left"
            // data-aos-duration="1000"
        >
            {/* <div className={styles.top_header}>
                <h1>CHALLENGE YOURSELF & GET REWARDED </h1>
            </div> */}

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    <h1>Fully Customizable</h1>
                    {/* <h4>
                        Multiple creators building towards the same vision? No
                        problem.
                    </h4> */}
                    <h4 className="py-3">
                        Completely Dyanmic Front End and Backend
                    </h4>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div>

                <div className={styles.img_container}>
                    <img src="/Assets/Web3Image/cms.png" alt="" className="" />

                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default Web3ContentSix;
