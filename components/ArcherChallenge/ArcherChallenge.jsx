import React from "react";
import styles from "./ArcherChallenge.module.scss";

const ArcherChallenge = () => {
    return (
        <div className={styles.challenge}>
            <div className={styles.top_header}>
                <h1>Ready For The Challenge?</h1>
                <h2>Challenge includes one-time payment of $99.</h2>
            </div>
            <div className="text-center">
                <input
                    type="button"
                    value="GET STARTED"
                    className="btn"
                />
            </div>
        </div>
    );
};

export default ArcherChallenge;
