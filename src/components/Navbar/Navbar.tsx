import React from 'react';
import styles from "./Navbar.module.scss"
import {faEnvelope, faEye, faGear, faHouse, faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.linksPage}>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faHouse}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faUser}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faGear}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faEnvelope}/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faEye}/></a>
            </div>
            <div className={styles.linksSocial}>
                <a href="https://www.facebook.com/dizzi.by" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faFacebook}/></a>
                <a href="https://github.com/Dizziby" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D0%BA%D1%83%D0%BA%D0%B0%D0%B5%D0%B2-291430229/" target="_blank"><FontAwesomeIcon className={styles.icon} icon={faLinkedin}/></a>
            </div>
        </div>
    );
};