import React from 'react';
import ArcherChallenge from '../components/ArcherChallenge/ArcherChallenge';
import ArcherContentEight from '../components/ArcherContentEight/ArcherContentEight';
import ArcherContentEleven from '../components/ArcherContentEleven/ArcherContentEleven';
import ArcherContentFive from '../components/ArcherContentFive/ArcherContentFive';
import ArcherContentFour from '../components/ArcherContentFour/ArcherContentFour';
import ArcherContentNine from '../components/ArcherContentNine/ArcherContentNine';
import ArcherContentOne from '../components/ArcherContentOne/ArcherContentOne';
import ArcherContentSeven from '../components/ArcherContentSeven/ArcherContentSeven';
import ArcherContentSix from '../components/ArcherContentSix/ArcherContentSix';
import ArcherContentTen from '../components/ArcherContentTen/ArcherContentTen';
import ArcherContentThree from '../components/ArcherContentThree/ArcherContentThree';
import ArcherContentTwo from '../components/ArcherContentTwo/ArcherContentTwo';
import ArcherHeader from '../components/ArcherHeader/ArcherHeader';
import ArcherNavbar from '../components/ArcherNavbar/ArcherNavbar';
import ContactForm from '../components/ContactForm/ContactForm';
import ContentFour from '../components/ContentFour/ContentFour';
import ContentTwo from '../components/ContentTwo/ContentTwo';
import Footer from '../components/Footer/Footer';
import NdoChamps from '../components/NdoChamps/NdoChamps';
import NdoChampsHeader from '../components/NdoChampsHeader/NdoChampsHeader';
import styles from "../styles/home.module.scss";

const archer = () => {
    return (
        <div className={styles.home_container} data-aos='fade' data-aos-duration='1000'>
            <ArcherNavbar></ArcherNavbar>

            {/* <NdoChampsNavbar></NdoChampsNavbar> */}
            <ArcherHeader></ArcherHeader>

            {/* <NdoChampsHeader></NdoChampsHeader> */}
            {/* <NdoChamps></NdoChamps> */}
            <ArcherContentOne></ArcherContentOne>
            {/* <ExclusiveNftRewords></ExclusiveNftRewords> */}
            {/* <ContentTwo></ContentTwo> */}
            <ArcherContentTwo></ArcherContentTwo>
            {/* <ContentThree></ContentThree> */}
            {/* <ContentFour></ContentFour> */}
            <ArcherContentThree></ArcherContentThree>
            <ArcherContentFour></ArcherContentFour>
            <ArcherContentFive></ArcherContentFive>
            <ArcherContentSix></ArcherContentSix>
            <ArcherContentSeven></ArcherContentSeven>
            <ArcherContentEight></ArcherContentEight>
            <ArcherContentNine></ArcherContentNine>
            <ArcherChallenge></ArcherChallenge>
            <ArcherContentTen></ArcherContentTen>
            <ArcherContentEleven></ArcherContentEleven>
            {/* <ContentFive></ContentFive> */}
            {/* <Challenge></Challenge> */}
            <ContactForm />
            <Footer />
        </div>
    );
};

export default archer;