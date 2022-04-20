import React from "react";
import styles from "./ExclusiveNftRewords.module.scss";

const ExclusiveNftRewords = () => {
    return (
        <div className={styles.exclusive_nft} data-aos='fade-right' data-aos-duration='1000'>
            <div className={styles.top_header}>
                <h1>Exclusive NFT Rewards</h1>
            </div>

            <div className={styles.content_container}>
                <div>
                    <img src="/Assets/NewImage/image2.png" alt="" />
                </div>
                <div className={styles.content_inner}>
                    <h3>
                        Ge-t rewarded with exclusive digital collectibles from
                        your favorite athlete!
                    </h3>
                    <h3 className="py-5">
                        All participants earn NFT rewards for participating in
                        "The No Days Off" Challenge, but only a few will earn
                        NDO CHAMP'S exclusive "Finish-Line NFT" for completing
                        the challenge!
                    </h3>
                    <input type="button" value="GET STARTED" className="btn" />
                </div>
            </div>
        </div>
    );
};

export default ExclusiveNftRewords;
