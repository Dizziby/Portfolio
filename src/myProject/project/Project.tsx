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
            <div className={styles.description}>
                <a className={styles.name}>{props.title}</a>
                <span className={styles.category}>{props.description}</span>
            </div>
        </div>
    );
};