import React from 'react';
import styles from './PricingCard.module.scss';

const PricingCard = () => {
    return (
        <div className={styles.PricingCard_container}>
            <div className="container">
                <div className="row">
                    <div className={styles.PricingCard_inner}>
                        <div className="card" id={styles.pricing_card_one}>
                            <div className="card-body" id={styles.card_body}>
                                <h2 className="card-title" id={styles.card_title}>BASIC</h2>
                                <h2 className="card-title" id={styles.card_title}>$79/mo</h2>
                                <p className='text-center'>+$0.50 per subscriber/mo</p>
                                <ul className={styles.card_list_text}>
                                    <li>Customizable Own Smart Contracts</li>
                                    <li>Customizable Mint Page</li>
                                    <li>20% of the income you earn on Mintdropz</li>
                                    <li>Keep 100% of Secondary Royalities </li>
                                </ul>
                                <div className={styles.price_hr}>

                                </div>
                                <ul className={styles.card_list_text}>
                                    <li>Eth, Polygon, & Algorand </li>
                                    <li>Customer Support</li>
                                </ul>

                                <div className={styles.start_btn_class}>
                                    <div id={styles.start_btn} >
                                        <a href="#" className="btn" >Start Free Trial</a>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* new */}

                        <div className="card" id={styles.pricing_card_two}>
                            <p className={styles.middle_cart_top_text}>Most Popular</p>
                            <div className="card-body" id={styles.card_body}>
                                <h2 className="card-title" id={styles.card_title}>Growth</h2>
                                <h2 className="card-title" id={styles.card_title}>$369/mo</h2>
                                <p className='text-center'>+$0.50 per subscriber/mo</p>
                                <ul className={styles.card_list_text}>
                                    <li>Fully Customizeable Smart Contracts</li>
                                    <li>Customizable Mint Page</li>
                                    <li>9% of income your earn on Mintdropz</li>
                                    <li>Keep 100% of Secondary Royalities </li>
                                </ul>
                                <div className={styles.price_hr}>

                                </div>
                                <p className='ps-3'>Everything in Basic, Plus:</p>
                                <ul className={styles.card_list_text}>
                                    <li>Onboarding Support</li>
                                    <li>All Product Features + Upgrades as Product is updated</li>
                                    <li>Eth, Polygon, Algorand Contracts</li>
                                    <li>Affiliate integrations</li>
                                    <li>Free integrations</li>
                                </ul>

                                <div className={styles.start_btn_class}>
                                    <div id={styles.start_btn} >
                                        <a href="#" className="btn" >Start Free Trial</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  */}

                        <div className="card" id={styles.pricing_card_three}>
                            <div className="card-body" id={styles.card_body}>
                                <h2 className="card-title" id={styles.card_title1}>Mintdropz PLUS</h2>
                                <h2 className="card-title" id={styles.card_title}>Contact US</h2>
                                <p className='ps-3'>Everything in Growth, Plus:</p>
                                <ul className={styles.card_list_text}>
                                    <li>One on One on Boarding</li>
                                    <li>Customer Success Manager</li>
                                    <li>3% of Income you earn on Mintdropz</li>
                                    <li>ERC 721A, 721, 1155 Options</li>
                                    <li>White-labeled branding</li>
                                    <li>Opensea Style Marketplace</li>
                                </ul>
                                {/* <div className={styles.price_hr}>

                        </div> */}
                                <p className='ps-3'>Scale with confidence</p>
                                <ul className={styles.card_list_text}>
                                    <li>API Access For All Features</li>
                                    <li>Support for your customers</li>
                                    <li>Customization</li>
                                </ul>

                                <div className={styles.start_btn_class}>
                                    <div id={styles.start_btn} >
                                        <a href="#" className="btn" >Start Free Trial</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PricingCard;