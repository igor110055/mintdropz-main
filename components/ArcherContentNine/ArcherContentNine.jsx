import React from "react";
import styles from "./ArcherContentNine.module.scss";

const ArcherContentNine = () => {
    return (
        <div
            className={styles.contentTwo}
            // data-aos="fade-left"
            // data-aos-duration="1000"
        >
            {/* <div className={styles.top_header}>
                <h1>CHALLENGE YOURSELF & GET REWARDED </h1>
            </div> */}

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    <h2>NFT REWARDS FOR THOSE WHO COMPLETE THE CHALLENGE:</h2>
                    {/* <h3>
                        "The Archer" Challenge begins May 1st with only 150
                        spots available!
                    </h3> */}
                    <h3 className="py-3">
                        Limited-Edition “Finish-Line” NFT Members Only App Entry
                        to meet Brandin 1-on-1
                    </h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div>

                <div className={styles.imageContainer}>
                    <img
                        src="/Assets/ArcherImage/ArcherContentNine.png"
                        alt=""
                        className=""
                    />
                    {/* <section className={styles.img_sec}>
                        <img
                            alt="rich"
                            src="/Assets/ArcherImage/ArcherHeader1.png"
                        />
                        <img
                            alt="rich"
                            className={styles.midimg}
                            src="/Assets/ArcherImage/ArcherHeader2.png"
                        />
                        <img
                            alt="rich"
                            src="/Assets/ArcherImage/ArcherHeader3.png"
                        />
                    </section> */}
                </div>
            </div>
        </div>
    );
};

export default ArcherContentNine;
