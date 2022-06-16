import React from 'react';
import SignUpMainPage from '../components/SignUpComponent/SignUpMainPage/SignUpMainPage';
import SignUpNavbar from '../components/SignUpComponent/SignUpNavbar/SignUpNavbar';
import styles from "../styles/home.module.scss";

const signup = () => {
    return (
        <div className={styles.home_container} data-aos='fade' data-aos-duration='1000'>
            <SignUpNavbar></SignUpNavbar>
            <SignUpMainPage></SignUpMainPage>
        </div>
    );
};

export default signup;