import React from 'react';
import styles from "./Project.module.scss"

type ProjectType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

export const Project: React.FC<ProjectType> = (props) => {
    return (
        <div className={styles.project}>
            <a href="#" className={styles.logo} style={props.style}></a>
            <div className={styles.description}>
                <a className={styles.name}>{props.title}</a>
                <span className={styles.category}>{props.description}</span>
            </div>
        </div>
    );
};