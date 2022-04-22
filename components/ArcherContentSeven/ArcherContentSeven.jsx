import React from "react";
import styles from "./ArcherContentSeven.module.scss";

const ArcherContentSeven = () => {
    return (
        <div
            className={styles.contentTwo}
            // data-aos="fade-left"
            // data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                <h1>Real Results & Exclusive Rewards!</h1>
            </div>

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    <h2>Result-Driven Workouts!</h2>
                    {/* <h3>
                        "The Archer" Challenge begins May 1st with only 150
                        spots available!
                    </h3> */}
                    <h3 className="py-3">
                        “The Archer” Challenge will test your physical strength
                        & cardiovascular endurance with fun result-driven
                        workouts!
                    </h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div>

                <div>
                    <img
                        src="/Assets/ArcherImage/ArcherContentSeven.png"
                        alt=""
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default ArcherContentSeven;
