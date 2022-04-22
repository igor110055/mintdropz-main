import React from "react";
import styles from "./ArcherContentOne.module.scss";

const ArcherContentOne = () => {
    return (
        <div className={styles.ndo_container}>
            <div className={styles.top_header}>
                <h1>Brandin Cooks</h1>
            </div>
            <div className={styles.innertext}>
                <h3>
                    Drafted by the New Orleans Saints in 2014 out of Oregon
                    State, Cooks has been one of the more consistent receivers
                    in the NFL. In eight years, he's surpassed the 1,000-yard
                    marker six times, including twice with the Texans and
                    Saints.
                </h3>
                <h3>Learn how to play like the pros!</h3>
            </div>
            <div className={styles.ndo_card}>
                <div className={styles.card}>
                    <img
                        src="/Assets/ArcherImage/ArcherContentOne.png"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body d-flex justify-content-between">
                        <div className="">
                            <h5 className="card-title text-white">
                                Lorem Ipsum
                            </h5>
                            <p className="text-white">0000</p>
                        </div>
                        <div>
                            <h5 className="text-white">Top Bid</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.test_btn}>
                <input type="submit" value="ACCEPT THE CHALLENGE" className="btn text-white" />
            </div> */}
        </div>
    );
};

export default ArcherContentOne;
