import React from 'react';
import styles from './MerchContentOne.module.scss';

const MerchContentOne = () => {
    const scrollToForm = () => {
        let hero = document.getElementById("contact-form");
        hero && hero.scrollIntoView();
    }

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
                    <h2>Make Your NFTs Work for you!</h2>
                    <h3>
                        You own the rights to your NFT art, might as well put them to work!

                    </h3>
                    <h3 className="py-3">
                        Create a brand around your NFT art and start making money with your NFT by putting it on merch!
                    </h3>

                    <input
                        type="button"
                        value="GET STARTED"
                        className="btn my-5"
                        onClick={scrollToForm}
                    />
                </div>

                {/* <div className={styles.cone_img}>
                    <img src="/Assets/ArcherImage/ArcherContentTwo.png" alt="" className="" />
                    <img src="/Assets/MerchImage/sone2.jpeg" alt="" className="img-fluid" />
                </div> */}

                <div className={styles.cone_img}>

                    {/* <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/1.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/4.png" alt="" className="img-fluid" />
                        
                    </div>
                    <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/5.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/1.png" alt="" className="img-fluid" />
                    </div>
                    <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/5.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/4.png" alt="" className="img-fluid" />
                        
                    </div>
                    <div className={styles.inner_img}>
                        <img src="/Assets/MerchImage/1.png" alt="" className="img-fluid" />
                        <img src="/Assets/MerchImage/1.png" alt="" className="img-fluid" />
                        
                    </div> */}

                    {/* <video className={styles.contentOneVideo}  autoplay loop controls muted>
                        <source src="/Assets/MerchImage/Shirtmoonbird10seconds.mp4" type="video/mp4" />
                    </video> */}
                    <video className={styles.contentOneVideo} loop="true" autoplay="autoplay" muted>
                        <source src="/Assets/MerchImage/Shirtmoonbird10secondsUpdate.mp4" type="video/mp4" />
                    </video>

                </div>

            </div>
        </div>
    );
};

export default MerchContentOne;