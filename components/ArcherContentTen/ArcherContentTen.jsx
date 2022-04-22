import React from "react";
import styles from "./ArcherContentTen.module.scss";

const ArcherContentTen = () => {
    return (
        <div
            className={styles.contentFour}
            // data-aos="fade-right"
            // data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                {/* <h1>You deserve to be recognized for your hard work!</h1> */}
            </div>

            <div className={styles.content_container}>
                <div>
                    <img
                        src="/Assets/ArcherImage/ArcherContentThree.png"
                        alt=""
                    />
                </div>
                <div className={styles.content_inner}>
                    <h1>Exclusive NFT Rewards</h1>
                    <h3 className="py-5">
                        Get rewarded with exclusive digital collectibles from
                        your favorite athlete! All participants earn NFT rewards
                        for participating in "The Archer" Challenge, but only a
                        few will earn Brandin's exclusive "Finish-Line NFT" for
                        completing the challenge!
                    </h3>
                    {/* <h3>
                    For those who complete "The No Days Off" Challenge,
                    we've created something special! NDO CHAMP’S
                    "Finish-Line" NFT Collection is exclusively for those
                    who complete the challenge! This unique collection
                    CANNOT be purchased anywhere and is directly sent over
                    by NDO CHAMP to you!
                </h3> */}
                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default ArcherContentTen;
