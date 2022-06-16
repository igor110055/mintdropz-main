import React from 'react';
import styles from './PricingFooter.module.scss';

const PricingFooter = () => {
    return (
        <div className={styles.PricingFooter_container}>
            <div className={styles.footer_text}>
                <h4>The Future Awaits For You</h4>
            </div>
            {/* for only mobile device start */}
            <div className={styles.footer_text_for_mobile}>
                <h4>Our team awaits your message.</h4>
            </div>
            <div className={styles.footer_contact_info_for_mobile}>
                <img src="/Assets/head_phone.png" alt="" />
                <p>+1 xxx-xxx-xxxx</p>
            </div>
            <div className={styles.footer_btn_for_mobile}>
                <button className="btn" id={styles.get_started_btn}>Create a free channel</button>
                <button className="btn" id={styles.get_contact_btn}>Contact</button>
                <button className="btn" id={styles.get_speak_btn}>Speak now</button>
            </div>
            {/* for only mobile device end */}

            <div className={styles.footer_btn}>
                <button className="btn" id={styles.get_started_btn}>GET STARTED</button>
                <button className="btn" id={styles.get_contact_btn}>CONTACT SALES</button>
            </div>

        </div>
    );
};

export default PricingFooter;