import React, { ReactElement } from "react"

import styles from "./Nav.module.scss"

export const Nav = (): ReactElement => (
    <div className={styles.nav}>
        <div className={styles.container}>
            <a href="/#">Home</a>
            <a href="/#">About Me</a>
            <a href="/#">Resume</a>
            <a href="/#">My Project</a>
            <a href="/#">Contacts</a>
        </div>
    </div>
)
