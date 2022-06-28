import React from "react"

import styles from "./TitleBackground.module.scss"

type TitleBackgroundPropsType = {
    name: string
}

export const TitleBackground: React.FC<TitleBackgroundPropsType> = ({ name }) => (
    <h2 className={styles.title}>{name}</h2>
)
