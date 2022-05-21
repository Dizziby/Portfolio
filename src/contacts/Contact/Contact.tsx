import React from 'react';
import styles from "./Contact.module.css"

type ContactPropsType = {
    name: string
    text: string
}

export const Contact: React.FC<ContactPropsType> = (props) => {
    return (
        <div className={styles.contact}>
            <div className={styles.icon}></div>
            <div className={styles.info}>
                <h3>{props.name}</h3>
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};