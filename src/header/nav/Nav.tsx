import React from 'react';
import styles from "./Nav.module.css"


export const Nav = () => {
    return (
        <div className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">My Skills</a>
                <a href="#">My Project</a>
                <a href="#">Contacts</a>
        </div>
    );
};