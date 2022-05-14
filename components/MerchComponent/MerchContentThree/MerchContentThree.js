import React from 'react';
import styles from './MerchContentThree.module.scss'

const MerchContentThree = () => {
    return (
        <div
            className={styles.contentTwo}
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                {/* <h1>CHALLENGE YOURSELF & GET REWARDED </h1> */}
            </div>

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    {/* <h2>Make Your NFTs Work for you!</h2> */}
                    <h2>
                        Your Own E-Commerce Platform For Your Designs
                    </h2>
                    <h3 className="py-3">
                        Simple way to take crypto or credit card payments for your merch! Put your NFT design on T-Shirts, Hoodies, Tanks, or even posters!
                    </h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                    />
                </div>

                <div className={styles.cone_img}>
                    {/* <img src="/Assets/ArcherImage/ArcherContentTwo.png" alt="" className="" /> */}

                    <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                    </div>
                    <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MerchContentThree;