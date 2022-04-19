import React from 'react';
import styles from './Challenge.module.scss';

const Challenge = () => {
    return (
        <div className={styles.challenge}>
            <div className={styles.top_header}>
                <h1>Ready For The Challenge?</h1>
                <h2>Challenge includes one-time payment of $99.</h2>
            </div>
        </div>
    );
};

export default Challenge;