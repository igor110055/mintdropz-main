import React from "react";
import styles from "./ArcherContentSix.module.scss";

const ArcherContentSix = () => {
    return (
        <div
            className={styles.contentFour}
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                <h1>LIMITED SEATING!</h1>
            </div>

            <div className={styles.content_container}>
                <div>
                    <img
                        src="/Assets/ArcherImage/ArcherContentSix.png"
                        alt=""
                    />
                </div>
                <div className={styles.content_inner}>
                    <h1>Sign-up now before this challenge is sold out!</h1>
                    <h3 className="py-5">
                        Over the next six weeks Brandin will challenge you to
                        complete the same workouts and recovery routine he does
                        to take his game to the next level!
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

export default ArcherContentSix;
