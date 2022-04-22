import React from "react";
import styles from "./ArcherContentEight.module.scss";

const ArcherContentEight = () => {
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
                        src="/Assets/ArcherImage/ArcherContentFive.png"
                        alt=""
                    />
                </div>
                <div className={styles.content_inner}>
                    <h1>You deserve to be rec ognized for your hard work!</h1>
                    <h3 className="py-5">
                        Brandin's giving all participants his exclusive Genesis
                        NFT Collection! This Collection includes 150 unique
                        collectibles for his community! For those who complete
                        "The Archer" Challenge, we've created something special!
                        Brandin's "Finish-Line" NFT Collection is exclusively
                        for those who complete the challenge! This unique
                        collection CANNOT be purchased anywhere and is directly
                        sent over by Brandin to you!
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

export default ArcherContentEight;
