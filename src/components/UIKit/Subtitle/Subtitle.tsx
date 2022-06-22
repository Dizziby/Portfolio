import React from 'react';
import styles from "./Subtitle.module.scss";

type SubtitlePropsType = {
    firstWordTitle: string
    restWord: string
    className?: string
}

export const Subtitle: React.FC<SubtitlePropsType> = (props) => {
    return (
        <div className={props.className ? `${styles.subtitle} ${props.className}` : styles.subtitle}><span>{props.firstWordTitle}</span> {props.restWord}</div>
    );
};