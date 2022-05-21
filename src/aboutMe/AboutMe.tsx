import React from 'react';
import styles from "./AboutMe.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {Title} from "../common/components/Title";

export const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"ABOUT ME"}/>
                <div className={styles.content}>
                    <div className={styles.info}>
                        Hello, I’m a Pavel, web-developer based on Vitebsk.
                        I have rich experience in web site design & building
                        and customization. Also I am good at html, css, react, typescript.
                    </div>
                    <div className={styles.photo}></div>
                </div>
            </div>
        </div>
    );
};