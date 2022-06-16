import React from 'react';
import PricingCard from '../components/PricingComponent/PricingCard/PricingCard';
import PricingFooter from '../components/PricingComponent/PricingFooter/PricingFooter';
import PricingHeader from '../components/PricingComponent/PricingHeader/PricingHeader';
import PricingNavbar from '../components/PricingComponent/PricingNavbar/PricingNavbar';
import styles from "../styles/pricing.module.scss";

const pricing = () => {
    return (
        <div className={styles.pricing_container} data-aos='fade' data-aos-duration='1000'>
            <PricingNavbar></PricingNavbar>
            <PricingHeader></PricingHeader>
            <PricingCard></PricingCard>
            <PricingFooter></PricingFooter>
            
        </div>
    );
};

export default pricing;