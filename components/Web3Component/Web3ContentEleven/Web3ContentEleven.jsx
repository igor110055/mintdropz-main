import React from "react";
import styles from "./Web3ContentEleven.module.scss";

const Web3ContentEleven = () => {
    return (
        <div className={styles.web3_content_eleven_container}>
            <div className={styles.input_group}>
                <input
                    type="button"
                    value="Read the mission"
                    className={styles.read_btn}
                />
                <input type="button" value="Join Discord" className={styles.discord_btn} />
            </div>

            <h2 className={styles.text_start}>GET STARTED</h2>
            <div className={styles.lower_input}>
                <input
                    type="button"
                    value="Sign Up For Early Access"
                    className="ms-md-5"
                />
            </div>
        </div>
    );
};

export default Web3ContentEleven;
