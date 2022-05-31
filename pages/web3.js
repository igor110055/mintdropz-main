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
import MerchFooter from '../components/MerchComponent/MerchFooter/MerchFooter';
import NdoChamps from '../components/NdoChamps/NdoChamps';
import NdoChampsHeader from '../components/NdoChampsHeader/NdoChampsHeader';
import Partners from '../components/Partners/Partners';
import Web3ContentEight from '../components/Web3Component/Web3ContentEight/Web3ContentEight';
import Web3ContentEleven from '../components/Web3Component/Web3ContentEleven/Web3ContentEleven';
import Web3ContentFive from '../components/Web3Component/Web3ContentFive/Web3ContentFive';
import Web3ContentFour from '../components/Web3Component/Web3ContentFour/Web3ContentFour';
import Web3ContentNine from '../components/Web3Component/Web3ContentNine/Web3ContentNine';
import Web3ContentOne from '../components/Web3Component/Web3ContentOne/Web3ContentOne';
import Web3ContentSeven from '../components/Web3Component/Web3ContentSeven/Web3ContentSeven';
import Web3ContentSix from '../components/Web3Component/Web3ContentSix/Web3ContentSix';
import Web3ContentTen from '../components/Web3Component/Web3ContentTen/Web3ContentTen';
import Web3ContentThree from '../components/Web3Component/Web3ContentThree/Web3ContentThree';
import Web3ContentTwo from '../components/Web3Component/Web3ContentTwo/Web3ContentTwo';
import Web3Footer from '../components/Web3Component/Web3Footer/Web3Footer';
import Web3Header from '../components/Web3Component/Web3Header/Web3Header';
import Web3Navbar from '../components/Web3Component/Web3Navbar/Web3Navbar';
import Web3Partner from '../components/Web3Component/Web3Partner/Web3Partner';
import styles from "../styles/home.module.scss";

const web3 = () => {
    return (
        <div className={styles.home_container} data-aos='fade' data-aos-duration='1000'>
            {/* <ArcherNavbar></ArcherNavbar> */}
            <Web3Navbar></Web3Navbar>

            {/* <NdoChampsNavbar></NdoChampsNavbar> */}
            {/* <ArcherHeader></ArcherHeader> */}
            <Web3Header></Web3Header>
            <Web3ContentOne></Web3ContentOne>
            <Web3ContentTwo></Web3ContentTwo>
            <Web3ContentThree></Web3ContentThree>
            <Web3ContentFour></Web3ContentFour>
            <Web3ContentFive></Web3ContentFive>
            <Web3ContentSix></Web3ContentSix>
            <Web3ContentSeven></Web3ContentSeven>
            <Web3ContentEight></Web3ContentEight>
            <Web3Partner></Web3Partner>
            <Web3ContentNine></Web3ContentNine>
            <Web3ContentTen></Web3ContentTen>
            <Web3ContentEleven></Web3ContentEleven>
            <Web3Footer></Web3Footer>
            

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
            {/* <ContactForm /> */}
            {/* <MerchFooter></MerchFooter> */}
            
        </div>
    );
};

export default web3;