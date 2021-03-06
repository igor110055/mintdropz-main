import React from "react";
import styles from "./ArcherContentTwo.module.scss";

const ArcherContentTwo = () => {
    return (
        <div
            className={styles.contentTwo}
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                <h1>CHALLENGE YOURSELF & GET REWARDED </h1>
            </div>

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    <h2>Want to train like the Pros?</h2>
                    <h3>
                        "The Archer" Challenge begins May 1st with only 150
                        spots available!
                    </h3>
                    <h3 className="py-3">
                        You'll have full access to Brandin's Challenges, his
                        Private Community, his Exclusive NFT Collectibles, and
                        his Personalized Training App!
                    </h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div>

                <div>
                    <img src="/Assets/ArcherImage/ArcherContentTwo.png" alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default ArcherContentTwo;
