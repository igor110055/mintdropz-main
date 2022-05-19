import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import MerchContactForm from '../components/MerchComponent/MerchContactForm/MerchContactForm';
import MerchContentFive from '../components/MerchComponent/MerchContentFive/MerchContentFive';
import MerchContentFour from '../components/MerchComponent/MerchContentFour/MerchContentFour';
import MerchContentOne from '../components/MerchComponent/MerchContentOne/MerchContentOne';
import MerchContentThree from '../components/MerchComponent/MerchContentThree/MerchContentThree';
import MerchContentTwo from '../components/MerchComponent/MerchContentTwo/MerchContentTwo';
import MerchFooter from '../components/MerchComponent/MerchFooter/MerchFooter';
import MerchPartner from '../components/MerchComponent/MerchPartner/MerchPartner';
import MerchHeader from '../components/MerchHeader/MerchHeader';
import MerchNavbar from '../components/MerchNavbar/MerchNavbar';
import Partners from '../components/Partners/Partners';
import styles from "../styles/home.module.scss";

const merch = () => {
    return (
        <div className={styles.home_container} data-aos='fade' data-aos-duration='1000'>
        {/* <ArcherNavbar></ArcherNavbar> */}
        <MerchNavbar></MerchNavbar>
        <MerchHeader></MerchHeader>
        <MerchContentOne></MerchContentOne>
        <MerchContentTwo></MerchContentTwo>
        {/* <MerchContentThree></MerchContentThree> */}
        <MerchContentFour></MerchContentFour>
        <MerchContentFive></MerchContentFive>

        {/* <NdoChampsNavbar></NdoChampsNavbar> */}

        {/* <ArcherHeader></ArcherHeader> */}

        {/* <NdoChampsHeader></NdoChampsHeader> */}
        {/* <NdoChamps></NdoChamps> */}

        {/* <ArcherContentOne></ArcherContentOne> */}

        {/* <ExclusiveNftRewords></ExclusiveNftRewords> */}
        {/* <ContentTwo></ContentTwo> */}

        {/* <ArcherContentTwo></ArcherContentTwo> */}

        {/* <ContentThree></ContentThree> */}
        {/* <ContentFour></ContentFour> */}

        {/* <ArcherContentThree></ArcherContentThree>
        <ArcherContentFour></ArcherContentFour>
        <ArcherContentFive></ArcherContentFive>
        <ArcherContentSix></ArcherContentSix>
        <ArcherContentSeven></ArcherContentSeven>
        <ArcherContentEight></ArcherContentEight>
        <ArcherContentNine></ArcherContentNine>
        <ArcherChallenge></ArcherChallenge>
        <ArcherContentTen></ArcherContentTen>
        <ArcherContentEleven></ArcherContentEleven> */}

        {/* <ContentFive></ContentFive> */}
        {/* <Challenge></Challenge> */}

        {/* <Partners /> */}
        <MerchPartner></MerchPartner>

        {/* <ContactForm /> */}

        <MerchContactForm></MerchContactForm>

        <MerchFooter></MerchFooter>
        {/* <Footer /> */}
    </div>
    );
};

export default merch;