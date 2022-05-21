import React from 'react';
import styles from "./Project.module.css"

type ProjectType = {
    title: string
    description: string
}

export const Project: React.FC<ProjectType> = (props) => {
    return (
        <div className={styles.project}>
            <a href="#" className={styles.logo}></a>
            <h3>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>

        </div>
    );
};