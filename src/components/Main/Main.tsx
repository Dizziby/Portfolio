import React, { ReactElement } from "react"

import Typed from "react-typed"

import stylesContainer from "../../common/styles/Container.module.scss"

import styles from "./Main.module.scss"

export const Main = (): ReactElement => (
    <div className={styles.main}>
        <div className={`${stylesContainer.container} ${styles.container}`}>
            <h1 className={styles.title}>
                {" "}
                <span>Pavel</span> Kukayeu
            </h1>
            {/* <div className={styles.subtitle}>I am a frontend developer.</div> */}
            <Typed
                strings={["I am a frontend developer.", "I love software development."]}
                typeSpeed={50}
                backSpeed={35}
                loop
            />
        </div>
        <div className={styles.particle}>
            {/* <ParticlesComponent /> */}
            {/* <ParticlesComponent2  /> */}
        </div>
    </div>
)
