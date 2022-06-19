import React from 'react';
import styles from "./AboutMe.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"ABOUT ME"}/>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.text}><strong>Hello, I’m a Pavel</strong>, web-developer based on
                            Vitebsk.
                            I have rich experience in web site design & building
                            and customization. Also I am good at <strong>html, css, react, typescript.</strong></div>
                        <div className={styles.links}>
                            <a className={styles.buttonLink} href="#"><FontAwesomeIcon className={styles.iconButton}
                                                                                       icon={faPenToSquare}/> Write
                                me</a>
                            <a className={styles.linkSocial} href="https://www.facebook.com/dizzi.by"
                               target="_blank"><FontAwesomeIcon className={styles.iconSocial}
                                                                icon={faFacebook}/></a>
                            <a className={styles.linkSocial} href="https://github.com/Dizziby"
                               target="_blank"><FontAwesomeIcon className={styles.iconSocial}
                                                                icon={faGithub}/></a>
                            <a className={styles.linkSocial}
                               href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D0%BA%D1%83%D0%BA%D0%B0%D0%B5%D0%B2-291430229/"
                               target="_blank"><FontAwesomeIcon className={styles.iconSocial} icon={faLinkedin}/></a>
                        </div>
                    </div>
                    <div className={styles.photo}></div>
                </div>
            </div>
        </div>
    );
};