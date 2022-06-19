import React, {ReactElement} from 'react';
import styles from "./Contact.module.scss"
import stylesBlock from "../../common/styles/Block.module.css"

type ContactPropsType = {
    name: string
    text: string
    icon: ReactElement
}

export const Contact: React.FC<ContactPropsType> = (props) => {
    return (
        <div className={`${stylesBlock.blockSmall}  ${styles.contact}`}>
            <div className={styles.icon}>{props.icon}</div>
            <div className={styles.info}>
                <h3>{props.name}</h3>
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};