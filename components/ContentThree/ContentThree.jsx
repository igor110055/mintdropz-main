import React from "react";
import styles from "./ContentThree.module.scss";

const contentThree = () => {
    return (
        <div className={styles.contentThree}>
            <div className={styles.top_header}>
                <h1>Real Results & Exclusive Rewards!</h1>
                <h2>Result-Driven Workouts!</h2>
            </div>

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    <h3>
                        “The No Days Off” Challenge will test your physical
                        strength, Mental Toughness, Bodybuilding IQ, and
                        Cardiovascular Endurance with fun, intense,
                        result-driven workouts! NO MORE LOOKING WEAK!
                    </h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div>

                <div>
                    <img src="/Assets/NewImage/content3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default contentThree;
