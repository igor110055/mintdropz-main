import React from 'react';
import styles from './ArcherContentEleven.module.scss';

const ArcherContentEleven = () => {
    return (
        <div className={styles.ndo_container}>
            <div className={styles.top_header}>
                <h1>Brandin "The Archer" Cooks</h1>
            </div>
            <div className={styles.innertext}>
                <p>
                Your subscription will begin at $24.99 USD on May 1st, 2022
                </p>
                {/* <p>Learn how to play like the pros!</p> */}
            </div>
            <div className={styles.ndo_card}>
                <div className={styles.card}>
                    <img
                        src="/Assets/ArcherImage/ArcherContentEleven.png"
                        className="card-img-top"
                        alt="..."
                    />
                    {/* <div className="card-body d-flex justify-content-between">
                        <div className="">
                            <h5 className="card-title text-white">
                                Lorem Ipsum
                            </h5>
                            <p className="">0000</p>
                        </div>
                        <div>
                            <h5 className="text-white">Top Bid</h5>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className={styles.test_btn}>
                <input type="submit" value="ACCEPT THE CHALLENGE" className="btn text-white" />
            </div> */}
        </div>
    );
};

export default ArcherContentEleven;