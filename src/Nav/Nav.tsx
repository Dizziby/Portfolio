import React from 'react';
import styles from "./Nav.module.css"
import stylesContainer from "../common/styles/Container.module.css"

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">My Skills</a>
                <a href="#">My Project</a>
                <a href="#">Contacts</a>
            </div>

        </div>
    );
};