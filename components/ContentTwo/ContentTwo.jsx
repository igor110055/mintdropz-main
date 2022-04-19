import React from "react";
import styles from "./ContentTwo.module.scss";

const ContentTwo = () => {
    return (
        <div className={styles.contentTwo}>
            <div className={styles.top_header}>
                <h1>LIMITED SEATING!</h1>
                <h2>Sign-up now before this challenge is sold out!</h2>
            </div>

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
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
                    <input type="button" value="GET STARTED" className="btn my-5" />
                </div>

                <div>
                    <img src="/Assets/NewImage/content2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContentTwo;
