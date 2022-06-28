import React from "react"

import styles from "./Project.module.scss"

type ProjectType = {
    title: string
    description: string
    url: string
    style: {
        backgroundImage: string
    }
}

export const Project: React.FC<ProjectType> = ({ title, description, url, style }) => (
    <div className={styles.project}>
        <a href={`${url}`} className={styles.logo} style={style} target="_blank" rel="noreferrer">
            {" "}
        </a>
        <div className={styles.description}>
            <a href="/#" className={styles.name}>
                {title}
            </a>
            <span className={styles.category}>{description}</span>
        </div>
    </div>
)
