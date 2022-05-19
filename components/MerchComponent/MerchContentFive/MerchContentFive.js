import React from 'react';
import styles from './MerchContentFive.module.scss'

const MerchContentFive = () => {
    const scrollToForm = () => {
        let hero = document.getElementById("contact-form");
        hero && hero.scrollIntoView();
    }

    return (
        <div
            className={styles.contentTwo}
        // data-aos="fade-right"
        // data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                {/* <h1>CHALLENGE YOURSELF & GET REWARDED </h1> */}
            </div>

            <div className={styles.content_container}>
                <div className={styles.content_inner}>
                    {/* <h2>Make Your NFTs Work for you!</h2> */}
                    <h2>
                        We Take Care Of The Work For You
                    </h2>
                    <h3 className="py-3">
                        You won’t need to find a manufacturer, coordinate shipping, or deal with order management

                    </h3>
                    <h3>You simply design and sell, we take care of the rest for you!</h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                        onClick={scrollToForm}
                    />
                </div>

                {/* <div className={styles.cone_img}>
                    <img src="/Assets/ArcherImage/ArcherContentTwo.png" alt="" className="" />
                    <img src="/Assets/MerchImage/4.png" alt="" className="img-fluid" />
                </div> */}

                <div className={styles.cone_img}>
                    {/* <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                    </div>
                    <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/shopify.png" alt="" className="img-fluid" />
                    </div> */}



                    <video className={styles.contentFiveVideo} loop="true" autoplay="autoplay" muted>
                        <source src="/Assets/MerchImage/websiteedit.mp4" type="video/mp4" />
                    </video>

                </div>


            </div>
        </div>
    );
};

export default MerchContentFive;