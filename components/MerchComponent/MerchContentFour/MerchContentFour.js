import React from 'react';
import styles from './MerchContentFour.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faArrowRotateRight, faCheck, faCirclePlus, faCoffee, faImage, faPlus, faStarOfLife, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'

const MerchContentFour = () => {
    return (
        <div
            className={styles.contentFour}
        // data-aos="fade-left"
        // data-aos-duration="1000"
        >
            <div className={styles.top_header}>
                {/* <h1>You deserve to be recognized for your hard work!</h1> */}
            </div>

            <div className={styles.content_container}>
                {/* <div className={styles.cone_img}>
                    <img src="/Assets/MerchImage/1.png" alt="" />
                </div> */}

                {/*  */}
                <div className="col-md-6 d-flex">
                    <div>
                        {/* <h4>Add to canvas</h4>
                    <p className='py-3'>Write text or upload an image to be placed on your product.</p> */}
                        <div className={styles.left_sided_Product_icon}>
                            <button className={styles.btnbd}><FontAwesomeIcon className={styles.fa_icon} icon={faA} /> Text</button>
                            <button className={styles.btnbd}><FontAwesomeIcon className={styles.fa_icon} icon={faStarOfLife} /> Symbol</button>
                            <button className={styles.btnbd}><FontAwesomeIcon className={styles.fa_icon} icon={faImage} /> Image</button>
                            <div className={styles.hr}>
                                <hr className='' />
                            </div>

                        </div>

                        <h4 className='text-white'>Selected products</h4>
                        <p className='py-3 mr-5 text-white'>You can select multiple different products and colors. Click on individual products for preview.</p>
                        <div className='d-flex'>
                            <img src='/Assets/MerchImage/t-shirt.png' className={styles.tshirt_small} style={{ background: `#fff` }} alt="" />
                            <img src='/Assets/MerchImage/jamper.png' className={styles.tshirt_small} style={{ background: `#fff`, marginLeft: '10px' }} alt="" />
                            <div className={styles.fa_plus} data-toggle="modal" data-target="#exampleModal"><FontAwesomeIcon icon={faPlus} size='2x' /></div>
                        </div>
                        <div className={styles.hr}>
                            <hr className='' />
                        </div>

                        {/* <div className='d-flex'>
                        <h6 className='mr-3 zoom'><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /> Zoom in</h6>
                        <h6 className='show'><FontAwesomeIcon icon={faArrowRotateRight} /> Show back</h6>
                    </div> */}

                        <div className={styles.fa_zoom_show}>
                            <h6 className={styles.zoom}><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /> Zoom in</h6>
                            <h6 className={styles.show}><FontAwesomeIcon icon={faArrowRotateRight} /> Show back</h6>
                        </div>

                        <div className={styles.hr}>
                            <hr className='' />
                        </div>
                        <h4 className='text-white'>Need any help?</h4>
                    </div>

                    <div className={styles.middle_img}>
                        {/* <img src='/Assets/MerchImage/jamper.png' alt="" /> */}
                        <img src='/Assets/MerchImage/jamper2.png' alt="" />

                        {/* <div>
                            <img src='/Assets/MerchImage/smallinnerimg.png' className={styles.inner_img} alt="" />
                        </div> */}
                    </div>


                </div>
                {/*  */}
                <div className={styles.content_inner}>
                    <h1>
                        No Inventory Cost, No Cost To Sell</h1>
                    <h3 className="py-5">
                        You don't need to pay a single dollar for starting your merch line.

                    </h3>
                    <h3>
                        Simply design, and start selling!
                    </h3>
                    <h3>We win only if you do! Mintdropz Merch only takes a commission of the sales </h3>
                    {/* <h3>
                    For those who complete "The No Days Off" Challenge,
                    we've created something special! NDO CHAMP’S
                    "Finish-Line" NFT Collection is exclusively for those
                    who complete the challenge! This unique collection
                    CANNOT be purchased anywhere and is directly sent over
                    by NDO CHAMP to you!
                </h3> */}
                    <input type="button" value="GET STARTED" className="btn mt-5" />
                </div>
            </div>
        </div>
    );
};

export default MerchContentFour;