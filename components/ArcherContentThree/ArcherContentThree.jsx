import React from "react";
import styles from "./ArcherContentThree.module.scss";

const ArcherContentThree = () => {
    return (
        <div
            className={styles.contentFour}
            // data-aos="fade-left"
            // data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                {/* <h1>You deserve to be recognized for your hard work!</h1> */}
            </div>

            <div className={styles.content_container}>
                <div>
                    <img src="/Assets/ArcherImage/ArcherContentThree1.png" alt="" />
                </div>
                <div className={styles.content_inner}>
                    <h1>It's time for you to be rewarded for your efforts!</h1>
                    <h3 className="py-5">
                    Brandin Cooks' "The Archer" 6-Week Training Program brings you the results you're looking for & the rewards you deserve!
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

export default ArcherContentThree;
