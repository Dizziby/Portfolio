import React from 'react';
import styles from "./Footer.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Link} from "./link/Link";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h3 className={styles.title}>PAVEL KUKAYEU</h3>
                <div className={styles.links}>
                    <Link name={"facebook"}/>
                    <Link name={"github"}/>
                    <Link name={"linkedin"}/>
                </div>
                <div className={styles.copyright}>All rights reserved</div>
            </div>
        </div>
    );
};