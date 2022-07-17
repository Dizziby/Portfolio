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
        <div className={styles.logoWrapper}>
            <a
                href={`${url}`}
                className={styles.logo}
                style={style}
                target="_blank"
                rel="noreferrer"
            >
                {" "}
            </a>
        </div>
        <div className={styles.description}>
            <a href={`${url}`} className={styles.name} target="_blank" rel="noreferrer">
                {title}
            </a>
            <span className={styles.category}>{description}</span>
        </div>
    </div>
)
