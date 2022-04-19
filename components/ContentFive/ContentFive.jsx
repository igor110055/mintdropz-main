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
                {/* <div className={styles.content_inner}>
                    <h3>
                        To keep the experience personalized this challenge is
                        only available to the first 200 participants! Absolutely
                        No Exceptions!
                    </h3>
                    <h3 className="py-5">
                        Sign-up now to reserve your spot before the May 15th
                        start date!
                    </h3>
                    <h3>
                        “The No Days Off” Challenge gives you full access to NDO
                        CHAMP’S Exclusive Challenges, his Private Community, and
                        Limited-Edition NFTs.
                    </h3>
                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div> */}

                <div className="text-center">
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
