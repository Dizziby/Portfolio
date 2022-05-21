import React from 'react';
import styles from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h1 className={styles.title}>PAVEL KUKAYEU</h1>
                <div className={styles.subtitle}>I am a frontend developer.</div>
            </div>
        </div>
    );
};