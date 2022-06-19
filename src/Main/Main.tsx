import React from 'react';
import styles from "./Main.module.css"
import stylesContainer from "../common/styles/Container.module.css"
import {ParticlesComponent} from "../common/components/Particles/ParticlesComponent";
import {ParticlesComponent2} from "../common/components/Particles/ParticlesComponent2";
import Typed from 'react-typed';

export const Main = () => {

    return (
        <div className={styles.main}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h1 className={styles.title}> <span>Pavel</span> Kukayeu</h1>
                <div className={styles.subtitle}>I am a frontend developer.</div>
                {/* <Typed*/}
                {/*    strings={[*/}
                {/*        "I am a frontend developer.",*/}
                {/*        "I love software development.",*/}
                {/*    ]}*/}
                {/*    typeSpeed={50}*/}
                {/*    backSpeed={35}*/}
                {/*    loop*/}
                {/*/>*/}
            </div>
            {/*<div className={styles.particle}>*/}
            {/*    <ParticlesComponent  />*/}
            {/*    /!*<ParticlesComponent2  />*!/*/}
            {/*</div>*/}
        </div>
    );
};