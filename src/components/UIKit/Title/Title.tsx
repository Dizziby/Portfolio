import React from "react"

import styles from "./Title.module.scss"

type TitlePropsType = {
    name: string
}

export const Title: React.FC<TitlePropsType> = ({ name }) => (
    <h2 className={styles.title}>{name}</h2>
)
