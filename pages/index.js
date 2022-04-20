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

const Home = () => {
  return (
    <div className={styles.home_container} data-aos='fade' data-aos-duration='1000'>
      <Navbar />
      <Header />
      <Ecosystem />
      <Multichains />
      {/* <Platforms /> */}
      <NFTProjects />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
