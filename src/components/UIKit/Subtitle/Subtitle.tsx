import React from "react"

import styles from "./Subtitle.module.scss"

type SubtitlePropsType = {
    firstWordTitle: string
    restWord: string
    className?: string
}

export const Subtitle: React.FC<SubtitlePropsType> = ({ firstWordTitle, restWord, className }) => (
    <div className={className ? `${styles.subtitle} ${className}` : styles.subtitle}>
        <span>{firstWordTitle}</span> {restWord}
    </div>
)
