import React from 'react';
import styles from "./Header.module.css"
import {Nav} from "../nav/Nav";
import stylesContainer from "../common/styles/Container.module.css";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Nav />
            </div>
        </div>
    );
};