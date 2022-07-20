import React, { ReactElement } from "react"

import Typed from "react-typed"

import { ParticlesComponent } from "../UIKit/Particles/ParticlesComponent"

import styles from "./Main.module.scss"

export const Main = (): ReactElement => (
    <div className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.title}>
                {" "}
                <span>Pavel</span> Kukayeu
            </h1>
            <Typed
                strings={["I am a frontend developer.", "I love software development."]}
                typeSpeed={50}
                backSpeed={35}
                loop
            />
        </div>
        <div style={{ position: "absolute", height: "500px" }}>
            <div className={styles.particle}>
                <ParticlesComponent />
            </div>
        </div>
    </div>
)
