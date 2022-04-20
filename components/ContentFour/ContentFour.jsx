import React from "react";
import styles from "./ContentFour.module.scss";

const ContentFour = () => {
    return (
        <div className={styles.contentFour} data-aos='fade-left' data-aos-duration='1000'>
            <div className={styles.top_header}>
                <h1>You deserve to be recognized for your hard work!</h1>
            </div>

            <div className={styles.content_container}>
                <div>
                    <img src="/Assets/NewImage/content4.png" alt="" />
                </div>
                <div className={styles.content_inner}>
                    <h3>
                        NDO CHAMP’S giving all participants his exclusive
                        Genesis NFT Collection! This Collection includes 200
                        unique collectibles for his community!
                    </h3>
                    <h3 className="py-5">
                        For those who complete "The No Days Off" Challenge,
                        we've created something special! NDO CHAMP’S
                        "Finish-Line" NFT Collection is exclusively for those
                        who complete the challenge! This unique collection
                        CANNOT be purchased anywhere and is directly sent over
                        by NDO CHAMP to you!
                    </h3>
                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default ContentFour;
