import React from "react";
import styles from "./ContentFive.module.scss";

const ContentFive = () => {
    return (
        <div className={styles.contentFive}>
            <div className={styles.top_header}>
                <h1>NFT REWARDS FOR THOSE WHO COMPLETE THE CHALLENGE:</h1>
                <h2>
                    Limited-Edition “Finish-Line” NFT Members Only NDO App Entry
                    to meet NDO CHAMP 1-on-1
                </h2>
            </div>

            <div className={styles.content_container}>
               
                <div className={styles.content_inner}>
                    <img src="/Assets/NewImage/content5.png" alt="" />
                </div>
                <div className="text-center">
                <input type="button" value="GET STARTED" className="btn my-5" />
                </div>
            </div>
        </div>
    );
};

export default ContentFive;
