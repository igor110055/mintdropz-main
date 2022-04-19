import React from "react";
import styles from "./ndo-chams.module.scss";

const NdoChamps = () => {
    return (
        <div className={styles.ndo_container}>
            <div className={styles.top_header}>
                <h1>NDO CHAMPS</h1>
            </div>
            <div className={styles.innertext}>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </div>
            <div className={styles.ndo_card}>
                <div className={styles.card}>
                    <img
                        src="/Assets/NewImage/Rectangle14.png"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body d-flex justify-content-between">
                        <div className="">
                            <h5 className="card-title text-white">
                                Lorem Ipsum
                            </h5>
                            <p className="">0000</p>
                        </div>
                        <div><h5 className="text-white">Top Bid</h5></div>
                    </div>
                </div>
            </div>
            <div className={styles.test_btn}>
                <input type="submit" value="ACCEPT THE CHALLENGE" className="btn text-white" />
            </div>
        </div>
    );
};

export default NdoChamps;
