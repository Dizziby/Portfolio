import React from 'react';
import styles from "./Contacts.module.css"
import stylesContainer from "../common/styles/Container.module.css";
import {Contact} from "./Contact/Contact";
import {Title} from "../common/components/Title";

type ContactType = {
    id: number
    name: string
    text: string
}

export const Contacts = () => {

    const contacts: Array<ContactType> = [
        {id: 1, name: "CALL ME ANYTIME", text: "+375 29 29169**"},
        {id: 2, name: "EMAIL ME", text: "Dizzi_**@mail.ru"},
        {id: 3, name: "ADDRESS", text: "Vitebsk, Belarus"},
    ]

    return (
        <div className={styles.contacts}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <Title name={"CONTACTS"}/>
                <div className={styles.content}>
                    <div className={styles.contactsInfo}>
                        {contacts.map(el => <Contact key={el.id} name={el.name} text={el.text}/>)}
                    </div>
                    <form className={styles.form}>
                        <div className={styles.inputs}>
                            <input placeholder={"Your Name"} type="name"/>
                            <input placeholder={"Your Email"} type="email"/>
                        </div>
                        <textarea placeholder={"Message"}/>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};