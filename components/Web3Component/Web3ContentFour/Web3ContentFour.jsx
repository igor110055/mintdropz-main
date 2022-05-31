import React from "react";
import styles from "./Web3ContentFour.module.scss";

const Web3ContentFour = () => {
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
                    <h1>Split Creator Funds</h1>
                    <h4>Multiple creators building towards the same</h4>
                    <h4>vision? No problem.</h4>
                    <h4 className="py-3">
                        Creator splits allow you to split the funds <br />{" "}
                        between multiple creators with dynamic <br />{" "}
                        percentages.
                    </h4>

                    {/* <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    /> */}
                </div>

                <div className={styles.img_container}>
                    <img
                        src="/Assets/Web3Image/creator.png"
                        alt=""
                        className=""
                    />

                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default Web3ContentFour;
