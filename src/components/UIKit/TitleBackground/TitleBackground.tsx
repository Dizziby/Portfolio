import React from 'react';
import styles from "./TitleBackground.module.scss";

type TitleBackgroundPropsType = {
    name: string
}

export const TitleBackground: React.FC<TitleBackgroundPropsType> = (props) => {
    return (
        <h2 className={styles.title}>{props.name}</h2>
    );
};