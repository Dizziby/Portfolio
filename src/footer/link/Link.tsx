import React from 'react';
import styles from "./Link.module.css"

type LinkType  = {
    name: string
}

export const Link: React.FC<LinkType> = (props) => {
    return (
        <div className={styles.link}>
            <a href="#">{props.name}</a>
        </div>
    );
};