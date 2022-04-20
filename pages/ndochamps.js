import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Ecosystem from "../components/Ecosystem/Ecosystem";
import Multichains from "../components/Multichains/Multichains";
import Platforms from "../components/Platforms/Platforms";
import NFTProjects from "../components/NFTProjects/NFTProjects";
import Partners from "../components/Partners/Partners";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import styles from "../styles/home.module.scss";
import NdoChamps from "../components/NdoChamps/NdoChamps";
import ExclusiveNftRewords from "../components/ExclusiveNftRewords/ExclusiveNftRewords";
import ContentTwo from "../components/ContentTwo/ContentTwo";
import ContentThree from "../components/ContentThree/ContentThree";
import ContentFour from "../components/ContentFour/ContentFour";
import ContentFive from "../components/ContentFive/ContentFive";
import Challenge from "../components/Challenge/Challenge";
import NdoChampsNavbar from "../components/NdoChampsNavbar/NdoChampsNavbar";
import NdoChampsHeader from "../components/NdoChampsHeader/NdoChampsHeader";


const ndochamps = () => {
    return (
        <div className={styles.home_container} data-aos='fade' data-aos-duration='1000'>
      {/* <Navbar /> */}
      <NdoChampsNavbar></NdoChampsNavbar>
      {/* <Header /> */}
      <NdoChampsHeader></NdoChampsHeader>
      {/* <Ecosystem /> */}
      <NdoChamps></NdoChamps>
      <ExclusiveNftRewords></ExclusiveNftRewords>
      <ContentTwo></ContentTwo>
      <ContentThree></ContentThree>
      <ContentFour></ContentFour>
      <ContentFive></ContentFive>
      <Challenge></Challenge>
      
      {/* <Multichains /> */}
      {/* <Platforms /> */}
      {/* <NFTProjects /> */}
      {/* <Partners /> */}
      <ContactForm />
      <Footer />
    </div>
    );
};

export default ndochamps;